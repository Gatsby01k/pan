import Link from "next/link";
import { primaryContactLinks, seoMoneyPages, siteConfig, socialLinks, trustPages } from "@/data/site";

const internalLinks = [
  { href: "/insights", label: "Insights" },
  { href: "/resources", label: "Resources" },
  { href: "/growth", label: "Growth" },
  { href: "/geo", label: "Geo" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/infrastructure", label: "Infrastructure" },
  { href: "/for-affiliates", label: "Affiliates" },
  { href: "/for-advertisers", label: "Advertisers" },
  { href: "/join", label: "Join" },
  { href: "/access", label: "Access Desk" },
  { href: "/faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="relative mt-16 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid gap-8 xl:grid-cols-[1.15fr_.85fr_.85fr_.85fr_.85fr_.9fr]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.16em] text-white/88 sm:tracking-[0.18em]">
              VlaDDoS / PAN
            </div>

            <p className="mt-3 max-w-md text-sm leading-6 text-white/58">
              Private affiliate surface for iGaming, crypto, and strategic partnership conversations with direct Telegram routing,
              selective access, trust pages, and operator-grade commercial framing.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] uppercase tracking-[0.14em] text-white/50 sm:text-[11px] sm:tracking-[0.2em]">
                Telegram-first
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] uppercase tracking-[0.14em] text-white/50 sm:text-[11px] sm:tracking-[0.2em]">
                Private entry
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] uppercase tracking-[0.14em] text-white/50 sm:text-[11px] sm:tracking-[0.2em]">
                Direct counterparties
              </span>
            </div>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.16em] text-white/42 sm:text-[11px] sm:tracking-[0.24em]">
              Direct
            </div>

            <div className="mt-4 space-y-3">
              {primaryContactLinks.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className={[
                    "block rounded-[1rem] border p-3 text-sm transition",
                    index === 0
                      ? "border-[rgba(222,18,2,0.22)] bg-[rgba(222,18,2,0.08)] text-white/84 hover:border-[rgba(222,18,2,0.38)] hover:text-white"
                      : "border-white/8 bg-white/[0.03] text-white/70 hover:border-white/14 hover:text-white",
                  ].join(" ")}
                >
                  <div className="text-[10px] uppercase tracking-[0.14em] text-white/42 sm:text-[11px] sm:tracking-[0.2em]">
                    {item.label}
                  </div>
                  <div className="mt-2">{item.value}</div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.16em] text-white/42 sm:text-[11px] sm:tracking-[0.24em]">
              Social / Community
            </div>

            <div className="mt-4 space-y-3 text-sm text-white/72">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-[1rem] border border-white/8 bg-white/[0.03] px-3 py-3 transition hover:border-white/14 hover:text-white"
                >
                  <div className="text-[10px] uppercase tracking-[0.14em] text-white/42 sm:text-[11px] sm:tracking-[0.2em]">
                    {item.label}
                  </div>
                  <div className="mt-2 text-white/72">{item.value}</div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.16em] text-white/42 sm:text-[11px] sm:tracking-[0.24em]">
              Site map
            </div>

            <div className="mt-4 space-y-3 text-sm text-white/72">
              {internalLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-[1rem] border border-white/8 bg-white/[0.03] px-3 py-3 transition hover:border-white/14 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/"
                className="block rounded-[1rem] border border-white/8 bg-white/[0.03] px-3 py-3 transition hover:border-white/14 hover:text-white"
              >
                Overview
              </Link>
            </div>
          </div>


          <div>
            <div className="text-[10px] uppercase tracking-[0.16em] text-white/42 sm:text-[11px] sm:tracking-[0.24em]">
              SEO pages
            </div>

            <div className="mt-4 space-y-3 text-sm text-white/72">
              {seoMoneyPages.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-[1rem] border border-white/8 bg-white/[0.03] px-3 py-3 transition hover:border-white/14 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.16em] text-white/42 sm:text-[11px] sm:tracking-[0.24em]">
              Trust / Legal
            </div>

            <div className="mt-4 space-y-3 text-sm text-white/72">
              {trustPages.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-[1rem] border border-white/8 bg-white/[0.03] px-3 py-3 transition hover:border-white/14 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-5 rounded-[1rem] border border-white/8 bg-black/20 p-4">
              <div className="text-[10px] uppercase tracking-[0.14em] text-white/42 sm:text-[11px] sm:tracking-[0.2em]">
                Best first route
              </div>
              <p className="mt-2 text-sm leading-6 text-white/60">
                For fastest qualification, send the brief directly to <span className="text-white/84">{siteConfig.telegramAccount}</span> or use the join page.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <div>© 2026 VlaDDoS / Private Affiliate Network</div>
          <div className="text-white/28">Selective access / direct Telegram routing / operator-grade positioning</div>
        </div>
      </div>
    </footer>
  );
}
