import { NewsList } from '@/components';
import { getLatestNews } from '@/lib/news';
import React from 'react';

function ArchivePage() {
  const LatestNews = getLatestNews();
  return (
    <>
      <h2>ArchivePage</h2>
      <NewsList DUMMY_NEWS={LatestNews} />
    </>
  );
}

export default ArchivePage;
