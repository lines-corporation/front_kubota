<template>
  <div class="container">
    <h2>NECファンクラブサイトへようこそ！</h2>
    <form v-if="!auth.loggedIn" @submit.prevent="login">
      <h3>既に会員の方は以下からログインをしてください。</h3>
       <NuxtLink to="/login">
        Login
      </NuxtLink>
      <p>
        <NuxtLink to="/reminder">
          パスワードを忘れた方はこちらから
        </NuxtLink>
      </p>
      <h3>会員登録はこちらから</h3>
      <p>
       <NuxtLink to="/form_nec">
        NECの方はこちらの会員登録フォームへ
      </NuxtLink>
      </p>
      <p>
       <NuxtLink to="/form">
        社外の方はこちらの会員登録フォームへ
      </NuxtLink>
      </p>
    </form>
    <div v-else>
      <h3>申し込み可能なチケットの一覧</h3>

    <v-simple-table
      :fixed-header="false"
    >
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">チケット名</th>
            <th class="text-left">年月日</th>
            <th class="text-left">申し込み</th>
          </tr>
        </thead>
        <tbody>
          <router-link v-for="item in topics_list" :key="item.topics_id" :to="'/ticket/'+item.topics_id" tag="tr">
            <td>{{ item.subject }}</td>
            <td>{{ item.ymd }}</td>
            <td>
              <v-btn icon :to="'/ticket/'+item.topics_id" nuxt>
              <v-icon>mdi-forward</v-icon>
              </v-btn>
            </td>
          </router-link>
        </tbody>
      </template>
    </v-simple-table>

    </div>
  </div>
</template>

<script>

export default {
  auth: false,
  computed: {
    user() {
      return this.$auth.user;
    },
    auth() {
      return this.$store.$auth;
    },
  },
  mounted () {
      if(this.$auth.loggedIn){
        let self = this;
        let url = "/rcms-api/1/topics1";
        this.$auth.ctx.$axios.get(url).then(function(response) {
            self.topics_list = response.data.list;
        });
      }
  },
  data: () => ({
    topics_list:[],
  }),
}
</script>
