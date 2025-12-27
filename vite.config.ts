import contentCollections from '@content-collections/vite';
import tailwindcss from '@tailwindcss/vite';
import { devtools } from '@tanstack/devtools-vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import viteReact from '@vitejs/plugin-react';
import { nitro } from 'nitro/vite';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, type PluginOption } from 'vite';
import viteTsConfigPaths from 'vite-tsconfig-paths';

const URL = process.env.BETTER_AUTH_URL || 'http://localhost:3000';

const config = defineConfig({
  build: {
    rollupOptions: {
      output: {
        // Original, more concise version:
        // manualChunks(id) {
        //   if (id.includes('node_modules')) {
        //     return id
        //       .toString()
        //       .split('node_modules/')[1]
        //       .split('/')[0]
        //       .toString();
        //   }
        // },

        // With more mature variable names:
        manualChunks(id) {
          if (id.includes('node_modules')) {
            const modulePath = id.split('node_modules/')[1];
            const topLevelFolder = modulePath.split('/')[0];
            if (topLevelFolder !== '.pnpm') {
              return topLevelFolder;
            }
            const scopedPackageName = modulePath.split('/')[1];
            const chunkName =
              scopedPackageName.split('@')[
                scopedPackageName.startsWith('@') ? 1 : 0
              ];
            return chunkName;
          }
        },
      },
    },
  },
  plugins: [
    contentCollections() as PluginOption,
    devtools(),
    nitro(),
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    tanstackStart({
      sitemap: {
        enabled: true,
        host: URL,
      },
    }),
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }) as PluginOption,
    viteReact(),
    visualizer() as PluginOption,
  ],
});

export default config;
