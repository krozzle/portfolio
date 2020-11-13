import React from 'react';
import { initializeApollo } from '../lib/apollo';
import { ViewerDocument } from '../lib/viewer.graphql';
import About from '../src/components/About';
import CanDoForYou from '../src/components/CanDoForYou';
import Intro from '../src/components/Intro';
import Page from '../src/components/Page';
import randomTextColor from '../src/components/utils/randomTextColor';

console.log(randomTextColor());

const Index = () => {
  // const { viewer } = useViewerQuery().data!;

  return (
    <Page>
      <Intro />
      <CanDoForYou />
      <About />
    </Page>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ViewerDocument,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default Index;
