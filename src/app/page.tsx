import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import BackgroundShell from "@/components/ui/BackgroundShell";
import SectionHeader from "@/components/ui/SectionHeader";
import TopNav from "@/components/navigation/TopNav";
import QuickContactPanel from "@/components/ui/QuickContactPanel";
import HeroScene from "@/components/sections/HeroScene";
import {
  briefChecklist,
  conversionCards,
  networkStats,
  operatingModels,
  outboundProof,
  pillars,
  reasonsToPartner,
  seoMoneyPages,
  siteConfig,
  trustPages,
} from "@/data/site";
import { insightArticles } from "@/data/seoContent";

export const metadata: Metadata = {
  title: "Private Affiliate Network for iGaming and Crypto Traffic",
  description:
    "Invite-only affiliate network connecting qualified affiliates, advertisers, and operators across iGaming, crypto, CPA, and revenue share deal flow.",
  alternates: {
    canonical: "https://vladdos.com",
  },
  openGraph: {
    title: "VlaDDoS — Private Affiliate Network for iGaming and Crypto Traffic",
    description:
      "Selective affiliate network for iGaming, crypto, CPA, and revenue share partnerships with direct Telegram routing.",
    url: "https://vladdos.com",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <BackgroundShell>
      <TopNav />

      <main className="mx-auto max-w-7xl space-y-16 px-4 pb-24 pt-24 sm:space-y-20 sm:px-6 sm:pt-28 lg:px-8">
        <HeroScene />

        <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {networkStats.map((item) => (
            <div key={item.label} className="panel p-5 sm:p-6">
              <div className="text-[10px] uppercase tracking-[0.16em] text-white/40 sm:text-[11px] sm:tracking-[0.22em]">
                {item.label}
              </div>
              <div className="mt-3 text-lg font-medium text-white sm:text-xl">{item.value}</div>
            </div>
          ))}
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {pillars.map((item) => (
            <div key={item.title} className="panel p-5 sm:p-6">
              <div className="text-base font-medium text-white sm:text-lg">{item.title}</div>
              <p className="mt-3 text-sm leading-7 text-white/64">{item.text}</p>
            </div>
          ))}
        </section>

        <QuickContactPanel />

        <section className="space-y-8">
          <SectionHeader
            eyebrow="why serious counterparties reply"
            title="Built to qualify the conversation before the first Telegram message is sent."
            text="PAN is not a public marketplace page. It is a private-entry surface for cleaner intros, faster fit checks, and better commercial conversations."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {conversionCards.map((item) => (
              <div key={item.title} className="panel p-5 sm:p-6">
                <div className="text-base font-medium text-white sm:text-lg">{item.title}</div>
                <p className="mt-3 text-sm leading-7 text-white/64">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">who this is for</div>

            <div className="mt-5 grid gap-4">
              {operatingModels.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.25rem] border border-white/8 bg-white/[0.035] p-4 sm:p-5"
                >
                  <div className="text-base font-medium text-white sm:text-lg">{item.title}</div>
                  <p className="mt-2 text-sm leading-7 text-white/64">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">best first brief</div>

            <div className="mt-5 grid gap-3">
              {briefChecklist.map((item) => (
                <div
                  key={item}
                  className="rounded-[1rem] border border-white/8 bg-black/15 px-4 py-3 text-sm text-white/64"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[1.3rem] border border-[rgba(222,18,2,0.18)] bg-[rgba(222,18,2,0.08)] p-4 sm:p-5">
              <div className="text-[10px] uppercase tracking-[0.16em] text-white/42 sm:text-[11px] sm:tracking-[0.24em]">
                Best route
              </div>
              <p className="mt-2 text-sm leading-6 text-white/66">
                Send the brief directly to <span className="text-white/88">{siteConfig.telegramAccount}</span> or use the full <Link href="/join" className="text-white underline underline-offset-4">join page</Link> for lead capture and routing.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">why partners move forward</div>

            <div className="mt-5 grid gap-4">
              {reasonsToPartner.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.25rem] border border-white/8 bg-white/[0.035] p-4 sm:p-5"
                >
                  <div className="text-base font-medium text-white sm:text-lg">{item.title}</div>
                  <p className="mt-2 text-sm leading-7 text-white/64">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">outbound and SEO routing</div>

            <div className="mt-5 space-y-3">
              {outboundProof.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.15rem] border border-white/8 bg-white/[0.035] px-4 py-4 text-sm leading-7 text-white/64"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/join" className="button-primary w-full sm:w-auto">
                Apply for Access
              </Link>

              <Link href="/capabilities" className="button-secondary w-full sm:w-auto">
                View Capabilities
              </Link>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">commercial seo pages</div>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Money pages are now part of the site architecture so search traffic can convert into qualified inbound.
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/66 sm:text-base">
              These pages target commercial search intent around private affiliate networks, iGaming partnerships, crypto casino traffic, and CPA deal structures. They also route visitors into the join funnel instead of leaving the visit as passive content consumption.
            </p>
          </div>

          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">seo routes</div>
            <div className="mt-5 grid gap-3">
              {seoMoneyPages.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-[1rem] border border-white/8 bg-white/[0.035] px-4 py-3 text-sm text-white/72 transition hover:border-white/16 hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">seo growth x10</div>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl">Growth, resources, and geo clusters now expand the site far beyond basic money pages.</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/66 sm:text-base">The next stage of the PAN build adds resource hubs, growth-system playbooks, and geo-targeted pages so the domain can rank for wider search intent while still feeding qualified demand into join and Telegram.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Link href="/resources" className="button-primary w-full justify-center">Open Resource Hub</Link>
              <Link href="/growth" className="button-secondary w-full justify-center">View Growth System</Link>
              <Link href="/geo" className="button-secondary w-full justify-center">Browse Geo Pages</Link>
              <Link href="/affiliate-network-directory" className="button-secondary w-full justify-center">View Network Directory</Link>
            </div>
          </div>

          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">resource clusters</div>
            <div className="mt-5 grid gap-3">
              <Link href="/resources/affiliate-manager-playbook" className="rounded-[1rem] border border-white/8 bg-white/[0.035] px-4 py-3 text-sm text-white/72 transition hover:border-white/16 hover:text-white">Affiliate Manager Playbook</Link>
              <Link href="/resources/operator-launch-checklist" className="rounded-[1rem] border border-white/8 bg-white/[0.035] px-4 py-3 text-sm text-white/72 transition hover:border-white/16 hover:text-white">Operator Launch Checklist</Link>
              <Link href="/resources/telegram-deal-brief-template" className="rounded-[1rem] border border-white/8 bg-white/[0.035] px-4 py-3 text-sm text-white/72 transition hover:border-white/16 hover:text-white">Telegram Deal Brief Template</Link>
              <Link href="/growth/pan-growth-system" className="rounded-[1rem] border border-white/8 bg-white/[0.035] px-4 py-3 text-sm text-white/72 transition hover:border-white/16 hover:text-white">PAN Growth System</Link>
              <Link href="/growth/community-growth" className="rounded-[1rem] border border-white/8 bg-white/[0.035] px-4 py-3 text-sm text-white/72 transition hover:border-white/16 hover:text-white">Community Growth</Link>
              <Link href="/geo/igaming-affiliate-usa" className="rounded-[1rem] border border-white/8 bg-white/[0.035] px-4 py-3 text-sm text-white/72 transition hover:border-white/16 hover:text-white">USA Geo Page</Link>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">insights engine</div>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Knowledge content now supports rankings, authority, and a cleaner organic lead funnel.
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/66 sm:text-base">
              The insights hub gives VlaDDoS PAN long-form pages for private affiliate network education, CPA scale topics, crypto affiliate research, and iGaming traffic strategy. Each article routes readers deeper into the commercial pages and join flow.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/insights" className="button-primary w-full sm:w-auto">
                Open Insights Hub
              </Link>
              <Link href="/affiliate-network-directory" className="button-secondary w-full sm:w-auto">
                View Network Directory
              </Link>
            </div>
          </div>

          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">featured articles</div>
            <div className="mt-5 grid gap-3">
              {insightArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/insights/${article.slug}`}
                  className="rounded-[1rem] border border-white/8 bg-white/[0.035] px-4 py-3 text-sm text-white/72 transition hover:border-white/16 hover:text-white"
                >
                  {article.title}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">trust and indexing foundation</div>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
              The site now includes the trust pages and lead funnel that search engines and serious partners expect.
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/66 sm:text-base">
              Strong SEO does not come only from copy. It also comes from legal trust pages, internal linking, structured conversion routes, and clean metadata architecture that supports crawling and credibility.
            </p>
          </div>

          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">core pages</div>
            <div className="mt-5 grid gap-3">
              {trustPages.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-[1rem] border border-white/8 bg-white/[0.035] px-4 py-3 text-sm text-white/72 transition hover:border-white/16 hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </BackgroundShell>
  );
}
