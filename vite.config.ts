import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: [
//       { find: '@', replacement: 'src' },
//       {
//         find: '@components',
//         replacement: 'src/components'
//       },
//       { find: '@utils', replacement: '/src/utils' },
//       { find: '@hooks', replacement: '/src/hooks' },
//       { find: '@pages', replacement: '/src/pages' },
//       { find: '@assets', replacement: '/src/assets' },
//       { find: '@types', replacement: '/src/types' },
//       {
//         find: '@constants',
//         replacement: '/src/constants'
//       },
//       { find: '@styles', replacement: '/src/styles' },
//       {
//         find: '@colors',
//         replacement: '/src/styles/colors'
//       }
//     ]
//   }
// });

export default defineConfig({
  root: './',
  server: {
    port: 5174
  },
  plugins: [react(), tsconfigPaths()]
});
