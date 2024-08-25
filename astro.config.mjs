import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown'
import vercel from '@astrojs/vercel/serverless';

const site = 'https://smartbirdha.co.uk'

// https://astro.build/config
export default defineConfig({
  site,
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  redirects: {
    '/': '/home'
  },
  integrations: [
    sitemap({
      //
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
