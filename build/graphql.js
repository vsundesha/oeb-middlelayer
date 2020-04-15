"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
var toolAPI_1 = require("./tools/toolAPI");
exports.graphqlserver = new apollo_server_express_1.ApolloServer({ typeDefs: toolAPI_1.typeDefs, resolvers: toolAPI_1.resolvers });
