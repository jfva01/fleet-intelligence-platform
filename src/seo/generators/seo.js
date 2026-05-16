import { Link } from "lucide-react";
import { SITE_URL } from "../constants/site";

export function generateSEO ({ title, description, path ="", image }) {
    const url = `${SITE_URL}${path}`;

    return{
        title,
        meta: [
            { name: "description", content: description },
            // Open Graph tags
            { property: "og:title", content: title },
            { property: "og:description", content: description },
            { property: "og:image", content: `${SITE_URL}${image}` },
            { property: "og:url", content: url },
            { property: "og:type", content: "website" },
            // Twitter Card tags
            { name: "twitter:card", content: "summary_large_image" },
            { name: "twitter:title", content: title },
            { name: "twitter:description", content: description },
            { name: "twitter:image", content: `${SITE_URL}${image}` },
        ],
        link: [
            { rel: "canonical", href: url },
        ],
    };
}