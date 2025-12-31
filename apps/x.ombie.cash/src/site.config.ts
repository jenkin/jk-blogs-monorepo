import baseConfig from "../../../shared/site.config";

export default {
  ...baseConfig,
  title: 'X🛡️OMBIE🛡️CASH',
  description: 'The unstoppable public journey of a Zcash node operator',
  header: {
    menu: [
      { title: 'Tutorials', link: '/tutorials' },
      { title: 'Changelog', link: '/logs' }
    ]
  },
  footer: {
    ...baseConfig.footer,
    links: [
      {
        title: 'Zcash',
        link: 'https://z.cash/',
        style: 'text-sm'
      },
      {
        title: 'Zcash Foundation',
        link: 'https://zfnd.org/',
        style: 'text-sm'
      },
      {
        title: 'Zcash Community Forum',
        link: 'https://forum.zcashcommunity.com/',
        style: 'text-sm'
      },
      {
        title: 'ZecHub',
        link: 'https://zechub.wiki/',
        style: 'text-sm'
      },
    ],
  },
};
