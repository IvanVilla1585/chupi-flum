// @flow

const resolver = {
  Query: {
    async process(root: any, args: any, {processConnector}: any) {
      const results = await processConnector.get(args);

      if (results.errors || results.statusCode) throw new Error(results.messages);

      return results;
    },
    async processById(root: any, args: any, {processConnector}: any) {
      const result = await processConnector.getById(args.id);

      if (result.errors || result.statusCode) throw new Error(result.messages);

      return result;
    }
  },
  Process: {
    async machine({machine}: any, args: any, {machineConnector}: any) {
      if (!machine) return {};

      const result = await machineConnector.getById(machine);

      if (result.errors || result.statusCode) throw new Error(result.messages);

      return result;
    }
  },
  Mutation: {
    async processAdd(root: any, args: any, {processConnector}: any) {
      const result = await processConnector.create({...args.data});

      if (result.errors || result.statusCode)  throw new Error(result.messages);

      return result;
    },
    async processEdit(root: any, args: any, {processConnector}: any) {
      const result = await processConnector.update(args.id, args.data);

      if (result.errors || result.statusCode)  throw new Error(result.messages);

      return result;
    },
    async processDelete(root: any, args: any, {processConnector}: any) {
      const result = await processConnector.delete(args.id);

      if (result.errors || result.statusCode)  throw new Error(result.messages);

      return result;
    },
    async processStatus(root: any, args: any, {processConnector}: any) {
      const result = await processConnector.update(args.id, {status: args.status});

      if (result.errors || result.statusCode)  throw new Error(result.messages);

      return result;
    }
  }
};

export default resolver;
