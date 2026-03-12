import Link from "next/link";
import BackgroundShell from "@/components/ui/BackgroundShell";
import Footer from "@/components/ui/Footer";
import SectionHeader from "@/components/ui/SectionHeader";
import StickyDealBar from "@/components/ui/StickyDealBar";
import TopNav from "@/components/navigation/TopNav";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import ArticleSchema from "@/components/seo/ArticleSchema";
import FaqSchema from "@/components/seo/FaqSchema";
import type { LibraryEntry } from "@/data/growthContent";

export default function LibraryEntryPage({
  entry,
  sectionLabel,
  sectionHref,
}: {
  entry: LibraryEntry;
  sectionLabel: string;
  sectionHref: string;
}) {
  const baseUrl = "https://vladdos.com";
  const url = `${baseUrl}${sectionHref}/${entry.slug}`;

  const breadcrumbs = [
    { href: `${baseUrl}/`, label: "Home" },
    { href: `${baseUrl}${sectionHref}`, label: sectionLabel },
    { href: url, label: entry.title },
  ];

  return (
    <BackgroundShell>
      <TopNav />
      <BreadcrumbSchema items={breadcrumbs} />
      <ArticleSchema title={entry.title} description={entry.description} url={url} />
      <FaqSchema items={entry.faqItems} id={`faq-${entry.slug}`} />

      <main className="mx-auto max-w-7xl space-y-16 px-4 pb-24 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        <div className="space-y-5">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: sectionHref, label: sectionLabel },
              { href: `${sectionHref}/${entry.slug}`, label: entry.title },
            ]}
          />
          <SectionHeader eyebrow={entry.eyebrow} title={entry.title} text={entry.description} />
        </div>

        <section className="grid gap-6 lg:grid-cols-[1.08fr_.92fr]">
          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">why this page matters</div>
            <div className="mt-4 space-y-4 text-sm leading-7 text-white/66 sm:text-base">
              {entry.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">key takeaways</div>
            <div className="mt-5 grid gap-3">
              {entry.bullets.map((item) => (
                <div key={item} className="rounded-[1rem] border border-white/8 bg-white/[0.035] px-4 py-3 text-sm leading-7 text-white/66">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">{entry.frameworkTitle}</div>
            <div className="mt-5 grid gap-3">
              {entry.framework.map((item) => (
                <div key={item} className="rounded-[1rem] border border-white/8 bg-black/15 px-4 py-3 text-sm leading-7 text-white/66">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="panel p-5 sm:p-7">
            <SectionHeader
              eyebrow="best fit"
              title={entry.whoTitle}
              text="Use these cards to understand who should move from reading into a qualified brief and who should keep researching first."
            />
            <div className="mt-6 grid gap-4">
              {entry.who.map((item) => (
                <article key={item.title} className="rounded-[1.2rem] border border-white/8 bg-white/[0.035] p-4 sm:p-5">
                  <h2 className="text-base font-medium text-white sm:text-lg">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-white/64">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.02fr_.98fr]">
          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">faq</div>
            <div className="mt-5 grid gap-4">
              {entry.faqItems.map((item, index) => (
                <article key={item.q} className="rounded-[1.2rem] border border-white/8 bg-white/[0.035] p-4 sm:p-5">
                  <div className="text-[10px] uppercase tracking-[0.16em] text-white/38">Question {String(index + 1).padStart(2, "0")}</div>
                  <h2 className="mt-2 text-lg font-medium text-white">{item.q}</h2>
                  <p className="mt-3 text-sm leading-7 text-white/64">{item.a}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">move to action</div>
            <h2 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-3xl">{entry.ctaTitle}</h2>
            <p className="mt-4 text-sm leading-7 text-white/64">{entry.ctaText}</p>
            <div className="mt-6 grid gap-3">
              <Link href="/join" className="button-primary justify-center">Apply for Access</Link>
              <Link href="/for-affiliates" className="button-secondary justify-center">For Affiliates</Link>
              <Link href="/for-advertisers" className="button-secondary justify-center">For Advertisers</Link>
              <Link href="/telegram" className="button-secondary justify-center">Open Telegram Routes</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyDealBar />
    </BackgroundShell>
  );
}
