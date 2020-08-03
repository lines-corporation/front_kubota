<template>
  <div>
    <header>
      <h2>
        社外会員登録
      </h2>
    </header>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">
          メールアドレス登録
        </v-stepper-step>

        <v-divider />

        <v-stepper-step :complete="e1 > 2" step="2">
          メールアドレス確認
        </v-stepper-step>

        <v-divider />

        <v-stepper-step :complete="e1 > 3" step="3">
          情報登録
        </v-stepper-step>

        <v-divider />

        <v-stepper-step step="4">
          プラン選択
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <p class="mt-1 max-w-4xl text-sm leading-5 text-gray-500">
            会員登録をされる際は、以下の規約にご同意いただく必要がございます。ご一読の上、同意いただける場合は[同意して送信する]ボタンをクリックしてください。<br />
            ご入会後は1年以上の継続をお願いします(試合シーズンのみのご入会はご遠慮いただいております)
          </p>

          <v-container
            id="scroll-target"
            style="max-height: 300px; border: 1px solid #000000de;"
            class="overflow-y-auto"
            outlined
          >
            <v-row>
              <dl
                class="mt-2 overflow-y-scroll text-xs box-border h-40 border-2 border-gray-300 bg-gray-100"
              >
                <dt>【NECスポーツ後援会の特典】</dt>
                <dd>
                  <ol class="px-6 py-2 list-decimal">
                    <li>会員証の発行</li>
                    <li>
                      ＮＥＣスポーツの公式戦観戦チケットの無料配布（抽選の場合もあり）
                    </li>
                    <li>試合会場での応援グッズ配布</li>
                    <li>入会記念ストラップ・卓上カレンダーのプレゼント</li>
                    <li>各種イベントへの参加</li>
                    <li>メールマガジンの送付</li>
                    <li>
                      ＮＥＣスポーツウェブサイト上の会員専用ページへのアクセス
                    </li>
                  </ol>
                </dd>

                <dt>【会費】</dt>
                <dd class="px-3 py-2">
                  毎月300円（申込の翌月から給料控除）
                </dd>

                <dt>【個人情報の取り扱いについて】</dt>
                <dd class="px-3 py-2">
                  <ol class="px-6 py-2 list-decimal">
                    <li>個人情報の利用目的</li>
                    <dd>
                      本会の運営に関して知り得た会員の個人情報は、日本電気株式会社（以下、ＮＥＣといいます）が、以下の目的のみに利用いたします。
                    </dd>
                    <dd class="px-3 py-2">
                      ○本会に関する会員への連絡<br />
                      ○会員のご要望に対する対応<br />
                      ○本会の活動・運営の向上等に向けた活動（会員ニーズの分析、サービスの開発、評価収集・分析、提案活動等）<br />
                      ○各種情報の提供（DM、E-Mail等）<br />
                    </dd>
                    <li>個人情報の第三者提供</li>
                    <dd>
                      ＮＥＣは、第1項の目的の内容によって、個人情報を適切に管理するように契約等により義務付けた業務委託先に対し、個人情報の取り扱いに関する業務委託を行う場合がありますが、法令等に特段の定めがある場合を除き、その他の第三者には一切提供いたしません。
                    </dd>
                    <li>個人情報の管理</li>
                    <dd>
                      会員ご自身の個人情報に関する照会や、訂正、追加または削除については、会員ご本人から下記事務局に別途連絡いただくことにより、対応させていただきます。
                    </dd>
                  </ol>
                </dd>
                <dd class="px-3 py-2">
                  個人情報の取り扱い責任者： ＮＥＣ総務部長<br />
                  ご連絡先：<br />
                  ＮＥＣ人事総務部 ＮＥＣスポーツ事務局<br />
                  E-Mail koenkai@spo.nec.com <br />
                </dd>
                <dd class="px-3 py-2">
                  ＮＥＣの個人情報保護：
                  http://jpn.nec.com/site/privacy/index.html
                </dd>

                <dd class="px-3 py-2">
                  【運営業務の委託について】<br />
                  ＮＥＣ人事総務部 ＮＥＣスポーツ事務局<br />
                  は、ＮＥＣロケッツクラブ事務局（運営企業有限会社ル・スポール）会員運営業務を委託しています。<br />
                  <br />
                  ＮＥＣロケッツクラブ事務局<br />
                  ・お客様問合せ窓口TEL：03-6721-0636<br />
                  ・お客様問合せ窓口メールアドレス：rockets@necsports.net<br />
                  ・対応日：土日祝日、年末を除く、平日<br />
                  ・対応時間：10:00-17:00<br />
                </dd>

                <dd class="px-3 py-2">
                  以上
                </dd>
              </dl>
            </v-row>
          </v-container>
          <v-container>
            <v-row>
              <v-form
                ref="form1"
                v-model="valid"
                lazy-validation
                @submit.prevent="send_email"
              >
                <p>
                  ご登録いただくメールアドレスを入力して送信をしてください。
                </p>
                <p>
                  <v-text-field
                    v-model="email"
                    label="メールアドレス"
                    type="email"
                    :rules="[rules.required]"
                    outlined
                  />
                </p>
                <v-btn type="submit" block x-large color="success" dark>
                  同意して送信する
                </v-btn>
              </v-form>
            </v-row>
          </v-container>
        </v-stepper-content>

        <v-stepper-content step="2">
          <p class="mt-1 max-w-4xl text-sm leading-5 text-gray-500">
            メールボックスに届いたメールに記載されているリンクからアクセスをしてください。
          </p>
          <v-container />
        </v-stepper-content>

        <v-stepper-content step="3">
          <header>
            <h2>
              社外会員登録 情報登録
            </h2>
          </header>
          <v-form
            ref="form3"
            v-model="valid"
            lazy-validation
            @submit.prevent="regist"
          >
            <v-container fluid>
              <v-row>
                <v-col cols="4">
                  <v-subheader>お名前</v-subheader>
                </v-col>
                <v-col cols="8">
                  <v-text-field
                    v-model="name"
                    label="お名前"
                    :rules="[rules.required]"
                    outlined
                  />
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="4">
                  <v-subheader>お名前(フリガナ)</v-subheader>
                </v-col>
                <v-col cols="8">
                  <v-text-field
                    v-model="nameKana"
                    label="お名前(フリガナ)"
                    :rules="[rules.required]"
                    outlined
                  />
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="4">
                  <v-subheader>性別</v-subheader>
                </v-col>
                <v-col cols="8">
                  <v-radio-group v-model="sex" row>
                    <v-radio label="男性" value="m" />
                    <v-radio label="女性" value="f" />
                  </v-radio-group>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="4">
                  <v-subheader>生年月日</v-subheader>
                </v-col>
                <v-col cols="8">
                  <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="birth"
                        label="生年月日"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      />
                    </template>
                    <v-date-picker
                      ref="picker"
                      v-model="birth"
                      :max="new Date().toISOString().substr(0, 10)"
                      min="1900-01-01"
                      @change="save"
                    />
                  </v-menu>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="4">
                  <v-subheader>郵便番号</v-subheader>
                </v-col>
                <v-col cols="8">
                  <v-text-field
                    v-model="zip"
                    label="郵便番号"
                    type="number"
                    :rules="[rules.required, rules.zip_length]"
                    hint="ハイフンなしの半角数字7桁をご入力ください"
                    counter
                    outlined
                  />
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="4">
                  <v-subheader>都道府県</v-subheader>
                </v-col>
                <v-col cols="8">
                  <v-select
                    v-model="tdfk_cd"
                    :items="arrTdfk_cd"
                    item-text="name"
                    item-value="code"
                    menu-props="auto"
                    label="都道府県を選択してください"
                    :rules="[rules.required]"
                    hide-details
                    single-line
                    outlined
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-subheader>市区町村</v-subheader>
                </v-col>
                <v-col cols="8">
                  <v-text-field
                    v-model="address1"
                    label="市区町村"
                    :rules="[rules.required]"
                    outlined
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-subheader>番地</v-subheader>
                </v-col>
                <v-col cols="8">
                  <v-text-field
                    v-model="address2"
                    label="番地"
                    :rules="[rules.required]"
                    outlined
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-subheader>建物名／部屋番号</v-subheader>
                </v-col>
                <v-col cols="8">
                  <v-text-field
                    v-model="address3"
                    label="建物名／部屋番号"
                    outlined
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-subheader>電話番号</v-subheader>
                </v-col>
                <v-col cols="8">
                  <v-text-field
                    v-model="tel"
                    label="電話番号"
                    type="tel"
                    :rules="[rules.required]"
                    hint="ハイフンなしの半角数字をご入力ください"
                    counter
                    outlined
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-subheader>携帯電話番号</v-subheader>
                </v-col>
                <v-col cols="8">
                  <v-text-field
                    v-model="tel2"
                    label="携帯電話番号"
                    type="tel"
                    hint="ハイフンなしの半角数字をご入力ください"
                    counter
                    outlined
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-subheader>FAX番号</v-subheader>
                </v-col>
                <v-col cols="8">
                  <v-text-field
                    v-model="fax"
                    label="FAX番号"
                    type="tel"
                    hint="ハイフンなしの半角数字をご入力ください"
                    counter
                    outlined
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-subheader>
                    第１メールアドレス(ログイン時のIDになります)
                  </v-subheader>
                </v-col>
                <v-col cols="8">
                  <v-text-field
                    v-model="email"
                    label="第１メールアドレス"
                    :rules="[rules.required]"
                    type="email"
                    outlined
                    readonly
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-subheader>第２メールアドレス</v-subheader>
                </v-col>
                <v-col cols="8">
                  <v-text-field
                    v-model="email2"
                    label="第２メールアドレス"
                    type="email"
                    outlined
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-subheader>パスワード</v-subheader>
                </v-col>
                <v-col cols="8">
                  <v-text-field
                    v-model="password"
                    :append-icon="password_show ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.password_min]"
                    :type="password_show ? 'text' : 'password'"
                    name="password"
                    label="パスワード"
                    hint="最低8文字以上の英数混合のパスワードを設定ください。"
                    counter
                    @click:append="password_show = !password_show"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-btn type="submit" block x-large color="success" dark>
                    登録する
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-stepper-content>

        <v-stepper-content step="4">
          <header>
            <h2>
              プラン選択
            </h2>
          </header>
          <v-form
            ref="form4"
            v-model="valid"
            lazy-validation
            @submit.prevent="purchase"
          >
            <v-container fluid>
              <v-row>
                <v-col cols="4">
                  <v-subheader>性別</v-subheader>
                </v-col>
                <v-col cols="8">
                  <v-radio-group v-model="sex" row>
                    <v-radio label="男性" value="m" />
                    <v-radio label="女性" value="f" />
                  </v-radio-group>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
