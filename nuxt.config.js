import colors from 'vuetify/es5/util/colors'
import axios from 'axios'

const dynamicRoutes = () => {
  const product = axios
    .get('https://cbsbackend.herokuapp.com/api/products')
    .then((res) => {
      return res.data.map((product) => {
        return '/product/' + product._id
      })
    })
  const subCategory = axios
    .get('https://cbsbackend.herokuapp.com/api/products')
    .then((res) => {
      return res.data.map((product) => {
        if (product.subCategory.length !== 0) {
          return '/category/' + product.subCategory
        }
      })
    })
  const article = axios
    .get('https://cbsbackend.herokuapp.com/api/blogs/')
    .then((res) => {
      return res.data.map((blog) => {
        return '/article/' + blog._id
      })
    })
  const edit = axios
    .get('https://cbsbackend.herokuapp.com/api/products/')
    .then((res) => {
      return res.data.map((product) => {
        return '/edit/' + product._id
      })
    })
  const blogEdit = axios
    .get('https://cbsbackend.herokuapp.com/api/blogs/')
    .then((res) => {
      return res.data.map((blog) => {
        return '/blogEdit/' + blog._id
      })
    })

  return Promise.all([product, subCategory, article, edit, blogEdit]).then(
    (values) => {
      console.log('yoooo', values.join().split(','))
      return values.join().split(',')
    }
  )
}

export default {
  target: 'static',
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - CBS Products',
    title: 'Home',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'CBS Products is at the forefront of cabling technology, the design and manufacture of installation equipment for HV Transmission towers, LV Distribution lines, Railway Tracksides and underground CATV / Telecommunication networks, including the handling of Fibre Optic Cables, for projects around the world. We also offer a comprehensive range of standard equipment.',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
      { rel: 'manifest', href: '/site.webmanifest' },
    ],
  },
  generate: {
    routes: dynamicRoutes,
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  axios: {
    baseURL: 'https://cbsbackend.herokuapp.com/',
    // proxyHeaders: false
  },
  middleware: ['auth-admin', 'auth-login'],
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  // components: true,
  components: [
    '~/components', // shortcut to { path: '~/components' }
    { path: '~/components/sections/', prefix: 'sections' },
  ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/device',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/axios', '@nuxtjs/auth'],

  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          required: true,
          type: 'Bearer',
        },
        user: {
          property: 'user',
          autoFetch: true,
        },
        endpoints: {
          login: {
            url: '/api/users/login',
            method: 'post',
            propertyName: 'token',
          },
          user: {
            url: '/api/users/profile',
            method: 'get',
            propertyName: '',
          },
        },
      },
    },
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.yellow.darken2,
          accent: colors.grey.darken4,
          secondary: colors.grey.darken4,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
        light: {
          primary: colors.yellow.darken2,
          accent: colors.grey.darken1,
          secondary: colors.grey.darken2,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.blue.accent3,
        },
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)

  build: {
    extend(config, ctx) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
        options: {
          fix: true,
        },
      })
    },
  },
}
