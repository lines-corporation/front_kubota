<template>
  <v-layout>
    <v-flex class="text-left">
      <h2>会員登録</h2>
      <form @submit.prevent="reminder">
        <p>ご登録いただいたくメールアドレスを入力して送信をしてください。</p>
        <p>
          <v-text-field
            v-model="email"
            label="メールアドレス"
            type="email"
            outlined
          />
        </p>
        <v-btn type="submit" block x-large color="success" dark>
          送信する
        </v-btn>
      </form>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  auth: false,
  data() {
    return {
      email: "",
    }
  },
  created() {
    let self = this
    if (!self.$store.$auth.getToken("local")) {
      let url = "/rcms-api/1/token"
      this.$auth.ctx.$axios
        .post(url, { withCredentials: true })
        .then(function (response) {
          self.$store.$auth.setToken("local", response.data.access_token)
        })
    }
  },
  methods: {
    async reminder() {
      let self = this
      this.$store.$auth.ctx.$axios
        .post(
          "/rcms-api/1/member/regist",
          {
            email: this.email,
          },
          {
            withCredentials: true,
            headers: {
              "X-RCMS-API-ACCESS-TOKEN": this.$store.$auth.getToken("local"),
            },
          }
        )
        .then(function (response) {
          if (response.data.errors.length == 0) {
            self.$store.dispatch(
              "snackbar/setMessage",
              "メールを送信しました。メールボックスをご確認いただいて、リンクから登録画面へ遷移してください。"
            )
            self.$store.dispatch("snackbar/snackOn")
            self.$router.push("/login")
          }
        })
        .catch((error) => {
          console.log(error)
          this.$store.dispatch(
            "snackbar/setError",
            "メールアドレスが間違っています。再度、ご確認ください。"
          )
          this.$store.dispatch("snackbar/snackOn")
        })
    },
  },
}
</script>
