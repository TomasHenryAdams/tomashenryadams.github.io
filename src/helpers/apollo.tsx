import { ApolloClient, InMemoryCache } from "@apollo/client";

const Client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://graphql.contentful.com/content/v1/spaces/pystbp1i77y9",
  headers: {
    Authorization: `Bearer v1kpSdemWSYklH6rtTBD5Mn8L4fEa0OOuVIoTckDF_E`,
  },
});

export default Client;
