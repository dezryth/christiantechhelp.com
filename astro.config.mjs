// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// https://astro.build/config
export default defineConfig({
	site: 'https://christiantechhelp.com',
  // base: '/christiantechhelp.com',
  outDir: './docs', // Change the build output folder to 'docs'
	integrations: [
		mdx(),
		sitemap(),
		{
			name: 'emit-nojekyll',
			hooks: {
				'astro:build:done': async ({ dir }) => {
					const outDir = dir ?? new URL('./docs/', import.meta.url);
					const fsPath = outDir instanceof URL ? fileURLToPath(outDir) : outDir;
					await writeFile(join(fsPath, '.nojekyll'), '');
				},
			},
		},
	],
});
