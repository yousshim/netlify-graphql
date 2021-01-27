const fs = require("fs")
const { ApolloServer, gql } = require("apollo-server-lambda");

const data = JSON.parse(fs.readFileSync(require.resolve("./data.json")))

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: (parent, args, context) => {
      return data.msg
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

exports.handler = server.createHandler();