import GlobalStyle from "../styles/globalStyle.js";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { useEffect, useState } from "react";
import { isBrowser } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const [loading, setIsloading] = useState(true);

  useEffect(() => {}, []);

  return (
    <ThemeProvider theme={theme.light}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
