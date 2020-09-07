<template>
  <div>
    <header>
      <h2>
        プロフィール編集
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
              v-model="m_tel"
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
              変更する
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import axios from "axios"

export default {
  auth: false,
  data() {
    return {
      valid: true,
      e1: 1,
      access_token: "",
      password_show: false,
      password: "",
      email: "",
      fax: "",
      tel: "",
      m_tel: "",
      email2: "",
      name: "",
      nameKana: "",
      zip: "",
      tdfk_cd: "",
      address1: "",
      address2: "",
      address3: "",
      birth: "",
      menu: false,
      arrTdfk_cd: [
        { code: "北海道", name: "北海道" },
        { code: "青森県", name: "青森県" },
        { code: "岩手県", name: "岩手県" },
        { code: "宮城県", name: "宮城県" },
        { code: "秋田県", name: "秋田県" },
        { code: "山形県", name: "山形県" },
        { code: "福島県", name: "福島県" },
        { code: "茨城県", name: "茨城県" },
        { code: "栃木県", name: "栃木県" },
        { code: "群馬県", name: "群馬県" },
        { code: "埼玉県", name: "埼玉県" },
        { code: "千葉県", name: "千葉県" },
        { code: "東京都", name: "東京都" },
        { code: "神奈川県", name: "神奈川県" },
        { code: "新潟県", name: "新潟県" },
        { code: "山梨県", name: "山梨県" },
        { code: "長野県", name: "長野県" },
        { code: "富山県", name: "富山県" },
        { code: "石川県", name: "石川県" },
        { code: "福井県", name: "福井県" },
        { code: "静岡県", name: "静岡県" },
        { code: "愛知県", name: "愛知県" },
        { code: "岐阜県", name: "岐阜県" },
        { code: "三重県", name: "三重県" },
        { code: "滋賀県", name: "滋賀県" },
        { code: "京都府", name: "京都府" },
        { code: "大阪府", name: "大阪府" },
        { code: "兵庫県", name: "兵庫県" },
        { code: "奈良県", name: "奈良県" },
        { code: "和歌山県", name: "和歌山県" },
        { code: "鳥取県", name: "鳥取県" },
        { code: "島根県", name: "島根県" },
        { code: "岡山県", name: "岡山県" },
        { code: "広島県", name: "広島県" },
        { code: "山口県", name: "山口県" },
        { code: "徳島県", name: "徳島県" },
        { code: "香川県", name: "香川県" },
        { code: "愛媛県", name: "愛媛県" },
        { code: "高知県", name: "高知県" },
        { code: "福岡県", name: "福岡県" },
        { code: "佐賀県", name: "佐賀県" },
        { code: "長崎県", name: "長崎県" },
        { code: "熊本県", name: "熊本県" },
        { code: "大分県", name: "大分県" },
        { code: "宮崎県", name: "宮崎県" },
        { code: "鹿児島県", name: "鹿児島県" },
        { code: "沖縄県", name: "沖縄県" },
      ],
      rules: {
        required: (value) => !!value || "この項目は必須入力です",
        password_min: (v) => v.length >= 8 || "最低8文字以上を入力してください",
        zip_length: (v) => v.length > 7 || "7文字の半角数字で入力してください",
      },
    }
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"))
    },
    zip: function (val) {
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
    },
  },
  methods: {
    regist() {
      this.$auth.ctx.$axios
        .post("/rcms-api/1/member/update", {
          email: "",
          login_pwd: "",
          nickname: "",
          text: "",
        })
        .then(function (response) {
          if (response.data.code == "200") {
            console.log(response.data.columns)
          }
        })
    },
    save(birth) {
      this.$refs.menu.save(birth)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
