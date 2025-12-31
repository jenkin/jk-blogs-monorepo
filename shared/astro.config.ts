import baseConfig from "../packages/theme/astro.config";

export default {
  ...baseConfig,
  adapter: undefined,
  output: 'static',
  integrations: [],
};
