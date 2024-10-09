import { NewsList } from '@/components';
import { getNewsForYear } from '@/lib/news';
import React from 'react';

function Page({ params }) {
  const news = getNewsForYear(params.year);
  return <NewsList DUMMY_NEWS={news} />;
}

export default Page;
