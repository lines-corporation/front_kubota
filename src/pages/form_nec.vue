<template>
<div>
<header>
    <h2>
      社内会員登録
    </h2>
</header>
<form @submit.prevent="regist">
        <p class="mt-1 max-w-4xl text-sm leading-5 text-gray-500">
          会員登録をされる際は、以下の規約にご同意いただく必要がございます。ご一読の上、同意いただける場合は[同意する]ボタンをクリックしてください。<br/>
          ご入会後は1年以上の継続をお願いします(試合シーズンのみのご入会はご遠慮いただいております)
        </p>
    <v-container
    id="scroll-target"
    style="max-height: 400px"
    class="overflow-y-auto"
    outlined
  >
    <v-row>
<dl class="mt-2 overflow-y-scroll text-xs box-border h-40 border-2 border-gray-300 bg-gray-100">

<dt>【NECスポーツ後援会の特典】</dt>
<dd>
<ol class="px-6 py-2 list-decimal">
<li>会員証の発行</li>
<li>ＮＥＣスポーツの公式戦観戦チケットの無料配布（抽選の場合もあり）</li>
<li>試合会場での応援グッズ配布</li>
<li>入会記念ストラップ・卓上カレンダーのプレゼント</li>
<li>各種イベントへの参加</li>
<li>メールマガジンの送付</li>
<li>ＮＥＣスポーツウェブサイト上の会員専用ページへのアクセス</li>
</ol>
</dd>

<dt>【会費】</dt>
<dd class="px-3 py-2">毎月300円（申込の翌月から給料控除）</dd>

<dt>【個人情報の取り扱いについて】</dt>
<dd class="px-3 py-2">
<ol class="px-6 py-2 list-decimal">
<li>個人情報の利用目的 </li>
<dd>本会の運営に関して知り得た会員の個人情報は、日本電気株式会社（以下、ＮＥＣといいます）が、以下の目的のみに利用いたします。</dd>
<dd class="px-3 py-2">
　○本会に関する会員への連絡<br>
　○会員のご要望に対する対応<br>
　○本会の活動・運営の向上等に向けた活動（会員ニーズの分析、サービスの開発、評価収集・分析、提案活動等）<br>
　○各種情報の提供（DM、E-Mail等）<br>
</dd>
<li>個人情報の第三者提供 </li>
<dd>ＮＥＣは、第1項の目的の内容によって、個人情報を適切に管理するように契約等により義務付けた業務委託先に対し、個人情報の取り扱いに関する業務委託を行う場合がありますが、法令等に特段の定めがある場合を除き、その他の第三者には一切提供いたしません。</dd>
<li>個人情報の管理 </li>
<dd>会員ご自身の個人情報に関する照会や、訂正、追加または削除については、会員ご本人から下記事務局に別途連絡いただくことにより、対応させていただきます。</dd>
</ol>
</dd>
<dd class="px-3 py-2">
　　個人情報の取り扱い責任者：　ＮＥＣ総務部長<br>
　　ご連絡先：<br>
　　　ＮＥＣ人事総務部　ＮＥＣスポーツ事務局<br>
　　　E-Mail　　koenkai@spo.nec.com　<br>
</dd>　
<dd class="px-3 py-2">　ＮＥＣの個人情報保護：　http://jpn.nec.com/site/privacy/index.html</dd>

<dd class="px-3 py-2">
【運営業務の委託について】<br>
ＮＥＣ人事総務部 ＮＥＣスポーツ事務局<br>
は、ＮＥＣロケッツクラブ事務局（運営企業有限会社ル・スポール）会員運営業務を委託しています。<br>
<br>
ＮＥＣロケッツクラブ事務局<br>
  ・お客様問合せ窓口TEL：03-6721-0636<br>
  ・お客様問合せ窓口メールアドレス：rockets@necsports.net<br>
  ・対応日：土日祝日、年末を除く、平日<br>
  ・対応時間：10:00-17:00<br>
</dd>　

<dd class="px-3 py-2">以上</dd>

