/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          "localhost",
          "localhost:8000",
          "http://localhost",
          "",
        ],
     },
}

export default nextConfig;
