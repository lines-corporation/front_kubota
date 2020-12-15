<template>
  <div class="form-page">
    <header>
      <h2 class="form-ttl">
        クボタスピアーズ 会員登録
      </h2>
      <p class="fnt-w">
      </p>
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
          会員種別選択
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <p class="mt-1 max-w-4xl text-sm leading-5 text-gray-500">
            会員登録をされる際は、以下の規約にご同意いただく必要がございます。ご一読の上、ご同意いただける場合は【同意して送信する】ボタンをクリックしてください。
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
              <dt>第1条　本規約の適用範囲</dt>
              <dd class="px-3 py-2">
                本規約は、株式会社クボタ（以下「当社」）が設立したクボタスピアーズファンクラブ事務局（以下「事務局」）が運営するクボタスピアーズファンクラブ（以下「本会」という）の会員に提供される特典及び会員の義務を定めたものです。
              </dd>

              <dt>第2条　名称</dt>
              <dd class="px-3 py-2">
                本会は「クボタスピアーズファンクラブ」と称します。
              </dd>

              <dt>第3条　目的</dt>
              <dd class="px-3 py-2">
                本会は、クボタスピアーズを応援するファンクラブ組織です。
              </dd>


              <dt>第4条　会員資格</dt>
              <dd class="px-3 py-2">
                1）本会は、日本国内に住居を有し、パソコンや携帯電話等によるインターネットの利用が可能な方を対象とします。
                <br />
                2）会員は本会の会員資格を第三者に譲渡することはできません。
              </dd>

              <dt>第5条　入会</dt>
              <dd class="px-3 py-2">
                1）本会に入会を希望する方は、本規約を承諾のうえ、事務局に対し、所定の申込方法で入会の申込みを行います。なお、未成年者からの入会申込があった場合、その保護者の了承があったものと判断し、手順にそって入会手続きを行い、関連した不測の事態が生じたとしても本会並びに事務局では責任を負いかねます。
                <br />
                2）本会の入会手続は、前項による申し込み後、事務局が年会費の納付を確認し、入会を申し込んだ方を本会の会員として登録した時点で完了します。入会を申し込んだ方は、入会手続が完了した日から本会の会員となります。
              </dd>

              <dt>第6条　会員有効期間</dt>
              <dd class="px-3 py-2">
                会員資格の有効期間は、前項により入会手続きが完了した日（以下「入会日」）から２０２１年１１月末日までとします。
              </dd>

              <dt>第7条　会員区分及び年会費</dt>
              <dd class="px-3 py-2">
                1)会員区分：個人会員<br />
                2)年会費：２,００0円（税込）<br />
                3)年会費等の支払いに必要な振込手数料その他費用は、会員の負担とします。
              </dd>

              <dt>第8条　会員特典</dt>
              <dd class="px-3 py-2">
                会員は、会員資格の有効期間中、以下の特典を受けることができます。特典の具体的内容は別途事務局が定めます。事務局は会員に予告することなく特典の内容の更新、または特典の提供を中断もしくは終了することができるものとします。
                <br />
                チケット割引販売、チケット先行販売、対象商品割引販売、イベント参加権利
              </dd>

              <dt>第9条　年会費の返還</dt>
              <dd class="px-3 py-2">
                支払済みの年会費は、いかなる場合も返金致しません。
              </dd>

              <dt>第10条 　会員証</dt>
              <dd class="px-3 py-2">
                1）入会手続きが完了した会員に対し、デジタル会員証を発行します。
                <br />
                2）会員は、デジタル会員証を第三者に譲渡または貸与することはできません。
                <br />
                3）会員は、事務局からデジタル会員証の提示を求められた場合には、すみやかにこれを提示するものとします。事務局は、会員がデジタル会員証を提示しない場合、会員特典の利用をお断りすることがあります。
              </dd>

              <dt>第11条　退会</dt>
              <dd class="px-3 py-2">
                会員が会員資格有効期間中に退会を希望する場合は、所定の方法で「退会希望」明記の上、会員番号・氏名・住所・電話番号・退会希望日・退会理由を記載し、事務局まで郵便または電子メールにて届け出るものとします。
              </dd>


              <dt>第12条　会員資格の喪失</dt>
              <dd class="px-3 py-2">
                会員が次の各号のいずれかに該当した場合、事務局はその会員を除名するものとします。
                <br />
                1）会員が、本会の対面を傷つけ、または他の会員を含む第三者に著しく迷惑をかけた場合
                <br />
                2）会員が本会の運営を妨げる行為、誹謗する行為、公序良俗に反する行為、犯罪的行為またはそのおそれがある行為を行った場合
                <br />
                3）会員特典で入手・購入したチケット、オリジナルグッズ等を営利目的をもって転売した場合、または転売しようとした場合
                <br />
                4）その他会員資格喪失が相当と認められる場合
                <br />
              </dd>

              <dt>第13条　個人情報の取り扱い</dt>
              <dd class="px-3 py-2">
                本会の運営に関して知りえた会員の個人情報は、次の各号の場合を除き、会員本人以外の第三者に開示または漏洩しないものとし、かつ本会の活動・運営のために必要な範囲を超えて利用しないものとします。
                <br />
                1）個人情報を適切に管理するように契約等により義務付けた業務委託先に対し、本会の活動・運営のために必要な業務（グッズ・案内送付等）を委託する目的で個人情報を提供する場合
                <br />
                2）本会の活動・運営の向上等の目的で個人情報を集計・分析する場合
                <br />
                3）当社または当社提携先第三者に関する広告、宣伝その他情報提供の目的で電子メール送信または印刷物の郵送をする場合
                <br />
                4）裁判所・警察・弁護士会等から適法な照会を受け開示する場合
                <br />
                5）その他任意に会員の同意を得た上で個人情報を開示または利用する場合
              </dd>

              <dt>第14条　著作権等</dt>
              <dd class="px-3 py-2">
                1）本会の発行物の記事・写真に関する著作権および商標は、当社または日本ラグビーフットボール協会もしくは当社に対する情報提供者に帰属するものとします。
                <br />
                2）会員は本会発行物に記載されている記事、写真等を著作権法等の法律で認められている範囲内で利用し、無断掲載コピーは一切行わないものとします。
              </dd>

              <dt>第15条　規約の改定</dt>
              <dd class="px-3 py-2">
                事務局は会員に事前に通知することなく、本規約の全部もしくは一部変更、追加または廃止することができるものとします。但し、本規約の変更後・追加・廃止後、速やかにその内容を会員に通知するものとします。
                <br />
              </dd>

              <dt>第16条　管轄裁判所</dt>
              <dd class="px-3 py-2">
                本会の運営につき会員との間に紛争が生じた場合には、東京地方裁判所又は東京簡易裁判所を管轄裁判所とします。
              </dd>
              </dl>
            </v-row>
          </v-container>
          <div class="row-none">
            <v-container>
              <v-row>
                <v-form
                  ref="form1"
                  v-model="valid"
                  lazy-validation
                  @submit.prevent="send_email"
                >
                  <p>
                    ご登録いただくメールアドレスを入力して「同意して送信する」をクリックして送信してください。
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
                  <v-btn
                    type="submit"
                    block
                    x-large
                    color="success"
                    dark
                    :loading="loading1"
                  >
                    同意して送信する
                  </v-btn>
                </v-form>
              </v-row>
            </v-container>
          </div>
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
              クボタスピアーズ会員　情報登録
            </h2>
          </header>
          <p>
            <span style="color: red;">*</span>は必須入力項目です。
          </p>
          <v-form
            ref="form2"
            v-model="valid"
            lazy-validation
            @submit.prevent="regist"
          >
            <v-container fluid>
              <v-row>
                <v-col cols="4">
                  <v-subheader>
                    <span style="color: red;">*</span>お名前
                  </v-subheader>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    v-model="name1"
                    label="姓"
                    :rules="[rules.required]"
                    outlined
                  />
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    v-model="name2"
                    label="名"
                    :rules="[rules.required]"
                    outlined
                  />
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="4">
                  <v-subheader>
                    <span style="color: red;">*</span>お名前(フリガナ)
                  </v-subheader>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    v-model="namekana1"
                    label="セイ"
                    :rules="[rules.required]"
                    outlined
                  />
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    v-model="namekana2"
                    label="メイ"
                    :rules="[rules.required]"
                    outlined
                  />
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="4">
                  <v-subheader>
                    <span style="color: red;">*</span>性別
                  </v-subheader>
                </v-col>
                <v-col cols="8">
                  <v-radio-group v-model="sex" row :rules="[rules.required]">
                    <v-radio label="男性" value="m" />
                    <v-radio label="女性" value="f" />
                  </v-radio-group>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="4">
                  <v-subheader>
                    <span style="color: red;">*</span>生年月日
                  </v-subheader>
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
                        :rules="[rules.required]"
                        v-bind="attrs"
                        v-on="on"
                      />
                    </template>
                    <v-date-picker
                      ref="picker"
                      v-model="birth"
                      :max="new Date().toISOString().substr(0, 10)"
                      min="1900-01-01"
                      locale="jp-ja"
                      @change="save"
                    />
                  </v-menu>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="4">
                  <v-subheader>
                    <span style="color: red;">*</span>郵便番号
                  </v-subheader>
                </v-col>
                <v-col cols="8">
                  <v-text-field
                    v-model="zip_code"
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
                  <v-subheader>
                    <span style="color: red;">*</span>都道府県
                  </v-subheader>
                </v-col>
                <v-col cols="8">
                  <v-select
                    v-model="tdfk_cd"
                    :items="arrTdfk_cd"
                    :rules="[rules.required]"
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
                  <v-subheader>
                    <span style="color: red;">*</span>市区町村
                  </v-subheader>
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
                  <v-subheader>
                    <span style="color: red;">*</span>番地
                  </v-subheader>
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
                  <v-subheader>
                    <span style="color: red;">*</span>電話番号
                  </v-subheader>
                </v-col>
                <v-col cols="8">
                  <v-text-field
                    v-model="tel"
                    label="電話番号"
                    type="tel"
                    :rules="[rules.required, rules.tel]"
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
                  <p v-html="email" />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-subheader>第２メールアドレス</v-subheader>
                </v-col>
                <v-col cols="8">
                  <v-text-field
                    v-model="subemail"
                    label="第２メールアドレス"
                    type="email"
                    outlined
                    autocomplete="off"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-subheader>
                    <span style="color: red;">*</span>パスワード
                  </v-subheader>
                </v-col>
                <v-col cols="8">
                  <v-text-field
                    v-model="login_pwd"
                    :append-icon="password_show ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[
                      rules.required,
                      rules.password_min,
                      rules.password,
                    ]"
                    :type="password_show ? 'text' : 'password'"
                    label="パスワード"
                    hint="8文字以上の半角英数字混在でご入力ください。記号を利用する場合は -_&=+%#@$*.!: が利用可能です。"
                    persistent-hint
                    counter
                    @click:append="password_show = !password_show"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-subheader>
                    <span style="color: red;">*</span>ファンクラブ会員限定情報配信
                  </v-subheader>
                </v-col>
                <v-col cols="8">
                  <v-checkbox
                    v-model="mailmaga_flg"
                    class="mx-2"
                    label="希望する"
                  />
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
                    :loading="loading2"
                  >
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
              クボタスピアーズ　会員種別・支払い方法登録
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
                  <v-subheader>会員種別</v-subheader>
                </v-col>
                <v-col cols="8">
                  <v-radio-group v-model="product_id">
                    <!--
                    <img
                      src="@/assets/images/RR.png"
                      style="width: 240px; padding: 10px;"
                    />
                  -->
                    <v-radio
                      label="個人会員"
                      value="41249"
                    />
                    <v-spacer />
                    <!--
                    <img
                      src="@/assets/images/GR.png"
                      style="width: 240px; padding: 10px;"
                    />
                  -->
                  <!--
                    <v-radio
                      label="個人会員"
                      value="41201"
                    />
                    <v-radio
                      label="ジュニア会員"
                      value="41203"
                    />
                  -->
                  </v-radio-group>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-subheader>支払方法</v-subheader>
                </v-col>
                <v-col cols="8">
                  <v-radio-group v-model="ec_payment_id">
                    <!--<v-radio label="クレジットカード決済" value="58" /> -->
                    <v-radio label="銀行振りこみ" value="60" />
                  </v-radio-group>
                  <p v-if="ec_payment_id == '60'" class="body-1">
                    銀行振込先の口座名、振込方法がメールにて送信されますので、ご確認ください。
                  </p>
                  <p v-if="ec_payment_id == '59'" class="body-1">
                    コンビニ決済方法に関する詳細をメールにて送信いたしますので、そちらのご案内をご確認のうえ、お支払いをお願いいたします。
                  </p>
                  <div v-if="ec_payment_id == '58'" class="card-wrapper">
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
                          label="有効期限(月)"
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
                          label="有効期限(年)"
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
                          label="セキュリティコード(CVV)"
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
                    :loading="loading3"
                  >
                    登録する
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-stepper-content>

        <v-stepper-content step="5">
          <p style="color: red;">
            すでにメールアドレスのご登録が完了しています。<br />
            ファンクラブトップページの【会員ログイン】からご登録のメールアドレスとパスワードにてログインしてください
          </p>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
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
      password_show: false,
      login_pwd: "",
      email: "",
      fax: "",
      tel: "",
      m_tel: "",
      subemail: "",
      name1: "",
      name2: "",
      namekana1: "",
      namekana2: "",
      zip_code: "",
      tdfk_cd: "",
      address1: "",
      address2: "",
      address3: "",
      birth: "",
      sex: "",
      mailmaga_flg: true,
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
      ],
      ec_payment_id: "60",
      product_id: "41249",
      product_id2: "",
      cardName: "",
      cardNumber: "",
      cardMonth: "",
      cardYear: "",
      cardCvv: "",
      loading1: false,
      loading2: false,
      loading3: false,
      rules: {
        required: (value) => !!value || "この項目は必須入力です",
        password_min: (v) => v.length >= 8 || "最低8文字以上を入力してください",
        password: (v) =>
          v.length == 0 ||
          /^[a-zA-Z0-9\-_&=+%#@$*.!:]+$/.test(v) ||
          "半角英数字と記号(-_&=+%#@$*.!:)でご入力ください",
        zip_length: (v) => v.length == 7 || "7文字の半角数字で入力してください",
        tel: (v) =>
          v.length == 0 ||
          /^0[0-9]{9,10}$/.test(v) ||
          "ハイフンなしの半角数字をご入力ください",
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
  created() {
    if (this.$route.query.key) {
      this.email_hash = this.$route.query.key
      let self = this
      self.$auth.ctx.$axios
        .post("/rcms-api/1/member/invite", {
          email_hash: this.email_hash,
        })
        .then(function (response) {
          self.email = response.data.data.email
          // emailが登録されていない場合にはエラーメッセージを表示する
          if(!self.email) {
            self.$store.dispatch(
              "snackbar/setMessage",
              "すでにメールアドレスのご登録が完了しています。ファンクラブトップページの【会員ログイン】からご登録のメールアドレスとパスワードにてログインしてください"
            )
            self.e1 = 5
            return
          }
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
  },
  methods: {
    send_email() {
      this.loading1 = true
      if (this.$refs.form1.validate()) {
        let self = this

        this.$auth.ctx.$axios
          .post("/rcms-api/1/member/invite", {
            email: self.email,
          })
          .then(function (response) {
            if (response.data.errors.length === 0) {
              self.$store.dispatch("snackbar/setMessage", "メール送信しました")
              self.$store.dispatch("snackbar/snackOn")
              self.e1 = 2
            }
            self.loading1 = false
          })
          .catch(function (error) {
            self.$store.dispatch(
              "snackbar/setError",
              error.response.data.errors?.[0]
            )
            self.$store.dispatch("snackbar/snackOn")
            self.loading1 = false
          })
      } else {
        this.loading1 = false
      }
    },
    regist() {
      this.loading2 = true
      if (this.$refs.form2.validate()) {
        let self = this
        this.$auth.ctx.$axios
          .post("/rcms-api/1/member/regist", {
            name1: this.name1,
            name2: this.name2,
            namekana1: this.namekana1,
            namekana2: this.namekana2,
            sex: this.sex,
            birth: this.birth,
            zip_code: this.zip_code,
            tdfk_cd: this.tdfk_cd,
            address1: this.address1,
            address2: this.address2,
            address3: this.address3,
            tel: this.tel,
            email: this.email,
            email2: this.subemail,
            email_send_ng_flg: this.mailmaga_flg ? 0 : 1,
            login_pwd: this.login_pwd,
          })
          .then(function (response) {
            if (response.data.errors.length === 0) {
              self.$store.dispatch("snackbar/setMessage", "会員登録しました")
              self.$store.dispatch("snackbar/snackOn")
              self.e1 = 4
            }
            self.loading2 = false
          })
          .catch(function (error) {
            self.$store.dispatch(
              "snackbar/setError",
              error.response.data.errors?.[0]
            )
            self.$store.dispatch("snackbar/snackOn")
            self.loading2 = false
          })
      } else {
        this.loading2 = false
      }
    },
    purchase() {
      this.loading3 = true
      if (this.$refs.form4.validate()) {
        let self = this

/*
        if (this.ec_payment_id != 58) {
          if (self.product_id == "41201") {
            self.product_id2 = "41209"
          } else if (self.product_id == "41202") {
            self.product_id2 = "41208"
          } else if (self.product_id == "41203") {
            self.product_id2 = "41210"
          } else if (self.product_id == "41204") {
            self.product_id2 = "41207"
          }
        }
        self.$store.dispatch(
          "snackbar/setMessage",
          "会員登録のお申し込みが完了しました"
        )
        self.$store.dispatch("snackbar/snackOn")
        self.$router.push("/")
        self.loading3 = false
        */

        if (this.ec_payment_id == 58) {
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
                self.$store.dispatch(
                  "snackbar/setMessage",
                  "会員登録のお申し込みが完了しました"
                )
                self.$store.dispatch("snackbar/snackOn")
                self.$router.push("/")
                self.loading3 = false

                /*
                self.$auth.ctx.$axios
                  .post(
                    "/rcms-api/1/ec/purchase",
                    {
                      ec_payment_id: parseInt(self.ec_payment_id),
                      product_id: parseInt(self.product_id),
                      quantity: 1,
                      card_token: response.tokenizedCardObject.token,
                    },
                    { withCredentials: true }
                  )
                  .then(function (response) {
                    self.$store.dispatch(
                      "snackbar/setMessage",
                      "会員登録のお申し込みが完了しました"
                    )
                    self.$store.dispatch("snackbar/snackOn")
                    self.$router.push("/")
                    self.loading3 = false
                  })
                  .catch(function (error) {
                    self.$store.dispatch(
                      "snackbar/setError",
                      error.response.data.errors?.[0]
                    )
                    self.$store.dispatch("snackbar/snackOn")
                    self.loading3 = false
                  })
                  */
              } else {
                self.$store.dispatch(
                  "snackbar/setError",
                  "カード入力内容に不備があります。再度、入力内容をご確認ください[code:" +
                    response.result +
                    "]"
                )
                self.$store.dispatch("snackbar/snackOn")
                self.loading3 = false
              }
            }
          )
        } else {
          // 銀行振り込み
          self.$auth.ctx.$axios
            .post(
              "/rcms-api/1/ec/purchase",
              {
                ec_payment_id: parseInt(self.ec_payment_id),
                product_id: parseInt(self.product_id),
                quantity: 1,
              },
              { withCredentials: true }
            )
            .then(function (response) {
              self.$store.dispatch(
                "snackbar/setMessage",
                "会員登録のお申し込みが完了しました。メールをご確認の上、決済手続きをお願いいたします。"
              )
              self.$store.dispatch("snackbar/snackOn")
              self.$auth.logout().then((response) => {
                self.$router.push("/")
                self.loading3 = false
              })
            })
            .catch(function (error) {
              console.warn(error)
              self.$store.dispatch(
                "snackbar/setError",
                error.response.data.errors?.[0]
              )
              self.$store.dispatch("snackbar/snackOn")
              self.loading3 = false
            })
        }
      } else {
        this.loading3 = false
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