export default {
  auth: false,
  data() {
    return {
      email_hash: "",
      valid: true,
      e1: 1,
      token: "",
      card: {
        name: "OMISE VUEJS",
        number: "4111111111111111",
        expiration_month: "11",
        expiration_year: "29",
        security_code: "110",
      },
      access_token: "",
      password_show: false,
      password: "test1234",
      email: "",
      fax: "0332673900",
      tel: "0332673900",
      tel2: "09027658176",
      email2: "kenta+email2@diverta.co.jp",
      name: "かとう",
      nameKana: "カトウ",
      zip: "1620823",
      sex: "m",
      tdfk_cd: "13",
      address1: "aaa",
      address2: "bbb",
      address3: "ccc",
      birth: "1976-05-25",
      menu: false,
      arrTdfk_cd: [
        { code: "01", name: "北海道" },
        { code: "02", name: "青森県" },
        { code: "03", name: "岩手県" },
        { code: "04", name: "宮城県" },
        { code: "05", name: "秋田県" },
        { code: "06", name: "山形県" },
        { code: "07", name: "福島県" },
        { code: "08", name: "茨城県" },
        { code: "09", name: "栃木県" },
        { code: "10", name: "群馬県" },
        { code: "11", name: "埼玉県" },
        { code: "12", name: "千葉県" },
        { code: "13", name: "東京都" },
        { code: "14", name: "神奈川県" },
        { code: "15", name: "新潟県" },
        { code: "16", name: "富山県" },
        { code: "17", name: "石川県" },
        { code: "18", name: "福井県" },
        { code: "19", name: "山梨県" },
        { code: "20", name: "長野県" },
        { code: "21", name: "岐阜県" },
        { code: "22", name: "静岡県" },
        { code: "23", name: "愛知県" },
        { code: "24", name: "三重県" },
        { code: "25", name: "滋賀県" },
        { code: "26", name: "京都府" },
        { code: "27", name: "大阪府" },
        { code: "28", name: "兵庫県" },
        { code: "29", name: "奈良県" },
        { code: "30", name: "和歌山県" },
        { code: "31", name: "鳥取県" },
        { code: "32", name: "島根県" },
        { code: "33", name: "岡山県" },
        { code: "34", name: "広島県" },
        { code: "35", name: "山口県" },
        { code: "36", name: "徳島県" },
        { code: "37", name: "香川県" },
        { code: "38", name: "愛媛県" },
        { code: "39", name: "高知県" },
        { code: "40", name: "福岡県" },
        { code: "41", name: "佐賀県" },
        { code: "42", name: "長崎県" },
        { code: "43", name: "熊本県" },
        { code: "44", name: "大分県" },
        { code: "45", name: "宮崎県" },
        { code: "46", name: "鹿児島県" },
        { code: "47", name: "沖縄県" },
        { code: "99", name: "海外" },
      ],
      rules: {
        required: (value) => !!value || "この項目は必須入力です",
        password_min: (v) => v.length >= 8 || "最低8文字以上を入力してください",
        zip_length: (v) => v.length <= 7 || "7文字の半角数字で入力してください",
        is_hankaku: (v) =>
          !!v.match(/^[ｦ-ﾟ 0-9]*$/) || "半角英数字で入力してください",
        is_card_number: (v) =>
          (v.length >= 14 && v.length <= 16) ||
          "16桁から18桁の数字で入力してください",
      },
    }
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"))
    },
    zip: function (val) {
      /*
      if (7 != val.length) {
        this.tdfk_cd = ""
        this.address1 = ""
        this.address2 = ""
      }

      let self = this
      let url = "https://api.zipaddress.net/?zipcode=" + val
      axios.get(url).then(function (response) {
        if (response.data.code == "200") {
          self.tdfk_cd = response.data.data.pref
          self.address1 = response.data.data.address
          self.address2 = response.data.data.town
        } else {
          self.tdfk_cd = ""
          self.address1 = ""
          self.address2 = ""
        }
      })
      */
    },
  },
  created() {
    if (this.$route.query.key) {
      this.email_hash = this.$route.query.key
      let self = this
      self.$auth.ctx.$axios
        .post(
          "/rcms-api/1/member/invite",
          {
            email_hash: this.email_hash,
          },
          {
            withCredentials: true,
            headers: {
              "X-RCMS-API-ACCESS-TOKEN": self.$store.$auth.getToken("local"),
            },
          }
        )
        .then(function (response) {
          console.log(response)
          self.email = response.data.data.email
          self.$store.dispatch(
            "snackbar/setMessage",
            "メールアドレスを確認しました"
          )
          self.$store.dispatch("snackbar/snackOn")
          self.e1 = 3
        })
        .catch(function (error) {
          console.log(error)
          self.e1 = 2
        })
    }

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
    send_email() {
      if (this.$refs.form1.validate()) {
        let self = this
        self.$auth.ctx.$axios
          .post(
            "/rcms-api/1/member/invite",
            {
              email: this.email,
            },
            {
              withCredentials: true,
              headers: {
                "X-RCMS-API-ACCESS-TOKEN": self.$store.$auth.getToken("local"),
              },
            }
          )
          .then(function (response) {
            console.log(response)
            self.$store.dispatch("snackbar/setMessage", "メール送信しました")
            self.$store.dispatch("snackbar/snackOn")
            self.e1 = 2
          })
          .catch((error) => console.log(error))
      }
    },
    regist() {
      if (this.$refs.form3.validate()) {
        let self = this
        self.$auth.ctx.$axios
          .post(
            "/rcms-api/1/member/regist",
            {
              name1: this.name,
              namekana1: this.nameKana,
              sex: this.sex,
              birth: this.birth,
              zip_main: this.zip.substr(0, 3),
              zip_sub: this.zip.substr(3),
              tdfk_cd: this.tdfk_cd,
              address1: this.address1,
              address2: this.address2,
              address3: this.address3,
              tel: this.tel,
              tel2: this.tel2,
              fax: this.fax,
              email: this.email,
              email2: this.email2,
              login_pwd: this.password,
            },
            {
              withCredentials: true,
              headers: {
                "X-RCMS-API-ACCESS-TOKEN": self.$store.$auth.getToken("local"),
              },
            }
          )
          .then(function (response) {
            console.log(response)
            self.$store.dispatch("snackbar/setMessage", "情報登録しました")
            self.$store.dispatch("snackbar/snackOn")
            self.e1 = 4
          })
          .catch((error) => console.log(error))
      }
    },
    purchase() {
      if (this.$refs.form4.validate()) {
        let self = this

        let paygentToken = new PaygentToken()
        paygentToken.createToken(
          "40508",
          "test_rJ2o0DcPx35l3fg1Hvwe1lfb",
          {
            card_number: "4242424242424242",
            expire_year: "20",
            expire_month: "11",
            cvc: "123",
            name: "KENTA KATO",
          },
          function (response) {
            self.$auth.ctx.$axios
              .post(
                "/rcms-api/1/ec/purchase",
                {
                  ec_payment_id: 58,
                  product_id: 41201,
                  quantity: 1,
                  card_token: response.tokenizedCardObject.token,
                },
                {
                  withCredentials: true,
                  headers: {
                    "X-RCMS-API-ACCESS-TOKEN": self.$store.$auth.getToken(
                      "local"
                    ),
                  },
                }
              )
              .then(function (response) {
                console.log(response)
                if (response.data.code == "200") {
                  console.log(response.data.columns)
                }
                if (response.data.access_token) {
                  self.$store.$auth.setToken("local", response.data.access_token)
                }
              })
              .catch((error) => console.log(error))
          }
        )
       }
    },
    save(birth) {
      this.$refs.menu.save(birth)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
