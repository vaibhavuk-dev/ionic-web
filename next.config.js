module.exports = {
  async redirects() {
    return [
      {
        source: '/chlorine-dioxide-generator-manufacturers.html',
        destination: '/products/water-treatment/genox-smart-digital-chlorine-dioxide-generator',
        permanent: true, // Use 301 permanent redirect
      },
      // Add more redirects as needed
    ];
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};
