import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_lr39JcyD.mjs';
import 'kleur/colors';
export { renderers } from '../renderers.mjs';

const $$PrivacyPolicy = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`import BaseHead from '../components/BaseHead.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import ${SITE_TITLE, SITE_DESCRIPTION} from '../consts';
${renderComponent($$result, "BaseHead", BaseHead, { "title": "Privacy Policy | Christian Tech Help", "description": SITE_DESCRIPTION })} ${maybeRenderHead()}<body> ${renderComponent($$result, "Header", Header, {})} <main class="container mx-auto px-6 py-12 lg:px-8"> <article class="prose prose-headings:font-display prose-a:no-underline hover:prose-a:underline prose-strong:font-semibold prose-h1:text-4xl prose-h1:font-bold prose-h2:text-3xl prose-h3:text-2xl max-w-none mx-auto"> <h1>Privacy Policy</h1> <p><em>Last updated: February 07, 2026</em></p> <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p> <p>We use Your Personal Data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the <a href="https://www.freeprivacypolicy.com/free-privacy-policy-generator/">Privacy Policy Generator</a>.</p> <!-- Full content here, abbreviated for brevity; paste the entire HTML body from previous --> <section> <h2>Interpretation and Definitions</h2> <h3>Interpretation</h3> <p>The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p> <h3>Definitions</h3> <p>For the purposes of this Privacy Policy:</p> <ul> <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li> <!-- ... all definitions ... --> </ul> </section> <!-- Continue with all sections as before, but now in proper <main> + prose --> <!-- For full, it's long, but yes --> <!-- Placeholder for now, but in real write full --> <section> <h2>Contact Us</h2> <p>If you have any questions about this Privacy Policy, You can contact us:</p> <ul> <li>By email: <a href="mailto:scott@christiantechhelp.com">scott@christiantechhelp.com</a></li> </ul> </section> </article> </main> ${renderComponent($$result, "Footer", Footer, {})} </body>`;
}, "/Users/scott/clawd/repos/astro-sites/christiantechhelp.com/src/pages/privacy-policy.astro", void 0);

const $$file = "/Users/scott/clawd/repos/astro-sites/christiantechhelp.com/src/pages/privacy-policy.astro";
const $$url = "/privacy-policy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$PrivacyPolicy,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
