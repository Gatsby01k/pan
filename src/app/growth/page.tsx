import type { Metadata } from "next";
import Link from "next/link";
import BackgroundShell from "@/components/ui/BackgroundShell";
import Footer from "@/components/ui/Footer";
import SectionHeader from "@/components/ui/SectionHeader";
import StickyDealBar from "@/components/ui/StickyDealBar";
import TopNav from "@/components/navigation/TopNav";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { growthPages } from "@/data/growthContent";

export const metadata: Metadata = {
  title: "PAN Growth System and Network Operating Playbooks",
  description: "Explore PAN growth systems, onboarding frameworks, outreach scripts, and community growth playbooks for affiliate network expansion.",
  alternates: { canonical: "https://vladdos.com/growth" },
  openGraph: {
    title: "PAN Growth System | VlaDDoS PAN",
    description: "Growth playbooks for partner acquisition, onboarding, outreach, community, and content systems.",
    url: "https://vladdos.com/growth",
    type: "website",
  },
};

export default function GrowthIndexPage() {
  return (
    <BackgroundShell>
      <TopNav />
      <BreadcrumbSchema items={[{ href: "https://vladdos.com/", label: "Home" }, { href: "https://vladdos.com/growth", label: "Growth" }]} />
      <main className="mx-auto max-w-7xl space-y-16 px-4 pb-24 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        <div className="space-y-5">
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/growth", label: "Growth" }]} />
          <SectionHeader eyebrow="growth system" title="PAN Growth System for compounding SEO, community, outreach, and direct Telegram deal flow." text="This section turns the site into more than a brand surface. It explains the operating system behind partner acquisition, onboarding, offer intake, traffic intelligence, and long-term growth." />
        </div>

        <section className="grid gap-6 lg:grid-cols-[1.06fr_.94fr]">
          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">why this section exists</div>
            <div className="mt-4 space-y-4 text-sm leading-7 text-white/66 sm:text-base">
              <p>High-performing affiliate network sites do not rely only on sales pages. They publish process knowledge that attracts operators, managers, and serious affiliates looking for better systems.</p>
              <p>The PAN growth section expands the domain into onboarding, content operations, offer filtering, community growth, and outreach frameworks so the site compounds authority while still routing readers into join and Telegram.</p>
            </div>
          </div>

          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">fastest route</div>
            <h2 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-3xl">Read the playbook, then send a structured brief.</h2>
            <p className="mt-4 text-sm leading-7 text-white/64">The goal is not passive reading. It is to move the right partners into a clearer next step with stronger context and faster review.</p>
            <div className="mt-6 flex flex-col gap-3">
              <Link href="/join" className="button-primary">Apply for Access</Link>
              <Link href="/telegram" className="button-secondary">Open Telegram Routes</Link>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {growthPages.map((item) => (
            <article key={item.slug} className="panel p-5 sm:p-6">
              <div className="text-[10px] uppercase tracking-[0.16em] text-white/38">{item.eyebrow}</div>
              <h2 className="mt-3 text-xl font-semibold leading-tight text-white">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-white/64">{item.description}</p>
              <Link href={`/growth/${item.slug}`} className="mt-6 inline-flex text-sm text-white underline underline-offset-4">Read playbook</Link>
            </article>
          ))}
        </section>
      </main>
      <Footer />
      <StickyDealBar />
    </BackgroundShell>
  );
}
