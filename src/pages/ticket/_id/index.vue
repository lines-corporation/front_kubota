<template>
  <div class="container">
    <div v-if="topics_id" class="article-page ticket-box">
      <header>
        <h2 class="form-ttl">
          {{ item.subject }}
        </h2>
      </header>
      <div class="theme--light v-stepper">
        <div class="v-stepper__content">
          <p class="date-t">
            {{ item.ymd }}
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
                  {{ item.ext_col_01 }}
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-subheader>対戦相手</v-subheader>
                </v-col>
                <v-col cols="8">
                  {{ item.ext_col_02 }}
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-subheader>イベント概要</v-subheader>
                </v-col>
                <v-col cols="8">
                  {{ item.ext_col_03 }}
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-subheader>試合詳細</v-subheader>
                </v-col>
                <v-col cols="8">
                  {{ item.ext_col_04 }}
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-subheader>当日受付時間</v-subheader>
                </v-col>
                <v-col cols="8">
                  {{ item.ext_col_05 }}
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-subheader>試合会場開場時間</v-subheader>
                </v-col>
                <v-col cols="8">
                  {{ item.ext_col_06 }}
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-subheader>注意事項</v-subheader>
                </v-col>
                <v-col cols="8">
                  {{ item.ext_col_07 }}
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-subheader>申込可能枚数</v-subheader>
                </v-col>
                <v-col cols="8">
                  お一人様{{ item.ext_col_08 }}枚まで
                </v-col>
              </v-row>
            </v-container>

            <v-container fluid>
              <v-container fluid>
                <v-card class="mx-auto" outlined>
                  <v-card-text>
                    <h3>購入済み・予約済みのチケット</h3>
                    <v-simple-table :fixed-header="false">
                      <template v-slot:default>
                        <thead>
                          <tr>
                            <th class="text-left">
                              注文番号
                            </th>
                            <th class="text-left">
                              ステータス
                            </th>
                            <th class="text-left">
                              内容
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            v-for="order in order_list"
                            :key="order.ec_order_id"
                          >
                            <td>{{ order.ec_order_id }}</td>
                            <td v-text="order_status(order.ec_payment_id,order.payment_status)" />
                            <td>
                              <table>
                                <tr
                                  v-for="order_detail in order.order_details"
                                  :key="order_detail.product_id"
                                >
                                  <td class="text-left" v-text="prodcut_nm(order_detail.product_id)" />
                                  <td class="text-left">
                                    {{ order_detail.price }}円
                                  </td>
                                  <td class="text-left">
                                    {{ order_detail.quantity }}枚
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                        </table>
                      </template>
                    </v-simple-table>
                    </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-container>

              <v-container v-if="quantity_list.length > 1 && product_list.length > 0" fluid>
                <v-card class="mx-auto" outlined>
                  <v-card-text>
                    <h3>チケットの購入</h3>
                    <v-simple-table :fixed-header="false">
                      <template v-slot:default>
                        <thead>
                          <tr>
                            <th class="text-left">
                              席種
                            </th>
                            <th class="text-left">
                              チケット単価
                            </th>
                            <th class="text-left">
                              枚数
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="t in product_list" :key="t.product_id">
                            <td>{{ t.subject }}</td>
                            <td>{{ t.price_02 }}円</td>
                            <td>
                              <v-select
                                v-if="t.stock > 0"
                                v-model="order_products[t.product_id]"
                                :items="quantity_list"
                                menu-props="auto"
                                label="枚数"
                                hide-details
                                single-line
                                outlined
                              />
                              <p v-if="t.stock == 0">
                                完売
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </template>
                    </v-simple-table>

                    <v-row>
                      <v-col cols="4">
                        <v-subheader>
                          <span style="color: red;">*</span>支払方法
                        </v-subheader>
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
                          購入する
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-container>
            </v-container>
          </v-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    item: [],
    product_list: [],
    order_list: [],
    valid: true,
    can_order: false,
    success_message: "",
    topics_id: null,
    ec_payment_id: "61",
    order_products: [],
    purchase_cnt:0,
    from_order_products:null,
    quantity_list: [{ value: "0", text: "0枚" }],
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
    let url = "/rcms-api/1/ticket/" + this.$route.params.id
    this.$auth.ctx.$axios.get(url).then(function (response) {
      self.item = response.data.details
      self.topics_id = self.item.topics_id
      let url_p = "/rcms-api/1/product_list?topics_id=" + self.topics_id
      self.$auth.ctx.$axios.get(url_p).then(function (res_p) {
        for (const p_list of res_p.data.list) {
          if(p_list.open_flg){
            self.product_list.push(p_list)
          }
        }
      })

      let url_o = "/rcms-api/1/order_list?is_canceled=0&without_payment_error=1&topics_id=" + self.topics_id
      self.$auth.ctx.$axios.get(url_o).then(function (res_o) {
        self.order_list = res_o.data.list
        for (const o_list of res_o.data.list) {
          for (const o_detail of o_list.order_details) {
            self.purchase_cnt += parseInt(o_detail.quantity)
          }
        }
        for (let i = 1; i <= parseInt(self.item.ext_col_08) - self.purchase_cnt; i++) {
          self.quantity_list.push({ value: i, text: i + "枚" })
        }
      })

    })

    //self.product_id = response.data.details.product_id
    //self.can_order = response.data.details.order_list.length ? false : true
  },
  methods: {
    prodcut_nm(product_id) {

      for (const p of this.product_list) {
        if(p.product_id == product_id){
        return p.subject
        }
      }
      return ""
    },
    order_status(ec_payment_id,payment_status){
      let rtn = ""
      if(ec_payment_id==60){
        rtn += "銀行振り込み"
        if(payment_status == 410){
          rtn += "(予約中・未決済)"
        }else if(payment_status == 450){
          rtn += "(入金確認済み)"
        }else{
          rtn += "(キャンセル)"
        }
      }else if(ec_payment_id==61){
        rtn += "カード決済"
        if(payment_status == 150){
          rtn += "(決済完了)"
        }else if(payment_status == 9150){
          rtn += "(決済失敗)"
        }else{
          rtn += "(キャンセル)"
        }
      }
      
      return rtn
    },
    purchase() {
      this.loading = true
      let self = this
      let from_order_products = []
      let order_cnt = 0
      Object.keys(self.order_products).forEach(function (key) {
        let obj = new Object()
        obj.product_id = key
        obj.quantity = self.order_products[key]
        order_cnt += parseInt(obj.quantity)
        Object.assign({}, obj)
        from_order_products.push(obj)
      })
      
      if(self.purchase_cnt + order_cnt > parseInt(self.item.ext_col_08)){
        self.$store.dispatch(
          "snackbar/setError",
          "1試合でご購入いただける合計上限枚数を超えています。"
        )
        self.$store.dispatch("snackbar/snackOn")
        self.loading = false
        return
      }

      if (this.$refs.form3.validate()) {
        
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
                    order_products: from_order_products,
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
              order_products: from_order_products,
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
<style scoped>
.col {
  white-space: pre-line;
}
</style>