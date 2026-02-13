/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export để deploy lên GitHub Pages
  output: "export",
  // Cần khớp với tên repository GitHub
  basePath: "/Kinh-Thanh-Vuot-Tren-Nhan-Dao-Xa-Hoi",
  assetPrefix: "/Kinh-Thanh-Vuot-Tren-Nhan-Dao-Xa-Hoi/",
};

export default nextConfig;
