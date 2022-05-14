import Container from 'components/Container';
import { PageSEO } from 'components/SEO';
import { getQnAs } from 'lib/qna';
import siteMetadata from 'lib/sitemetadata';
import { IQnA } from 'lib/types';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import dynamic from 'next/dynamic';

const QuestionsListLayout = dynamic(
  () => import('components/QuestionsListLayout'),
  { ssr: false, loading: () => <p>Loading...</p> }
);

const Home = ({ qnas }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
      />
      <Container>
        <QuestionsListLayout qnas={qnas} />
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps<{
  qnas: IQnA[];
}> = async () => {
  const qnas = getQnAs();

  return {
    props: { qnas },
  };
};
export default Home;
