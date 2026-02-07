import rss from '@astrojs/rss';
import { S as SITE_TITLE, a as SITE_DESCRIPTION } from '../chunks/consts_Bt8WZyl_.mjs';
export { renderers } from '../renderers.mjs';

async function GET(context) {
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
