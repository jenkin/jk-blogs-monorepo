import pages from "astro-pages";
import AstroPureIntegration from "astro-pure";
import sharedConfig from "../../shared/astro.config";
import localConfig from "./src/site.config.ts";

const DOMAIN = "logs.jenkin.dev";

const DISABLED_PAGES = [
  "about",
  "docs",
  "links",
  "projects",
  "terms",
];

export default {
  ...sharedConfig,
  site: `https://${DOMAIN}`,
  integrations: [
    ...sharedConfig.integrations ?? [],
    AstroPureIntegration(localConfig),
    pages(
      {
        cwd: "../../../packages/theme/src/",
        dir: "pages",
        // Ignore or replace theme pages
        glob: [
          "**.{astro,ts,js}",
          "!index.{astro,ts,js}",
          ...DISABLED_PAGES.map((path) => `!**/${path}/**`),
        ],
        // Rename theme pages
        // pattern: ({ pattern }) => pattern.replace("/theme-route", "/site-route")
      }
    ),
  ],
};
