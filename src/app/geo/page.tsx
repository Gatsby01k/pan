import type { Metadata } from "next";
import Link from "next/link";
import BackgroundShell from "@/components/ui/BackgroundShell";
import Footer from "@/components/ui/Footer";
import SectionHeader from "@/components/ui/SectionHeader";
import StickyDealBar from "@/components/ui/StickyDealBar";
import TopNav from "@/components/navigation/TopNav";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { geoPages } from "@/data/growthContent";

export const metadata: Metadata = {
  title: "Geo Pages for iGaming, Crypto, and Affiliate Traffic",
  description: "Regional pages for USA, Europe, Asia, LATAM, Canada, and geo-specific affiliate network opportunities.",
  alternates: { canonical: "https://vladdos.com/geo" },
  openGraph: {
    title: "Geo Pages | VlaDDoS PAN",
    description: "Regional entry pages for iGaming, crypto, and affiliate network demand.",
    url: "https://vladdos.com/geo",
    type: "website",
  },
};

export default function GeoIndexPage() {
  return (
    <BackgroundShell>
      <TopNav />
      <BreadcrumbSchema items={[{ href: "https://vladdos.com/", label: "Home" }, { href: "https://vladdos.com/geo", label: "Geo" }]} />
      <main className="mx-auto max-w-7xl space-y-16 px-4 pb-24 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        <div className="space-y-5">
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/geo", label: "Geo" }]} />
          <SectionHeader eyebrow="regional seo" title="Geo pages for affiliates, advertisers, and operators who search region-first." text="Regional entry pages help VlaDDoS PAN capture more specific search intent and qualify briefs with better geographic context before the first direct conversation begins." />
        </div>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {geoPages.map((item) => (
            <article key={item.slug} className="panel p-5 sm:p-6">
              <div className="text-[10px] uppercase tracking-[0.16em] text-white/38">{item.eyebrow}</div>
              <h2 className="mt-3 text-xl font-semibold leading-tight text-white">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-white/64">{item.description}</p>
              <Link href={`/geo/${item.slug}`} className="mt-6 inline-flex text-sm text-white underline underline-offset-4">Open geo page</Link>
            </article>
          ))}
        </section>
      </main>
      <Footer />
      <StickyDealBar />
    </BackgroundShell>
  );
}
