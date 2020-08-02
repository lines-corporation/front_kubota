<template>
  <div class="container">
    <h2 class="headline font-weight-bold mb-5">NECファンクラブサイトへようこそ！</h2>
    <div v-if="!auth.loggedIn">
    <p  class="body-1">ＮＥＣスポーツ公式サイトの新規会員申込ページから、会員登録をしてください。<br>
      右側に表示している「お申込はこちらから」バナーから入会登録フォームへ進み、会員登録をお願いします。<br>
<br>
      【登録手順】 ◆◆詳細画面は「ご利用方法」をご覧ください◆◆<br>
<br>
      現在、臨時の入会フォームにて新規入会登録を受け付けております。<br>
<br>
      なお、会員証はご入会後お届けまでに１ヶ月程度お時間をいただいておりますので、ご承知おきください。<br>
<br>
      ◆ご注意ください！◆<br>
      ＮＥＣイントラネットへの接続環境でなければ、「NECスポーツ後援会」にはご入会出来ませんのでご注意ください。<br>
      また、手続の際は電子メールをご確認いただける状態でお願いいたします。<br>
      </p>
    <form @submit.prevent="login">
      <h3 class="subtitle mb-3">既に会員の方は以下からログインをしてください。</h3>
      <p  class="body-1">
       <NuxtLink to="/login">
        ログインはこちらから
      </NuxtLink>
      </p>
      <p  class="body-1">
        <NuxtLink to="/reminder">
          パスワードを忘れた方はこちらから
        </NuxtLink>
      </p>
      <h3 class="subtitle mb-3">会員登録はこちらから</h3>
      <p  class="body-1">
       <NuxtLink to="/form_nec">
        NECの方はこちらの会員登録フォームへ
      </NuxtLink>
      </p>
      <p  class="body-1">
       <NuxtLink to="/form">
        社外の方はこちらの会員登録フォームへ
      </NuxtLink>
      </p>
    </form>

    <h2 class="headline font-weight-bold mb-5">会員特典</h2>
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
        >
        <v-card
        width="250px"
        >
          <v-img
            class="white--text align-end"
            height="200px"
            :src="card.src"
          >
          </v-img>
          <v-card-title>{{ card.title }}</v-card-title>
          <v-card-text class="text--primary">
            <div>説明を書く</div>

          </v-card-text>
        </v-card>
        </v-col>
      </v-row>
    </v-container>
    </div>
  
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
    cards: [
      { title: '公式戦チケットが無料！', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 4 },
      { title: '入会記念ストラッププレゼント', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 4 },
      { title: '年間特典グッズプレゼント！', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
      { title: '卓上カレンダープレゼント', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
      { title: '試合会場での応援グッズ配布', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
      { title: '会員証の発行', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
      { title: 'メールマガジンの発行', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
      { title: '会員専用WEBサイトのご利用', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
      { title: 'サポートショップでの特典', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
    ],
  }),
}
</script>
