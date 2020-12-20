/* eslint-disable @typescript-eslint/no-var-requires */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});
const { nextI18NextRewrites } = require('next-i18next/rewrites');

const localeSubpaths = { ko: 'ko', en: 'en', jp: 'jp', in: 'in', cn: 'cn' };

module.exports = withBundleAnalyzer({
    rewrites: async () => nextI18NextRewrites(localeSubpaths),
    publicRuntimeConfig: {
        localeSubpaths,
    },
    distDir: 'build',
    images: {
        domains: ['assets.vercel.com', '127.0.01:3000'],
    },
    env: {
        API_URL: 'sample',
    },
});
