export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  srcDir: "src/",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: "%s - " + process.env.npm_package_name,
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        src: "https://sandbox.paygent.co.jp/js/PaygentToken.js",
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: ["@/assets/main.css"],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxt/typescript-build", "@nuxtjs/vuetify"],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios", "@nuxtjs/auth", "@nuxtjs/pwa"],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ["@/assets/variables.scss"],
    theme: {
      light: true,
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    hardSource: false,
  },
  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true,
  },
  router: {
    middleware: ["auth"],
  },
  axios: {
    //baseURL: 'http://127.0.0.1',
    baseURL: "https://kuroco.necsports.net",
    //baseURL: 'https://member-necsports.g.kuroco.app',
    credentials: true,
  },
  auth: {
    localStorage: {
      prefix: "rcms_api.",
    },
    redirect: {
      login: "/login", // 未ログイン時に認証ルートへアクセスした際のリダイレクトURL
      logout: "/", // ログアウト時のリダイレクトURL(4.9.1ではそのままでは動かない)
      callback: false,
      home: "/", // ログイン後のリダイレクトURL(4.9.1ではそのままでは動かない)
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/rcms-api/1/login",
            method: "post",
          },
          user: {
            url: "/rcms-api/1/profile",
            method: "get",
            propertyName: false,
          },
          logout: {
            url: "/rcms-api/1/logout",
            method: "post",
          },
        },
        tokenType: false,
        tokenRequired: false,
        autoFetchUser: true,
      },
    },
  },
}
