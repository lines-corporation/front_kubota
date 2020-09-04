<template>
  <div class="container">
    <div v-if="!auth.loggedIn">
      <form @submit.prevent="login">
        <h3 class="subtitle mb-3">
          ロケッツクラブ会員の方は以下よりログインしてください。
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
          2019年度ロケッツクラブ会員で更新の方は以下よりログインしてください。
        </h3>
        <p class="body-1">
          <NuxtLink to="/login_update">
            ログインはこちらから
          </NuxtLink>
        </p>
        <p class="body-1">
          <NuxtLink to="/reminder">
            パスワードを忘れた方はこちらから
          </NuxtLink>
        </p>
        <h3 class="subtitle mb-3">
          新規入会はこちら
        </h3>
        <p class="body-1">
          <NuxtLink to="/form">
            社外の方はこちらの会員登録フォームへ
          </NuxtLink>
        </p>
        <p class="body-1">
          <NuxtLink to="/inquiry">
            社内の方はお問い合わせください
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
                  スター会員になる場合はこちら
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
                      v-for="item in topics_list"
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
                      v-for="item in topics_list"
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
  </div>
</template>

<script>
export default {
  middleware: "auth",
  auth: false,
  data: () => ({
    can_upgrade: true,
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

      let url = "/rcms-api/1/tickets"
      this.$auth.ctx.$axios.get(url).then(function (response) {
        self.topics_list = response.data.list
      })
    }
  },
}
</script>
