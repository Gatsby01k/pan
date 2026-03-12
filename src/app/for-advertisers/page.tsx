import type { Metadata } from "next";
import Link from "next/link";
import BackgroundShell from "@/components/ui/BackgroundShell";
import Footer from "@/components/ui/Footer";
import SectionHeader from "@/components/ui/SectionHeader";
import StickyDealBar from "@/components/ui/StickyDealBar";
import TopNav from "@/components/navigation/TopNav";
import QuickContactPanel from "@/components/ui/QuickContactPanel";
import { monetizationBlocks, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "For Advertisers",
  description:
    "Private advertiser-side access for direct partnerships, selective acquisition channels, and cleaner commercial alignment.",
  alternates: {
    canonical: "https://vladdos.com/for-advertisers",
  },
  openGraph: {
    title: "For Advertisers | VlaDDoS PAN",
    description:
      "Private advertiser-side access for direct partnerships and selective acquisition channels.",
    url: "https://vladdos.com/for-advertisers",
    type: "website",
  },
};

export default function ForAdvertisersPage() {
  return (
    <BackgroundShell>
      <TopNav />

      <main className="mx-auto max-w-7xl space-y-16 px-4 pb-24 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        <SectionHeader
          eyebrow="for advertisers"
          title="Direct advertiser-side conversations with stronger counterparties and clearer commercial framing."
          text="PAN is built for private deal flow, selective partner sourcing, and cleaner routing between advertisers, managers, and affiliates who are commercially relevant."
        />

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {monetizationBlocks.map((item) => (
            <div key={item.title} className="panel p-5 sm:p-6">
              <div className="text-base font-medium text-white sm:text-lg">
                {item.title}
              </div>
              <p className="mt-3 text-sm leading-7 text-white/64">{item.text}</p>
            </div>
          ))}
        </section>

        <section className="panel p-5 sm:p-7">
          <div className="eyebrow">what PAN improves</div>

          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            <div className="rounded-[1.25rem] border border-white/8 bg-white/[0.035] p-4 sm:p-5">
              <div className="text-base font-medium text-white">Counterparty quality</div>
              <p className="mt-2 text-sm leading-7 text-white/64">
                Better partner fit and less wasted movement from weak commercial routes.
              </p>
            </div>

            <div className="rounded-[1.25rem] border border-white/8 bg-white/[0.035] p-4 sm:p-5">
              <div className="text-base font-medium text-white">Communication speed</div>
              <p className="mt-2 text-sm leading-7 text-white/64">
                Faster qualification and less friction between intro, fit check, and next step.
              </p>
            </div>

            <div className="rounded-[1.25rem] border border-white/8 bg-white/[0.035] p-4 sm:p-5">
              <div className="text-base font-medium text-white">Commercial clarity</div>
              <p className="mt-2 text-sm leading-7 text-white/64">
                Cleaner expectations around route logic, traffic reality, and what deserves scale.
              </p>
            </div>
          </div>
        </section>

        <section className="panel p-5 sm:p-7">
          <div className="eyebrow">direct route</div>
          <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
            Use the Access Desk to move serious conversations into Telegram.
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/64 sm:text-[15px]">
            For private advertiser-side opportunities, direct deals, or partner qualification,
            send the brief to <span className="text-white/88">{siteConfig.telegramAccount}</span>{" "}
            or escalate strategic fit to <span className="text-white/88">{siteConfig.ownerTelegram}</span>.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/access" className="button-primary w-full sm:w-auto">
              Open Access Desk
            </Link>

            <a
              href={`https://t.me/${siteConfig.telegramAccount.replace("@", "")}`}
              target="_blank"
              rel="noreferrer"
              className="button-secondary w-full sm:w-auto"
            >
              Open {siteConfig.telegramAccount}
            </a>
          </div>
        </section>

        <QuickContactPanel compact />
      </main>

      <Footer />
      <StickyDealBar />
    </BackgroundShell>
  );
}
