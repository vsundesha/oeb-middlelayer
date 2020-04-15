"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\ttype Tool {\n\t\tid: String\n\t}\n\n\ttype Query {\n\t\ttools: [Tool]\n\t}\n"], ["\n\ttype Tool {\n\t\tid: String\n\t}\n\n\ttype Query {\n\t\ttools: [Tool]\n\t}\n"])));
exports.tools = [
    {
        id: 'Harry Potter and the Chamber of Secrets'
    },
    {
        id: 'Jurassic Park'
    }
];
exports.resolvers = {
    Query: {
        tools: function () { return exports.tools; }
    }
};
var templateObject_1;
