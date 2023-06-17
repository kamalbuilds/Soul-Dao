import "../styles/globals.css";
import "@celo/react-celo/lib/styles.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { CeloProvider, Alfajores } from "@celo/react-celo";
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  return (
    <ChakraProvider>
      <CeloProvider
        dapp={{
          name: "Register Phone Number",
          description: "This app allows you to register a number with Celo",
          url: "https://example.com",
          icon: "",
        }}
        defaultNetwork={Alfajores.name}
      >
        <Layout>
          <AnyComponent {...pageProps} />
        </Layout>
      </CeloProvider>
    </ChakraProvider>
  );
}

export default MyApp;