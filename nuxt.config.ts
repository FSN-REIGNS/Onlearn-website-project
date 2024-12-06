export default defineNuxtConfig({
  modules: [
    '@vueuse/motion/nuxt',
    '@nuxtjs/tailwindcss',
  ],

  css: [
    '~/assets/styles/main.css',
    '~/assets/styles/tailwind.css',
  ],

  postcss: {
    plugins: {
      'postcss-preset-env': {
        stage: 0, // Configures PostCSS to use modern CSS features
      },
      'tailwindcss': {},
      'autoprefixer': {},
    },
  },

  app: {
    head: {
      title: 'Onlearn - Online Learning Platform',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
      ],
    },
  },

  nitro: {
    devServer: {
      watch: ['src'], // Set the directories to be watched by the dev server
    },
  },

  compatibilityDate: '2024-12-05',
});