import type { Metadata } from "next";
import BackgroundShell from "@/components/ui/BackgroundShell";
import Footer from "@/components/ui/Footer";
import SectionHeader from "@/components/ui/SectionHeader";
import StickyDealBar from "@/components/ui/StickyDealBar";
import TopNav from "@/components/navigation/TopNav";
import { messageTemplates, siteConfig, telegramRoutes } from "@/data/site";

export const metadata: Metadata = {
  title: "Telegram Deal Flow",
  description:
    "Telegram-first entry flow for VlaDDoS Private Affiliate Network. Use the right route for deal qualification, community, and owner escalation.",
  alternates: {
    canonical: "https://vladdos.com/telegram",
  },
  openGraph: {
    title: "Telegram Deal Flow | VlaDDoS PAN",
    description:
      "Telegram-first entry flow for deal qualification, community routing, and owner escalation.",
    url: "https://vladdos.com/telegram",
    type: "website",
  },
};

export default function TelegramPage() {
  return (
    <BackgroundShell>
      <TopNav />

      <main className="mx-auto max-w-7xl space-y-16 px-4 pb-24 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        <SectionHeader
          eyebrow="telegram flow"
          title="Telegram is the fastest path for qualification, routing, and private deal movement."
          text="PAN is structured around Telegram-first commercial flow. Use the correct route depending on whether you need public signal, standard qualification, or direct owner escalation."
        />

        <section className="grid gap-4 md:grid-cols-3">
          {telegramRoutes.map((item) => (
            <div key={item.title} className="panel p-5 sm:p-6">
              <div className="text-base font-medium text-white sm:text-lg">
                {item.title}
              </div>
              <div className="mt-2 text-sm font-medium text-white/86">{item.handle}</div>
              <p className="mt-3 text-sm leading-7 text-white/64">{item.text}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">best routing</div>

            <div className="mt-5 grid gap-4">
              <a
                href={`https://t.me/${siteConfig.telegramAccount.replace("@", "")}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.25rem] border border-[rgba(222,18,2,0.24)] bg-[rgba(222,18,2,0.08)] p-4 transition hover:border-[rgba(222,18,2,0.38)]"
              >
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/42">
                  Main deal desk
                </div>
                <div className="mt-2 text-base font-medium text-white">
                  {siteConfig.telegramAccount}
                </div>
              </a>

              <a
                href={`https://t.me/${siteConfig.ownerTelegram.replace("@", "")}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.25rem] border border-white/8 bg-white/[0.035] p-4 transition hover:border-white/16"
              >
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/42">
                  Owner escalation
                </div>
                <div className="mt-2 text-base font-medium text-white">
                  {siteConfig.ownerTelegram}
                </div>
              </a>

              <a
                href={`https://t.me/${siteConfig.telegramChat.replace("@", "")}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.25rem] border border-white/8 bg-white/[0.035] p-4 transition hover:border-white/16"
              >
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/42">
                  Community chat
                </div>
                <div className="mt-2 text-base font-medium text-white">
                  {siteConfig.telegramChat}
                </div>
              </a>
            </div>
          </div>

          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">copy-paste opener</div>

            <pre className="mt-5 overflow-x-auto rounded-[1.45rem] border border-white/8 bg-black/20 p-4 text-sm leading-7 text-white/72 sm:p-5">
              {decodeURIComponent(messageTemplates.telegramText)}
            </pre>
          </div>
        </section>
      </main>

      <Footer />
      <StickyDealBar />
    </BackgroundShell>
  );
}
