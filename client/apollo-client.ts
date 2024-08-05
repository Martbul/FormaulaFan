import { ApolloClient, InMemoryCache, DefaultOptions } from "@apollo/client";

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
    uri: "http://localhost:5000/graphql",
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions,
  });
};

export default createApolloClient;
