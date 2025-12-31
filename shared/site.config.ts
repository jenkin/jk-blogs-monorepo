import baseConfig from "../packages/theme/src/site.config";

export default {
  ...baseConfig,
  author: 'jenkin',
  footer: {
    ...baseConfig.footer,
    credits: false,
    social: {
      github: 'https://github.com/jenkin',
      x: 'https://x.com/jenkin',
    },
  },
  content: {
    ...baseConfig.content,
    share: ['x']
  },
  integ: {
    ...baseConfig.integ,
    links: { ...baseConfig.integ.links, enable: false },
    waline: { ...baseConfig.integ.waline, enable: false },
  }
};
