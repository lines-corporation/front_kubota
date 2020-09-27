<template>
  <div class="container">
    <div class="article-page" v-if="product_id">
      <header>
        <h2 class="form-ttl">
          {{ item.topics_name }} {{ item.subject }}
        </h2>
      </header>
      <div class="theme--light v-stepper">
        <div class="v-stepper__content">
          <p>
            {{ item.product_data.ymd }}
          </p>
          <v-form
            ref="form3"
            v-model="valid"
            lazy-validation
            @submit.prevent="purchase"
          >
            <v-container fluid>
              <v-row>
                <v-col cols="4">
                  <v-subheader>会場名</v-subheader>
                </v-col>
                <v-col cols="8">
                   {{ item.product_data.ext_col_01 }}
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-subheader>対戦相手</v-subheader>
                </v-col>
                <v-col cols="8">
                   {{ item.product_data.ext_col_02 }}
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-subheader>イベント概要</v-subheader>
                </v-col>
                <v-col cols="8">
                   {{ item.product_data.ext_col_03 }}
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-subheader>試合詳細</v-subheader>
                </v-col>
                <v-col cols="8">
                   {{ item.product_data.ext_col_04 }}
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-subheader>当日受付時間</v-subheader>
                </v-col>
                <v-col cols="8">
                   {{ item.product_data.ext_col_05 }}
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-subheader>試合会場開場時間</v-subheader>
                </v-col>
                <v-col cols="8">
                   {{ item.product_data.ext_col_06 }}
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-subheader>注意事項</v-subheader>
                </v-col>
                <v-col cols="8">
                   {{ item.product_data.ext_col_07 }}
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-subheader>チケット単価</v-subheader>
                </v-col>
                <v-col cols="8">
                   {{ item.price_02 }}円
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-subheader><span style="color: red;">*</span>チケット枚数</v-subheader>
                </v-col>
                <v-col cols="8">
                  <v-select
                    v-model="quantity"
                    :items="quantity_list"
                    menu-props="auto"
                    label="枚数"
                    hide-details
                    single-line
                    outlined
                    :rules="[rules.required]"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-subheader><span style="color: red;">*</span>支払方法</v-subheader>
                </v-col>
                <v-col cols="8">
                  <v-radio-group v-model="ec_payment_id">
                    <v-radio label="カード決済" value="61" />
                    <v-radio label="銀行振り込み" value="60" />
                  </v-radio-group>
                  <p v-if="ec_payment_id == '60'" class="body-1">
                    振込先がメールで送信されますので、そちらで振込先をご確認ください。
                  </p>
                  <div v-if="ec_payment_id == '61'" class="card-wrapper">
                    <v-text-field
                      id="cardNumber"
                      v-model="cardNumber"
                      label="クレジットカード番号"
                      outlined
                      :rules="[rules.required]"
                    />
                    <v-text-field
                      id="cardName"
                      v-model="cardName"
                      label="お名前（ローマ字）"
                      outlined
                      :rules="[rules.required]"
                    />
                    <v-row dense>
                      <v-col cols="4">
                        <v-select
                          v-model="cardMonth"
                          :items="[
                            { value: '1', text: '1月' },
                            { value: '2', text: '2月' },
                            { value: '3', text: '3月' },
                            { value: '4', text: '4月' },
                            { value: '5', text: '5月' },
                            { value: '6', text: '6月' },
                            { value: '7', text: '7月' },
                            { value: '8', text: '8月' },
                            { value: '9', text: '9月' },
                            { value: '10', text: '10月' },
                            { value: '11', text: '11月' },
                            { value: '12', text: '12月' },
                          ]"
                          menu-props="auto"
                          label="月"
                          hide-details
                          single-line
                          outlined
                          :rules="[rules.required]"
                        />
                      </v-col>
                      <v-col cols="4">
                        <v-select
                          v-model="cardYear"
                          :items="[
                            { value: '20', text: '2020年' },
                            { value: '21', text: '2021年' },
                            { value: '22', text: '2022年' },
                            { value: '23', text: '2023年' },
                            { value: '24', text: '2024年' },
                            { value: '25', text: '2025年' },
                            { value: '26', text: '2026年' },
                            { value: '27', text: '2027年' },
                            { value: '28', text: '2028年' },
                            { value: '29', text: '2029年' },
                            { value: '30', text: '2030年' },
                          ]"
                          menu-props="auto"
                          label="年"
                          hide-details
                          single-line
                          outlined
                          :rules="[rules.required]"
                        />
                      </v-col>
                      <v-col cols="4">
                        <v-text-field
                          id="cardCvv"
                          v-model="cardCvv"
                          label="CVV"
                          outlined
                          :rules="[rules.required]"
                        />
                      </v-col>
                    </v-row>
                  </div>
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
                  >
                    登録する
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  auth: false,
  data: () => ({
    item: [],
    valid: true,
    temp_user: false,
    success_message: "",
    product_id: null,
    ec_payment_id: "61",
    quantity: 1,
    quantity_list: [{ value: '1', text: '1枚' }],
    token: "",
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
    cardName: "",
    cardNumber: "",
    cardMonth: "",
    cardYear: "",
    cardCvv: "",
    loading: false,
  }),
  mounted() {
    let self = this
    let url = "/rcms-api/1/product/" + this.$route.params.id
    this.$auth.ctx.$axios.get(url).then(function (response) {
      self.item = response.data.details
      self.product_id = response.data.details.product_id

      for (let i = 2; i <= response.data.details.sale_limit; i++) {
        self.quantity_list.push({ value: i, text: i + "枚" })
      }
    })
  },
  methods: {
    purchase() {
      this.loading = true
      if (this.$refs.form3.validate()) {
        let self = this

        if (this.ec_payment_id == 61) {
          // eslint-disable-next-line no-undef
          let paygentToken = new PaygentToken()
          paygentToken.createToken(
            process.env.PAYGENT_MERCHANT_ID,
            process.env.PAYGENT_TOKEN,
            {
              card_number: self.cardNumber,
              expire_year: self.cardYear,
              expire_month: self.cardMonth,
              cvc: self.cardCvv,
              name: self.cardName,
            },
            function (response) {
              if (response.result == "0000") {
                self.$auth.ctx.$axios
                  .post("/rcms-api/1/ec/purchase", {
                    ec_payment_id: parseInt(self.ec_payment_id),
                    product_id: parseInt(self.product_id),
                    quantity: parseInt(self.quantity),
                    card_token: response.tokenizedCardObject.token,
                  })
                  .then(() => {
                    self.$store.dispatch(
                      "snackbar/setMessage",
                      "チケットを購入いたしました。"
                    )
                    self.$store.dispatch("snackbar/snackOn")

                    self.$auth.fetchUser().then(() => {
                      self.$router.push("/")
                      self.loading = false
                    })
                  })
                  .catch(function (error) {
                    self.$store.dispatch(
                      "snackbar/setError",
                      error.response.data.errors?.[0]
                    )
                    self.$store.dispatch("snackbar/snackOn")
                    self.loading = false
                  })
              } else {
                self.$store.dispatch(
                  "snackbar/setError",
                  "カード入力内容に不備があります。再度、入力内容をご確認ください[code:" +
                    response.result +
                    "]"
                )
                self.$store.dispatch("snackbar/snackOn")
                self.loading = false
              }
            }
          )
        } else {
          self.$auth.ctx.$axios
            .post("/rcms-api/1/ec/purchase", {
              ec_payment_id: parseInt(self.ec_payment_id),
              product_id: parseInt(self.product_id),
              quantity: parseInt(self.quantity),
            })
            .then(() => {
              self.$store.dispatch(
                "snackbar/setMessage",
                self.success_message +
                  "購入の申し込みを受け付けました。メールをご確認の上、決済手続きをお願いいたします。"
              )
              self.$store.dispatch("snackbar/snackOn")
              self.$router.push("/")
              self.loading = false
            })
            .catch(function (error) {
              self.$store.dispatch(
                "snackbar/setError",
                error.response.data.errors?.[0]
              )
              self.$store.dispatch("snackbar/snackOn")
              self.loading = false
            })
        }
      } else {
        this.loading = false
      }
    },
  },
}
</script>
