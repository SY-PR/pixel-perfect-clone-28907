import { Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  const [subscribed, setSubscribed] = useState(false);
  function subscribe(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSubscribed(true); }

  return (
    <footer className="border-t border-border px-5 py-10 sm:px-10 lg:px-14">
      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <div><Link to="/" className="flex items-center gap-2 font-display text-sm font-bold"><span className="grid size-6 place-items-center rounded-full border-2 border-foreground text-[9px]">S</span>Squareful</Link><h2 className="mt-8 max-w-sm font-display text-base font-semibold">Stay updated with business insights.</h2>{subscribed ? <p className="mt-4 flex items-center gap-2 text-xs font-semibold text-success"><Check className="size-4" /> You're subscribed.</p> : <form onSubmit={subscribe} className="mt-4 flex max-w-sm"><input required type="email" aria-label="Footer email address" placeholder="Your email address" className="h-9 min-w-0 flex-1 border border-border px-3 text-xs outline-none" /><Button type="submit" variant="dark" size="sm">Subscribe</Button></form>}</div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3"><div><p className="text-[10px] font-bold uppercase">Company</p><Link to="/">About us</Link><Link to="/resources">Insights</Link></div><div><p className="text-[10px] font-bold uppercase">Office</p><span>22 Anfa Boulevard</span><span>Casablanca, Morocco</span></div><div><p className="text-[10px] font-bold uppercase">Contact</p><span>hello@squareful.co</span><span>+212 522 000 000</span></div></div>
      </div>
      <div className="mt-12 flex flex-wrap justify-between gap-4 border-t border-border pt-5 text-[10px] text-muted-foreground"><span>© 2026 Squareful. All rights reserved.</span><span>Privacy · Terms · Cookies</span></div>
    </footer>
  );
}
