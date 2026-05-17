// Mapa de metadata para cada ruta de la aplicación, utilizado para generar dinámicamente las etiquetas SEO en cada página.
// Cada entrada en el objeto routesSEO contiene la configuración SEO específica para esa ruta, incluyendo título, descripción, imagen y path.
export const routesSEO = {
    home: {
        title: "Inicio - Plataforma de inteligencia de flotas",
        description: "Una plataforma integral para la gestión y optimización de flotas.",
        path: "/",
        priority: 1.0,
        changefreq: "weekly"
    },
    dashboard:{
        title: "Dashboard - Plataforma de inteligencia de flotas",
        description: "Panel de control y visualización de métricas de flotas.",
        path: "/dashboard",
        priority: 0.8,
        changefreq: "daily"
    },
    vehicles: {
        title: "Vehículos - Plataforma de inteligencia de flotas",
        description: "Gestión de vehículos en la plataforma.",
        path: "/vehicles",
        priority: 0.8,
        changefreq: "daily"
    },
    reports: {
        title: "Reportes - Plataforma de inteligencia de flotas",
        description:
        "Análisis y reportes avanzados de operación.",
        path: "/reports",
        priority: 0.7,
        changefreq: "weekly"
    },
    faq: {
        title: "Preguntas Frecuentes - Plataforma de inteligencia de flotas",
        description: "Encuentra respuestas a las preguntas más comunes sobre nuestra plataforma.", 
        path: "/FAQ",
        priority: 1.0,
        changefreq: "monthly"
    },
    terms: {
        title: "Términos y Condiciones - Plataforma de inteligencia de flotas",
        description: "Lee nuestros términos y condiciones de uso.", 
        path: "/Terms",
        priority: 0.5,
        changefreq: "monthly"
    }
}