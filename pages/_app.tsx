import GlobalStyle from "../styles/global-styls";
import "../styles/globals.css";
import "antd/dist/antd.css";
import type { AppProps } from "next/app";
import Layout from "../components/common/Layout";
import Nav from "../components/common/Nav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Nav />
        <div className="main_content">
          <Component {...pageProps} />
        </div>
      </Layout>
    </>
  );
}

export default MyApp;
