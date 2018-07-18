import { Context } from '../utils';

export const Subscription = {
  feedSubscription: {
    subscribe: (parent, args, ctx: Context, info) => ctx.db.subscription.post(
      {
        where: {
          node: {
            isPublished: true,
          },
        },
      },
      info,
    ),
  },
};
