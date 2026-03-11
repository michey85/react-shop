import { defineConfig, loadEnv } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

const { publicVars, rawPublicVars } = loadEnv({ prefixes: ['REACT_APP_'] });

const assetPrefix = process.env.GITHUB_PAGES === 'true' ? '/react-shop/' : '/';

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    template: './public/index.html',
  },
  output: {
    polyfill: 'usage',
    assetPrefix,
    distPath: {
      root: 'build',
    },
  },
  source: {
    define: {
      ...publicVars,
      'process.env': JSON.stringify(rawPublicVars),
      'process.env.PUBLIC_PATH': JSON.stringify(assetPrefix),
    },
  },
});