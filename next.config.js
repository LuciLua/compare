module.exports = {
    images: {
      domains: ['api.github.com', 'avatars.githubusercontent.com'],
    },
    experimental: {
      appDir: true,
      fontLoaders: [
        { loader: '@next/font/google', options: { subsets: ['latin'] } },
      ],
    },

  }