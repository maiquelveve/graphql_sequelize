const { ApolloServer } = require('apollo-server');
const graphql = require('./src/graphql');
const config = require('./src/config');
const db = require('./src/database');

const server = new ApolloServer({
    ...graphql,
    ...config
})

server.listen().then( ({ url }) => console.log(url) )