import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Search } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { articles, categories } from "@/lib/articles";

const searchSchema = z.object({ category: z.string().optional() });

export const Route = createFileRoute("/resources")({
  validateSearch: searchSchema,
  head: () => ({ meta: [
    { title: "Resources & Financial Insights | Squareful" },
    { name: "description", content: "Explore Squareful insights across fintech, digital banking, innovation, technology and finance." },
    { property: "og:title", content: "Resources & Financial Insights | Squareful" },
    { property: "og:description", content: "Expert perspectives on the ideas transforming modern financial services." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ResourcesPage,
});

function ResourcesPage() {
  const search = Route.useSearch();
  const validInitial = categories.find((item) => item === search.category) ?? "All";
  const [activeCategory, setActiveCategory] = useState<string>(validInitial);
  const [query, setQuery] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const featured = articles[0];
  const filtered = articles.slice(1).filter((article) => (activeCategory === "All" || article.category === activeCategory) && article.title.toLowerCase().includes(query.toLowerCase()));
  function subscribe(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSubscribed(true); }

  return (
    <div className="min-h-screen bg-page-frame py-0 text-foreground sm:py-7">
      <div className="mx-auto max-w-[1220px] bg-background shadow-page">
        <SiteHeader />
        <main>
          <section className="border-b border-border px-5 py-12 sm:px-10 lg:px-14 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
              <div><p className="text-[11px] font-bold uppercase text-primary">Knowledge hub</p><h1 className="mt-5 max-w-[720px] font-display text-[42px] font-semibold leading-[1.02] sm:text-[56px] lg:text-[68px]">Ideas shaping the future of finance.</h1></div>
              <div className="lg:pb-2"><p className="max-w-md text-sm leading-6 text-muted-foreground">Research, perspectives and practical thinking for leaders navigating financial transformation.</p><div className="relative mt-6 max-w-md"><Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" /><input value={query} onChange={(event) => setQuery(event.target.value)} aria-label="Search resources" placeholder="Search insights" className="h-11 w-full border border-border bg-background pl-10 pr-4 text-sm outline-none focus:border-primary" /></div></div>
            </div>
          </section>

          <section className="px-5 py-10 sm:px-10 lg:px-14 lg:py-14">
            <p className="mb-5 text-[10px] font-bold uppercase text-muted-foreground">Featured insight</p>
            <Link to="/" className="group grid overflow-hidden rounded-md bg-soft lg:grid-cols-[1.35fr_1fr]">
              <img src={featured.image} width={1600} height={912} alt="Fintech leader in a modern office" className="aspect-[16/10] h-full w-full object-cover" />
              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12"><p className="text-[10px] font-bold uppercase text-primary">{featured.category}</p><h2 className="mt-4 font-display text-2xl font-semibold leading-tight sm:text-3xl">{featured.title}</h2><p className="mt-4 text-xs leading-5 text-muted-foreground">{featured.excerpt}</p><div className="mt-8 flex items-center justify-between border-t border-border pt-4 text-[10px] text-muted-foreground"><span>{featured.date} · {featured.readTime}</span><ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></div></div>
            </Link>
          </section>

          <section className="border-t border-border px-5 py-12 sm:px-10 lg:px-14 lg:py-16">
            <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)]">
              <aside><p className="text-[10px] font-bold uppercase text-muted-foreground">Browse by topic</p><div className="mt-5 flex gap-2 overflow-x-auto pb-2 lg:grid lg:overflow-visible">{categories.map((category) => { const count = category === "All" ? articles.length : articles.filter((article) => article.category === category).length; return <Button key={category} variant={activeCategory === category ? "dark" : "outline"} size="sm" onClick={() => setActiveCategory(category)} className="justify-between whitespace-nowrap lg:w-full"><span>{category}</span><span className="ml-3 opacity-60">{count}</span></Button>; })}</div></aside>
              <div><div className="mb-7 flex items-end justify-between gap-4"><div><p className="text-[10px] font-bold uppercase text-primary">Latest thinking</p><h2 className="mt-2 font-display text-2xl font-semibold">{activeCategory === "All" ? "All resources" : activeCategory}</h2></div><span className="text-[10px] text-muted-foreground">{filtered.length} articles</span></div>
                {filtered.length ? <div className="grid gap-x-5 gap-y-9 sm:grid-cols-2 xl:grid-cols-3">{filtered.map((article) => <Link key={article.title} to="/" className="group"><div className="overflow-hidden rounded-md"><img src={article.image} loading="lazy" width={520} height={360} alt="" className="aspect-[1.45] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" /></div><p className="mt-4 text-[9px] font-bold uppercase text-primary">{article.category}</p><h3 className="mt-2 font-display text-base font-semibold leading-5">{article.title}</h3><p className="mt-2 text-[11px] leading-5 text-muted-foreground">{article.excerpt}</p><p className="mt-4 text-[10px] text-muted-foreground">{article.date} · {article.readTime}</p></Link>)}</div> : <div className="border-y border-border py-16 text-center"><p className="font-display text-lg font-semibold">No articles found</p><p className="mt-2 text-xs text-muted-foreground">Try another search or category.</p></div>}
              </div>
            </div>
          </section>

          <section className="border-y border-border bg-soft px-5 py-14 sm:px-10 lg:px-14"><div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center"><div><p className="text-[10px] font-bold uppercase text-primary">Stay informed</p><h2 className="mt-3 font-display text-2xl font-semibold">Insight, without the noise.</h2><p className="mt-2 text-xs text-muted-foreground">A concise selection of ideas and analysis, delivered monthly.</p></div>{subscribed ? <p className="flex items-center gap-2 text-sm font-semibold text-success"><Check className="size-4" /> You're subscribed.</p> : <form onSubmit={subscribe} className="flex w-full max-w-md"><input required type="email" aria-label="Newsletter email address" placeholder="Your email address" className="h-10 min-w-0 flex-1 border border-border bg-background px-3 text-xs outline-none" /><Button type="submit" variant="dark">Subscribe</Button></form>}</div></section>
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}