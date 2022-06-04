import Container from 'components/Container';
import { PageSEO } from 'components/SEO';
import siteMetadata from 'lib/sitemetadata';
import dynamic from 'next/dynamic';

const QuestionsListLayout = dynamic(
  () => import('components/QuestionsListLayout'),
  { ssr: false, loading: () => <p>Loading...</p> }
);

const Home = () => {
  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
      />
      <Container>
        <QuestionsListLayout />
      </Container>
    </>
  );
};

export default Home;
