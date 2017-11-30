// @flow
import { is_admin } from '../helpers/permissions';

const resolvers = {
  Query: {
    async users(root: any, args: any, { userConnector }: any) {
      const res = await userConnector.get(args);

      if (res.errors || res.statusCode) throw new Error(res.messages);

      return res;
    },

    async userById(root: any, args: any, {userConnector}: any){
      const res = await userConnector.getById(args.id);

      if (res.errors || res.statusCode) throw new Error(res.messages);

      return res;
    }
  },
  Mutation: {
    async userAdd(root: any, args: any, {userConnector}: any) {

        const res = await userConnector.create({ ...args.data });

        if (res.errors || res.statusCode) throw new Error(res.messages);

        return res;
    },
    async userEdit(root: any, args: any, { userConnector }: any) {

      const res = await userConnector.update(args.id, args.data);

      if (res.errors || res.statusCode) throw new Error(res.messages);

      return res;
    },
    async userDelete(_: any, args: any, { userConnector }: any) {

      const res = await userConnector.delete(args.id);

      if (res.errors || res.statusCode) throw new Error(res.messages);

      return res;
    },
    async userStatus(_: any, args: any, { userConnector }: any) {

      const res = await userConnector.updateStatus(args.id, {status: args.status});

      if (res.errors || res.statusCode) throw new Error(res.messages);

      return res;
    },
  },
};

export default resolvers;
