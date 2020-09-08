<template>
  <div class="container">
    <no-ssr>
      <div v-if="!auth.loggedIn">
        <form @submit.prevent="login">
          <h3 class="subtitle mb-3">
            NECロケッツクラブ会員の方はこちら
          </h3>

          <form @submit.prevent="login">
            <p>NECロケッツクラブ会員の方はこちらよりログインしてください。</p>
            <p>
              <v-text-field
                v-model="form.email"
                label="メールアドレス"
                type="email"
                outlined
              />
            </p>
            <p>
              <v-text-field
                v-model="form.password"
                label="パスワード"
                :type="show_pwd1 ? 'text' : 'password'"
                :append-icon="show_pwd1 ? 'mdi-eye' : 'mdi-eye-off'"
                outlined
                @click:append="show_pwd1 = !show_pwd1"
              />
            </p>
            <v-btn type="submit" block x-large color="success" dark>
              ログインする
            </v-btn>
          </form>
          <p>
            <NuxtLink to="/reminder">
              パスワードを忘れた方はこちらから
            </NuxtLink>
          </p>

          <h3 class="subtitle mb-3">
            2019年度ロケッツクラブ会員で更新の方は以下よりログインしてください。
          </h3>

          <form @submit.prevent="login">
            <p>
              <v-text-field
                v-model="form.email"
                label="メールアドレス"
                type="email"
                outlined
              />
            </p>
            <p>
              <v-text-field
                v-model="form.password"
                label="パスワード"
                :type="show_pwd2 ? 'text' : 'password'"
                :append-icon="show_pwd2 ? 'mdi-eye' : 'mdi-eye-off'"
                outlined
                @click:append="show_pwd2 = !show_pwd2"
              />
            </p>
            <v-btn type="submit" block x-large color="success" dark>
              ログインする
            </v-btn>
          </form>
          <p>
            <NuxtLink to="/reminder">
              パスワードを忘れた方はこちらから
            </NuxtLink>
          </p>

          <h3 class="subtitle mb-3">
            NEC
          </h3>
          <p class="body-1">
            <NuxtLink to="/form">
              NECロケッツクラブ会員新規入会登録
            </NuxtLink>
          </p>
          <p class="body-1">
            <NuxtLink to="/inquiry">
              社内の方はお問い合わせください
            </NuxtLink>
          </p>
        </form>
      </div>

      <div v-else>
        <v-row>
          <v-col cols="12" sm="3">
            <v-card class="mx-auto" outlined>
              <v-card-text>
                <p>名前：{{ user.name1 }}</p>
                <p>会員番号：{{ user.member_no }}</p>
                <p>会員種別：{{ group_nm }}</p>
              </v-card-text>
              <v-card-actions>
                <v-btn text color="deep-purple accent-4" to="/profile_edit">
                  プロフィール変更はこちら
                </v-btn>
              </v-card-actions>
            </v-card>

            <v-card v-if="can_upgrade" class="mx-auto" outlined>
              <v-card-text>
                <h3>アップグレードのご案内</h3>
                <p class="body-1">
                  <NuxtLink to="/upgrade">
                    スタ―会員への種別変更はこちら
                  </NuxtLink>
                </p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6">
            <v-card class="mx-auto" outlined>
              <v-card-text>
                <h3>お知らせ</h3>

                <v-simple-table :fixed-header="false">
                  <template v-slot:default>
                    <tbody>
                      <router-link
                        v-for="item in topics_list1"
                        :key="item.topics_id"
                        :to="'/info/' + item.topics_id"
                        tag="tr"
                      >
                        <td>{{ item.ymd }}</td>
                        <td>{{ item.subject }}</td>
                        <td>
                          <v-btn icon :to="'/info/' + item.topics_id" nuxt>
                            <v-icon>mdi-forward</v-icon>
                          </v-btn>
                        </td>
                      </router-link>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card-text>
            </v-card>
            <v-card class="mx-auto" outlined>
              <v-card-text>
                <h3>購入済みのチケット</h3>

                <v-simple-table :fixed-header="false">
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left">
                          購入日
                        </th>
                        <th class="text-left">
                          チケット名
                        </th>
                        <th class="text-left" />
                      </tr>
                    </thead>
                    <tbody>
                      <router-link
                        v-for="item in topics_list5"
                        :key="item.topics_id"
                        :to="'/ticket/' + item.topics_id"
                        tag="tr"
                      >
                        <td>{{ item.ymd }}</td>
                        <td>{{ item.subject }}</td>
                        <td>
                          <v-btn icon :to="'/ticket/' + item.topics_id" nuxt>
                            <v-icon>mdi-forward</v-icon>
                          </v-btn>
                        </td>
                      </router-link>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card-text>
            </v-card>
            <v-card class="mx-auto" outlined>
              <v-card-text>
                <h3>今後の試合</h3>

                <v-simple-table :fixed-header="false">
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left">
                          年月日
                        </th>
                        <th class="text-left">
                          試合
                        </th>
                        <th class="text-left" />
                      </tr>
                    </thead>
                    <tbody>
                      <router-link
                        v-for="item in topics_list"
                        :key="item.topics_id"
                        :to="'/event/' + item.topics_id"
                        tag="tr"
                      >
                        <td>{{ item.ymd }}</td>
                        <td>{{ item.subject }}</td>
                        <td>
                          <v-btn icon :to="'/event/' + item.topics_id" nuxt>
                            <v-icon>mdi-forward</v-icon>
                          </v-btn>
                        </td>
                      </router-link>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="3">
            <v-card class="mx-auto" outlined>
              <v-card-text>
                <h3>来場履歴</h3>

                <v-simple-table :fixed-header="false">
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left">
                          年月日
                        </th>
                        <th class="text-left">
                          イベント
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <router-link
                        v-for="item in topics_list"
                        :key="item.topics_id"
                        :to="'/event/' + item.topics_id"
                        tag="tr"
                      >
                        <td>{{ item.ymd }}</td>
                        <td>{{ item.subject }}</td>
                      </router-link>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card-text>
            </v-card>
            <v-card class="mx-auto" outlined>
              <v-card-text>
                <h3>グッズ購入履歴</h3>

                <v-simple-table :fixed-header="false">
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left">
                          購入日
                        </th>
                        <th class="text-left">
                          グッズ
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <router-link
                        v-for="item in topics_list"
                        :key="item.topics_id"
                        :to="'/ticket/' + item.topics_id"
                        tag="tr"
                      >
                        <td>{{ item.ymd }}</td>
                        <td>{{ item.subject }}</td>
                      </router-link>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </no-ssr>
  </div>
  </no-ssr>
