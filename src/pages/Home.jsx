import Hero from "../components/sections/Hero"
import TrustedBy from "../components/sections/TrustedBy"
import Features from "../components/sections/Features"
import Modules from "../components/sections/Modules"
import Infrastructure from "../components/sections/Infrastructure"
import Visualization from "../components/sections/Visualization"
import Contact from "../components/sections/Contact"
import { Helmet } from "react-helmet-async" // Import the generateSEO function to create SEO configurations for the app
import { generateSEO } from "../seo/generators/seo"  // Import the routesSEO object to access the SEO configuration for the home page
import { routesSEO } from "../seo/config/routesSEO" // Generate SEO configuration for the home page using the generateSEO function and the routesSEO object

// Generate SEO configuration for the app using the generateSEO function
const seo = generateSEO(routesSEO.home);

function Home() {
    return (
        <>
            {/* SEO configuration using react-helmet-async */}
            <Helmet>
                <title>{seo.title}</title>
                <link rel="icon" type="image/svg+xml" href={routesSEO.home.icon} />
                {/* Render meta tags based on the generated SEO configuration */}
                { seo.meta.map((tag, index) => 
                    // Check if the tag has a 'name' property to determine if it's a standard meta tag or an Open Graph tag
                    tag.name ? ( // Standard meta tag
                        <meta key = {index} name = {tag.name} content={tag.content} />
                    ):( // Open Graph or Twitter Card tag
                        <meta key = {index} property = {tag.property} content={tag.content} />
                    )
                )}
                {/* Render link tags based on the generated SEO configuration */}
                {seo.link.map((link, index) => (
                <link key={index} rel={link.rel} href={link.href} />
                ))}
            </Helmet>

            <Hero />
            <TrustedBy />
            <Features />
            <Modules />
            <Infrastructure />
            <Visualization />
            <Contact />
        </>
    )
}

export default Home