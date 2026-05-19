import SEO from "../components/SEO" // Import the SEO component to render the SEO configuration in the app
import { routesSEO } from "../seo/config/routesSEO" // Generate SEO configuration for the home page using the generateSEO function and the routesSEO object
import { generateSEO } from "../seo/generators/seo" // Import the generateSEO function to create the SEO configuration for the home page
import { organizationSchema } from "../seo/structured-data/organization" // Import structured data for the organization to include in the SEO configuration
import { softwareApplicationSchema } from "../seo/structured-data/softwareApplication"; // Import structured data for the software application to include in the SEO configuration

// Importar los componentes de las secciones de la página de inicio
import Hero from "../components/sections/Hero"
import TrustedBy from "../components/sections/TrustedBy"
import Features from "../components/sections/Features"
import Modules from "../components/sections/Modules"
import Infrastructure from "../components/sections/Infrastructure"
import Visualization from "../components/sections/Visualization"
import Contact from "../components/sections/Contact"

// Generate SEO configuration for the app using the generateSEO function
const seo = generateSEO(routesSEO.home);

export default function Home() {
    return (
        <>
            {/* Render the SEO component with the generated SEO configuration and structured data for the organization and software application */}
            <SEO seoConfig={routesSEO.home} structuredData={[organizationSchema, softwareApplicationSchema]} />
            {/* Componentes de la página de inicio */}
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