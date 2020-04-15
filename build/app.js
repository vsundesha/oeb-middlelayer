"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var graphql_1 = require("./graphql");
var app = express();
var menuMaker_1 = require("./menu/menuMaker");
app.get('/links', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    menuMaker_1.scientificComunitiesList()
        .then(function (response) {
        // console.log(response);
        res.json(response);
    })
        .catch(function (err) {
        res.json(err);
    });
});
// add graphql server to express
graphql_1.graphqlserver.applyMiddleware({ app: app });
app.listen(3030, function () {
    console.log('Example app listening on port 3030!');
});
