// @flow

const resolver = {
  Query: {
    async presentations(root: any, args: any, {presentationConnector}: any) {
      const results = await presentationConnector.get(args);

      if (results.errors || results.statusCode) throw new Error(results.messages);

      return results;
    },
    async presentationById(root: any, args: any, {presentationConnector}: any) {
      const result = await presentationConnector.getById(args.id);

      if (result.errors || result.statusCode) throw new Error(result.messages);

      return result;
    }
  },
  Mutation: {
    async presentationAdd(root: any, args: any, {presentationConnector}: any) {
      const result = await presentationConnector.create({...args.data});

      if (result.errors || result.statusCode)  throw new Error(result.messages);

      return result;
    },
    async presentationEdit(root: any, args: any, {presentationConnector}: any) {
      const result = await presentationConnector.update(args.id, args.data);

      if (result.errors || result.statusCode)  throw new Error(result.messages);

      return result;
    },
    async presentationDelete(root: any, args: any, {presentationConnector}: any) {
      const result = await presentationConnector.delete(args.id);

      if (result.errors || result.statusCode)  throw new Error(result.messages);

      return result;
    },
    async presentationStatus(root: any, args: any, {presentationConnector}: any) {
      const result = await presentationConnector.update(args.id, {status: args.status});

      if (result.errors || result.statusCode)  throw new Error(result.messages);

      return result;
    }
  }
};

export default resolver;
