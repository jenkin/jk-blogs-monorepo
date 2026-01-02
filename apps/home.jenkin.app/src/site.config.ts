import baseConfig from "../../../shared/site.config";

export default {
  ...baseConfig,
  title: "JENKIN'S 🛡️ HOME",
  description: 'The public journey of a self-hosting degen',
  header: {
    menu: [
      { title: 'Lab', link: '/lab' },
      { title: 'Changelog', link: '/logs' }
    ]
  },
  footer: {
    ...baseConfig.footer,
    links: [
      {
        title: 'Minisforum',
        link: 'https://www.minisforum.com/',
        style: 'text-sm'
      },
      {
        title: 'Proxmox',
        link: 'https://proxmox.com/',
        style: 'text-sm'
      },
      {
        title: 'Debian',
        link: 'https://www.debian.org/',
        style: 'text-sm'
      },
      {
        title: 'Docker',
        link: 'https://www.docker.com/',
        style: 'text-sm'
      },
    ],
  },
};
