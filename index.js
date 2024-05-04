const { ApolloServer } = require('apollo-server');
// const mongoose = require('mongoose');
// const express = require('express');
// const app = express();
const DBconnect = require('./configDB/configDB');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolver');

const server = new ApolloServer({
    typeDefs,
    resolvers
})

DBconnect();
const port = 5000;
server.listen(port, console.log("Listening port " + port));