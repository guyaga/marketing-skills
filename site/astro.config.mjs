import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://marketing-skills.guyaga.ai",
  vite: {
    plugins: [tailwindcss()],
  },
});
