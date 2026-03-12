import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/data/site";
import PreloadScreen from "@/components/ui/PreloadScreen";
import CursorGlow from "@/components/ui/CursorGlow";

export const metadata: Metadata = {
  metadataBase: new URL("https://vladdos.com"),
  title: {
    default: "VlaDDoS – Private Affiliate Network for iGaming & Crypto Traffic",
    template: "%s | VlaDDoS PAN",
  },
  description:
    "Invite-only affiliate network connecting elite traffic sources with high-converting iGaming and crypto advertisers through direct Telegram access, CPA offers, and revenue share partnerships.",
  applicationName: "VlaDDoS PAN",
  referrer: "origin-when-cross-origin",
  keywords: [
    "VlaDDoS",
    "Private Affiliate Network",
    "private affiliate network",
    "igaming affiliate network",
    "crypto casino affiliate",
    "casino affiliate programs",
    "CPA affiliate network",
    "RevShare affiliate deals",
    "telegram affiliate network",
    "high paying affiliate programs",
  ],
  alternates: {
    canonical: "https://vladdos.com",
  },
  openGraph: {
    title: "VlaDDoS – Private Affiliate Network for iGaming & Crypto Traffic",
    description:
      "Invite-only affiliate network connecting qualified affiliates, advertisers, and operators across iGaming and crypto verticals.",
    url: "https://vladdos.com",
    siteName: "VlaDDoS PAN",
    type: "website",
    images: [
      {
        url: "/vladdos-crown.png",
        width: 1200,
        height: 630,
        alt: "VlaDDoS Private Affiliate Network",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VlaDDoS – Private Affiliate Network for iGaming & Crypto Traffic",
    description:
      "Invite-only affiliate network for iGaming, crypto, CPA, and revenue share partnerships.",
    images: ["/vladdos-crown.png"],
  },
  icons: {
    icon: "/vladdos-crown.png",
    shortcut: "/vladdos-crown.png",
    apple: "/vladdos-crown.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "VlaDDoS Private Affiliate Network",
  alternateName: "VlaDDoS PAN",
  url: "https://vladdos.com",
  logo: "https://vladdos.com/vladdos-crown.png",
  email: siteConfig.email,
  sameAs: [
    `https://t.me/${siteConfig.telegramChannel.replace("@", "")}`,
    `https://instagram.com/${siteConfig.instagram.replace("@", "")}`,
    `https://x.com/${siteConfig.x.replace("@", "")}`,
    siteConfig.linkedin,
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "partnership",
      email: siteConfig.email,
      url: `https://t.me/${siteConfig.telegramAccount.replace("@", "")}`,
      availableLanguage: ["English"],
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "VlaDDoS PAN",
  url: "https://vladdos.com",
  description:
    "Private affiliate network for iGaming, crypto, CPA, and revenue share partnerships.",
  publisher: {
    "@type": "Organization",
    name: "VlaDDoS PAN",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://vladdos.com/faq",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script id="organization-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(organizationSchema)}
        </Script>

        <Script id="website-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(websiteSchema)}
        </Script>

        <Script src="https://www.googletagmanager.com/gtag/js?id=G-KQDXXR0NRR" strategy="afterInteractive" />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KQDXXR0NRR');
          `}
        </Script>
      </head>

      <body>
        <PreloadScreen />
        <CursorGlow />

        <div className="top-contact-bar w-full">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4 py-2.5 text-[10px] uppercase tracking-[0.16em] text-white/60 sm:px-6 sm:text-[11px] sm:tracking-[0.24em] lg:justify-between lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 lg:justify-start">
              <a
                href={`https://t.me/${siteConfig.telegramAccount.replace("@", "")}`}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                Telegram — {siteConfig.telegramAccount}
              </a>

              <a
                href={`https://t.me/${siteConfig.ownerTelegram.replace("@", "")}`}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                Owner — {siteConfig.ownerTelegram}
              </a>

              <a href={`mailto:${siteConfig.email}`} className="transition hover:text-white">
                {siteConfig.email}
              </a>
            </div>

            <div className="hidden lg:flex lg:flex-wrap lg:items-center lg:gap-4 text-white/38">
              <a
                href={`https://t.me/${siteConfig.telegramChat.replace("@", "")}`}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                Chat — {siteConfig.telegramChat}
              </a>

              <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-white">
                LinkedIn
              </a>

              <a href={`https://x.com/${siteConfig.x.replace("@", "")}`} target="_blank" rel="noreferrer" className="transition hover:text-white">
                X
              </a>
            </div>
          </div>
        </div>

        {children}
      </body>
    </html>
  );
}
