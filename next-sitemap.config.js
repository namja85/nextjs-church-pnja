/** @type {import('next-sitemap).IConfig */
const config = {
  siteUrl: process.env.SITE_URL || 'https://example.com',
  generateRobotsTxt: true,
  outDir: 'public',
};

module.exports = config;
