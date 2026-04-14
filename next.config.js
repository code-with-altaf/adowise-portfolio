/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
      {
        protocol: "https",
        hostname: "codewithmosh.com",
      },
      {
        protocol: "https",
        hostname: "uploads.teachablecdn.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",  
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "www.facebook.com",
      },
      // LinkedIn domains
      {
        protocol: "https",
        hostname: "linkedin.com",
      },
      {
        protocol: "https",
        hostname: "*.linkedin.com", // Wildcard for all subdomains
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
      },
      // Facebook CDN domains - ADD THIS
      {
        protocol: "https",
        hostname: "*.fbcdn.net", // Wildcard for all Facebook CDN subdomains
      },
      {
        protocol: "https",
        hostname: "fdn2.gsmarena.com",
      },
      {
        protocol: "https",
        hostname: "blog.google",
      }
    ],
  },
};

module.exports = nextConfig;