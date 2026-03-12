import type { Metadata } from "next";
import BackgroundShell from "@/components/ui/BackgroundShell";
import Footer from "@/components/ui/Footer";
import QuickContactPanel from "@/components/ui/QuickContactPanel";
import SectionHeader from "@/components/ui/SectionHeader";
import StickyDealBar from "@/components/ui/StickyDealBar";
import TopNav from "@/components/navigation/TopNav";
import { socialLinks } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Direct contact routes for VlaDDoS Private Affiliate Network, including Telegram, email, and community channels.",
  alternates: {
    canonical: "https://vladdos.com/contact",
  },
  openGraph: {
    title: "Contact | VlaDDoS PAN",
    description:
      "Direct contact routes for Telegram, email, and community channels.",
    url: "https://vladdos.com/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <BackgroundShell>
      <TopNav />

      <main className="mx-auto max-w-7xl space-y-16 px-4 pb-24 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        <SectionHeader
          eyebrow="contact"
          title="Direct access points for partnership, qualification, and community routing."
          text="Use the primary Telegram account for deal flow, owner contact for strategic fit, and community channels for public signal and discussion."
        />

        <QuickContactPanel />

        <section className="panel p-5 sm:p-7">
          <div className="eyebrow">social / community</div>

          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.2rem] border border-white/8 bg-white/[0.035] p-4 transition hover:border-white/14 hover:bg-white/[0.05]"
              >
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/42">
                  {item.label}
                </div>
                <div className="mt-2 text-sm font-medium text-white/84">
                  {item.value}
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <StickyDealBar />
    </BackgroundShell>
  );
}
