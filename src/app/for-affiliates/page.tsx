import type { Metadata } from "next";
import Link from "next/link";
import BackgroundShell from "@/components/ui/BackgroundShell";
import Footer from "@/components/ui/Footer";
import SectionHeader from "@/components/ui/SectionHeader";
import StickyDealBar from "@/components/ui/StickyDealBar";
import TopNav from "@/components/navigation/TopNav";
import QuickContactPanel from "@/components/ui/QuickContactPanel";
import { partnerFitGroups, reasonsToPartner, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "For Affiliates",
  description:
    "Private affiliate partnerships for media buyers, SEO teams, Telegram traffic operators, and high-value performance partners.",
  alternates: {
    canonical: "https://vladdos.com/for-affiliates",
  },
  openGraph: {
    title: "For Affiliates | VlaDDoS PAN",
    description:
      "Private affiliate partnerships for serious traffic operators and performance teams.",
    url: "https://vladdos.com/for-affiliates",
    type: "website",
  },
};

export default function ForAffiliatesPage() {
  return (
    <BackgroundShell>
      <TopNav />

      <main className="mx-auto max-w-7xl space-y-16 px-4 pb-24 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        <SectionHeader
          eyebrow="for affiliates"
          title="Private affiliate partnerships for operators who want stronger counterparties and cleaner deal flow."
          text="PAN is built for media buyers, SEO operators, Telegram traffic teams, and performance partners who value direct access, commercial clarity, and faster qualification."
        />

        <section className="grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
          {partnerFitGroups.map((group) => (
            <div key={group.title} className="panel p-5 sm:p-7">
              <div className="text-lg font-medium text-white">{group.title}</div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1rem] border border-white/8 bg-white/[0.035] px-4 py-3 text-sm text-white/66"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="space-y-8">
          <SectionHeader
            eyebrow="why affiliates reply"
            title="PAN is positioned to make direct conversations easier to open and faster to qualify."
            text="The objective is not volume for its own sake. The objective is better partner fit, less marketplace noise, and stronger commercial routing into Telegram."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {reasonsToPartner.map((item) => (
              <div key={item.title} className="panel p-5 sm:p-6">
                <div className="text-base font-medium text-white sm:text-lg">
                  {item.title}
                </div>
                <p className="mt-3 text-sm leading-7 text-white/64">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="panel p-5 sm:p-7">
          <div className="eyebrow">best next step</div>
          <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
            Move directly into Telegram qualification.
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/64 sm:text-[15px]">
            If you have clear traffic logic, real market relevance, and a defined
            commercial ask, send the brief directly to{" "}
            <span className="text-white/88">{siteConfig.telegramAccount}</span> or
            use the structured <Link href="/access" className="text-white underline underline-offset-4">Access Desk</Link>.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={`https://t.me/${siteConfig.telegramAccount.replace("@", "")}`}
              target="_blank"
              rel="noreferrer"
              className="button-primary w-full sm:w-auto"
            >
              Open {siteConfig.telegramAccount}
            </a>

            <Link href="/access" className="button-secondary w-full sm:w-auto">
              View Access Desk
            </Link>
          </div>
        </section>

        <QuickContactPanel compact />
      </main>

      <Footer />
      <StickyDealBar />
    </BackgroundShell>
  );
}
