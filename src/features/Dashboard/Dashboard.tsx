import { useRouter } from 'next/router';
import { Entries } from '../Entries/Entries';
import { Layout } from '../../components/Layout/Layout';
import { Container, Entry, CreateEntry } from './styles';

export const Dashboard = () => {
  const { query } = useRouter();
  const showEditor = Boolean(query?.id) || Boolean(query?.create);

  return (
    <Layout
      headerActions={
        <CreateEntry replace shallow href="?create=true">
          Add new Pup
        </CreateEntry>
      }
    >
      <Container>
        {showEditor && <Entry />}
        <Entries />
      </Container>
    </Layout>
  );
};
