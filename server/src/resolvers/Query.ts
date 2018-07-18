import { UserWhereInput } from './../generated/prisma';
import { GraphQLResolveInfo } from 'graphql';
import { PostQueryArgs, PostWhereInput } from '../typings/types';
import { getUserId, Context } from '../utils';

export const Query = {
  feed(_: never, args: PostWhereInput, ctx: Context, info: GraphQLResolveInfo) {
    const id = getUserId(ctx);

    const where = {
      isPublished: false,
      author: {
        id,
      },
    };

    return ctx.db.query.posts({ where }, info);
  },

  post(_: never, { id }: PostQueryArgs, ctx: Context, info: GraphQLResolveInfo) {
    return ctx.db.query.post({ where: { id } }, info);
  },

  me(_: never, args: UserWhereInput, ctx: Context, info: GraphQLResolveInfo) {
    const id = getUserId(ctx);
    return ctx.db.query.user({ where: { id } }, info);
  },
};
