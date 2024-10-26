import { notFound } from 'next/navigation';

import { DUMMY_NEWS } from '@/dummy-news';
import Link from 'next/link';

export default function NewsDetailPage({ params }) {
  const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === params.id);

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${params.id}/image`}>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
