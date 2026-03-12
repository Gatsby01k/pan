import type { MetadataRoute } from "next";
import { geoPages, growthPages, resourcePages } from "@/data/growthContent";
import { insightArticles, seoLandingPages } from "@/data/seoContent";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vladdos.com";
  const now = new Date();

  const staticRoutes = [
    "",
    "/capabilities",
    "/infrastructure",
    "/access",
    "/for-affiliates",
    "/for-advertisers",
    "/telegram",
    "/about",
    "/contact",
    "/join",
    "/faq",
    "/privacy-policy",
    "/terms",
    "/cookie-policy",
    "/insights",
    "/resources",
    "/growth",
    "/geo",
  ];

  const seoRoutes = seoLandingPages.map((page) => `/${page.slug}`);
  const insightRoutes = insightArticles.map((article) => `/insights/${article.slug}`);
  const resourceRoutes = resourcePages.map((page) => `/resources/${page.slug}`);
  const growthRoutes = growthPages.map((page) => `/growth/${page.slug}`);
  const geoRoutes = geoPages.map((page) => `/geo/${page.slug}`);
  const routes = [...staticRoutes, ...seoRoutes, ...insightRoutes, ...resourceRoutes, ...growthRoutes, ...geoRoutes];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency:
      route === "" || route === "/join" || route === "/access" || route.startsWith("/insights/") || route.startsWith("/resources/") || route.startsWith("/growth/") || route.startsWith("/geo/") || seoRoutes.includes(route)
        ? "weekly"
        : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/join"
          ? 0.97
          : route === "/access"
            ? 0.96
            : route === "/insights" || route === "/resources" || route === "/growth" || route === "/geo"
              ? 0.94
              : route.startsWith("/insights/") || route.startsWith("/resources/") || route.startsWith("/growth/") || route.startsWith("/geo/")
                ? 0.88
                : seoRoutes.includes(route)
                  ? 0.92
                  : 0.8,
  }));
}
