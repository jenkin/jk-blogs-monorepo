import baseConfig from "../../../shared/site.config";

export default {
  ...baseConfig,
  title: "JENKIN'S 🛡️ BLOG",
  description: 'Random thoughts from a curiosity-driven web developer',
  header: {
    menu: [
      { title: 'Blog', link: '/blog' },
    ]
  },
  footer: {
    ...baseConfig.footer,
    links: [
      {
        title: 'Homelab',
        link: 'https://home.jenkin.app/',
        style: 'text-sm'
      },
      {
        title: 'Zcash',
        link: 'https://x.ombie.cash/',
        style: 'text-sm'
      },
    ],
  },
};
