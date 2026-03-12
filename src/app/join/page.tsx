import type { Metadata } from "next";
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
    q: "Who should request access?",
    a: "Affiliates, advertisers, operators, and managers with a real traffic or partnership need.",
  },
  {
    q: "What should the brief include?",
    a: "Role, traffic type, main GEOs, current volume or budget, and the kind of deal or partner needed now.",
  },
  {
    q: "What happens after review?",
    a: "Qualified applications move into Telegram for direct follow-up and live deal discussion.",
  },
];

export const metadata: Metadata = {
  title: "Request Network Access",
  description: "Request access to VlaDDoS PAN and move qualified partnership discussions into Telegram.",
};

const applicationFields = ["Name or company", "Telegram", "Traffic type", "Monthly volume or budget", "Primary GEO"];

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
            <SectionHeader
              eyebrow="request access"
              title="Selective network access for affiliates, advertisers, and operators."
              text="VlaDDoS operates as a private affiliate network. Send a short brief and qualified conversations move into Telegram quickly."
            />
            <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
              {applicationFields.map((item) => (
                <div key={item} className="rounded-[1rem] border border-white/8 bg-black/15 px-4 py-3 text-sm text-white/66">{item}</div>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={telegramHref} target="_blank" rel="noreferrer" className="button-primary w-full sm:w-auto">Send Telegram Brief</a>
              <a href={emailHref} className="button-secondary w-full sm:w-auto">Send by Email</a>
            </div>
          </div>
          <div className="panel p-5 sm:p-7 lg:p-8">
            <div className="eyebrow">how review works</div>
            <div className="mt-5 grid gap-4">
              {[
                ["01", "Initial review", "We check role, traffic model, GEO fit, and commercial relevance."],
                ["02", "Qualification", "Strong briefs are routed to the right conversation path quickly."],
                ["03", "Direct discussion", "Telegram is used for live deal flow, next steps, and escalation."],
              ].map(([step, title, text]) => (
                <div key={step} className="rounded-[1.2rem] border border-white/8 bg-white/[0.035] p-4 sm:p-5">
                  <div className="text-[10px] uppercase tracking-[0.16em] text-white/38">Step {step}</div>
                  <div className="mt-2 text-base font-medium text-white">{title}</div>
                  <p className="mt-2 text-sm leading-7 text-white/64">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <QuickContactPanel compact />
      </main>
      <Footer />
      <StickyDealBar />
    </BackgroundShell>
  );
}
