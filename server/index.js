require('dotenv').config();
const { GraphQLServer } = require('graphql-yoga');
const path = require('path');

const links = [
  {
    id: 'link-0',
    description: 'This is as description',
    url: 'google.com',
  },
];

let idCount = links.length;

const resolvers = {
  Query: {
    info: () => process.env.DB_HOST,
    feed: () => links,
  },
  Mutation: {
    post: (_, args) => {
      const { description, url } = args;
      idCount += 1;
      const link = {
        id: `link-${idCount}`,
        description,
        url,
      };
      links.push(link);
      return link;
    },
  },
};

const server = new GraphQLServer({
  typeDefs: path.join(__dirname, './schema.graphql'),
  resolvers,
});

const options = {
  port: 4000,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground',
};

server.start(options, ({ port }) => console.log(`localhost:${port}`));
