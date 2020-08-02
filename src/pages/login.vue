<template>
  <div class="container">
    <h2>ログイン</h2>
    <form @submit.prevent="login">
      <p>このページはログインしてからご覧ください。</p>
      <p><v-text-field
            v-model="form.email"
            label="メールアドレス"
            type="email"
            outlined
          ></v-text-field></p>
      <p><v-text-field
            v-model="form.password"
            label="パスワード"
            :type="show1 ? 'text' : 'password'"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="show1 = !show1"
            outlined
          ></v-text-field></p>
      <v-btn type="submit" block x-large color="success" dark>
        ログインする
      </v-btn>
    </form>
    <p>
      <NuxtLink to="/reminder">
        パスワードを忘れた方はこちらから
      </NuxtLink>
    </p>
  </div>
</template>

<script>
export default {
  auth: false,
  data() {
    return {
      show1: false,
      form: {
        email: 'kenta+guest@diverta.co.jp',
        password: 'guest1234'
      }
    }
  },
  methods: {
    async login() {
      let resp = await this.$auth.loginWith('local', { data: this.form,withCredentials: true }).then(
        (response) => {
          this.$store.dispatch('snackbar/setMessage', 'ログインしました');
          this.$store.dispatch('snackbar/snackOn');
          this.$router.push('/');
        }).catch(error => {
          this.$store.dispatch('snackbar/setError', 'ログインに失敗しました');
          this.$store.dispatch('snackbar/snackOn');
        });
    }
  }
}

</script>
