import LayoutWrapper from 'components/LayoutWrapper';
import { PageSEO } from 'components/SEO';
import siteMetadata from 'lib/sitemetadata';
import QuestionsListLayout from 'components/QuestionsListLayout';

const Home = () => {
  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
      />
      <LayoutWrapper>
        <QuestionsListLayout />
      </LayoutWrapper>
    </>
  );
};

export default Home;
