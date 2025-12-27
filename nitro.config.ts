// nitro.config.ts
// import { defineNitroConfig } from 'nitro/config';
import { defineConfig } from 'nitro';

export default defineConfig({
  externals: {
    inline: ['@tabler/icons-react'],
  },
});

// export default defineNitroConfig({
//   externals: {
//     inline: ['@tabler/icons-react'],
//   },
// });
