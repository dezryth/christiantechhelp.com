import { c as createComponent, r as renderTemplate, a as renderComponent, b as renderHead, d as addAttribute } from '../chunks/astro/server_lr39JcyD.mjs';
import 'kleur/colors';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from '../chunks/Footer_Co_o5hFk.mjs';
import { g as getCollection } from '../chunks/_astro_content_C2YgOp6g.mjs';
import { S as SITE_TITLE } from '../chunks/consts_Bt8WZyl_.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("blog");
  const sortedPosts = posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return renderTemplate`<html lang="en" data-astro-cid-5tznm7mj> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": `Blog - ${SITE_TITLE}`, "description": "Tech tips & updates", "data-astro-cid-5tznm7mj": true })}${renderHead()}</head> <body data-astro-cid-5tznm7mj> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-5tznm7mj": true })} <main data-astro-cid-5tznm7mj> <h1 data-astro-cid-5tznm7mj>Blog</h1> <h2 data-astro-cid-5tznm7mj>Recent Posts</h2> <div class="posts-grid" data-astro-cid-5tznm7mj> ${sortedPosts.map((post) => renderTemplate`<a${addAttribute(`/blog/${post.slug}/`, "href")} class="post-card" data-astro-cid-5tznm7mj> <img src="/CTHLogo-2-1024x908.jpg"${addAttribute(post.data.title, "alt")} data-astro-cid-5tznm7mj> <div data-astro-cid-5tznm7mj> <h3 data-astro-cid-5tznm7mj>${post.data.title}</h3> <p data-astro-cid-5tznm7mj>${post.data.description} (${new Date(post.data.pubDate).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })})</p> </div> </a>`)} </div> <p style="text-align: center; margin: 2em 0;" data-astro-cid-5tznm7mj>More coming—subscribe or ☎️ (469) 844-0493 for custom advice!</p> <div class="rss-subscribe" style="text-align: center; margin: 2em 0; padding: 1.5em; background: rgba(255,165,0,0.1); border-radius: 0.75rem; border: 1px solid rgba(255,165,0,0.3); display: inline-block;" data-astro-cid-5tznm7mj> <a href="/rss.xml" style="text-decoration: none; color: inherit; display: inline-flex; align-items: center; gap: 0.75em; font-weight: 600; font-size: 1.1em;" data-astro-cid-5tznm7mj> <img src="/rss-icon.png" alt="RSS Feed" width="28" height="28" style="filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));" data-astro-cid-5tznm7mj>
Subscribe to my RSS Feed!
</a> </div>  </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-5tznm7mj": true })} </body></html>`;
}, "/Users/scott/clawd/repos/astro-sites/christiantechhelp.com/src/pages/blog/index.astro", void 0);

const $$file = "/Users/scott/clawd/repos/astro-sites/christiantechhelp.com/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
