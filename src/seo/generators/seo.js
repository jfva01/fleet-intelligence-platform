import { SITE_URL } from "../../constants/site.js";

// Function to generate SEO configuration based on provided parameters
export function generateSEO ({ title, description, path ="", image }) {
    // Normalize the path to ensure the homepage does not have a trailing slash
    const normalizedPath = path === "/" ? "" : path; 
    const url = `${SITE_URL}${normalizedPath}`;
    const defaultImage = `${SITE_URL}/images/og-image.webp`;

    return{
        title,
        meta: [
            { name: "description", content: description },
            // Open Graph tags
            { property: "og:title", content: title },
            { property: "og:description", content: description },
            { property: "og:image", content: image || defaultImage },
            { property: "og:url", content: url },
            { property: "og:type", content: "website" },
            // Twitter Card tags
            { name: "twitter:card", content: "summary_large_image" },
            { name: "twitter:title", content: title },
            { name: "twitter:description", content: description },
            { name: "twitter:image", content: image || defaultImage },
        ],
        link: [
            { rel: "canonical", href: url },
        ],
    };
}