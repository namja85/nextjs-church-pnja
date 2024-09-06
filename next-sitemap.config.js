/** @type {import('next-sitemap).IConfig */
const config = {
  siteUrl: process.env.SITE_URL || 'https://example.com',
  generateRobotsTxt: true,
  outDir: 'app',
};

module.exports = config;
