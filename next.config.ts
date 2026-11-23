import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "localhost",
    "127.0.0.1",
    "*.localhost",
  ],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "poolcaptain2026.s3.ap-southeast-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "poolproducts.s3.ap-southeast-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "poolservicesimages.s3.ap-southeast-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "blockimages.s3.ap-southeast-2.amazonaws.com",
      },
    ],
  },


  async redirects() {
    return [
      // 1. Canonical Host Redirect (www -> non-www)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.poolcaptain.pk' }],
        destination: 'https://poolcaptain.pk/:path*',
        permanent: true,
      },

      // 2. Malformed / Double-Prefixed Blog URLs
      {
        source: '/blogs/https\\://poolcaptain.pk/blogs/rgb-vs-warm-white-vs-cool-white-pool-lights',
        destination: '/blogs/rgb-vs-warm-white-vs-cool-white-pool-lights',
        permanent: true,
      },
      {
        source: '/blogs/https\\://poolcaptain.pk/blogs/best-swimming-pool-cleaning-equipment-karachi',
        destination: '/blogs/best-swimming-pool-cleaning-equipment-karachi',
        permanent: true,
      },

      // 3. Core Pages, Junk Crawls & Calculators
      { source: '/Home', destination: '/', permanent: true },
      { source: '/\\$', destination: '/', permanent: true },
      { source: '/&', destination: '/', permanent: true },
      { source: '/aboutus', destination: '/about', permanent: true },
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/Contact%20Us', destination: '/contact', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/contactus', destination: '/contact', permanent: true },
      { source: '/pool-volume-calculation', destination: '/pool-volume-calculator', permanent: true },
      { source: '/pool-measurements', destination: '/pool-volume-calculator', permanent: true },
      { source: '/tools', destination: '/pool-volume-calculator', permanent: true },
   

      // 4. Legacy & Obsolete Blog URLs
      { source: '/blog/pool-lighting', destination: '/blogs/rgb-vs-warm-white-vs-cool-white-pool-lights', permanent: true },
      { source: '/blog/pool-filter-pump-sizing-guide', destination: '/blogs/pool-filter-pump-sizing-guide', permanent: true },
      { source: '/blogs/pool-cleaning-tips-karachi', destination: '/blogs/best-swimming-pool-cleaning-equipment-karachi', permanent: true },
      { source: '/blogs/best-pool-design-ideas-2026', destination: '/blogs/swimming-pool-construction-guide-karachi', permanent: true },

      // 5. Obsolete Service Pages
      { source: '/pool-services/spa-jacuzzi', destination: '/pool-services/sauna-steam-room-construction', permanent: true },
      { source: '/pool-services/pool-design', destination: '/pool-services/pool-construction', permanent: true },

      // 6. Legacy Top-Level Product Categories
      { source: '/swimming-pool-products', destination: '/pool-products', permanent: true },
      { source: '/swimming-pool-products/poolpumps', destination: '/pool-products/pool-pumps', permanent: true },
      { source: '/swimming-pool-products/poolfilters', destination: '/pool-products/pool-filters', permanent: true },
      { source: '/swimming-pool-products/waterheaters', destination: '/pool-products/pool-heating-systems', permanent: true },
      { source: '/swimming-pool-products/heatpumps', destination: '/pool-products/pool-heating-systems', permanent: true },
      { source: '/swimming-pool-products/steamheaters', destination: '/pool-products/sauna-steam-generators-accessories', permanent: true },
      { source: '/swimming-pool-products/saunaheaters', destination: '/pool-products/sauna-steam-generators-accessories', permanent: true },
      { source: '/swimming-pool-products/equipment', destination: '/pool-products/pool-accessories', permanent: true },
      { source: '/pool-accessories', destination: '/pool-products/pool-accessories', permanent: true },

      // 7. Pool Pumps
      { source: '/swimming-pool-products/pool-pumps/Leo', destination: '/pool-products/pool-pumps/leo-pool-pumps', permanent: true },
      { source: '/swimming-pool-products/poolpumps/Leo', destination: '/pool-products/pool-pumps/leo-pool-pumps', permanent: true },
      { source: '/pool-products/leo-pump', destination: '/pool-products/pool-pumps/leo-pool-pumps', permanent: true },
      { source: '/swimming-pool-products/poolpumps/Hydro', destination: '/pool-products/pool-pumps/hydro-koolie-pool-pumps', permanent: true },
      { source: '/pool-products/hydro-pool-pump', destination: '/pool-products/pool-pumps/hydro-koolie-pool-pumps', permanent: true },
      { source: '/swimming-pool-products/pool-pumps/Minder', destination: '/pool-products/pool-pumps/minder-pool-pumps', permanent: true },
      { source: '/swimming-pool-products/poolpumps/Minder', destination: '/pool-products/pool-pumps/minder-pool-pumps', permanent: true },
      { source: '/pool-products/minder-pool-pump', destination: '/pool-products/pool-pumps/minder-pool-pumps', permanent: true },
      { source: '/swimming-pool-products/poolpumps/Laswim', destination: '/pool-products/pool-pumps/laswim-pumps', permanent: true },
      { source: '/pool-products/laswim-pumps', destination: '/pool-products/pool-pumps/laswim-pumps', permanent: true },
      { source: '/pool-products/five-star-pump', destination: '/pool-products/pool-pumps/fivestar-pool-pumps', permanent: true },
      { source: '/swimming-pool-products/poolpumps/MicPool', destination: '/pool-products/pool-pumps', permanent: true },

      // 8. Pool Filters
      { source: '/swimming-pool-products/poolfilters/Laswim', destination: '/pool-products/pool-filters/laswim-pool-filter', permanent: true },
      { source: '/pool-products/laswim-pool-filter', destination: '/pool-products/pool-filters/laswim-pool-filter', permanent: true },
      { source: '/swimming-pool-products/poolfilters/Minder', destination: '/pool-products/pool-filters/minder-pool-filter', permanent: true },
      { source: '/pool-products/minder-pool-filters', destination: '/pool-products/pool-filters/minder-pool-filter', permanent: true },
      { source: '/pool-products/five-star-pool-filter', destination: '/pool-products/pool-filters/fivestar-pool-filter', permanent: true },
      { source: '/swimming-pool-products/poolfilters/Gemas', destination: '/pool-products/pool-filters', permanent: true },
      { source: '/swimming-pool-products/pool-filters/Astral', destination: '/pool-products/pool-filters', permanent: true },

      // 9. Pool Lights & Fountains
      { source: '/swimming-pool-products/pool-equipment/Lights', destination: '/pool-products/pool-lights', permanent: true },
      { source: '/productspecification/equipment/Lights', destination: '/pool-products/pool-lights', permanent: true },
      { source: '/swimming-pool-products/equipment/Lights', destination: '/pool-products/pool-lights', permanent: true },
      { source: '/productspecification/equipment/AcrylicFountain', destination: '/pool-products/pool-fountains/acrylic-pool-fountain', permanent: true },
      { source: '/swimming-pool-products/equipment/AcrylicFountain', destination: '/pool-products/pool-fountains/acrylic-pool-fountain', permanent: true },
      { source: '/pool-products/acrylic-pool-fountain', destination: '/pool-products/pool-fountains/acrylic-pool-fountain', permanent: true },

      // 10. Cleaning Accessories
      { source: '/productspecification/equipment/NylonBrush', destination: '/pool-products/pool-cleaning-accessories/nylon-brush', permanent: true },
      { source: '/swimming-pool-products/pool-equipment/NylonBrush', destination: '/pool-products/pool-cleaning-accessories/nylon-brush', permanent: true },
      { source: '/swimming-pool-products/equipment/NylonBrush', destination: '/pool-products/pool-cleaning-accessories/nylon-brush', permanent: true },
      { source: '/pool-products/pool-brush-nylon', destination: '/pool-products/pool-cleaning-accessories/nylon-brush', permanent: true },
      { source: '/swimming-pool-products/equipment/WaterTestKit', destination: '/pool-products/pool-cleaning-accessories/test-kit', permanent: true },
      { source: '/swimming-pool-products/equipment/DeepNet', destination: '/pool-products/pool-cleaning-accessories/deep-net', permanent: true },
      { source: '/pool-products/pool-deep-net', destination: '/pool-products/pool-cleaning-accessories/deep-net', permanent: true },
      { source: '/swimming-pool-products/equipment/TelescopicPole', destination: '/pool-products/pool-cleaning-accessories/telescopic-pole', permanent: true },
      { source: '/swimming-pool-products/pool-equipment/TelescopicPole', destination: '/pool-products/pool-cleaning-accessories/telescopic-pole', permanent: true },
      { source: '/pool-products/telescopic-pool-pole', destination: '/pool-products/pool-cleaning-accessories/telescopic-pole', permanent: true },
      { source: '/swimming-pool-products/pool-equipment/VacuumHead', destination: '/pool-products/pool-cleaning-accessories/vacuum-head', permanent: true },
      { source: '/swimming-pool-products/equipment/VacuumHead', destination: '/pool-products/pool-cleaning-accessories/vacuum-head', permanent: true },
      { source: '/pool-products/vacuum-head', destination: '/pool-products/pool-cleaning-accessories/vacuum-head', permanent: true },
      { source: '/swimming-pool-products/pool-equipment/HosePipe', destination: '/pool-products/pool-cleaning-accessories/hose-pipe', permanent: true },
      { source: '/swimming-pool-products/equipment/HosePipe', destination: '/pool-products/pool-cleaning-accessories/hose-pipe', permanent: true },
      { source: '/pool-products/vacuum-hose-25-50ft', destination: '/pool-products/pool-cleaning-accessories/hose-pipe', permanent: true },

      // 11. Pool Accessories & Fittings
      { source: '/swimming-pool-products/equipment/HydroJet', destination: '/pool-products/pool-accessories/hydro-jet', permanent: true },
      { source: '/swimming-pool-products/pool-equipment/HydroJet', destination: '/pool-products/pool-accessories/hydro-jet', permanent: true },
      { source: '/swimming-pool-products/equipment/Ladders', destination: '/pool-products/pool-accessories/pool-ladder', permanent: true },
      { source: '/pool-products/pool-ladder-2step-3step', destination: '/pool-products/pool-accessories/pool-ladder', permanent: true },
      { source: '/pool-products/pool-deck-box', destination: '/pool-products/pool-accessories/deck-box', permanent: true },
      { source: '/pool-products/pool-vacuum-point', destination: '/pool-products/pool-accessories/pool-vacuum-point', permanent: true },
      { source: '/pool-products/pool-main-drain', destination: '/pool-products/pool-accessories/drain-8', permanent: true },

      // 12. Heating, Sauna, Steam & Cold Plunge
      { source: '/pool-products/pool-heat-pumps', destination: '/pool-products/pool-heating-systems', permanent: true },
      { source: '/pool-products/electric-pool-water-heater', destination: '/pool-products/pool-heating-systems', permanent: true },
      { source: '/swimming-pool-products/water-heaters/Coates', destination: '/pool-products/pool-heating-systems/coates-pool-heat-pump', permanent: true },
      { source: '/swimming-pool-products/waterheaters/Coates', destination: '/pool-products/pool-heating-systems/coates-pool-heat-pump', permanent: true },
      { source: '/swimming-pool-products/steam-heaters/FanlanSteam18KW', destination: '/pool-products/sauna-steam-generators-accessories/sauna-steam-generator', permanent: true },
      { source: '/pool-products/steam-heater', destination: '/pool-products/sauna-steam-generators-accessories/sauna-steam-generator', permanent: true },
      { source: '/swimming-pool-products/sauna-heaters/FanlanSauna8KW', destination: '/pool-products/sauna-steam-generators-accessories/sauna-heater', permanent: true },
      { source: '/pool-products/sauna-heaters', destination: '/pool-products/sauna-steam-generators-accessories/sauna-heater', permanent: true },
      { source: '/pool-products/cold-plunge-water-chiller', destination: '/pool-products/cold-plunge/cold-plunge-tub', permanent: true },
      { source: '/pool-products/cold-plunge/cold-plunge', destination: '/pool-products/cold-plunge/cold-plunge-tub', permanent: true },

      // 13. Pool Chemicals
      { source: '/swimming-pool-products/pool-chemicals/ph-plus', destination: '/pool-products/pool-chemicals/pool-ph-balancer', permanent: true },
      { source: '/swimming-pool-products/pool-chemicals/ph-minus', destination: '/pool-products/pool-chemicals/pool-ph-balancer', permanent: true },
      { source: '/pool-products/ph-plus-ph-minus', destination: '/pool-products/pool-chemicals/pool-ph-balancer', permanent: true },
      { source: '/swimming-pool-products/pool-chemicals/algaecide', destination: '/pool-products/pool-chemicals/pool-algaecide', permanent: true },
      { source: '/pool-products/algaecide', destination: '/pool-products/pool-chemicals/pool-algaecide', permanent: true },
      { source: '/swimming-pool-products/pool-chemicals/chlorine-granular', destination: '/pool-products/pool-chemicals/pool-chlorine', permanent: true },
      { source: '/pool-products/pool-chlorine', destination: '/pool-products/pool-chemicals/pool-chlorine', permanent: true },
      { source: '/pool-products/potassium-sulphate', destination: '/pool-products/pool-chemicals/potassium-sulphate', permanent: true },
    ];
  },
};

export default nextConfig;

