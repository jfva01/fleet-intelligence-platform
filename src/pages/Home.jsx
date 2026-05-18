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
import SEO from "../components/SEO" // Import the SEO component to render the SEO configuration in the app

// Generate SEO configuration for the app using the generateSEO function
const seo = generateSEO(routesSEO.home);

function Home() {
    return (
        <>
            <SEO seoConfig={routesSEO.home} />

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