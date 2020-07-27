<template>
<div>
<header>
    <h2>
      会員登録
    </h2>
</header>
<form @submit.prevent="regist">
<v-container fluid>
    <v-row>
      <v-col cols="4">
        <v-subheader>所属</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-select
          v-model="company_code"
          :items="company_codes"
          item-text="name"
          item-value="code"
          menu-props="auto"
          label="所属会社を選択してください"
          hide-details
          single-line
          outlined
        ></v-select>
      </v-col>
     </v-row>

    <v-row>
      <v-col cols="4">
        <v-subheader>社員番号</v-subheader>
      </v-col>
      <v-col cols="8">
        
      </v-col>
     </v-row>

    <v-row>
      <v-col cols="4">
        <v-subheader>社内文書メール</v-subheader>
      </v-col>
      <v-col cols="8">
        
      </v-col>
     </v-row>

    <v-row>
      <v-col cols="4">
        <v-subheader>お名前</v-subheader>
      </v-col>
      <v-col cols="8">
        
      </v-col>
     </v-row>

    <v-row>
      <v-col cols="4">
        <v-subheader>お名前(フリガナ)</v-subheader>
      </v-col>
      <v-col cols="8">
        
      </v-col>
     </v-row>

    <v-row>
      <v-col cols="4">
        <v-subheader>性別</v-subheader>
      </v-col>
      <v-col cols="8">
        
      </v-col>
     </v-row>

    <v-row>
      <v-col cols="4">
        <v-subheader>生年月日</v-subheader>
      </v-col>
      <v-col cols="8">
        
      </v-col>
     </v-row>

    <v-row>
      <v-col cols="4">
        <v-subheader>郵便番号</v-subheader>
      </v-col>
      <v-col cols="8">
        
      </v-col>
     </v-row>

    <v-row>
      <v-col cols="4">
        <v-subheader>都道府県</v-subheader>
      </v-col>
      <v-col cols="8">
        
      </v-col>
     </v-row>
    <v-row>
      <v-col cols="4">
        <v-subheader>市区町村</v-subheader>
      </v-col>
      <v-col cols="8">
        
      </v-col>
     </v-row>
    <v-row>
      <v-col cols="4">
        <v-subheader>番地</v-subheader>
      </v-col>
      <v-col cols="8">
        
      </v-col>
     </v-row>
    <v-row>
      <v-col cols="4">
        <v-subheader>建物名／部屋番号</v-subheader>
      </v-col>
      <v-col cols="8">
        
      </v-col>
     </v-row>
    <v-row>
      <v-col cols="4">
        <v-subheader>電話番号</v-subheader>
      </v-col>
      <v-col cols="8">
        
      </v-col>
     </v-row>
    <v-row>
      <v-col cols="4">
        <v-subheader>携帯電話番号</v-subheader>
      </v-col>
      <v-col cols="8">
        
      </v-col>
     </v-row>
    <v-row>
      <v-col cols="4">
        <v-subheader>FAX番号</v-subheader>
      </v-col>
      <v-col cols="8">
        
      </v-col>
     </v-row>
    <v-row>
      <v-col cols="4">
        <v-subheader>第１メールアドレス</v-subheader>
      </v-col>
      <v-col cols="8">
        
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
            outlined
          ></v-text-field>
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
          name="input-10-1"
          label="Normal with hint text"
          hint="At least 8 characters"
          counter
          @click:append="password_show = !password_show"
        ></v-text-field>
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

</form>
</div>
</template>

<script>
import axios from 'axios';

export default {
  auth: false,
  created () {
    let self = this;
    if(!self.$store.$auth.getToken('local')){
      let url = "/rcms-api/1/token";
      this.$auth.ctx.$axios.post(url,{}).then(function(response) {
          self.$store.$auth.setToken('local',response.data.access_token);
      });
    }
  },
  methods: {
    regist() {
      this.$auth.ctx.$axios.post('/rcms-api/1/members/insert',
      {
        email:'test2@email.com',
        login_pwd: 'test1234',
        nickname: 'aaaa',
        text: 'test',
      },{
        headers: {'X-RCMS-API-ACCESS-TOKEN': this.$store.$auth.getToken('local')}
      }
      ).then(function(response) {
        if (response.data.code == "200") {
          console.log(response.data.columns);
        }
      });
    }
  },
  data () {
    return {
      access_token: '',
      password_show: false,
      password: '',
      email2: 'email2',
      company_code: 'company_code',
      company_codes: [
          {header: 'あ'  },
          { code: '000001', name: '000001 ＮＥＣ' },
          { code: '139226', name: '139226 ＮＥＣエンベデッドプロダクツ' },
          {header: 'か'  },
          { code: '111003', name: '111003 ＮＥＣ企業年金基金' },
          { code: '114921', name: '114921 ＮＥＣキャピタルソリューション' },
          { code: '111002', name: '111002 日本電気健康保険組合' },
          { code: '113320', name: '113320 日本電気航空宇宙システム' },
          { code: '113923', name: '113923 国際社会経済研究所' },
          {header: 'さ'  },
          { code: '112211', name: '112211 ＮＥＣ静岡ビジネス' },
          { code: '114330', name: '114330 ＮＥＣスペーステクノロジー' },
          { code: '113414', name: '113414 ＮＥＣソリューションイノベータ' },
          {header: 'た'  },
          { code: '113105', name: '113105 ＮＥＣ通信システム' },
          { code: '113901', name: '113901 ＮＥＣディスプレイソリューション' },
          { code: '113980', name: '113980 ＮＥＣ特許技術情報センター' },
          {header: 'な'  },
          { code: '113460', name: '113460 ＮＥＣネクサソリューションズ' },
          { code: '113305', name: '113305 ＮＥＣネッツエスアイ' },
          { code: '113307', name: '113307 ＮＥＣネッツエスアイ・サービス' },
          { code: '112206', name: '112206 ＮＥＣネットイノベーション' },
          { code: '113332', name: '113332 ＮＥＣネットワーク・センサ' },
          {header: 'は'  },
          { code: '113947', name: '113947 ＮＥＣＶＡＬＷＡＹ' },
          { code: '113953', name: '113953 ＮＥＣファシリティーズ' },
          { code: '113412', name: '113412 ＮＥＣフィールディング' },
          { code: '139070', name: '113332 139070 ＮＥＣフィールディングシステムテクノロジー' },
          { code: '112743', name: '112743 ＮＥＣプラットフォームズ' },
          { code: '113968', name: '113968 ＮＥＣフレンドリースタフ' },
          { code: '139225', name: '113968 ＮＥＣパーソナルコンピュータ' },
          {header: 'ま'  },
          { code: '113220', name: '113220 ＮＥＣマグナスコミュニケーションズ' },
          { code: '113997', name: '113997 ＮＥＣマネジメントパートナー' },
          {header: 'ら'  },
          { code: '113941', name: '113941 ＮＥＣライベックス' },
        ],
      rules: {
          required: value => !!value || 'Required.',
          password_min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match'),
        },
    }
  },
  watch: {
    zip: function(val) {
      if (7 != val.length) {
        this.tdfk_cd = "";
        this.address1 = "";
        this.address2 = "";
      }

      let self = this;
      let url = "https://api.zipaddress.net/?zipcode=" + val;
      axios.get(url).then(function(response) {
        if (response.data.code == "200") {
          self.tdfk_cd = response.data.data.pref;
          self.address1 = response.data.data.address;
          self.address2 = response.data.data.town;
        } else {
          self.tdfk_cd = "";
          self.address1 = "";
          self.address2 = "";
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
