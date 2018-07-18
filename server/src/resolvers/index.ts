import { Query } from './Query';
import { Subscription } from './Subscription';
import { auth } from './Mutation/auth';
import { post } from './Mutation/post';
import { AuthPayload } from './AuthPayload';

const resolvers = {
  Query,
  Mutation: {
    ...auth,
    ...post,
  },
  Subscription,
  AuthPayload,
};

export default resolvers;
