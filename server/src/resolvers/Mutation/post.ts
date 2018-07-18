import { GraphQLResolveInfo } from 'graphql';
import { getUserId, Context } from '../../utils';
import { PostCreateInput } from '../../generated/prisma';
import { PublishMutationArgs, DeletePostMutationArgs } from '../../typings/types';

export const post = {
  async createDraft(
    _: never,
    { title, text }: PostCreateInput,
    ctx: Context,
    info: GraphQLResolveInfo,
  ) {
    const userId = getUserId(ctx);
    return ctx.db.mutation.createPost(
      {
        data: {
          title,
          text,
          isPublished: false,
          author: {
            connect: { id: userId },
          },
        },
      },
      info,
    );
  },

  async publish(
    _: never,
    { id }: PublishMutationArgs,
    ctx: Context,
    info: GraphQLResolveInfo,
  ) {
    const userId = getUserId(ctx);
    const postExists = await ctx.db.exists.Post({
      id,
      author: { id: userId },
    });
    if (!postExists) {
      throw new Error('Post not found or you\'re not the author');
    }

    return ctx.db.mutation.updatePost(
      {
        where: { id },
        data: { isPublished: true },
      },
      info,
    );
  },

  async deletePost(
    _: never,
    { id }: DeletePostMutationArgs,
    ctx: Context,
  ) {
    const userId = getUserId(ctx);
    const postExists = await ctx.db.exists.Post({
      id,
      author: { id: userId },
    });
    if (!postExists) {
      throw new Error('Post not found or you\'re not the author');
    }

    return ctx.db.mutation.deletePost({ where: { id } });
  },
};
