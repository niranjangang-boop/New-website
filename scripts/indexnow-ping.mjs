// Tells Bing (and other IndexNow engines) which URLs changed, so new or edited
// pages are picked up within hours rather than weeks. Bing feeds Copilot and
// ChatGPT search. Run after a deploy has gone live:
//   node scripts/indexnow-ping.mjs                 (pings every URL in the live sitemap)
//   node scripts/indexnow-ping.mjs /education/x/   (pings only the paths given)
const KEY = 'f6134384c1ad164735ff910fb26a4b97'; // public/f6134384c1ad164735ff910fb26a4b97.txt must contain this key
const HOST = 'drniranjanghag.com';

let urls = process.argv.slice(2).map((p) => `https://${HOST}${p.startsWith('/') ? p : '/' + p}`);
if (!urls.length) {
  const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
  urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}
const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls.slice(0, 10000) }),
});
console.log(`IndexNow: HTTP ${res.status} for ${urls.length} URLs`);
