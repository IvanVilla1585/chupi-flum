// @flow
import { merge } from 'lodash';
import { makeExecutableSchema } from 'graphql-tools';
// import { withFilter } from 'graphql-subscriptions';
// import { pubsub, CREATED_EVENT_TOPIC } from './subscriptions';

//import user
import userSchema from './users/schema';
import userResolvers from './users/resolvers';
import categorySchema from './categories/schema';
import categoryResolvers from './categories/resolvers';
import unitSchema from './units/schema';
import unitResolvers from './units/resolvers';

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
  ...rootSchema, ...userSchema, ...categorySchema, ...unitSchema
];
const resolvers = merge(
  rootResolvers, userResolvers, categoryResolvers, unitResolvers
);

const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});

export default executableSchema;
