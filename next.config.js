/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

// eslint-disable-next-line import/no-extraneous-dependencies
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const { withContentlayer } = require('next-contentlayer');

const appHeaders = require('./headers');

const buildRedirect = (source, destination, permanent = true) => {
  return {
    source,
    destination,
    permanent,
  };
};

/**
 * @type {import('next').NextConfig}
 */
const defaultNextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  compress: true,
  crossOrigin: 'anonymous',
  experimental: {
    newNextLinkBehavior: true,
    legacyBrowsers: false,
    optimizeCss: true,
  },
  compiler: {
    removeConsole: {
      exclude: ['error'],
    },
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  images: {
    remotePatterns: [
      { hostname: 'images.unsplash.com' },
      { hostname: 'i.scdn.co' },
      { hostname: 'spotify.com' },
      { hostname: 'jahir.dev' },
      { hostname: 'unavatar.io' },
      { hostname: 'source.boringavatars.com' },
      { hostname: 'lh3.googleusercontent.com' },
      { hostname: 'cdn.discordapp.com' },
      { hostname: 'raw.githubusercontent.com' },
      { hostname: 'avatars.githubusercontent.com' },
      { hostname: '**.cdninstagram.com' },
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  webpack(config, { dev, isServer }) {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      issuer: { and: [/\.(js|ts)x?$/] },
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash:8][ext]',
      },
    });
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });
    }
    return config;
  },
  async headers() {
    return appHeaders;
  },
  async redirects() {
    return [
      /* Blog posts redirections */
      buildRedirect(
        '/blog/a-priori-care',
        'https://medium.com/@jahirfiquitiva/taking-a-priori-care-of-your-future-job-7ed24cf18ed2',
      ),
      buildRedirect(
        '/blog/md-iconography-guidelines',
        'https://stories.uplabs.com/what-google-missed-in-their-guidelines-for-material-design-iconography-daf9f88000ec',
      ),
      buildRedirect('/blog/post-of-fame', '/donate#thanks'),
      /* Old static assets paths to news */
      buildRedirect('/assets/:path*', '/static/:path*'),
      /* Needed for android dashboards */
      buildRedirect(
        '/static/images/me/me.jpg',
        '/static/images/jahir/jahir.jpg',
      ),
      /* Dashbud links */
      buildRedirect('/dashbud', 'https://dashbud.dev'),
      buildRedirect('/dashbud/:path*', 'https://dashbud.dev'),
      buildRedirect('/dashsetup', 'https://dashbud.dev'),
      buildRedirect('/dashsetup/:path*', 'https://dashbud.dev'),
      /* Other redirections */
      buildRedirect('/links', '/'),
      buildRedirect('/music', '/dashboard'),
      buildRedirect('/now', '/dashboard'),
      buildRedirect('/support', '/donate'),
      buildRedirect('/sponsor', '/donate'),
      buildRedirect('/thanks', '/donate#thanks'),
      buildRedirect('/sponsors', '/donate#thanks'),
      buildRedirect('/supporters', '/donate#thanks'),
      buildRedirect('/blog/uses', '/uses'),
      buildRedirect('/releases', '/gh-releases'),
      buildRedirect('/feed', '/feed.xml'),
      buildRedirect('/resume', '/share/Jahir-Fiquitiva-Resume.pdf'),
      buildRedirect('/shop', 'https://www.shop.jahir.dev/nuestros-productos'),
    ];
  },
};

module.exports = withBundleAnalyzer(withContentlayer(defaultNextConfig));
