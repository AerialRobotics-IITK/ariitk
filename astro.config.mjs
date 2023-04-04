import { defineConfig } from "astro/config";

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
  integrations: [
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