</template>

<script>
export default {
  middleware: "auth",
  auth: false,
  data: () => ({
    can_upgrade: true,
    topics_list6: [],
    topics_list5: [],
    topics_list1: [],
    show_pwd1: false,
    show_pwd2: false,
    form: {
      email: "",
      password: "",
    },
  }),
  computed: {
    user() {
      return this.$auth.user
    },
    auth() {
      return this.$store.$auth
    },
    group_nm() {
      if (this.$store.$auth.loggedIn) {
        const group_ids = JSON.parse(JSON.stringify(this.$auth.user.group_ids))
        let group_idnms = ""
        Object.keys(group_ids).forEach(function (key) {
          group_idnms += " " + group_ids[key]
        })
        return group_idnms
      } else {
        return ""
      }
    },
  },
  mounted() {
    if (this.$auth.loggedIn) {
      let self = this
      self.can_upgrade = true
      const group_ids = JSON.parse(JSON.stringify(this.$auth.user.group_ids))
      Object.keys(group_ids).forEach(function (key) {
        if (["114", "111"].indexOf(key) !== -1) {
          self.can_upgrade = false
        }
      })

      this.$auth.ctx.$axios.get("/rcms-api/1/infos").then(function (response) {
        self.topics_list1 = response.data.list
      })

      this.$auth.ctx.$axios
        .get("/rcms-api/1/tickets")
        .then(function (response) {
          self.topics_list5 = response.data.list
        })
    }
  },
  methods: {
    async login() {
      await this.$auth
        .loginWith("local", { data: this.form, withCredentials: true })
        .then((response) => {
          this.$store.dispatch("snackbar/setMessage", "ログインしました")
          this.$store.dispatch("snackbar/snackOn")
          this.$router.push("/")
        })
        .catch((error) => {
          this.$store.dispatch("snackbar/setError", "ログインに失敗しました")
          this.$store.dispatch("snackbar/snackOn")
        })
    },
  },
}
</script>
