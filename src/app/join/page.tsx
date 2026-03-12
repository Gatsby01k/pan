import type { Metadata } from "next";
import Link from "next/link";
import BackgroundShell from "@/components/ui/BackgroundShell";
import Footer from "@/components/ui/Footer";
import QuickContactPanel from "@/components/ui/QuickContactPanel";
import SectionHeader from "@/components/ui/SectionHeader";
import StickyDealBar from "@/components/ui/StickyDealBar";
import TopNav from "@/components/navigation/TopNav";
import FaqSchema from "@/components/seo/FaqSchema";
import { messageTemplates, siteConfig } from "@/data/site";

const joinFaqItems = [
  {
    q: "Who should apply to VlaDDoS PAN?",
    a: "Affiliates, media buyers, advertisers, operators, and managers with clear traffic, budget, geo, or deal requirements should apply. The network is designed for commercially serious counterparties rather than casual outreach.",
  },
  {
    q: "What information should the application include?",
    a: "The strongest applications include role, traffic source, main geos, current volume, target offers, payout expectations, and the bottleneck that needs solving now.",
  },
  {
    q: "How does the review process work?",
    a: "Applications are screened for fit, clarity, and commercial relevance. Qualified leads are routed into Telegram for direct follow-up and next-step discussion.",
  },
];

export const metadata: Metadata = {
  title: "Join the Private Affiliate Network",
  description:
    "Apply to join VlaDDoS PAN. Submit a qualified affiliate, advertiser, or operator brief and move directly into Telegram for review.",
  alternates: {
    canonical: "https://vladdos.com/join",
  },
  openGraph: {
    title: "Join VlaDDoS Private Affiliate Network",
    description:
      "Apply for access to a private affiliate network for iGaming, crypto, CPA, and revenue share partnerships.",
    url: "https://vladdos.com/join",
    type: "website",
  },
};

const applicationFields = [
  "Name or company",
  "Telegram",
  "Email",
  "Traffic type",
  "Monthly volume or budget",
  "Top GEOs",
  "Primary vertical",
  "What you need right now",
];

const qualificationSignals = [
  {
    title: "Clear commercial intent",
    text: "The best applications explain what kind of offer, operator, traffic route, or partnership is needed now rather than sending a vague introduction.",
  },
  {
    title: "Fast direct routing",
    text: "Qualified applications move into Telegram quickly so the commercial discussion happens in a faster and more private environment.",
  },
  {
    title: "Selective review",
    text: "The goal is not more messages. The goal is better-fit conversations with stronger upside, cleaner communication, and real execution potential.",
  },
];

export default function JoinPage() {
  const telegramHref = `https://t.me/${siteConfig.telegramAccount.replace("@", "")}?text=${messageTemplates.telegramText}`;
  const emailHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(messageTemplates.emailSubject)}&body=${messageTemplates.emailBody}`;

  return (
    <BackgroundShell>
      <TopNav />
      <FaqSchema items={joinFaqItems} id="join-faq-schema" />

      <main className="mx-auto max-w-7xl space-y-16 px-4 pb-24 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        <section className="grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
          <div className="panel p-5 sm:p-7 lg:p-8">
            <div className="eyebrow">join the network</div>
            <h1 className="mt-4 max-w-4xl text-[1.9rem] font-semibold leading-[1.02] text-white sm:text-5xl lg:text-[3.5rem]">
              Apply for access to a private affiliate network built for iGaming, crypto, CPA, and revenue share deal flow.
            </h1>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/66 sm:text-[15px]">
              This page works as the lead capture layer for VlaDDoS PAN. Share a compact commercial brief, route it into Telegram,
              and move directly into qualification with the right context already in place.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={telegramHref} target="_blank" rel="noreferrer" className="button-primary w-full sm:w-auto">
                Apply via Telegram
              </a>
              <a href={emailHref} className="button-secondary w-full sm:w-auto">
                Send by email
              </a>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.035] p-4">
                <div className="text-[10px] uppercase tracking-[0.16em] text-white/42">Main desk</div>
                <div className="mt-2 text-sm font-medium text-white/86">{siteConfig.telegramAccount}</div>
                <p className="mt-2 text-xs leading-5 text-white/52">Fastest route for qualified applications.</p>
              </div>
              <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.035] p-4">
                <div className="text-[10px] uppercase tracking-[0.16em] text-white/42">Owner escalation</div>
                <div className="mt-2 text-sm font-medium text-white/86">{siteConfig.ownerTelegram}</div>
                <p className="mt-2 text-xs leading-5 text-white/52">For strategic or high-value direct opportunities.</p>
              </div>
              <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.035] p-4">
                <div className="text-[10px] uppercase tracking-[0.16em] text-white/42">Email backup</div>
                <div className="mt-2 text-sm font-medium text-white/86">{siteConfig.email}</div>
                <p className="mt-2 text-xs leading-5 text-white/52">Useful for structured written briefs and long context.</p>
              </div>
            </div>
          </div>

          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">recommended application format</div>
            <div className="mt-5 grid gap-3">
              {applicationFields.map((item) => (
                <div key={item} className="rounded-[1rem] border border-white/8 bg-black/15 px-4 py-3 text-sm text-white/66">
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[1.3rem] border border-[rgba(222,18,2,0.18)] bg-[rgba(222,18,2,0.08)] p-4 sm:p-5">
              <div className="text-[10px] uppercase tracking-[0.16em] text-white/42 sm:text-[11px] sm:tracking-[0.24em]">
                What happens next
              </div>
              <p className="mt-2 text-sm leading-6 text-white/66">
                We review the application, assess fit, and contact qualified leads via Telegram with a clear yes, no, or next-step request.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeader
            eyebrow="why this converts"
            title="Built to turn organic and outbound traffic into structured, high-intent applications."
            text="The join page gives search visitors, social traffic, and direct referrals a clear application path. That improves lead quality, reduces vague outreach, and makes Telegram follow-up faster."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {qualificationSignals.map((item) => (
              <div key={item.title} className="panel p-5 sm:p-6">
                <div className="text-base font-medium text-white sm:text-lg">{item.title}</div>
                <p className="mt-3 text-sm leading-7 text-white/64">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="panel p-5 sm:p-7">
          <div className="eyebrow">faq</div>
          <div className="mt-5 space-y-4">
            {joinFaqItems.map((item) => (
              <div key={item.q} className="rounded-[1.2rem] border border-white/8 bg-white/[0.035] p-4 sm:p-5">
                <h2 className="text-base font-medium text-white sm:text-lg">{item.q}</h2>
                <p className="mt-2 text-sm leading-7 text-white/64">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/faq" className="button-secondary w-full sm:w-auto">
              View full FAQ
            </Link>
            <Link href="/access" className="button-primary w-full sm:w-auto">
              Open Access Desk
            </Link>
          </div>
        </section>

        <QuickContactPanel />
      </main>

      <Footer />
      <StickyDealBar />
    </BackgroundShell>
  );
}
