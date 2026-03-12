import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LibraryEntryPage from "@/components/seo/LibraryEntryPage";
import { geoPageMap, geoPages } from "@/data/growthContent";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return geoPages.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const entry = geoPageMap[params.slug];
  if (!entry) return {};
  return {
    title: entry.title,
    description: entry.description,
    alternates: { canonical: `https://vladdos.com/geo/${entry.slug}` },
    openGraph: {
      title: entry.title,
      description: entry.description,
      url: `https://vladdos.com/geo/${entry.slug}`,
      type: "article",
    },
  };
}

export default function GeoDetail({ params }: Props) {
  const entry = geoPageMap[params.slug];
  if (!entry) notFound();
  return <LibraryEntryPage entry={entry} sectionLabel="Geo" sectionHref="/geo" />;
}
