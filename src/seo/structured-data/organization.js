import { SITE_URL } from "../../constants/site";

export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vital Latam",
    "url": SITE_URL,
    "logo": `${SITE_URL}/logo-vital-latam.webp`,
    "sameAs": [
        "https://www.facebook.com/vitallatam",
        "https://www.linkedin.com/company/vital-latam",
        "https://www.instagram.com/vital.latam/"
    ]
};