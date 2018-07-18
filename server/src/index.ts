import { GraphQLServer } from 'graphql-yoga';
import { Prisma } from './generated/prisma';
import resolvers from './resolvers';

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  resolverValidationOptions: { requireResolversForResolveType: false },
  context: req => ({
    ...req,
    db: new Prisma({
      endpoint: process.env.PRISMA_ENDPOINT,
      debug: true,
    }),
  }),
});

server.start(
  {
    port: 4000,
    endpoint: '/graphql',
    subscriptions: '/subscriptions',
    playground: '/playground',
    debug: true,
  },
  ({ port }) => console.log(`http://localhost:${port}`),
);
