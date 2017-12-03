// @flow
import { merge } from 'lodash';
import { makeExecutableSchema } from 'graphql-tools';
// import { withFilter } from 'graphql-subscriptions';
// import { pubsub, CREATED_EVENT_TOPIC } from './subscriptions';

//import schemas and resolvers
import userSchema from './users/schema';
import userResolvers from './users/resolvers';
import categorySchema from './categories/schema';
import categoryResolvers from './categories/resolvers';
import unitSchema from './units/schema';
import unitResolvers from './units/resolvers';
import presentationSchema from './presentations/schema';
import presentationResolvers from './presentations/resolvers';
import machineSchema from './machines/schema';
import machineResolvers from './machines/resolvers';
import processSchema from './process/schema';
import processResolvers from './process/resolvers';
import materialSchema from './materials/schema';
import materialResolvers from './materials/resolvers';
import providerSchema from './providers/schema';
import providerResolvers from './providers/resolvers';
import productSchema from './products/schema';
import productResolvers from './products/resolvers';

const rootSchema = [`
  type Query {
    # Return user logged, if nobody is logged return null
    me: User,
  }
  type Mutation {
    test (
      sw: String
    ) : String
  }

  schema {
    query: Query,
    mutation: Mutation
  }
`];

const rootResolvers = {
  Mutation: {
    test(_, params) {
      return params.sw || 'Hello';
    },
  },
};

// Put schema together into one array of schema strings
// and one map of resolvers, like makeExecutableSchema expects
const schema = [
  ...rootSchema, ...userSchema, ...categorySchema, ...unitSchema, ...presentationSchema, ...machineSchema, ...processSchema, ...materialSchema,
  ...providerSchema, ...productSchema
];
const resolvers = merge(
  rootResolvers, userResolvers, categoryResolvers, unitResolvers, presentationResolvers, machineResolvers, processResolvers, materialResolvers,
  providerResolvers, productResolvers
);

const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});

export default executableSchema;
