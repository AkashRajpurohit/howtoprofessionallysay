import Container from 'components/Container';
import QuestionsListLayout from 'components/QuestionsListLayout';
import { getQnAs } from 'lib/qna';
import { IQnA } from 'lib/types';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

const Home = ({ qnas }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container>
      <QuestionsListLayout qnas={qnas} />
    </Container>
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
