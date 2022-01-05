import React from "react";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>ReactJS Assignment</title>
      </Head>
      {/* <Navbar /> */}

      {children}
    </div>
  );
}
