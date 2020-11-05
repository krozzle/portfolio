import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

const Page = ({ children }) => (
  <html lang="en">
    <div>
      <Head>
        <title>krozzler</title>
        <link rel="icon" href="/vdv-logo.png" />
        <link rel="stylesheet" href="/src/styles/tailwind.css" />
      </Head>

      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  </html>
);

export default Page;
