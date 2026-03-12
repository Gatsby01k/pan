import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LibraryEntryPage from "@/components/seo/LibraryEntryPage";
import { growthPageMap, growthPages } from "@/data/growthContent";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return growthPages.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const entry = growthPageMap[params.slug];
  if (!entry) return {};
  return {
    title: entry.title,
    description: entry.description,
    alternates: { canonical: `https://vladdos.com/growth/${entry.slug}` },
    openGraph: {
      title: entry.title,
      description: entry.description,
      url: `https://vladdos.com/growth/${entry.slug}`,
      type: "article",
    },
  };
}

export default function GrowthDetail({ params }: Props) {
  const entry = growthPageMap[params.slug];
  if (!entry) notFound();
  return <LibraryEntryPage entry={entry} sectionLabel="Growth" sectionHref="/growth" />;
}
