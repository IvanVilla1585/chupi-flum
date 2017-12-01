// @flow

const resolver = {
  Query: {
    async units(root: any, args: any, {unitConnector}: any) {
      const results = await unitConnector.get(args);

      if (results.errors || results.statusCode) throw new Error(results.messages);

      return results;
    },
    async unitById(root: any, args: any, {unitConnector}: any) {
      const result = await unitConnector.getById(args.id);

      if (result.errors || result.statusCode) throw new Error(result.messages);

      return result;
    }
  },
  Mutation: {
    async unitAdd(root: any, args: any, {unitConnector}: any) {
      const result = await unitConnector.create({...args.data});

      if (result.errors || result.statusCode)  throw new Error(result.messages);

      return result;
    },
    async unitEdit(root: any, args: any, {unitConnector}: any) {
      const result = await unitConnector.update(args.id, args.data);

      if (result.errors || result.statusCode)  throw new Error(result.messages);

      return result;
    },
    async unitDelete(root: any, args: any, {unitConnector}: any) {
      const result = await unitConnector.delete(args.id);

      if (result.errors || result.statusCode)  throw new Error(result.messages);

      return result;
    },
    async unitStatus(root: any, args: any, {unitConnector}: any) {
      const result = await unitConnector.update(args.id, {status: args.status});

      if (result.errors || result.statusCode)  throw new Error(result.messages);

      return result;
    }
  }
};

export default resolver;
