const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

module.exports = withNextra({
  // i18n: {
  //   locales: ['en-US', 'zh-CN'],
  //   defaultLocale: 'en-US'
  // },
  reactStrictMode: true,
  images:{
    unoptimized : true
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH
});
