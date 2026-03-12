import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import BackgroundShell from "@/components/ui/BackgroundShell";
import SectionHeader from "@/components/ui/SectionHeader";
import TopNav from "@/components/navigation/TopNav";
import QuickContactPanel from "@/components/ui/QuickContactPanel";
import HeroScene from "@/components/sections/HeroScene";
import { insightArticles } from "@/data/seoContent";

export const metadata: Metadata = {
  title: "Private Affiliate Network for iGaming and Crypto Traffic",
  description:
    "Selective affiliate network connecting experienced affiliates, advertisers, and operators across iGaming, crypto, and performance traffic.",
};

const trustSignals = [
  { label: "Core verticals", value: "iGaming / Crypto / Performance" },
  { label: "Deal models", value: "CPA / Hybrid / Direct" },
  { label: "Communication", value: "Telegram-first" },
  { label: "Access", value: "Selective qualification" },
];

const valuePoints = [
  { title: "Direct operator access", text: "Move faster into live deal discussions without relying on public marketplace listings." },
  { title: "Qualified partner intake", text: "Applications are filtered by traffic model, GEO fit, and commercial intent." },
  { title: "Clear next step", text: "Every page points toward Request Access and direct Telegram communication." },
];

const partnerCards = [
  { title: "For affiliates", text: "Built for paid traffic, SEO, media buying, and community-led distribution teams." },
  { title: "For advertisers", text: "Built for operators and brands that need performance partners and direct acquisition routes." },
];

const process = [
  "Request access with a short brief.",
  "We review your role, traffic type, GEO focus, and commercial need.",
  "Qualified partners move into Telegram for direct deal flow.",
];

export default function HomePage() {
  return (
    <BackgroundShell>
      <TopNav />
      <main className="mx-auto max-w-7xl space-y-16 px-4 pb-24 pt-24 sm:space-y-20 sm:px-6 sm:pt-28 lg:px-8">
        <HeroScene />

        <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {trustSignals.map((item) => (
            <div key={item.label} className="panel p-5 sm:p-6">
              <div className="text-[10px] uppercase tracking-[0.16em] text-white/40">{item.label}</div>
              <div className="mt-3 text-lg font-medium text-white sm:text-xl">{item.value}</div>
            </div>
          ))}
        </section>

        <section className="space-y-8">
          <SectionHeader
            eyebrow="what we do"
            title="A private partnership desk for serious traffic operators."
            text="VlaDDoS is positioned as a private affiliate network, not a public directory. The goal is better-fit conversations, faster qualification, and cleaner deal flow."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {valuePoints.map((item) => (
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
              {partnerCards.map((item) => (
                <div key={item.title} className="rounded-[1.25rem] border border-white/8 bg-white/[0.035] p-4 sm:p-5">
                  <div className="text-base font-medium text-white sm:text-lg">{item.title}</div>
                  <p className="mt-2 text-sm leading-7 text-white/64">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">how access works</div>
            <div className="mt-5 grid gap-3">
              {process.map((item, index) => (
                <div key={item} className="rounded-[1rem] border border-white/8 bg-black/15 px-4 py-3 text-sm text-white/64">
                  <span className="mr-2 text-white/88">0{index + 1}</span>
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/join" className="button-primary w-full sm:w-auto">Request Access</Link>
              <Link href="/for-affiliates" className="button-secondary w-full sm:w-auto">For Affiliates</Link>
            </div>
          </div>
        </section>

        <QuickContactPanel />

        <section className="grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">authority layer</div>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Insights support organic discovery and route search traffic into qualified applications.
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/66 sm:text-base">
              The insights hub explains affiliate traffic, operator partnerships, and private network positioning. Every article points back to Request Access.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/insights" className="button-primary w-full sm:w-auto">Open Insights</Link>
              <Link href="/private-affiliate-network" className="button-secondary w-full sm:w-auto">Private Network Page</Link>
            </div>
          </div>

          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">featured articles</div>
            <div className="mt-5 grid gap-3">
              {insightArticles.slice(0, 6).map((article) => (
                <Link key={article.slug} href={`/insights/${article.slug}`} className="rounded-[1rem] border border-white/8 bg-white/[0.035] px-4 py-3 text-sm text-white/72 transition hover:border-white/16 hover:text-white">
                  {article.title}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="panel p-6 sm:p-8">
          <div className="eyebrow">final CTA</div>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Looking for private affiliate deals or performance partners?
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/64 sm:text-base">
            Use the join page to send a short brief. Qualified conversations move into Telegram quickly.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/join" className="button-primary w-full sm:w-auto">Request Access</Link>
            <Link href="/contact" className="button-secondary w-full sm:w-auto">Contact</Link>
          </div>
        </section>
      </main>
      <Footer />
    </BackgroundShell>
  );
}
