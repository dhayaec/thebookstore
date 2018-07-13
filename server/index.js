const { GraphQLServer } = require('graphql-yoga');

const typeDefs = `
type Query {
  info: String!
}
`;

const resolvers = {
  Query: {
    info: () => 'This is the API',
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

const options = {
  port: 4000,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground',
};

server.start(options, ({ port }) => console.log(`localhost:${port}`));
