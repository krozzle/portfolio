import Head from 'next/head';
import * as React from 'react';
import Footer from './Footer';
import Header from './Header';

const Page = ({ children }) => (
  <div>
    <Head>
      <title>krozzler</title>
      <link rel="icon" href="/vdv-logo.png" />
      <link rel="stylesheet" href="/src/styles/tailwind.css" />
    </Head>

    <Header />
    <div className="bg-gray-100">
      <div className="py-8">{children}</div>
    </div>
    <Footer />
  </div>
);

export default Page;
