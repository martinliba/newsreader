import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";

const client = new ApolloClient({
  uri: "https://news-reader.stagnationlab.dev/graphql",
  cache: new InMemoryCache()
});

export default client;
