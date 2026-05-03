# Site: <NOM_DU_SITE>

URL de production: https://CHANGE-ME.com
Type: Site HTML statique

## Outils SEO/perf installés
- **Unlighthouse** (audit auto): `.github/workflows/unlighthouse.yml` — tourne chaque lundi 6h UTC + à chaque push sur main. Rapport publié sur GitHub Pages.
- **web-vitals** (tracker live): `js/web-vitals.js` — chargé sur toutes les pages, log dans la console + envoie a GA4 si present.

## Agents specialises (dans .claude/agents/)
- `seo-auditor` — invoquer pour tout sujet SEO, schema, sitemap, Core Web Vitals
- `webmaster` — invoquer pour accessibilite, perf, images, securite, liens, validation HTML

## Conventions du projet
- Toutes les pages HTML incluent `<script type="module" src="js/web-vitals.js"></script>` avant `</body>`
- Images dans `/Images/` avec noms anglais SEO-friendly (ex: `living-room-sea-view.webp`)
- Sitemap `/sitemap.xml` mis a jour a chaque ajout de page
- robots.txt autorise tout crawl

## Pages publiques
- A completer par site (lister index.html + autres)
