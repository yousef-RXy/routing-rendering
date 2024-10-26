import { getNewsItem } from '@/lib/news';
import { notFound } from 'next/navigation';

export default function ImagePage({ params }) {
  const newsItem = getNewsItem(params.id);
  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
