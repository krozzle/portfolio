import React from 'react';
import { initializeApollo } from '../lib/apollo';
import { ViewerDocument } from '../lib/viewer.graphql';
import About from '../src/components/About';
import CanDoForYou from '../src/components/CanDoForYou';
import FeaturedSection from '../src/components/FeaturedSection';
import GetInTouch from '../src/components/GetInTouch';
import Hero from '../src/components/Hero';
import Mentoring from '../src/components/MentoringSection';
import Page from '../src/components/Page';
import Skills from '../src/components/Skills';

const Index = () => (
  <Page>
    <Hero />
    <FeaturedSection />
    <Mentoring />
    <Skills />
    <CanDoForYou />
    <About />
    <GetInTouch />
  </Page>
);

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
