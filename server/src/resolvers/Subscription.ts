import { PostSubscriptionWhereInput } from './../generated/prisma';
import { GraphQLResolveInfo } from 'graphql';
import { Context } from '../utils';

export const Subscription = {
  feedSubscription: {
    subscribe: (
      _: never,
      args: PostSubscriptionWhereInput,
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => ctx.db.subscription.post(
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
