import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
  const staticPosts = [
    {
      title: 'Fixing Slow WiFi',
      pubDate: new Date('2026-02-04'),
      description: 'Step-by-step troubleshoot for faster home network.',
      link: '/blog/fixing-slow-wifi/',
    },
    {
      title: 'AI for Everyday Productivity',
      pubDate: new Date('2026-02-04'),
      description: 'Practical AI tips for work/home—no fluff.',
      link: '/blog/ai-tips/',
    },
  ];
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: staticPosts,
  });
}