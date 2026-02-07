import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_lr39JcyD.mjs';
import 'kleur/colors';
import { $ as $$BlogPost } from '../chunks/BlogPost_CnLL_Fvx.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$BlogPost, { "title": "About Me", "description": "About me", "pubDate": /* @__PURE__ */ new Date("December 11 2024"), "heroImage": "/Scott-938x1024.png" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>
Hi there! I'm Scott. I've been working in Information Technology and Software Development for over a decade.
    I love to help people, and I created Christian Tech Help so I could put my technical skills to use to serve the community in and around Carrollton, TX.
</p> <p></p>` })}`;
}, "/Users/scott/clawd/repos/astro-sites/christiantechhelp.com/src/pages/about.astro", void 0);

const $$file = "/Users/scott/clawd/repos/astro-sites/christiantechhelp.com/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
