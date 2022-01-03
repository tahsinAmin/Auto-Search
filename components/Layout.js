import React from "react";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/admin-lte/3.2.0-rc/css/adminlte.min.css'
          integrity='sha512-YOsl4pnOb5NC868yn1JxAzjJsWkLNtP53uc3OcyAl0Q2R1cwo/mdI1hHSQM8gbIxWj97mKeLoD9R0aiYibFQAA=='
          crossOrigin='anonymous'
          referrerPolicy='no-referrer'
        />
      </Head>
      {/* <Navbar /> */}
      {children}
    </div>
  );
}
