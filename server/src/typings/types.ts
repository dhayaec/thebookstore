/* tslint:disable */
import { GraphQLResolveInfo } from "graphql";

type Resolver<Result, Args = any> = (
  parent: any,
  args: Args,
  context: any,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export type DateTime = any;
/** An object with an ID */
export interface Node {
  id: string /** The id of the object. */;
}

export interface Query {
  feed: Post[];
  drafts: Post[];
  post?: Post | null;
  me?: User | null;
}

export interface Post extends Node {
  id: string;
  createdAt: DateTime;
  updatedAt: DateTime;
  isPublished: boolean;
  title: string;
  text: string;
  author: User;
}

export interface User {
  id: string;
  email: string;
  name: string;
  posts: Post[];
}

export interface Mutation {
  signup: AuthPayload;
  login: AuthPayload;
  createDraft: Post;
  publish: Post;
  deletePost: Post;
}

export interface AuthPayload {
  token: string;
  user: User;
}

export interface Subscription {
  feedSubscription: PostSubscriptionPayload;
}

export interface PostSubscriptionPayload {
  mutation: MutationType;
  node?: Post | null;
  updatedFields?: string[] | null;
  previousValues?: PostPreviousValues | null;
}

export interface PostPreviousValues {
  id: string;
  createdAt: DateTime;
  updatedAt: DateTime;
  isPublished: boolean;
  title: string;
  text: string;
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | null /** Logical AND on all given filters. */;
  OR?: UserWhereInput[] | null /** Logical OR on all given filters. */;
  NOT?:
    | UserWhereInput[]
    | null /** Logical NOT on all given filters combined by AND. */;
  id?: string | null;
  id_not?: string | null /** All values that are not equal to given value. */;
  id_in?: string[] | null /** All values that are contained in given list. */;
  id_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */;
  id_lt?: string | null /** All values less than the given value. */;
  id_lte?: string | null /** All values less than or equal the given value. */;
  id_gt?: string | null /** All values greater than the given value. */;
  id_gte?:
    | string
    | null /** All values greater than or equal the given value. */;
  id_contains?: string | null /** All values containing the given string. */;
  id_not_contains?:
    | string
    | null /** All values not containing the given string. */;
  id_starts_with?:
    | string
    | null /** All values starting with the given string. */;
  id_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */;
  id_ends_with?: string | null /** All values ending with the given string. */;
  id_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */;
  email?: string | null;
  email_not?:
    | string
    | null /** All values that are not equal to given value. */;
  email_in?:
    | string[]
    | null /** All values that are contained in given list. */;
  email_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */;
  email_lt?: string | null /** All values less than the given value. */;
  email_lte?:
    | string
    | null /** All values less than or equal the given value. */;
  email_gt?: string | null /** All values greater than the given value. */;
  email_gte?:
    | string
    | null /** All values greater than or equal the given value. */;
  email_contains?: string | null /** All values containing the given string. */;
  email_not_contains?:
    | string
    | null /** All values not containing the given string. */;
  email_starts_with?:
    | string
    | null /** All values starting with the given string. */;
  email_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */;
  email_ends_with?:
    | string
    | null /** All values ending with the given string. */;
  email_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */;
  password?: string | null;
  password_not?:
    | string
    | null /** All values that are not equal to given value. */;
  password_in?:
    | string[]
    | null /** All values that are contained in given list. */;
  password_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */;
  password_lt?: string | null /** All values less than the given value. */;
  password_lte?:
    | string
    | null /** All values less than or equal the given value. */;
  password_gt?: string | null /** All values greater than the given value. */;
  password_gte?:
    | string
    | null /** All values greater than or equal the given value. */;
  password_contains?:
    | string
    | null /** All values containing the given string. */;
  password_not_contains?:
    | string
    | null /** All values not containing the given string. */;
  password_starts_with?:
    | string
    | null /** All values starting with the given string. */;
  password_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */;
  password_ends_with?:
    | string
    | null /** All values ending with the given string. */;
  password_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */;
  name?: string | null;
  name_not?: string | null /** All values that are not equal to given value. */;
  name_in?: string[] | null /** All values that are contained in given list. */;
  name_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */;
  name_lt?: string | null /** All values less than the given value. */;
  name_lte?:
    | string
    | null /** All values less than or equal the given value. */;
  name_gt?: string | null /** All values greater than the given value. */;
  name_gte?:
    | string
    | null /** All values greater than or equal the given value. */;
  name_contains?: string | null /** All values containing the given string. */;
  name_not_contains?:
    | string
    | null /** All values not containing the given string. */;
  name_starts_with?:
    | string
    | null /** All values starting with the given string. */;
  name_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */;
  name_ends_with?:
    | string
    | null /** All values ending with the given string. */;
  name_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */;
  posts_every?: PostWhereInput | null;
  posts_some?: PostWhereInput | null;
  posts_none?: PostWhereInput | null;
}

export interface PostWhereInput {
  AND?: PostWhereInput[] | null /** Logical AND on all given filters. */;
  OR?: PostWhereInput[] | null /** Logical OR on all given filters. */;
  NOT?:
    | PostWhereInput[]
    | null /** Logical NOT on all given filters combined by AND. */;
  id?: string | null;
  id_not?: string | null /** All values that are not equal to given value. */;
  id_in?: string[] | null /** All values that are contained in given list. */;
  id_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */;
  id_lt?: string | null /** All values less than the given value. */;
  id_lte?: string | null /** All values less than or equal the given value. */;
  id_gt?: string | null /** All values greater than the given value. */;
  id_gte?:
    | string
    | null /** All values greater than or equal the given value. */;
  id_contains?: string | null /** All values containing the given string. */;
  id_not_contains?:
    | string
    | null /** All values not containing the given string. */;
  id_starts_with?:
    | string
    | null /** All values starting with the given string. */;
  id_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */;
  id_ends_with?: string | null /** All values ending with the given string. */;
  id_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */;
  createdAt?: DateTime | null;
  createdAt_not?: DateTime | null /** All values that are not equal to given value. */;
  createdAt_in?:
    | DateTime[]
    | null /** All values that are contained in given list. */;
  createdAt_not_in?:
    | DateTime[]
    | null /** All values that are not contained in given list. */;
  createdAt_lt?: DateTime | null /** All values less than the given value. */;
  createdAt_lte?: DateTime | null /** All values less than or equal the given value. */;
  createdAt_gt?: DateTime | null /** All values greater than the given value. */;
  createdAt_gte?: DateTime | null /** All values greater than or equal the given value. */;
  updatedAt?: DateTime | null;
  updatedAt_not?: DateTime | null /** All values that are not equal to given value. */;
  updatedAt_in?:
    | DateTime[]
    | null /** All values that are contained in given list. */;
  updatedAt_not_in?:
    | DateTime[]
    | null /** All values that are not contained in given list. */;
  updatedAt_lt?: DateTime | null /** All values less than the given value. */;
  updatedAt_lte?: DateTime | null /** All values less than or equal the given value. */;
  updatedAt_gt?: DateTime | null /** All values greater than the given value. */;
  updatedAt_gte?: DateTime | null /** All values greater than or equal the given value. */;
  isPublished?: boolean | null;
  isPublished_not?:
    | boolean
    | null /** All values that are not equal to given value. */;
  title?: string | null;
  title_not?:
    | string
    | null /** All values that are not equal to given value. */;
  title_in?:
    | string[]
    | null /** All values that are contained in given list. */;
  title_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */;
  title_lt?: string | null /** All values less than the given value. */;
  title_lte?:
    | string
    | null /** All values less than or equal the given value. */;
  title_gt?: string | null /** All values greater than the given value. */;
  title_gte?:
    | string
    | null /** All values greater than or equal the given value. */;
  title_contains?: string | null /** All values containing the given string. */;
  title_not_contains?:
    | string
    | null /** All values not containing the given string. */;
  title_starts_with?:
    | string
    | null /** All values starting with the given string. */;
  title_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */;
  title_ends_with?:
    | string
    | null /** All values ending with the given string. */;
  title_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */;
  text?: string | null;
  text_not?: string | null /** All values that are not equal to given value. */;
  text_in?: string[] | null /** All values that are contained in given list. */;
  text_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */;
  text_lt?: string | null /** All values less than the given value. */;
  text_lte?:
    | string
    | null /** All values less than or equal the given value. */;
  text_gt?: string | null /** All values greater than the given value. */;
  text_gte?:
    | string
    | null /** All values greater than or equal the given value. */;
  text_contains?: string | null /** All values containing the given string. */;
  text_not_contains?:
    | string
    | null /** All values not containing the given string. */;
  text_starts_with?:
    | string
    | null /** All values starting with the given string. */;
  text_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */;
  text_ends_with?:
    | string
    | null /** All values ending with the given string. */;
  text_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */;
  author?: UserWhereInput | null;
}
export interface PostQueryArgs {
  id: string;
}
export interface AuthorPostArgs {
  where?: UserWhereInput | null;
}
export interface SignupMutationArgs {
  email: string;
  password: string;
  name: string;
}
export interface LoginMutationArgs {
  email: string;
  password: string;
}
export interface CreateDraftMutationArgs {
  title: string;
  text: string;
}
export interface PublishMutationArgs {
  id: string;
}
export interface DeletePostMutationArgs {
  id: string;
}

export enum MutationType {
  CREATED = "CREATED",
  UPDATED = "UPDATED",
  DELETED = "DELETED"
}

export namespace QueryResolvers {
  export interface Resolvers {
    feed?: FeedResolver;
    drafts?: DraftsResolver;
    post?: PostResolver;
    me?: MeResolver;
  }

  export type FeedResolver = Resolver<Post[]>;
  export type DraftsResolver = Resolver<Post[]>;
  export type PostResolver = Resolver<Post | null, PostArgs>;
  export interface PostArgs {
    id: string;
  }

  export type MeResolver = Resolver<User | null>;
}
export namespace PostResolvers {
  export interface Resolvers {
    id?: IdResolver;
    createdAt?: CreatedAtResolver;
    updatedAt?: UpdatedAtResolver;
    isPublished?: IsPublishedResolver;
    title?: TitleResolver;
    text?: TextResolver;
    author?: AuthorResolver;
  }

  export type IdResolver = Resolver<string>;
  export type CreatedAtResolver = Resolver<DateTime>;
  export type UpdatedAtResolver = Resolver<DateTime>;
  export type IsPublishedResolver = Resolver<boolean>;
  export type TitleResolver = Resolver<string>;
  export type TextResolver = Resolver<string>;
  export type AuthorResolver = Resolver<User, AuthorArgs>;
  export interface AuthorArgs {
    where?: UserWhereInput | null;
  }
}
export namespace UserResolvers {
  export interface Resolvers {
    id?: IdResolver;
    email?: EmailResolver;
    name?: NameResolver;
    posts?: PostsResolver;
  }

  export type IdResolver = Resolver<string>;
  export type EmailResolver = Resolver<string>;
  export type NameResolver = Resolver<string>;
  export type PostsResolver = Resolver<Post[]>;
}
export namespace MutationResolvers {
  export interface Resolvers {
    signup?: SignupResolver;
    login?: LoginResolver;
    createDraft?: CreateDraftResolver;
    publish?: PublishResolver;
    deletePost?: DeletePostResolver;
  }

  export type SignupResolver = Resolver<AuthPayload, SignupArgs>;
  export interface SignupArgs {
    email: string;
    password: string;
    name: string;
  }

  export type LoginResolver = Resolver<AuthPayload, LoginArgs>;
  export interface LoginArgs {
    email: string;
    password: string;
  }

  export type CreateDraftResolver = Resolver<Post, CreateDraftArgs>;
  export interface CreateDraftArgs {
    title: string;
    text: string;
  }

  export type PublishResolver = Resolver<Post, PublishArgs>;
  export interface PublishArgs {
    id: string;
  }

  export type DeletePostResolver = Resolver<Post, DeletePostArgs>;
  export interface DeletePostArgs {
    id: string;
  }
}
export namespace AuthPayloadResolvers {
  export interface Resolvers {
    token?: TokenResolver;
    user?: UserResolver;
  }

  export type TokenResolver = Resolver<string>;
  export type UserResolver = Resolver<User>;
}
export namespace SubscriptionResolvers {
  export interface Resolvers {
    feedSubscription?: FeedSubscriptionResolver;
  }

  export type FeedSubscriptionResolver = Resolver<PostSubscriptionPayload>;
}
export namespace PostSubscriptionPayloadResolvers {
  export interface Resolvers {
    mutation?: MutationResolver;
    node?: NodeResolver;
    updatedFields?: UpdatedFieldsResolver;
    previousValues?: PreviousValuesResolver;
  }

  export type MutationResolver = Resolver<MutationType>;
  export type NodeResolver = Resolver<Post | null>;
  export type UpdatedFieldsResolver = Resolver<string[] | null>;
  export type PreviousValuesResolver = Resolver<PostPreviousValues | null>;
}
export namespace PostPreviousValuesResolvers {
  export interface Resolvers {
    id?: IdResolver;
    createdAt?: CreatedAtResolver;
    updatedAt?: UpdatedAtResolver;
    isPublished?: IsPublishedResolver;
    title?: TitleResolver;
    text?: TextResolver;
  }

  export type IdResolver = Resolver<string>;
  export type CreatedAtResolver = Resolver<DateTime>;
  export type UpdatedAtResolver = Resolver<DateTime>;
  export type IsPublishedResolver = Resolver<boolean>;
  export type TitleResolver = Resolver<string>;
  export type TextResolver = Resolver<string>;
}
