import { ApolloClient, InMemoryCache } from "@apollo/client";

const API_URI = `/api/graphql/`

const createApolloClient = () => {
  return new ApolloClient({
    uri: API_URI,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;