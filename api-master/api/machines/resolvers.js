// @flow

const resolver = {
  Query: {
    async machines(root: any, args: any, {machineConnector}: any) {
      const results = await machineConnector.get(args);

      if (results.errors || results.statusCode) throw new Error(results.messages);

      return results;
    },
    async machineById(root: any, args: any, {machineConnector}: any) {
      const result = await machineConnector.getById(args.id);

      if (result.errors || result.statusCode) throw new Error(result.messages);

      return result;
    }
  },
  Machine: {
    async unit({unit}: any, args: any, {unitConnector}: any) {
      if (!unit) return {};

      const result = await unitConnector.getById(unit);

      if (result.errors || result.statusCode) throw new Error(result.messages);

      return result;
    }
  },
  Mutation: {
    async machineAdd(root: any, args: any, {machineConnector}: any) {
      const result = await machineConnector.create({...args.data});

      if (result.errors || result.statusCode)  throw new Error(result.messages);

      return result;
    },
    async machineEdit(root: any, args: any, {machineConnector}: any) {
      const result = await machineConnector.update(args.id, args.data);

      if (result.errors || result.statusCode)  throw new Error(result.messages);

      return result;
    },
    async machineDelete(root: any, args: any, {machineConnector}: any) {
      const result = await machineConnector.delete(args.id);

      if (result.errors || result.statusCode)  throw new Error(result.messages);

      return result;
    },
    async machineStatus(root: any, args: any, {machineConnector}: any) {
      const result = await machineConnector.update(args.id, {status: args.status});

      if (result.errors || result.statusCode)  throw new Error(result.messages);

      return result;
    }
  }
};

export default resolver;
