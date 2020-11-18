import express from "express";
import { graphqlHTTP } from "express-graphql";
import mongoose from "mongoose";
import schema from "../graphql";

const app = express();

// GraphQL server route
app.use(
  "/graphql",
  graphqlHTTP((req, _) => ({
    schema,
    pretty: true,
    graphiql: true,
  }))
);

mongoose.connect("mongodb://mongo:27017/linkey", { useNewUrlParser: true });

const server = app.listen(8080, () => {
  console.log("Listing at port: ", server.address().port);
});
