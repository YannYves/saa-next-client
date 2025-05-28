/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "api.dicebear.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "loremflickr.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // Assuming Cloudinary uses this hostname
        pathname: "**",
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;
