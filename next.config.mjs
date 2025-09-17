/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      "/**/*": ["./generates/prisma/**/*"],
    },
  },
};

export default nextConfig;
