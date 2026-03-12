import type { Metadata } from "next";
import Footer from "@/components/ui/Footer";
import BackgroundShell from "@/components/ui/BackgroundShell";
import QuickContactPanel from "@/components/ui/QuickContactPanel";
import SectionHeader from "@/components/ui/SectionHeader";
import TopNav from "@/components/navigation/TopNav";
import StickyDealBar from "@/components/ui/StickyDealBar";
import {
  accessChecks,
  accessSteps,
  closeSignals,
  contactCards,
  faqItems,
  responsePromises,
  siteConfig,
} from "@/data/site";

export const metadata: Metadata = {
  title: "Access Desk",
  description:
    "Direct access desk for VlaDDoS Private Affiliate Network. Submit a qualified affiliate, advertiser, or operator brief and move the conversation into Telegram.",
  alternates: {
    canonical: "https://vladdos.com/access",
  },
  openGraph: {
    title: "Access Desk | VlaDDoS PAN",
    description:
      "Direct access desk for qualified affiliates, advertisers, managers, and private operators.",
    url: "https://vladdos.com/access",
    type: "website",
  },
};

export default function AccessPage() {
  return (
    <BackgroundShell>
      <TopNav />

      <main className="mx-auto max-w-7xl space-y-14 px-4 pb-24 pt-24 sm:space-y-16 sm:px-6 sm:pt-28 lg:px-8">
        <section className="grid gap-6 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
          <div className="panel p-5 sm:p-7 lg:p-8">
            <div className="text-[10px] uppercase tracking-[0.18em] text-white/42 sm:text-[11px] sm:tracking-[0.3em]">
              Access desk
            </div>

            <h1 className="mt-4 max-w-4xl text-[1.9rem] font-semibold leading-[1.02] text-white sm:text-5xl lg:text-[3.6rem]">
              Selective entry for affiliates, advertisers, managers, and serious
              private operators.
            </h1>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/66 sm:text-[15px]">
              PAN is structured as a private-entry commercial surface. The goal
              is not more messages. The goal is cleaner counterparties, faster
              qualification, and a direct path into Telegram for deals that
              deserve real attention.
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

              <a
                href={`https://t.me/${siteConfig.ownerTelegram.replace("@", "")}`}
                target="_blank"
                rel="noreferrer"
                className="button-secondary w-full sm:w-auto"
              >
                Owner {siteConfig.ownerTelegram}
              </a>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.035] p-4">
                <div className="text-[10px] uppercase tracking-[0.16em] text-white/42">
                  Main route
                </div>
                <div className="mt-2 text-sm font-medium text-white/86">
                  {siteConfig.telegramAccount}
                </div>
                <p className="mt-2 text-xs leading-5 text-white/52">
                  Standard affiliate and partnership deal flow.
                </p>
              </div>

              <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.035] p-4">
                <div className="text-[10px] uppercase tracking-[0.16em] text-white/42">
                  Escalation
                </div>
                <div className="mt-2 text-sm font-medium text-white/86">
                  {siteConfig.ownerTelegram}
                </div>
                <p className="mt-2 text-xs leading-5 text-white/52">
                  Strategic direct opportunities and serious fit.
                </p>
              </div>

              <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.035] p-4">
                <div className="text-[10px] uppercase tracking-[0.16em] text-white/42">
                  Written briefs
                </div>
                <div className="mt-2 text-sm font-medium text-white/86">
                  {siteConfig.email}
                </div>
                <p className="mt-2 text-xs leading-5 text-white/52">
                  Structured intros and commercial context by email.
                </p>
              </div>
            </div>
          </div>

          <div className="panel p-5 sm:p-7 lg:p-8">
            <div className="text-[10px] uppercase tracking-[0.18em] text-white/42 sm:text-[11px] sm:tracking-[0.28em]">
              Contact channels
            </div>

            <div className="mt-5 grid gap-3">
              <a
                href={`https://t.me/${siteConfig.telegramAccount.replace("@", "")}`}
                target="_blank"
                rel="noreferrer"
                className="group rounded-[1.25rem] border border-[rgba(222,18,2,0.26)] bg-[linear-gradient(135deg,rgba(222,18,2,0.16),rgba(255,255,255,0.03))] p-4 transition hover:border-[rgba(222,18,2,0.42)] hover:bg-[linear-gradient(135deg,rgba(222,18,2,0.22),rgba(255,255,255,0.05))]"
              >
                <div className="text-[10px] uppercase tracking-[0.16em] text-white/44">
                  Deal desk
                </div>
                <div className="mt-2 text-sm font-medium text-white/88 group-hover:text-white">
                  {siteConfig.telegramAccount}
                </div>
              </a>

              <a
                href={`https://t.me/${siteConfig.ownerTelegram.replace("@", "")}`}
                target="_blank"
                rel="noreferrer"
                className="group rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-4 transition hover:border-white/20 hover:bg-white/[0.05]"
              >
                <div className="text-[10px] uppercase tracking-[0.16em] text-white/44">
                  Owner
                </div>
                <div className="mt-2 text-sm font-medium text-white/88 group-hover:text-white">
                  {siteConfig.ownerTelegram}
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="group rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-4 transition hover:border-white/20 hover:bg-white/[0.05]"
              >
                <div className="text-[10px] uppercase tracking-[0.16em] text-white/44">
                  Email
                </div>
                <div className="mt-2 text-sm font-medium text-white/88 group-hover:text-white">
                  {siteConfig.email}
                </div>
              </a>

              <a
                href={`https://t.me/${siteConfig.telegramChat.replace("@", "")}`}
                target="_blank"
                rel="noreferrer"
                className="group rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-4 transition hover:border-white/20 hover:bg-white/[0.05]"
              >
                <div className="text-[10px] uppercase tracking-[0.16em] text-white/44">
                  Community chat
                </div>
                <div className="mt-2 text-sm font-medium text-white/88 group-hover:text-white">
                  {siteConfig.telegramChat}
                </div>
              </a>
            </div>

            <div className="mt-6 rounded-[1.4rem] border border-white/8 bg-black/20 p-4 sm:p-5">
              <div className="text-[10px] uppercase tracking-[0.16em] text-white/42 sm:text-[11px] sm:tracking-[0.24em]">
                Best routing logic
              </div>

              <div className="mt-3 space-y-3 text-sm leading-6 text-white/62">
                <p>
                  Use <span className="text-white/84">{siteConfig.telegramAccount}</span> for
                  standard deal flow, partner briefs, and first qualification.
                </p>
                <p>
                  Use <span className="text-white/84">{siteConfig.ownerTelegram}</span> for
                  strategic, high-value, or direct opportunities that justify
                  owner attention.
                </p>
                <p>
                  Use <span className="text-white/84">{siteConfig.email}</span> when the
                  commercial context is easier to send as a written brief.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-4">
          {contactCards.map((item) => (
            <div key={item.title} className="panel p-5 sm:p-6">
              <div className="text-base font-medium text-white sm:text-lg">
                {item.title}
              </div>
              <p className="mt-3 text-sm leading-7 text-white/63">{item.text}</p>
            </div>
          ))}
        </section>

        <QuickContactPanel />

        <section className="grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">Entry flow</div>

            <div className="mt-5 grid gap-4">
              {accessSteps.map((item) => (
                <div
                  key={item.step}
                  className="rounded-[1.35rem] border border-white/8 bg-white/[0.035] p-4 sm:rounded-[1.6rem] sm:p-5"
                >
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/42 sm:text-[11px] sm:tracking-[0.28em]">
                    {item.step}
                  </div>

                  <div className="mt-3 text-base font-medium text-white sm:text-lg">
                    {item.title}
                  </div>

                  <p className="mt-2 text-sm leading-7 text-white/63">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">Fit signals</div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {accessChecks.map((item) => (
                <div
                  key={item}
                  className="rounded-[1rem] border border-white/8 bg-black/15 px-4 py-3 text-sm text-white/62"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[1.45rem] border border-[rgba(222,18,2,0.18)] bg-black/20 p-5">
              <div className="text-[10px] uppercase tracking-[0.16em] text-white/42 sm:text-[11px] sm:tracking-[0.24em]">
                Channel and public signal
              </div>

              <div className="mt-4 grid gap-3">
                <a
                  href={`https://t.me/${siteConfig.telegramChannel.replace("@", "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="button-secondary justify-center sm:justify-start"
                >
                  Channel {siteConfig.telegramChannel}
                </a>

                <a
                  href={`https://t.me/${siteConfig.telegramChat.replace("@", "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="button-secondary justify-center sm:justify-start"
                >
                  Chat {siteConfig.telegramChat}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">Copy-paste operator brief</div>

            <pre className="mt-5 overflow-x-auto rounded-[1.45rem] border border-white/8 bg-black/20 p-4 text-sm leading-7 text-white/72 sm:rounded-[1.8rem] sm:p-5">{`Role:
Vertical:
Primary geos:
Traffic sources:
Current scale:
Budget or payout expectation:
What I need right now:
Current bottleneck:
Preferred contact:`}</pre>
          </div>

          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">What you can expect</div>

            <div className="mt-5 space-y-3">
              {responsePromises.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.2rem] border border-white/8 bg-white/[0.035] px-4 py-4 text-sm leading-7 text-white/66 sm:rounded-[1.45rem]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeader
            eyebrow="fast close signals"
            title="These signals move a prospect toward a real decision faster."
            text="Use this page to train counterparties how to approach PAN. The more signal they bring, the faster Telegram qualification becomes."
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {closeSignals.map((item) => (
              <div key={item} className="panel p-5 sm:p-6 text-sm leading-7 text-white/64">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeader
            eyebrow="FAQ"
            title="What prospective counterparties usually want to know first."
            text="The FAQ helps PAN feel complete at launch: selective, credible, and concise enough to respect serious operators' time."
          />

          <div className="grid gap-4">
            {faqItems.map((item) => (
              <div key={item.q} className="panel p-5 sm:p-6">
                <div className="text-base font-medium text-white sm:text-lg">
                  {item.q}
                </div>
                <p className="mt-3 max-w-4xl text-sm leading-7 text-white/63">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <StickyDealBar />
    </BackgroundShell>
  );
}
