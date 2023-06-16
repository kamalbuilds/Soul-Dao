import "../styles/globals.css";
import "@celo/react-celo/lib/styles.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { CeloProvider, Alfajores } from "@celo/react-celo";

function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  return (
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
  );
}

export default MyApp;