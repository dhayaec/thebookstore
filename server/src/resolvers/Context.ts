import * as Core from '../generated/prisma';

type Context = {
  core: Core.Prisma,
};

let coreClient: Core.Prisma;

const create = () => {
  if (coreClient === undefined) {
    coreClient = new Core.Prisma({
      endpoint: 'http://localhost:4466/graphql',
    });
  }
  return {
    core: coreClient,
  };
};

export { create, Context };
