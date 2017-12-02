// @flow
import path from 'path';
import express from 'express';
import cors from 'cors';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { apolloUploadExpress } from 'apollo-upload-server'
import bodyParser from 'body-parser';
import { createServer } from 'http';

import mongoose from 'mongoose';

import { SubscriptionServer } from 'subscriptions-transport-ws';
import { execute, subscribe } from 'graphql';

// import connectors
import UserConnector from './users/connector';
import CategoryConnector from './categories/connector';
import UnitConnector from './units/connector';
import PresentationsConnector from './presentations/connector';
import MachineConnector from './machines/connector';
import ProcessConnector from './process/connector';

import Email from '../email';
import {SetupAuth} from './auth';

// import setupAuth from './auth';
import schema from './schema';
import config from './config';

const WS_GQL_PATH = '/subscriptions';

export function run(port: string | number) {
  const app = express();

  app.use(cors());
  app.use(bodyParser.json({ limit: '140mb' }));
  app.use(bodyParser.urlencoded({ extended: true, limit: '140mb' }));

  // config auth
  const setupAuth = new SetupAuth(app);


  // set login, register endpoints and JWT configuration
  // const {passport} = setupAuth(app);
  // PROTECT JWT
  //app.use('/graphql', passport.authenticate('jwt', {session: false}), graphqlExpress((req) => {
  app.use('/graphql',
    apolloUploadExpress(),
    graphqlExpress((req) => {
      let user;
      if (req.user) {
        // We get req.user from passport-jwt
        user = req.user;
      }
      return {
        schema,
        context: {
          viewer: user, // logged user
          sendGrid: new Email(config.sengrig_api_key),
          userConnector: new UserConnector(config.userUrl),
          categoryConnector: new CategoryConnector(config.categoryUrl),
          unitConnector: new UnitConnector(config.unitUrl),
          presentationConnector: new PresentationsConnector(config.presentationUrl),
          machineConnector: new MachineConnector(config.machineUrl),
          processConnector: new ProcessConnector(config.processUrl)
        },
      };
    })
  );

  // Serve graphiql (disable for production)
  app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
    subscriptionsEndpoint: `ws://localhost:${port}${WS_GQL_PATH}`,
    query: 'query loggedUser { me { name, role, createdAt } }',
  }));

  app.get('/', (req: any, res: any) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

  const server = createServer(app);

  /**
   * RUN SERVER
   */
  server.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API Server is now running on http://localhost:${port}`);
    // eslint-disable-next-line no-console
    console.log(`API Server over websocket is running on ws://localhost:${port}${WS_GQL_PATH}`);
  });

  /**
   * RUN SERVER SUBSCRIPTION
   */
  new SubscriptionServer({ // eslint-disable-line no-new
    schema,
    execute,
    subscribe,
  }, {
      path: WS_GQL_PATH,
      server,
    });

  return server;
}
