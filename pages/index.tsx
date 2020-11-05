import Link from 'next/link';
import { initializeApollo } from '../lib/apollo';
import { useViewerQuery, ViewerDocument } from '../lib/viewer.graphql';
import Page from '../src/components/Page';

const Index = () => {
  const { viewer } = useViewerQuery().data!;

  return (
    <Page>
      <div className="flex justify-around">
        You're signed in as {viewer.name} and you're {viewer.status} go to the{' '}
        <Link href="/about">
          <a>about</a>
        </Link>{' '}
        page.
      </div>
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
