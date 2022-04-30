import Container from 'components/Container';
import QuestionsListLayout from 'components/QuestionsListLayout';
import { PageSEO } from 'components/SEO';
import { getQnAs } from 'lib/qna';
import siteMetadata from 'lib/sitemetadata';
import { IQnA } from 'lib/types';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

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
