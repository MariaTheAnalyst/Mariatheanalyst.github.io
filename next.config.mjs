/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Leave basePath empty - GitHub Pages will use the repository root
  basePath: '',
  trailingSlash: true,
};

export default nextConfig;
