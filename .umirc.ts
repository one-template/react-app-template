// https://umijs.org/
import { defineConfig } from 'umi';

export default defineConfig({
  favicon: 'https://avatars3.githubusercontent.com/u/75602446?s=200&v=4',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  hash: true,
});
