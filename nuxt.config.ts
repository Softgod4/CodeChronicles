// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  spaLoadingTemplate: false,
  css: ['@/assets/css/global.scss', '@/assets/css/tailwind.css'],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'page', mode: 'out-in' },

    head: {
      title: 'CodeChronicles',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'CodeChronicles by softgod' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/image/navbar/logo2.png' }
      ]
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  vite: {
    server: {
      hmr: {
        overlay: false
      }
    }
  },

  vue: {
    compilerOptions: {
      isCustomElement: tag =>
        [
          'TresPerspectiveCamera',
          'TresMesh',
          'TresTorusGeometry',
          'TresMeshBasicMaterial',
          'TresAmbientLight',
          'primitive',
          'TresCanvas'
        ].includes(tag)
    }
  },
  modules: ['@nuxt/image', '@tresjs/nuxt'],
});
