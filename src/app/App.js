// import App from "next/app";
// import { appWithTranslation } from "next-i18next";

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

// export default appWithTranslation(MyApp);

// app.js

import React from "react";
import RootLayout from "./layout"; // layout.js 파일의 경로에 따라 수정

function MyApp({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;
