import { useState } from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";
import {
  QueryClient,
  QueryClientProvider,
  Hydrate
} from "@tanstack/react-query";

export default function App({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Hydrate>
    </QueryClientProvider>
  );
}
