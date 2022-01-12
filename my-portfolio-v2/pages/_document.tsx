import Document, { Html, Head, Main, NextScript } from "next/document";
import theme from "../src/Theme";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta
            key="theme-color"
            name="theme-color"
            content={theme.palette.primary.main}
          />
          <link key="favicon" rel="icon" href="/favicon.ico" />

          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,600;1,400;1,600&family=Poppins:wght@700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,400;0,600;1,400;1,600&family=Poppins:wght@300;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// https://fonts.google.com/share?selection.family=Nunito:ital,wght@0,200;0,400;0,600;1,400;1,600%7CPoppins:wght@300;700
