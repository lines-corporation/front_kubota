<template>
  <v-layout>
    <v-flex>
      <header>
        <h2>パスワードの再設定</h2>
      </header>
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1">
            メールアドレス送信
          </v-stepper-step>

          <v-divider />

          <v-stepper-step :complete="e1 > 2" step="2">
            パスワード変更
          </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-form
              ref="form1"
              v-model="valid"
              lazy-validation
              @submit.prevent="reminder"
            >
              <v-container fluid>
                <v-row>
                  <v-col cols="12">
                    <p>
                      ご登録いただいたメールアドレスを入力して送信をしてください。
                    </p>
                    <p>
                      <v-text-field
                        v-model="email"
                        label="メールアドレス"
                        type="email"
                        outlined
                      />
                    </p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-btn
                      type="submit"
                      block
                      x-large
                      color="success"
                      dark
                      :loading="loading"
                      :disabled="loading"
                    >
                      送信する
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-stepper-content>
          <v-stepper-content step="2">
            <v-form
              ref="form2"
              v-model="valid"
              lazy-validation
              @submit.prevent="regist"
            >
              <v-container fluid>
                <v-row>
                  <v-col cols="12">
                    <p>
                      新しいパスワードを入力してください。
                    </p>
                    <p>
                      <v-text-field
                        v-model="login_pwd"
                        label="新しいパスワード"
                        type="password"
                        outlined
                      />
                    </p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <p>
                      <v-text-field
                        v-model="login_pwd2"
                        label="新しいパスワード（確認用）"
                        type="password"
                        outlined
                      />
                    </p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-btn
                      type="submit"
                      block
                      x-large
                      color="success"
                      dark
                      :loading="loading"
                      :disabled="loading"
                    >
                      登録する
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  auth: false,
  data() {
    return {
      token: "",
      e1: 1,
    }
  },
  created() {
    if (this.$route.query.token) {
      this.token = this.$route.query.token
      let self = this
      self.$auth.ctx.$axios
        .post("/rcms-api/1/reminder", {
          token: this.token,
        })
        .then(function (response) {
          self.$store.dispatch(
            "snackbar/setMessage",
            "新しいパスワードを入力してください。"
          )
          self.$store.dispatch("snackbar/snackOn")
          self.e1 = 2
        })
        .catch(function (error) {
          console.log(error)
          self.e1 = 1
        })
    }
  },
  methods: {
    async reminder() {
      let self = this
      this.$store.$auth.ctx.$axios
        .post("/rcms-api/1/reminder", {
          email: this.email,
        })
        .then(function (response) {
          if (response.data.errors.length == 0) {
            self.$store.dispatch(
              "snackbar/setMessage",
              "パスワード再設定メールを送信しました。"
            )
            self.$store.dispatch("snackbar/snackOn")
            self.$router.push("/")
          }
        })
        .catch((error) => {
          console.log(error)
          this.$store.dispatch(
            "snackbar/setError",
            "メールアドレスが見つからないか、入力が間違っています。再度、ご確認ください。"
          )
          this.$store.dispatch("snackbar/snackOn")
        })
    },
  },
}
</script>
