import { initializeApollo } from '../lib/apollo';
import { useViewerQuery, ViewerDocument } from '../lib/viewer.graphql';
import Intro from '../src/components/Intro';
import Page from '../src/components/Page';

const Index = () => {
  const { viewer } = useViewerQuery().data!;

  return (
    <Page>
      <Intro />
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