</dl>
    </v-row>
  </v-container>
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
          <v-text-field
            v-model="employee_no"
            label="社員番号"
            :rules="[rules.required]"
            outlined
          ></v-text-field>
      </v-col>
     </v-row>

    <v-row>
      <v-col cols="4">
        <v-subheader>社内文書メール</v-subheader>
      </v-col>
      <v-col cols="8">
          <v-text-field
            v-model="employee_mail"
            label="社内文書メール"
            :rules="[rules.required]"
            outlined
          ></v-text-field>
      </v-col>
     </v-row>

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
          ></v-text-field>
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
          ></v-text-field>
      </v-col>
     </v-row>

    <v-row>
      <v-col cols="4">
        <v-subheader>性別</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-radio-group v-model="sex" row>
          <v-radio label="男性" value="m"></v-radio>
          <v-radio label="女性" value="f"></v-radio>
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
      ></v-text-field>
    </template>
    <v-date-picker
      ref="picker"
      v-model="birth"
      :max="new Date().toISOString().substr(0, 10)"
      min="1900-01-01"
      @change="save"
    ></v-date-picker>
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
          ></v-text-field>
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
        ></v-select>
        
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
          ></v-text-field>
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
          ></v-text-field>
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
          ></v-text-field>
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
          ></v-text-field>
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
          ></v-text-field>
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
          ></v-text-field>
      </v-col>
     </v-row>
    <v-row>
      <v-col cols="4">
        <v-subheader>第１メールアドレス(ログイン時のIDになります)</v-subheader>
      </v-col>
      <v-col cols="8">
          <v-text-field
            v-model="email"
            label="第１メールアドレス"
            :rules="[rules.required]"
            type="email"
            outlined
          ></v-text-field>
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
          name="password"
          label="パスワード"
          hint="最低8文字以上の英数混合のパスワードを設定ください。"
          counter
          @click:append="password_show = !password_show"
        ></v-text-field>
      </v-col>
     </v-row>
         <v-row>
      <v-col cols="12">
        <v-btn type="submit" block x-large color="success" dark>
        規約に同意して登録する
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
    },
    save (birth) {
      this.$refs.menu.save(birth)
    },
  },
  data () {
    return {
      access_token: '',
      password_show: false,
      password: '',
      email: '',
      fax: '',
      tel: '',
      m_tel: '',
      email2: '',
      employee_no: '',
      employee_mail: '',
      name: '',
      nameKana: '',
      zip: '',
      tdfk_cd: '',
      address1: '',
      address2: '',
      address3: '',
      birth: '',
      menu: false,
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
      arrTdfk_cd:[
          { code:'北海道', name: '北海道' }, 
          { code:'青森県', name: '青森県' }, 
          { code:'岩手県', name: '岩手県' }, 
          { code:'宮城県', name: '宮城県' }, 
          { code:'秋田県', name: '秋田県' }, 
          { code:'山形県', name: '山形県' }, 
          { code:'福島県', name: '福島県' }, 
          { code:'茨城県', name: '茨城県' }, 
          { code:'栃木県', name: '栃木県' }, 
          { code:'群馬県', name: '群馬県' }, 
          { code:'埼玉県', name: '埼玉県' }, 
          { code:'千葉県', name: '千葉県' }, 
          { code:'東京都', name: '東京都' }, 
          { code:'神奈川県', name: '神奈川県' }, 
          { code:'新潟県', name: '新潟県' }, 
          { code:'山梨県', name: '山梨県' }, 
          { code:'長野県', name: '長野県' }, 
          { code:'富山県', name: '富山県' }, 
          { code:'石川県', name: '石川県' }, 
          { code:'福井県', name: '福井県' }, 
          { code:'静岡県', name: '静岡県' }, 
          { code:'愛知県', name: '愛知県' }, 
          { code:'岐阜県', name: '岐阜県' }, 
          { code:'三重県', name: '三重県' }, 
          { code:'滋賀県', name: '滋賀県' }, 
          { code:'京都府', name: '京都府' }, 
          { code:'大阪府', name: '大阪府' }, 
          { code:'兵庫県', name: '兵庫県' }, 
          { code:'奈良県', name: '奈良県' }, 
          { code:'和歌山県', name: '和歌山県' }, 
          { code:'鳥取県', name: '鳥取県' }, 
          { code:'島根県', name: '島根県' }, 
          { code:'岡山県', name: '岡山県' }, 
          { code:'広島県', name: '広島県' }, 
          { code:'山口県', name: '山口県' }, 
          { code:'徳島県', name: '徳島県' }, 
          { code:'香川県', name: '香川県' }, 
          { code:'愛媛県', name: '愛媛県' }, 
          { code:'高知県', name: '高知県' }, 
          { code:'福岡県', name: '福岡県' }, 
          { code:'佐賀県', name: '佐賀県' }, 
          { code:'長崎県', name: '長崎県' }, 
          { code:'熊本県', name: '熊本県' }, 
          { code:'大分県', name: '大分県' }, 
          { code:'宮崎県', name: '宮崎県' }, 
          { code:'鹿児島県', name: '鹿児島県' }, 
          { code:'沖縄県', name: '沖縄県' }, 
      ],
      rules: {
          required: value => !!value || 'この項目は必須入力です',
          password_min: v => v.length >= 8 || '最低8文字以上を入力してください',
          zip_length: v => v.length > 7 || '7文字の半角数字で入力してください',
        },
    }
  },
  watch: {
    menu (val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
    },
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
