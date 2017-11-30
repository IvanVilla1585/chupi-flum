
const resolvers = {
  Query: {
    async categories(root: any, args: any, { categoryConnector }: any) {
      const res = await categoryConnector.get(args);

      if (res.errors || res.statusCode) throw new Error(res.messages);

      return res;
    },

    async categoryById(root: any, args: any, {categoryConnector}: any){
      const res = await categoryConnector.getById(args.id);

      if (res.errors || res.statusCode) throw new Error(res.messages);

      return res;
    },

    async categoryByCode(root: any, args: any, {categoryConnector}: any){
      const res = await categoryConnector.get({code: args.code, status: true});

      if (res.errors || res.statusCode) throw new Error(res.messages);

      return res;
    }
  },
  Mutation: {
    async categoryAdd(root: any, args: any, {categoryConnector}: any) {

      const res = await categoryConnector.create({ ...args.data });

      if (res.errors || res.statusCode) throw new Error(res.messages);

      return res;
    },
    async categoryEdit(root: any, args: any, { categoryConnector }: any) {

      const res = await categoryConnector.update(args.id, args.data);

      if (res.errors || res.statusCode) throw new Error(res.messages);

      return res;
    },
    async categoryDelete(_: any, args: any, { categoryConnector }: any) {

      const res = await categoryConnector.delete(args.id);

      if (res.errors || res.statusCode) throw new Error(res.messages);

      return res;
    },
    async userStatus(_: any, args: any, { categoryConnector }: any) {

      const res = await categoryConnector.updateStatus(args.id, {status: args.status});

      if (res.errors || res.statusCode) throw new Error(res.messages);

      return res;
    },
  },
};

export default resolvers;
