import { UserWhereInput } from './../generated/prisma';
import { GraphQLResolveInfo } from 'graphql';
import { Context } from '../utils';

type AuthArg = {
  user: {
    id: string;
  };
};

export const AuthPayload = {
  user: async (
    { user: { id } }: AuthArg,
    args: UserWhereInput,
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => ctx.db.query.user({ where: { id } }, info),
};
