const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const app = express();
const port = 3001;

// MongoDB connection URL
const url = 'mongodb+srv://nvenkat9310:sRMTNEMgLvTwE82x@cluster0.e6rvhvy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

app.use(express.json());

mongoose.connect(url)
  .then(() => {
    console.log('DB connected');
  })
  .catch((err) => {
    console.log(err.message);
  });

const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });
  app.listen(port, () => {
    console.log(`Server is live on http://localhost:${port}${server.graphqlPath}`);
  });
}

startServer();