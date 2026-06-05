export const siteConfig = {
  name: "Kai Sheng",
  url: "https://kaisheng.dev",
  defaultTitle: "Kai Sheng",
  defaultDescription:
    "Software engineering leader focused on scalable systems, platform engineering, product engineering, and teams that last.",
  defaultSocialImage: "/og-image-light.png",
  cloudflareAnalyticsToken: "",
  googleSiteVerification: "",
  sameAs: ["https://github.com/exglade", "https://www.linkedin.com/in/ckaisheng"],
};

export const cloudflareAnalyticsToken =
  import.meta.env.PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN || siteConfig.cloudflareAnalyticsToken;

export const googleSiteVerification =
  import.meta.env.PUBLIC_GOOGLE_SITE_VERIFICATION || siteConfig.googleSiteVerification;

export function getAbsoluteUrl(path: string) {
  return new URL(path, siteConfig.url).href;
}

export function getPersonStructuredData({
  description,
  lang,
  path,
}: {
  description: string;
  lang: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: getAbsoluteUrl(path),
    description,
    jobTitle: "Software Engineering Leader",
    knowsAbout: [
      "Software engineering leadership",
      "Scalable systems",
      "Platform engineering",
      "Product engineering",
      "Technical strategy",
    ],
    sameAs: siteConfig.sameAs,
    inLanguage: lang,
  };
}
