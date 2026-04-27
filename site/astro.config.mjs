import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://marketing-skills.guyaga.ai",
  trailingSlash: "always",
  build: {
    inlineStylesheets: "auto",
  },
  prefetch: {
    prefetchAll: false,
    defaultStrategy: "viewport",
  },
  integrations: [
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => !page.includes("/404"),
      serialize(item) {
        // Boost priority for hub pages
        if (item.url === "https://marketing-skills.guyaga.ai/") {
          item.priority = 1.0;
        }
        if (
          item.url === "https://marketing-skills.guyaga.ai/team/" ||
          item.url === "https://marketing-skills.guyaga.ai/skills/" ||
          item.url === "https://marketing-skills.guyaga.ai/install/"
        ) {
          item.priority = 0.9;
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
