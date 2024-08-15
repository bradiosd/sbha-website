import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown'

const site = 'https://smartbirdha.co.uk'

// https://astro.build/config
export default defineConfig({
  site,
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
