import { DUMMY_NEWS } from '@/dummy-news';
import { NewsList } from '@/components';

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <NewsList DUMMY_NEWS={DUMMY_NEWS} />
    </>
  );
}
