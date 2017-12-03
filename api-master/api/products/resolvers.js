// @flow

const resolver = {
  Query: {
    async products(root: any, args: any, {productConnector}: any) {
      const results = await productConnector.get(args);

      if (results.errors || results.statusCode) throw new Error(results.messages);

      return results;
    },
    async productById(root: any, args: any, {productConnector}: any) {
      const result = await productConnector.getById(args.id);

      if (result.errors || result.statusCode) throw new Error(result.messages);

      return result;
    }
  },
  Product: {
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
    },
    async presentation({presentation}: any, args: any, {presentationConnector}: any) {
      if (!presentation) return {};

      const result = await presentationConnector.getById(presentation);

      if (result.errors || result.statusCode) throw new Error(result.messages);

      return result;
    },
    async process({process}: any, args: any, {processConnector}: any) {
      if (!process) return [];

      const result = await processConnector.get({_id: {$in: process}});

      if (result.errors || result.statusCode) throw new Error(result.messages);

      return result;
    },
    async formula({id}: any, args: any, {productConnector}: any) {
      if (!id) return [];

      const result = await productConnector.getFormulas({product: id});
      console.log('formulas', result)

      if (result.errors || result.statusCode) throw new Error(result.messages);

      return result;
    }
  },
  Formula: {
    async material({material}: any, args: any, {materialConnector}: any) {
      if (!material) return {};

      const result = await materialConnector.getById(material);

      if (result.errors || result.statusCode) throw new Error(result.messages);

      return result;
    },
    async unit({unit}: any, args: any, {unitConnector}: any) {
      if (!unit) return {};

      const result = await unitConnector.getById(unit);

      if (result.errors || result.statusCode) throw new Error(result.messages);

      return result;
    }
  },
  Mutation: {
    async productAdd(root: any, args: any, {productConnector}: any) {
      const result = await productConnector.create({...args.data});

      if (result.errors || result.statusCode)  throw new Error(result.messages);

      return result;
    },
    async productEdit(root: any, args: any, {productConnector}: any) {
      const result = await productConnector.update(args.id, args.data);

      if (result.errors || result.statusCode)  throw new Error(result.messages);

      return result;
    },
    async productDelete(root: any, args: any, {productConnector}: any) {
      const result = await productConnector.delete(args.id);

      if (result.errors || result.statusCode)  throw new Error(result.messages);

      return result;
    },
    async productStatus(root: any, args: any, {productConnector}: any) {
      const result = await productConnector.update(args.id, {status: args.status});

      if (result.errors || result.statusCode)  throw new Error(result.messages);

      return result;
    }
  }
};

export default resolver;
