/** @type {import('next').NextConfig} */

const repoName = "nxt-vibre-entertainment";
const nextConfig = {
  output: "export",
  assetPrefix: process.env.NODE_ENV === "production" ? `/${repoName}/` : undefined,
  basePath: process.env.NODE_ENV === "production" ? `/${repoName}` : undefined,
};

export default nextConfig;
