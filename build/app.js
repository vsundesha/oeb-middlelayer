"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var menuMaker_1 = require("./menu/menuMaker");
var toolAPI_1 = require("./tools/toolAPI");
app.get('/links', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    menuMaker_1.scientificComunitiesList()
        .then(function (response) {
        res.json(response);
    })
        .catch(function (err) {
        res.json(err);
    });
});
app.get('/tools', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    var skip = req.query.skip || '0';
    var limit = req.query.limit || '10';
    toolAPI_1.generalTools(skip, limit)
        .then(function (response) {
        res.json(response);
    })
        .catch(function (err) {
        res.json(err);
    });
});
app.listen(3030, function () {
    console.log('Example app listening on port 3030!');
});
