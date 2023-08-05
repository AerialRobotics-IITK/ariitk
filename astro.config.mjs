import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import image from "@astrojs/image";
import partytown from "@astrojs/partytown";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://ariitk.in",
  markdown: {
    shikiConfig: {
      theme: "dracula",
      langs: [],
      wrap: true,
    },
  },
  scripts: [
    //Include the Bootstrap javascript
    {type: 'module', src: '/_merged_assets/bootstrap/dist/js/bootstrap.bundle.min.js'}
  ],
  stylesheets: [
    //Include the Bootstrap CSS
    {href: '/_merged_assets/bootstrap/dist/css/bootstarp.min.css'}
  ],
  integrations: [
    react(),
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: { theme: "dracula" },
      remarkRehype: { footnoteLabel: "Footnotes" },
      gfm: false,
    }),
    image(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
