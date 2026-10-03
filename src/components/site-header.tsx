import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, Search, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { articles } from "@/lib/articles";

const topicGroups = [
  { title: "Explore", links: ["Fintech", "Digital Banking", "Innovation"] },
  { title: "Business", links: ["Technology", "Finance", "Market Trends"] },
];

export function SiteHeader() {
  const [desktopOpen, setDesktopOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileTopicsOpen, setMobileTopicsOpen] = useState(true);
  const headerRef = useRef<HTMLElement>(null);
  const featured = articles[1];

  useEffect(() => {
    function closeMenus(event: KeyboardEvent | MouseEvent) {
      if (event instanceof KeyboardEvent && event.key === "Escape") {
        setDesktopOpen(false);
        setMobileOpen(false);
      }
      if (event instanceof MouseEvent && headerRef.current && !headerRef.current.contains(event.target as Node)) setDesktopOpen(false);
    }
    document.addEventListener("keydown", closeMenus);
    document.addEventListener("mousedown", closeMenus);
    return () => {
      document.removeEventListener("keydown", closeMenus);
      document.removeEventListener("mousedown", closeMenus);
    };
  }, []);

  return (
    <header ref={headerRef} className="relative z-30 border-b border-border/55 bg-background">
      <div className="grid h-[72px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-10 md:flex md:justify-between lg:px-14">
        <Link to="/" className="flex min-w-0 items-center gap-2 font-display text-base font-bold" aria-label="Squareful home">
          <span className="grid size-7 shrink-0 place-items-center rounded-full border-2 border-foreground text-[10px]">S</span>
          <span className="truncate">Squareful</span>
        </Link>
        <nav className="hidden items-center gap-7 text-[12px] font-medium md:flex" aria-label="Main navigation">
          <Link to="/">About</Link>
          <Link to="/">Solutions</Link>
          <Link to="/">Innovation</Link>
          <Button variant="ghost" size="sm" className="h-auto gap-1 p-0 font-medium" aria-expanded={desktopOpen} aria-controls="desktop-mega-menu" onClick={() => setDesktopOpen((value) => !value)}>
            Resources <ChevronDown className={`size-3 transition-transform ${desktopOpen ? "rotate-180" : ""}`} />
          </Button>
          <Link to="/resources">Blog</Link>
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Search"><Search className="size-4" /></Button>
          <Button size="sm" className="hidden sm:inline-flex">Get Started</Button>
          <Button variant="ghost" size="icon" className="md:hidden" aria-label={mobileOpen ? "Close navigation" : "Open navigation"} aria-expanded={mobileOpen} onClick={() => setMobileOpen((value) => !value)}>
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {desktopOpen && (
        <div id="desktop-mega-menu" className="absolute inset-x-0 top-full hidden border-y border-border bg-background shadow-page md:block">
          <div className="mx-auto grid max-w-[1120px] grid-cols-[1fr_1fr_1.35fr] gap-10 px-10 py-9 lg:px-14">
            {topicGroups.map((group) => <div key={group.title}><p className="mb-4 text-[10px] font-bold uppercase text-muted-foreground">{group.title}</p><div className="grid gap-3">{group.links.map((item) => <Link key={item} to="/resources" search={{ category: item }} onClick={() => setDesktopOpen(false)} className="group flex items-center justify-between border-b border-border pb-3 text-sm font-semibold"><span>{item}</span><ArrowUpRight className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>)}</div></div>)}
            <Link to="/resources" onClick={() => setDesktopOpen(false)} className="grid grid-cols-[120px_minmax(0,1fr)] gap-5 bg-soft p-4">
              <img src={featured.image} width={240} height={180} alt="" className="h-full min-h-28 w-full object-cover" />
              <div className="min-w-0 self-center"><p className="text-[9px] font-bold uppercase text-primary">Featured insight</p><p className="mt-2 font-display text-sm font-semibold leading-5">{featured.title}</p><span className="mt-3 text-[10px] font-semibold text-muted-foreground">Read article →</span></div>
            </Link>
          </div>
          <div className="border-t border-border bg-soft px-10 py-3 text-center"><Link to="/resources" onClick={() => setDesktopOpen(false)} className="text-xs font-semibold">View all resources <span aria-hidden>→</span></Link></div>
        </div>
      )}

      {mobileOpen && (
        <nav className="absolute inset-x-0 top-full max-h-[calc(100vh-72px)] overflow-y-auto border-y border-border bg-background shadow-page md:hidden" aria-label="Mobile navigation">
          <div className="px-5 py-5">
            <Link to="/" onClick={() => setMobileOpen(false)} className="block border-b border-border py-4 text-base font-semibold">About</Link>
            <Link to="/" onClick={() => setMobileOpen(false)} className="block border-b border-border py-4 text-base font-semibold">Solutions</Link>
            <Link to="/" onClick={() => setMobileOpen(false)} className="block border-b border-border py-4 text-base font-semibold">Innovation</Link>
            <Button variant="ghost" className="h-auto w-full justify-between rounded-none border-b border-border px-0 py-4 text-base" aria-expanded={mobileTopicsOpen} onClick={() => setMobileTopicsOpen((value) => !value)}>
              Resources <ChevronDown className={`size-4 transition-transform ${mobileTopicsOpen ? "rotate-180" : ""}`} />
            </Button>
            {mobileTopicsOpen && <div className="grid grid-cols-2 gap-x-4 gap-y-1 border-b border-border bg-soft px-4 py-3">{topicGroups.flatMap((group) => group.links).map((item) => <Link key={item} to="/resources" search={{ category: item }} onClick={() => setMobileOpen(false)} className="py-2 text-xs font-semibold">{item}</Link>)}</div>}
            <Link to="/resources" onClick={() => setMobileOpen(false)} className="block border-b border-border py-4 text-base font-semibold">All articles</Link>
            <Link to="/resources" onClick={() => setMobileOpen(false)} className="mt-5 grid grid-cols-[88px_minmax(0,1fr)] gap-4 bg-soft p-3"><img src={featured.image} width={176} height={132} alt="" className="aspect-square w-full object-cover" /><span className="min-w-0 self-center"><span className="text-[9px] font-bold uppercase text-primary">Featured</span><span className="mt-1 block text-xs font-semibold leading-4">{featured.title}</span></span></Link>
            <Button className="mt-5 w-full">Get Started</Button>
          </div>
        </nav>
      )}
    </header>
  );
}
