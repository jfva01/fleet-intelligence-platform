import { SITE_URL } from "../../constants/site.js";

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Fleet Intelligence Platform",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web Browser",
  description: "Plataforma inteligente para monitoreo, análisis y gestión de flotas en tiempo real.",
  url: SITE_URL,
  image: `${SITE_URL}/images/og-image.png`,
  publisher: {
    "@type": "Organization",
    name: "Vital Latam",
    url: SITE_URL,
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};