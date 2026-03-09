import { useEffect, useState } from "react"

const sections = [
  { id: "introduction", title: "1. Introduction" },
  { id: "services", title: "2. Services Overview" },
  { id: "accounts", title: "3. User Accounts" },
  { id: "data", title: "4. Data & Privacy" },
  { id: "liability", title: "5. Limitation of Liability" },
  { id: "termination", title: "6. Termination" },
  { id: "changes", title: "7. Changes to Terms" },
  { id: "contact", title: "8. Contact Information" },
]

export default function Terms() {
    const [activeSection, setActiveSection] = useState("introduction")

     useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                setActiveSection(entry.target.id)
                }
            })
            },
            {
            rootMargin: "-30% 0px -60% 0px",
            threshold: 0,
            }
        )

        sections.forEach((section) => {
            const element = document.getElementById(section.id)
            if (element) observer.observe(element)
        })

        return () => observer.disconnect()
    }, [])

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero */}
            <section className="bg-white border-b border-gray-200">
                <div className="max-w-6xl mx-auto px-6 py-20">
                    <h1 className="text-4xl font-bold text-gray-900">
                        Terms & Conditions
                    </h1>
                    <p className="mt-4 text-gray-600 max-w-2xl">
                        Please read these terms carefully before using our GPS tracking
                        and fleet management platform.
                    </p>
                    <p className="mt-2 text-sm text-gray-400">
                        Last updated: March 2026
                    </p>
                    </div>
            </section>
            {/* Content */}
            <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">
                {/* Sidebar */}
                <aside className="hidden md:block md:col-span-1">
                    <div className="sticky top-24">
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                        Contents
                        </h3>
                        <ul className="mt-6 space-y-4">
                        {sections.map((section) => (
                            <li key={section.id} className="relative">
                                <span
                                    className={`absolute -left-4 top-2 h-4 w-1 rounded-full transition-all duration-300 ${
                                    activeSection === section.id
                                        ? "bg-blue-600 opacity-100"
                                        : "opacity-0"
                                    }`}
                                />
                                <button
                                    onClick={() =>
                                    document.getElementById(section.id)?.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start",
                                    })
                                    }
                                    className={`text-sm text-left transition-all duration-200 ${
                                    activeSection === section.id
                                        ? "text-blue-600 font-medium"
                                        : "text-gray-600 hover:text-blue-600"
                                    }`}
                                >
                                    {section.title}
                                </button>
                            </li>
                        ))}
                        </ul>
                    </div>
                </aside>
                {/* Main Content */}
                <div className="md:col-span-3 space-y-16">
                    {sections.map((section) => (
                    <div
                        key={section.id}
                        id={section.id}
                        className="scroll-mt-32"
                        >
                    <h2 className="text-2xl font-semibold text-gray-900">
                        {section.title}
                    </h2>

                    <p className="mt-6 text-gray-600 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Our platform provides GPS tracking, IoT connectivity, 
                        fleet monitoring dashboards, analytics insights, and 
                        logistics optimization tools designed for enterprise clients.
                    </p>

                    <p className="mt-4 text-gray-600 leading-relaxed">
                        By accessing or using our services, you agree to comply 
                        with and be bound by these Terms. If you do not agree 
                        with any part of the terms, you may not access the platform.
                    </p>
                    </div>
                ))}
                </div>
            </section>
        </div>
    )
}