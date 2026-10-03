import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowLeft, ArrowRight, Check, Copy, Facebook, Linkedin, Menu, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/fintech-hero.jpg";
import officeImage from "@/assets/fintech-office.jpg";
import conversationImage from "@/assets/fintech-conversation.jpg";
import workImage from "@/assets/fintech-work.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Digital Revolution: How Fintech is Transforming Financial Services | Squareful" },
      { name: "description", content: "Explore how fintech is reshaping banking, payments and financial services through innovation and technology." },
      { property: "og:title", content: "The Digital Revolution: How Fintech is Transforming Financial Services" },
      { property: "og:description", content: "A closer look at the technologies and trends changing the future of finance." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const relatedArticles = [
  { image: conversationImage, category: "Digital Banking", title: "How Banking Has Modernized: The Evolution of Digital Services", date: "April 18, 2024" },
  { image: officeImage, category: "Innovation", title: "A Decade in Banking: A Personal Brand Built on Progress", date: "April 12, 2024" },
  { image: workImage, category: "Technology", title: "Banking From Anywhere: Digital Tools Reshaping Work", date: "March 29, 2024" },
  { image: heroImage, category: "Finance", title: "The Human Side of Financial Transformation", date: "March 15, 2024" },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [copied, setCopied] = useState(false);

  function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubscribed(true);
  }

  async function copyLink() {
    await navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="min-h-screen bg-page-frame py-0 text-foreground sm:py-7">
      <div className="mx-auto max-w-[1220px] bg-background shadow-page">
        <header className="relative flex h-[72px] items-center justify-between border-b border-border/55 px-5 sm:px-10 lg:px-14">
          <a href="#top" className="flex items-center gap-2 font-display text-base font-bold" aria-label="Squareful home">
            <span className="grid size-7 place-items-center rounded-full border-2 border-foreground text-[10px]">S</span>
            Squareful
          </a>
          <nav className="hidden items-center gap-7 text-[12px] font-medium md:flex" aria-label="Main navigation">
            <a href="#article">About</a><a href="#insights">Solutions</a><a href="#innovation">Innovation</a><a href="#related">Resources</a><a href="#footer">Blog</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" aria-label="Search"><Search className="size-4" /></Button>
            <Button size="sm" className="hidden sm:inline-flex">Get Started</Button>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open navigation" onClick={() => setMenuOpen((value) => !value)}>
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
          {menuOpen && (
            <nav className="absolute inset-x-0 top-full z-20 grid gap-1 border-y border-border bg-background p-5 shadow-page md:hidden">
              {['About','Solutions','Innovation','Resources','Blog'].map((item) => <a key={item} href="#article" onClick={() => setMenuOpen(false)} className="py-2 text-sm font-medium">{item}</a>)}
            </nav>
          )}
        </header>

        <main id="top">
          <article id="article">
            <div className="px-5 pt-9 sm:px-10 lg:px-14 lg:pt-12">
              <div className="mb-9 flex items-center gap-2 text-[11px] text-muted-foreground"><span>Home</span><span>/</span><span>Financial Insights</span><span>/</span><span className="text-foreground">Market Trends</span></div>
              <p className="mb-4 text-[11px] font-bold uppercase text-primary">Technology</p>
              <h1 className="max-w-[760px] font-display text-[34px] font-semibold leading-[1.02] sm:text-[46px] lg:text-[52px]">The Digital Revolution: How Fintech is Transforming Financial Services</h1>
              <p className="mt-5 max-w-[650px] text-sm leading-6 text-muted-foreground">The financial industry is undergoing a transformation unlike any other. We explore how fintech is changing the landscape.</p>
              <img src={heroImage} width={1600} height={912} alt="Fintech founder in a bright modern office" className="mt-8 aspect-[16/8.3] w-full rounded-md object-cover" />
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-border py-5 sm:flex sm:justify-between">
                <div className="flex min-w-0 items-center gap-3">
                  <img src={conversationImage} width={40} height={40} alt="Maya Benali" className="size-9 shrink-0 rounded-full object-cover" />
                  <div className="min-w-0"><p className="text-[10px] text-muted-foreground">Written by</p><p className="truncate text-xs font-semibold">Maya Benali</p></div>
                  <div className="ml-4 hidden border-l border-border pl-6 sm:block"><p className="text-[10px] text-muted-foreground">Published</p><p className="text-xs font-semibold">June 12, 2024</p></div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="mr-2 hidden text-[10px] text-muted-foreground sm:inline">Share Article</span>
                  <Button variant="ghost" size="icon" aria-label="Copy article link" onClick={copyLink}>{copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}</Button>
                  <Button variant="ghost" size="icon" aria-label="Share on Facebook"><Facebook className="size-3.5" /></Button>
                  <Button variant="ghost" size="icon" aria-label="Share on LinkedIn"><Linkedin className="size-3.5" /></Button>
                </div>
              </div>
            </div>

            <div className="mx-auto grid max-w-[980px] gap-12 px-5 py-12 sm:px-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:px-0 lg:py-16">
              <aside className="lg:sticky lg:top-6 lg:self-start">
                <form onSubmit={subscribe} className="bg-soft p-6">
                  <h2 className="font-display text-base font-semibold">Subscribe to the Newsletter</h2>
                  <p className="mt-2 text-[11px] leading-5 text-muted-foreground">Get the latest analysis and fintech insights delivered straight to your inbox.</p>
                  {subscribed ? <p className="mt-5 flex items-center gap-2 text-xs font-semibold text-success"><Check className="size-4" /> You're subscribed.</p> : <><input required type="email" aria-label="Email address" placeholder="Enter your email" className="mt-5 h-9 w-full border-b border-border bg-transparent text-xs outline-none focus:border-primary" /><Button type="submit" variant="dark" size="sm" className="mt-3 w-full">Subscribe</Button></>}
                </form>
                <div className="mt-10 hidden lg:block"><p className="text-[11px] font-bold uppercase">Table of contents</p><ol className="mt-5 space-y-4 border-l border-border pl-4 text-[11px] text-muted-foreground"><li><a href="#experience">Digital-first banking experience</a></li><li><a href="#innovation">Key technologies driving innovation</a></li><li><a href="#benefits">The benefits of fintech innovation</a></li><li><a href="#future">Looking ahead</a></li></ol></div>
              </aside>

              <div className="article-copy">
                <p>Over the last decade, fintech has evolved from being a niche area of innovation to a driving force in reshaping the way we access, use, and understand money. From mobile payments and digital wallets to artificial intelligence and open banking, technology is rewriting the rules of modern finance.</p>
                <p>In this article, we'll explore how fintech is revolutionizing the banking industry, the technologies driving this change, and the challenges that lie ahead.</p>
                <section id="experience"><h2>Digital-First Banking Experience</h2><p>In the past, visiting a bank branch was the primary way to perform banking tasks. However, digital-first platforms now offer everything from opening an account and applying for financing to managing investments through a simple, intuitive interface.</p><blockquote>Fintech is not just about improving processes. It's about creating a financial ecosystem where every individual, regardless of their location or income level, can participate and thrive.</blockquote><p>Neobanks, or online-only banks, are further disrupting traditional banking. With no physical branches, they focus on lean operations and deliver seamless customer experiences at lower cost.</p></section>
                <section id="innovation"><h2>Key Technologies Driving Fintech Innovation</h2><h3>Blockchain and Cryptocurrencies</h3><p>Blockchain technology, the backbone of cryptocurrencies, is revolutionizing financial transactions. It offers unparalleled transparency, security, and efficiency.</p><ul><li><strong>Decentralized finance:</strong> Platforms allow lending, borrowing and trading without intermediaries.</li><li><strong>Smart contracts:</strong> Agreements execute automatically when their conditions are met.</li><li><strong>Cross-border payment:</strong> Cryptocurrencies reduce the cost and time of international transfers.</li></ul><h3>Artificial Intelligence and Machine Learning</h3><p>AI and machine learning are increasingly woven into banking, from fraud detection to customer service. Personalized recommendations and automated support make finance feel more human and accessible.</p><img src={officeImage} loading="lazy" width={1408} height={800} alt="Executive considering the future of financial technology" /><small>Image credit: Squareful research studio</small><h3>Open Banking</h3><p>Open banking enables third-party developers to access financial data with customer consent, helping users connect products and services. This fosters innovation and competition, giving customers more choice and better experiences.</p></section>
                <section id="benefits"><h2>The Benefits of Fintech Innovations</h2><p>Financial innovation has brought significant improvements to personal and business banking. Better access, speed and transparency are helping customers make confident decisions.</p><h3>Enhanced Customer Experience</h3><p>By leveraging data and technology, fintech companies provide intuitive, user-friendly experiences. Personalized services that customers receive precisely when they need them are quickly becoming the standard.</p><img src={conversationImage} loading="lazy" width={1200} height={1008} alt="Founder reflecting in a calm office" /><small>A new generation of financial leaders</small><h3>Increased Cost-Efficiency</h3><p>By minimizing overhead and automating processes, fintech companies provide more affordable services. Personalization empowers customers to manage products that truly fit their needs and preferences.</p></section>
                <section id="future"><h2>Looking Ahead: The Future of Fintech</h2><p>Embedded finance will weave financial services into non-financial platforms, such as ride-hailing apps offering payment options. The trend is expected to grow, making financial services more accessible and convenient.</p><h3>Wrapping up</h3><p>The fintech revolution is transforming financial services by making them more inclusive, accessible, efficient, and customer-centric. As technologies like blockchain, AI, and open banking mature, the possibilities are endless.</p><p>Whether you're a consumer, a business, or an investor, staying informed about these innovations is vital. Fintech is shaping the future of finance—and that future is already here.</p></section>
                <div className="mt-12 flex items-center justify-between border-t border-border pt-5 text-[10px]"><span>Technology · Fintech</span><div className="flex gap-2"><Button variant="ghost" size="icon" onClick={copyLink} aria-label="Copy link"><Copy className="size-3.5" /></Button><Button variant="ghost" size="icon" aria-label="Share on LinkedIn"><Linkedin className="size-3.5" /></Button></div></div>
              </div>
            </div>
          </article>

          <section id="related" className="border-y border-border bg-soft py-14">
            <div className="px-5 sm:px-10 lg:px-14">
              <div className="mb-7 flex items-center justify-between"><h2 className="font-display text-2xl font-semibold">Related Articles</h2><div className="flex gap-2"><Button variant="outline" size="icon" aria-label="Previous articles"><ArrowLeft className="size-4" /></Button><Button variant="outline" size="icon" aria-label="Next articles"><ArrowRight className="size-4" /></Button></div></div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {relatedArticles.map((item) => <article key={item.title} className="overflow-hidden rounded-md border border-border bg-background"><img src={item.image} loading="lazy" width={500} height={320} alt="" className="aspect-[1.55] w-full object-cover" /><div className="p-4"><p className="text-[9px] font-bold uppercase text-primary">{item.category}</p><h3 className="mt-2 font-display text-sm font-semibold leading-5">{item.title}</h3><p className="mt-4 text-[10px] text-muted-foreground">{item.date}</p></div></article>)}
              </div>
            </div>
          </section>

          <section className="px-5 py-14 sm:px-10 lg:px-14 lg:py-20">
            <div className="flex min-h-[250px] flex-col items-center justify-center rounded-lg bg-cta px-6 text-center text-cta-foreground">
              <p className="text-[10px] uppercase tracking-[.18em] text-primary-bright">Get started</p><h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">Ready to level up your business finances?</h2><p className="mt-3 max-w-xl text-xs leading-5 text-cta-muted">Our expert team helps ambitious businesses move with confidence and clarity.</p><div className="mt-6 flex gap-3"><Button>Book a consultation</Button><Button variant="outline" className="border-cta-border bg-transparent text-cta-foreground hover:bg-cta-hover">Learn More</Button></div>
            </div>
          </section>
        </main>

        <footer id="footer" className="border-t border-border px-5 py-10 sm:px-10 lg:px-14">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div><div className="flex items-center gap-2 font-display text-sm font-bold"><span className="grid size-6 place-items-center rounded-full border-2 border-foreground text-[9px]">S</span>Squareful</div><h2 className="mt-8 max-w-sm font-display text-base font-semibold">Stay updated with business insights.</h2><form onSubmit={subscribe} className="mt-4 flex max-w-sm"><input required type="email" aria-label="Footer email address" placeholder="Your email address" className="h-9 min-w-0 flex-1 border border-border px-3 text-xs outline-none" /><Button type="submit" variant="dark" size="sm">Subscribe</Button></form></div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3"><div><p className="text-[10px] font-bold uppercase">Company</p><a href="#article">About us</a><a href="#related">Insights</a></div><div><p className="text-[10px] font-bold uppercase">Office</p><span>22 Anfa Boulevard</span><span>Casablanca, Morocco</span></div><div><p className="text-[10px] font-bold uppercase">Contact</p><span>hello@squareful.co</span><span>+212 522 000 000</span></div></div>
          </div>
          <div className="mt-12 flex flex-wrap justify-between gap-4 border-t border-border pt-5 text-[10px] text-muted-foreground"><span>© 2026 Squareful. All rights reserved.</span><span>Privacy · Terms · Cookies</span></div>
        </footer>
      </div>
    </div>
  );
}
