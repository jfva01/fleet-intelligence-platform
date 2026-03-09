import Hero from "../components/layout/Hero"
import TrustedBy from "../components/layout/TrustedBy"
import Features from "../components/layout/Features"
import Modules from "../components/layout/Modules"
import Infrastructure from "../components/layout/Infrastructure"
import Visualization from "../components/layout/Visualization"
import Contact from "../components/layout/Contact"

function Home() {
    return (
        <>
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