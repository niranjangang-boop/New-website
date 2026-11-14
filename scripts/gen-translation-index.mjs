// Writes src/data/translation-index.json: which article slugs have a Marathi
// and/or Hindi translation (from translations.js and the two extra JSON files).
// Runs before every build (package.json) so the English pages can emit hreflang
// alternates and language links without shipping the large translation files.
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { TRANSLATIONS } = await import(resolve(root, 'src/data/translations.js'));
const articles = new Set(
  readdirSync(resolve(root, 'src/content/articles')).filter((f) => f.endsWith('.json')).map((f) => f.slice(0, -5))
);
const index = {};
for (const lang of ['mr', 'hi']) {
  const extra = JSON.parse(readFileSync(resolve(root, `src/data/translations-extra-${lang}.json`), 'utf-8'));
  index[lang] = [...new Set([...Object.keys(TRANSLATIONS[lang] || {}), ...Object.keys(extra)])]
    .filter((s) => articles.has(s))
    .sort();
}
writeFileSync(resolve(root, 'src/data/translation-index.json'), JSON.stringify(index, null, 2) + '\n');
console.log(`translation-index: mr ${index.mr.length}, hi ${index.hi.length}`);
