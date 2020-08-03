<template>
  <div class="container">
    <h2 class="headline font-weight-bold mb-5">
      NECファンクラブサイトへようこそ！
    </h2>
    <div v-if="!auth.loggedIn">
      <p class="body-1">
        ＮＥＣスポーツ公式サイトの新規会員申込ページから、会員登録をしてください。<br />
        右側に表示している「お申込はこちらから」バナーから入会登録フォームへ進み、会員登録をお願いします。<br />
        <br />
        【登録手順】 ◆◆詳細画面は「ご利用方法」をご覧ください◆◆<br />
        <br />
        現在、臨時の入会フォームにて新規入会登録を受け付けております。<br />
        <br />
        なお、会員証はご入会後お届けまでに１ヶ月程度お時間をいただいておりますので、ご承知おきください。<br />
        <br />
        ◆ご注意ください！◆<br />
        ＮＥＣイントラネットへの接続環境でなければ、「NECスポーツ後援会」にはご入会出来ませんのでご注意ください。<br />
        また、手続の際は電子メールをご確認いただける状態でお願いいたします。<br />
      </p>
      <form @submit.prevent="login">
        <h3 class="subtitle mb-3">
          既に会員の方は以下からログインをしてください。
        </h3>
        <p class="body-1">
          <NuxtLink to="/login">
            ログインはこちらから
          </NuxtLink>
        </p>
        <p class="body-1">
          <NuxtLink to="/reminder">
            パスワードを忘れた方はこちらから
          </NuxtLink>
        </p>
        <h3 class="subtitle mb-3">
          会員登録はこちらから
        </h3>
        <p class="body-1">
          <NuxtLink to="/form_nec">
            NECの方はこちらの会員登録フォームへ
          </NuxtLink>
        </p>
        <p class="body-1">
          <NuxtLink to="/form">
            社外の方はこちらの会員登録フォームへ
          </NuxtLink>
        </p>
      </form>

      <h2 class="headline font-weight-bold mb-5">
        会員特典
      </h2>
      <v-container fluid>
        <v-row dense>
          <v-col v-for="card in cards" :key="card.title">
            <v-card width="250px">
              <v-card-title>{{ card.title }}</v-card-title>
              <v-img
                v-if="card.src"
                class="white--text align-end"
                height="200px"
                :src="card.src"
              />
              <v-card-text class="text--secondary">
                <div>{{ card.explain }}</div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div v-else>
      <h3>申し込み可能なチケットの一覧</h3>

      <v-simple-table :fixed-header="false">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                チケット名
              </th>
              <th class="text-left">
                年月日
              </th>
              <th class="text-left">
                申し込み
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
              <td>{{ item.subject }}</td>
              <td>{{ item.ymd }}</td>
              <td>
                <v-btn icon :to="'/ticket/' + item.topics_id" nuxt>
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
  data: () => ({
    topics_list: [],
    cards: [
      {
        title: "公式戦チケットが無料！",
        explain:
          "ＮＥＣスポーツＷＥＢサイトから、ＮＥＣ公式戦チケットをお申込いただけます。応募多数の場合は、抽選となります。☆試合会場では、チーム応援席で応援ができます！（試合会場によって異なります。）会費年間3,600円は、女子バレー観戦チケット約1枚と同額！！",
        flex: 4,
      },
      {
        title: "入会記念ストラッププレゼント",
        explain:
          "リバーシブルタイプのお洒落なストラップ。肌触りもgoodで社員証入れにピッタリ！◆社員証用として利用の場合、各自支給された社員証用ネックストラップのハードケースと必ず差替えをお願いします",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 4,
      },
      {
        title: "年間特典グッズプレゼント！",
        explain:
          "2019年度特典グッズ　ユニフォームTシャツ or PCケース※どれかひとつ（選択されたものをプレゼントします）",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 4,
      },
      {
        title: "卓上カレンダープレゼント",
        explain:
          "オリジナルリバーシブル卓上カレンダーをお送りします！（※ユニフォームTシャツと併せて発送）※卓上カレンダーは無くなり次第終了になります",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 4,
      },
      {
        title: "試合会場での応援グッズ配布",
        explain:
          "ログインして視聴可能な会員限定動画をお届けします。>>会員限定動画はこちら",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 4,
      },
      {
        title: "会員証の発行",
        explain: "※応援グッズは変更となる場合がありますのでご承知おきください",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 4,
      },
      {
        title: "メールマガジンの発行",
        explain:
          "ＮＥＣスポーツ情報が満載のメールマガジンを発行いたします。公式戦チケットやイベント情報をいち早くお知らせいたします。",
        src: "",
        flex: 4,
      },
      {
        title: "会員専用WEBサイトのご利用",
        explain:
          "会員の方だけがご利用いただける動画サービス、壁紙やスクリーンセーバーのダウンロードサービスなどをご利用いただけます。>>会員限定WEBサイトはこちら",
        src: "",
        flex: 4,
      },
      {
        title: "サポートショップでの特典",
        explain:
          "サポートショップで会員証を提示すると特別サービスを受けることができる！※ショップによって特別サービスの有無がありますのでご注意ください",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 4,
      },
    ],
  }),
  computed: {
    user() {
      return this.$auth.user
    },
    auth() {
      return this.$store.$auth
    },
  },
  mounted() {
    if (this.$auth.loggedIn) {
      let self = this
      let url = "/rcms-api/1/topics1"
      this.$auth.ctx.$axios.get(url).then(function (response) {
        self.topics_list = response.data.list
      })
    }
  },
}
</script>
