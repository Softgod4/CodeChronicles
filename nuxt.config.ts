// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ['@/assets/css/global.scss'],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'page', mode: 'out-in' }
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
  modules: ['@nuxt/image', '@tresjs/nuxt']
});
