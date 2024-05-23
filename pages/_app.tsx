import "@/styles/globals.css";

import { ApolloProvider } from "@apollo/client";
import createApolloClient from "@/graphql/apolloClient";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

const client = createApolloClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  );
}
