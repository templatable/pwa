import type { NextConfig } from 'next'
import withSerwistInit from '@serwist/next'

const withSerwist = withSerwistInit({
  swSrc: 'app/sw.ts',
  swDest: 'public/sw.js',
  disable: process.env.NODE_ENV !== 'production',
  reloadOnOnline: true,
})

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  productionBrowserSourceMaps: true,
  experimental: {
    viewTransition: true,
    reactCompiler: true,
    optimizeCss: true,
    optimizeServerReact: true,
    optimisticClientCache: true,
    // ppr: "incremental",
    scrollRestoration: true,
  },
}

export default withSerwist(nextConfig)
