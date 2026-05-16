import fs from "fs";
import { routesSEO } from "../src/seo/config/routesSEO.js";

const SITEURL = "https://fleet-intelligence-platform.vercel.app/";

const urls = Object.values(routesSEO);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map((route) => `
        <url>
            <loc>${SITEURL}${route.path}</loc>
            <changefreq>${route.changefreq}</changefreq>
            <priority>${route.priority}</priority>
        </url>
        `).join("")
    }
</urlset>`;

fs.writeFileSync("public/sitemap.xml", sitemap);

console.log("sitemap.xml generado");