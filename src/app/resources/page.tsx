import type { Metadata } from "next";
import Link from "next/link";
import BackgroundShell from "@/components/ui/BackgroundShell";
import Footer from "@/components/ui/Footer";
import SectionHeader from "@/components/ui/SectionHeader";
import StickyDealBar from "@/components/ui/StickyDealBar";
import TopNav from "@/components/navigation/TopNav";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { resourcePages } from "@/data/growthContent";

export const metadata: Metadata = {
  title: "Affiliate Resources, Templates, and Frameworks",
  description: "Explore templates, checklists, frameworks, and practical resources for affiliates, advertisers, managers, and operators.",
  alternates: { canonical: "https://vladdos.com/resources" },
  openGraph: {
    title: "Affiliate Resources | VlaDDoS PAN",
    description: "Templates, frameworks, and operating resources for private affiliate network growth.",
    url: "https://vladdos.com/resources",
    type: "website",
  },
};

export default function ResourcesIndexPage() {
  return (
    <BackgroundShell>
      <TopNav />
      <BreadcrumbSchema items={[{ href: "https://vladdos.com/", label: "Home" }, { href: "https://vladdos.com/resources", label: "Resources" }]} />
      <main className="mx-auto max-w-7xl space-y-16 px-4 pb-24 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        <div className="space-y-5">
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/resources", label: "Resources" }]} />
          <SectionHeader eyebrow="resource hub" title="Templates, checklists, and frameworks that make partner qualification and growth more efficient." text="The resource hub expands PAN into practical content for affiliate managers, advertisers, operators, and growth teams. It supports search growth while creating stronger proof assets for outbound and community conversations." />
        </div>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {resourcePages.map((item) => (
            <article key={item.slug} className="panel p-5 sm:p-6">
              <div className="text-[10px] uppercase tracking-[0.16em] text-white/38">{item.eyebrow}</div>
              <h2 className="mt-3 text-xl font-semibold leading-tight text-white">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-white/64">{item.description}</p>
              <Link href={`/resources/${item.slug}`} className="mt-6 inline-flex text-sm text-white underline underline-offset-4">Open resource</Link>
            </article>
          ))}
        </section>
      </main>
      <Footer />
      <StickyDealBar />
    </BackgroundShell>
  );
}
