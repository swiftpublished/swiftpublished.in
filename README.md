# swiftpublished.in

A free, weekly iOS / Swift development blog, statically generated with Astro and pulled from a Notion CMS.

🔗 **Production:** [swiftpublished-in.vercel.app](https://swiftpublished-in.vercel.app) (custom domain `swiftpublished.in` cut over once Phase E completes)

## Tech stack

- **[Astro 5](https://astro.build)** — content-first static site generation
- **[Notion](https://www.notion.so/)** — CMS, pulled at build time via [`notion-astro-loader`](https://github.com/NotWoods/notion-astro-loader)
- **[TailwindCSS 3](https://tailwindcss.com)** — styling, with `@tailwindcss/typography` for article prose
- **[Shiki](https://shiki.style)** — code syntax highlighting (built into Astro)
- **[Pagefind](https://pagefind.app)** — client-side full-text search, indexed at build
- **[Vercel](https://vercel.com)** — hosting + auto-deploy on push to `main`

## Local development

You need Node ≥ 18 and a Notion integration with read access to the articles database.

```sh
# Clone
git clone https://github.com/swiftpublished/swiftpublished.in.git
cd swiftpublished.in
npm install

# Configure
cp .env.example .env.local
# then edit .env.local with NOTION_TOKEN + NOTION_DATABASE_ID

# Run
npm run dev          # http://localhost:4321
npm run build        # production build → dist/
npm run preview      # serve dist/ locally
```

## Project layout

```
src/
├── content/config.ts        # Notion `articles` collection definition
├── pages/                   # routes
│   ├── index.astro          # home: hero + recent articles + events
│   ├── articles/            # listing + tag-filtered pages
│   ├── article/[...slug]    # individual article (Notion-backed)
│   ├── authors/             # author index + per-author page
│   └── about / sponsor / subscribe / privacy / support / 404
├── components/              # ArticleCard, ListArticles, Header, Footer, Share, Tag, ...
├── data/                    # authors, sponsors, events, tags, site config, social links
├── layouts/                 # BaseLayout
├── utils/                   # articles helpers (getArticles, slug, reading time)
└── styles/global.css        # Tailwind + prose tweaks
```

## How articles work

Articles live in Notion. The `notion-astro-loader` queries the configured database at build time and exposes each article as an Astro content entry. Each article needs:

- `title` (slug source — slugified to URL)
- `Article Title` (rich_text — the displayed H1)
- `Article Description` (rich_text — intro paragraph)
- `Tags` (multi_select — sets `/articles/[tag]` membership)
- `Status` (status — only `Done` rows are published)
- `Cover Alternate text`, `Meta Title`, `Meta Description` (optional, for SEO)
- `Created at` (publication date)

The Notion page's **cover** image is used as the article hero.

To publish a new article, set its `Status` to `Done` in Notion and trigger a rebuild (push to `main`, or via a Vercel deploy hook — see Phase D plan).

## License

GPL-3.0-only. Scaffolded from [OpenBlog by danielcgilibert](https://github.com/danielcgilibert/blog-template) — see `LICENSE`.

## Contributors

- Murali Kathir
- Saba
- Shahrukh Alam
- Arrjun Baru
- Aaina Jain
