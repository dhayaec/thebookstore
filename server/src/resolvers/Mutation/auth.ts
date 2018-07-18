import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { Context } from '../../utils';
import { SignupMutationArgs, LoginMutationArgs } from '../../typings/types';

export const auth = {
  async signup(parent: never, args: SignupMutationArgs, ctx: Context) {
    const password = await bcrypt.hash(args.password, 10);
    const user = await ctx.db.mutation.createUser({
      data: { ...args, password },
    });

    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET || ''),
      user,
    };
  },

  async login(
    parent: never,
    { email, password }: LoginMutationArgs,
    ctx: Context,
  ) {
    const user = await ctx.db.query.user({ where: { email } });
    if (!user) {
      throw new Error(`No such user found for email: ${email}`);
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error('Invalid password');
    }

    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET || ''),
      user,
    };
  },
};
