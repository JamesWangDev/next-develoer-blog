/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable max-len */
require('dotenv').config();
const { withContentlayer } = require('next-contentlayer');

// https://securityheaders.com
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' *.google.com *.gstatic.com;
  child-src *.google.com *.unsplash.com *.scdn.co *.spotify.com *.jahir.dev unavatar.now.sh *.unavatar.io;
  style-src 'self' 'unsafe-inline' *.googleapis.com;
  img-src *.gstatic.com * blob: data:;
  frame-src www.google.com;
  object-src 'none';
  base-uri 'none';
  media-src 'self';
  connect-src *;
  font-src 'self' *.gstatic.com;
`;

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
];

const buildRedirect = (source, destination, permanent = true) => {
  return {
    source,
    destination,
    permanent,
  };
};

const defaultNextConfig = {
  env: {
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    REPO_FULL_NAME: process.env.REPO_FULL_NAME,
    BASE_BRANCH: process.env.BASE_BRANCH,
  },
  reactStrictMode: true,
  // Prefer loading of ES Modules over CommonJS
  experimental: { esmExternals: true, staticPageGenerationTimeout: 180 },
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
      type: 'javascript/auto',
      issuer: {
        and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
      },
    });
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });

    return config;
  },
  images: {
    domains: [
      'images.unsplash.com',
      'i.scdn.co',
      'spotify.com',
      'jahir.dev',
      'unavatar.now.sh',
      'unavatar.io',
      'lh3.googleusercontent.com',
    ],
  },
  async headers() {
    return [
      {
        source: '/',
        headers: securityHeaders,
      },
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      buildRedirect('/assets/:path*', '/static/:path*'),
      buildRedirect('/dashbud', 'https://dashbud.dev'),
      buildRedirect('/dashsetup', 'https://dashbud.dev'),
      buildRedirect('/links', '/'),
      buildRedirect('/resume', '/share/Jahir-Fiquitiva-Resume.pdf'),
      buildRedirect('/support', '/donate'),
      buildRedirect('/thanks', '/donate#thanks'),
      buildRedirect('/blog/post-of-fame', '/donate#thanks'),
      // buildRedirect('/blog/uses', '/uses'),
      buildRedirect('/uses', '/blog/uses'), // TODO: Check if needed
    ];
  },
};

module.exports = withContentlayer()(defaultNextConfig);
