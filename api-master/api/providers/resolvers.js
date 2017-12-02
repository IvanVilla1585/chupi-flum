// @flow

const resolver = {
  Query: {
    async providers(root: any, args: any, {providerConnector}: any) {
      const results = await providerConnector.get(args);

      if (results.errors || results.statusCode) throw new Error(results.messages);

      return results;
    },
    async providerById(root: any, args: any, {providerConnector}: any) {
      const result = await providerConnector.getById(args.id);

      if (result.errors || result.statusCode) throw new Error(result.messages);

      return result;
    }
  },
  Mutation: {
    async providerAdd(root: any, args: any, {providerConnector}: any) {
      const result = await providerConnector.create({...args.data});

      if (result.errors || result.statusCode)  throw new Error(result.messages);

      return result;
    },
    async providerEdit(root: any, args: any, {providerConnector}: any) {
      const result = await providerConnector.update(args.id, args.data);

      if (result.errors || result.statusCode)  throw new Error(result.messages);

      return result;
    },
    async providerDelete(root: any, args: any, {providerConnector}: any) {
      const result = await providerConnector.delete(args.id);

      if (result.errors || result.statusCode)  throw new Error(result.messages);

      return result;
    },
    async providerStatus(root: any, args: any, {providerConnector}: any) {
      const result = await providerConnector.update(args.id, {status: args.status});

      if (result.errors || result.statusCode)  throw new Error(result.messages);

      return result;
    }
  }
};

export default resolver;
