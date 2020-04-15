import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './tools/toolAPI';

export const graphqlserver = new ApolloServer({ typeDefs, resolvers });
