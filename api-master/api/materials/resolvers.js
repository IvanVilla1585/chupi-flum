// @flow

const resolver = {
  Query: {
    async materials(root: any, args: any, {materialConnector}: any) {
      const results = await materialConnector.get(args);

      if (results.errors || results.statusCode) throw new Error(results.messages);

      return results;
    },
    async materialById(root: any, args: any, {materialConnector}: any) {
      const result = await materialConnector.getById(args.id);

      if (result.errors || result.statusCode) throw new Error(result.messages);

      return result;
    }
  },
  Material: {
    async unit({unit}: any, args: any, {unitConnector}: any) {
      if (!unit) return {};

      const result = await unitConnector.getById(unit);

      if (result.errors || result.statusCode) throw new Error(result.messages);

      return result;
    },
    async category({category}: any, args: any, {categoryConnector}: any) {
      if (!category) return {};

      const result = await categoryConnector.getById(category);

      if (result.errors || result.statusCode) throw new Error(result.messages);

      return result;
    }
  },
  Mutation: {
    async materialAdd(root: any, args: any, {materialConnector}: any) {
      const result = await materialConnector.create({...args.data});

      if (result.errors || result.statusCode)  throw new Error(result.messages);

      return result;
    },
    async materialEdit(root: any, args: any, {materialConnector}: any) {
      const result = await materialConnector.update(args.id, args.data);

      if (result.errors || result.statusCode)  throw new Error(result.messages);

      return result;
    },
    async materialDelete(root: any, args: any, {materialConnector}: any) {
      const result = await materialConnector.delete(args.id);

      if (result.errors || result.statusCode)  throw new Error(result.messages);

      return result;
    },
    async materialStatus(root: any, args: any, {materialConnector}: any) {
      const result = await materialConnector.update(args.id, {status: args.status});

      if (result.errors || result.statusCode)  throw new Error(result.messages);

      return result;
    }
  }
};

export default resolver;
