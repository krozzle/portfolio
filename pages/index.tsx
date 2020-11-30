import React from 'react';
import { initializeApollo } from '../lib/apollo';
import { ViewerDocument } from '../lib/viewer.graphql';
import About from '../src/components/About';
import CanDoForYou from '../src/components/CanDoForYou';
import FeaturedSection from '../src/components/FeaturedSection';
import GetInTouch from '../src/components/GetInTouch';
import Hero from '../src/components/Hero';
import Page from '../src/components/Page';
import Skillset from '../src/components/Skillset';

const Index = () => {
  // const { viewer } = useViewerQuery().data!;

  return (
    <Page>
      <Hero />
      <FeaturedSection />
      <Skillset />
      <CanDoForYou />
      <About />
      <GetInTouch />
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
