import { ApolloClient, InMemoryCache, DefaultOptions } from "@apollo/client";

// Define default options for the client
const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
  },
  query: {
    fetchPolicy: "no-cache",
  },
  mutate: {
    fetchPolicy: "no-cache",
  },
};

const createApolloClient = () => {
  return new ApolloClient({
    uri: "http://localhost:5000/graphql", // Replace with your GraphQL endpoint
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions,
  });
};

export default createApolloClient;
