<template>
  <v-app light>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      color="#3d5d87"
      dark
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" color="#042f5e" dense dark fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>NECSPORTS.NET Members</v-toolbar-title>
      <v-spacer />
      <v-toolbar-title height="30" to="/mypage" v-text="subtitle" />
      <v-btn v-if="!auth.loggedIn" icon to="/login" nuxt>
        <v-icon>mdi-account</v-icon>
      </v-btn>

      <v-btn v-if="auth.loggedIn" icon @click="logout">
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
      <v-btn icon to="/faq" nuxt>
        <v-icon>mdi-help</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>Copyright NEC Corporation. All rights reserved.</span>
    </v-footer>

    <v-snackbar
      v-model="snackbarVisible"
      top
      :color="snackbarColor"
      timeout="2000"
    >
      {{ this.$store.getters["snackbar/message"] }}

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbarVisible = false">
          閉じる
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-home",
          title: "HOME",
          to: "/",
        },
        {
          icon: "mdi-lightbulb",
          title: "チケット申し込み",
          to: "/tickets",
        },
        {
          icon: "mdi-cart",
          title: "グッズ",
          to: "/shop",
        },
        {
          icon: "mdi-compass",
          title: "ご利用方法",
          to: "/how_to_use",
        },
        {
          icon: "mdi-help",
          title: "FAQ",
          to: "/faq",
        },
        {
          icon: "mdi-send",
          title: "お問い合わせ",
          to: "/inquiry",
        },
        {
          icon: "mdi-information",
          title: "規約等",
          to: "/kiyaku",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
    }
  },
  computed: {
    user() {
      return this.$auth.user
    },
    auth() {
      return this.$store.$auth
    },
    subtitle() {
      if (this.$store.$auth.loggedIn) {
        const group_ids = JSON.parse(JSON.stringify(this.$auth.user.group_ids))
        let group_idnms = ""
        Object.keys(group_ids).forEach(function (key) {
          group_idnms += " " + group_ids[key]
        })
        return this.$auth.user.name1 + "さん" + group_idnms
      } else {
        return ""
      }
    },
    // snackbarが自動でfalseに設定するためセッタを用意して、明示的にdispatchからOffするようにする
    snackbarVisible: {
      get() {
        return this.$store.state.snackbar.isEnable
      },
      set() {
        return this.$store.dispatch("snackbar/snackOff")
      },
    },
    snackbarColor() {
      return this.$store.state.snackbar.color
    },
  },
  methods: {
    async logout() {
      await this.$auth.logout().then((response) => {
        console.log(response)
        this.$store.dispatch("snackbar/setMessage", "ログアウトしました")
        this.$store.dispatch("snackbar/snackOn")
        this.$router.push("/login")
      })
    },
  },
}
</script>
