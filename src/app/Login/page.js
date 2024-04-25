"use client";
import React from "react";
import Link from "next/link";
export const page = () => {
  return (
    <Link href="https://ohou.se/users/sign_in?redirect_to=%2Fcart">링크</Link>
  );
};
export default page;

// import React from "react";
// import RootLayout from "../layout";

// import styles from "./Login.module.css";
// const Page = () => {
//   return (
//     <RootLayout withHeaderAndFooter={false}>
//       <div className={styles.Login}></div>
//     </RootLayout>
//   );
// };

// export default Page;
