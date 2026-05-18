import { Helmet } from "react-helmet-async";

import { generateSEO } from "../seo/generators/seo";
import { organizationSchema } from "../seo/structured-data/organization";

export default function SEO({ 
    seoConfig,
    structuredData = [],
}) { 
    const seo = generateSEO(seoConfig);
    
    return (
        <Helmet prioritizeSeoTags>
            <title>{seo.title}</title>
            {/* Render meta tags based on the generated SEO configuration */}
            {seo.meta.map((tag, index) => (
                // Check if the tag has a 'name' property to determine if it's a standard meta tag or an Open Graph tag
                tag.name ? ( // Standard meta tag
                    <meta 
                        key = {index} 
                        name = {tag.name} 
                        content={tag.content} 
                    />
                ):( // Open Graph or Twitter Card tag
                    <meta 
                        key = {index} 
                        property = {tag.property} 
                        content={tag.content} 
                    />
                )
            ))}

            // Render link tags based on the generated SEO configuration
            {seo.link.map((link, index) => (
                <link 
                    key={index} 
                    rel={link.rel} 
                    href={link.href} 
                />
            ))}

            // Include structured data for the organization using JSON-LD
            {structuredData.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                    __html: JSON.stringify(schema),
                    }}
                />
            ))}
        </Helmet>
    );
}