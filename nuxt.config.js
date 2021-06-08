require('dotenv').config()
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  /**
   * Disable Purge CSS in prod
   */
  purgeCSS: {
    mode: 'postcss',
    enabled: false
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'basic_installation',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/custom.css' }
    ]
  },
  // Generate
  generate: {
    // 404 fallback
    fallback: true
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // Tailwind CSS
    '@nuxtjs/tailwindcss',
    // Add page in sitemap route array
    '@/modules/sitemapRouteGenerator',
    // dotenv
    ['@nuxtjs/dotenv', {
      filename: '.env'
    }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['nuxt-i18n', {
      detectBrowserLanguage: {
        alwaysRedirect: false
      },
      strategy: 'prefix',
      defaultLocale: 'en',
      locales: [
        {
          code: 'en',
          iso: 'en-US',
          file: 'en.js',
          dir: 'ltr'
        },
        {
          code: 'it',
          iso: 'it-IT',
          file: 'it.js',
          dir: 'ltr'
        }
      ],
      langDir: 'locales/',
      vueI18n: {
        fallbackLocale: 'en'
      }
    }],
    '@nuxtjs/axios',
    // Always leave as last
    '@nuxtjs/sitemap'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    ssr: true,
    extractCSS: true
  },
  // Axios
  axios: {
    baseURL: 'http://localhost'
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'http://localhost:3000/',
    defaults: {
      changefreq: 'monthly',
      priority: 1.0,
      lastmod: new Date()
    },
    gzip: true,
    exclude: []
  }
}
