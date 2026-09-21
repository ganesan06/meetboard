/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Lint locally with `npm run lint`; don't block Vercel deploys on style nits.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
