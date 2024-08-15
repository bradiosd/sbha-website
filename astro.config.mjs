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
      filter: (page) =>
        page !== `${site}/home` &&
        page !== `${site}/smart-homes` &&
        page !== `${site}/smart-homes/lightning` &&
        page !== `${site}/smart-homes/energy` &&
        page !== `${site}/smart-homes/hvac` &&
        page !== `${site}/smart-homes/displays` &&
        page !== `${site}/smart-homes/automation` &&
        page !== `${site}/security` &&
        page !== `${site}/security/cctv` &&
        page !== `${site}/security/doors-and-windows` &&
        page !== `${site}/security/motion-detection` &&
        page !== `${site}/security/flood-detection` &&
        page !== `${site}/security/gas-detection` &&
        page !== `${site}/security/smoke-detection` &&
        page !== `${site}/networking` &&
        page !== `${site}/about-us` &&
        page !== `${site}/privacy-policy` &&
        page !== `${site}/terms-and-conditions`
    }),
    partytown({
        config: {
          forward: ["dataLayer.push"],
        },
    }),
  ],
});
