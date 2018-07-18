import { getUserId, Context } from '../../utils';

export const post = {
  async createDraft(parent, { title, text }, ctx: Context, info) {
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

  async publish(parent, { id }, ctx: Context, info) {
    const userId = getUserId(ctx);
    const postExists = await ctx.db.exists.Post({
      id,
      author: { id: userId },
    });
    if (!postExists) {
      throw new Error("Post not found or you're not the author");
    }

    return ctx.db.mutation.updatePost(
      {
        where: { id },
        data: { isPublished: true },
      },
      info,
    );
  },

  async deletePost(parent, { id }, ctx: Context, info) {
    const userId = getUserId(ctx);
    const postExists = await ctx.db.exists.Post({
      id,
      author: { id: userId },
    });
    if (!postExists) {
      throw new Error("Post not found or you're not the author");
    }

    return ctx.db.mutation.deletePost({ where: { id } });
  },

  async likePost(parent, { id }, ctx: Context, info) {
    const userId = getUserId(ctx);

    const likeExists = await ctx.db.exists.PostLikes({
      post: {
        id,
      },
      user: {
        id: userId,
      },
    });

    if (likeExists) {
      throw new Error('Already liked this post');
    }

    await ctx.db.mutation.createPostLikes({
      data: {
        user: {
          connect: {
            id: userId,
          },
        },
        post: {
          connect: {
            id,
          },
        },
      },
    });

    return ctx.db.query.post(
      {
        where: { id },
      },
      info,
    );
  },
};
