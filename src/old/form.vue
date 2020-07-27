<template>
<div>
  <header class="bg-white shadow-sm">
    <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
      <h1 class="text-lg leading-6 font-semibold text-gray-900">
        会員登録
      </h1>
    </div>
  </header>
  <div class="mt-1 max-w-7xl text-sm leading-5 text-gray-900 py-4 px-4 sm:px-6 lg:px-8">
<form @submit="checkForm">
  <div>
    <div>
      <div>
        <p class="mt-1 max-w-4xl text-sm leading-5 text-gray-500">
          会員登録をされる際は、以下の規約にご同意いただく必要がございます。ご一読の上、同意いただける場合は[同意する]ボタンをクリックしてください。<br/>
          ご入会後は1年以上の継続をお願いします(試合シーズンのみのご入会はご遠慮いただいております)
        </p>

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

      </div>

  <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors" v-bind:key="error.colnm">{{ error.msg }}</li>
    </ul>
  </p>

      <div class="mt-6 sm:mt-5">

        <div class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label for="company_code" class="block text-sm font-medium leading-5 sm:mt-px sm:pt-2">
            所属
          </label>
          <div class="mt-1 sm:mt-0 sm:col-span-2">
            <div class="max-w-lg rounded-md shadow-sm">
              <select id="company_code" class="block form-select w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">
              <option value="" selected="selected">所属会社を選択</option>
              <optgroup label="あ">
                  <option value="000001">000001 ＮＥＣ</option>
                  <option value="139226">139226 ＮＥＣエンベデッドプロダクツ</option>
              </optgroup>
              <optgroup label="か">
                  <option value="111003">111003 ＮＥＣ企業年金基金</option>
                  <option value="114921">114921 ＮＥＣキャピタルソリューション</option>
                  <option value="111002">111002 日本電気健康保険組合</option>
                  <option value="113320">113320 日本電気航空宇宙システム</option>
                  <option value="113923">113923 国際社会経済研究所</option>
              </optgroup>
              <optgroup label="さ">
                  <option value="112211">112211 ＮＥＣ静岡ビジネス</option>
                  <option value="114330">114330 ＮＥＣスペーステクノロジー</option>
                  <option value="113414">113414 ＮＥＣソリューションイノベータ</option>
              </optgroup>
              <optgroup label="た">
                  <option value="113105">113105 ＮＥＣ通信システム</option>
                  <option value="113901">113901 ＮＥＣディスプレイソリューションズ</option>
                  <option value="113980">113980 ＮＥＣ特許技術情報センター</option>
              </optgroup>
              <optgroup label="な">
                  <option value="113460">113460 ＮＥＣネクサソリューションズ</option>
                  <option value="113305">113305 ＮＥＣネッツエスアイ</option>
                  <option value="113307">113307 ＮＥＣネッツエスアイ・サービス</option>
                  <option value="112206">112206 ＮＥＣネットイノベーション</option>
                  <option value="113332">113332 ＮＥＣネットワーク・センサ</option>
              </optgroup>
              <optgroup label="は">
                  <option value="113947">113947 ＮＥＣＶＡＬＷＡＹ</option>
                  <option value="113953">113953 ＮＥＣファシリティーズ</option>
                  <option value="113412">113412 ＮＥＣフィールディング</option>
                  <option value="139070">139070 ＮＥＣフィールディングシステムテクノロジー</option>
                  <option value="112743">112743 ＮＥＣプラットフォームズ</option>
                  <option value="113968">113968 ＮＥＣフレンドリースタフ</option>
                  <option value="139225">113968 ＮＥＣパーソナルコンピュータ</option>

              </optgroup>
              <optgroup label="ま">
                  <option value="113220">113220 ＮＥＣマグナスコミュニケーションズ</option>
                  <option value="113997">113997 ＮＥＣマネジメントパートナー</option>
              </optgroup>
              <optgroup label="ら">
                  <option value="113941">113941 ＮＥＣライベックス</option>
              </optgroup>
          </select>
            </div>
          </div>
        </div>

        <div class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label for="staff_number" class="block text-sm font-medium leading-5 sm:mt-px sm:pt-2">
            社員番号
          </label>
          <div class="mt-1 sm:mt-0 sm:col-span-2">
            <div class="max-w-lg rounded-md shadow-sm">
              <input id="staff_number" placeholder="半角数字でご入力ください" class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
            </div>
          </div>
        </div>

        <div class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label for="mail_number" class="block text-sm font-medium leading-5 sm:mt-px sm:pt-2">
            社内文書メール
          </label>
          <div class="mt-1 sm:mt-0 sm:col-span-2">
            <div class="max-w-lg rounded-md shadow-sm">
              <input id="mail_number" placeholder="全角でご入力ください" class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
            </div>
          </div>
        </div>

        <div class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label for="name" class="block text-sm font-medium leading-5 sm:mt-px sm:pt-2">
            お名前
          </label>
          <div class="mt-1 sm:mt-0 sm:col-span-2">
            <div class="max-w-lg rounded-md shadow-sm">
              <input v-model="name" placeholder="NEC 太郎" class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
            </div>
          </div>
        </div>

        <div class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label for="namekana" class="block text-sm font-medium leading-5 sm:mt-px sm:pt-2">
            お名前(フリガナ)
          </label>
          <div class="mt-1 sm:mt-0 sm:col-span-2">
            <div class="max-w-lg rounded-md shadow-sm">
              <input id="namekana" placeholder="エヌイーシータロウ" class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
            </div>
          </div>
        </div>

        <div class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label for="sex" class="block text-sm font-medium leading-5 sm:mt-px sm:pt-2">
            性別
          </label>
          <div class="mt-1 sm:mt-0 sm:col-span-2">
            <div class="flex items-center">
              <input id="sex_m" name="form-input push_notifications" type="radio" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
              <label for="sex_m" class="ml-3">
                <span class="block text-sm leading-5 font-medium">男性
                </span>
              </label>
            </div>
            <div class="mt-4 flex items-center">
              <input id="sex_f" name="form-input push_notifications" type="radio" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
              <label for="sex_f" class="ml-3">
                <span class="block text-sm leading-5 font-medium">女性
                </span>
              </label>
            </div>
          </div>
        </div>

        <div class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label for="birth" class="block text-sm font-medium leading-5 sm:mt-px sm:pt-2">
            生年月日
          </label>
          <div class="mt-1 sm:mt-0 sm:col-span-2">
            <div class="max-w-lg rounded-md shadow-sm flex">
              <select id="birth_year" class="block form-select w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">
              <option value="2000" selected="selected">2000年</option>
              </select>
              <select id="birth_year" class="block form-select w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">
              <option value="01" selected="selected">01月</option>
              </select>
              <select id="birth_year" class="block form-select w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">
              <option value="01" selected="selected">01日</option>
              </select>
            </div>
          </div>
        </div>

        <div class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label for="zip" class="block text-sm font-medium leading-5 sm:mt-px sm:pt-2">
            郵便番号
          </label>
          <div class="mt-1 sm:mt-0 sm:col-span-2">
            <div class="max-w-lg rounded-md shadow-sm">
              <input v-model="zip" type="number" placeholder="1020071" class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
            </div>
          </div>
        </div>

        <div class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label for="tdfk_cd" class="block text-sm font-medium leading-5 sm:mt-px sm:pt-2">
            都道府県
          </label>
          <div class="mt-1 sm:mt-0 sm:col-span-2">
            <div class="max-w-lg rounded-md shadow-sm">
                <select v-model="tdfk_cd" id="tdfk_cd" class="block form-select w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">
   <option value="">▼選択して下さい</option>
   <option value="北海道">北海道</option>
   <option value="青森県">青森県</option>
   <option value="岩手県">岩手県</option>
   <option value="宮城県">宮城県</option>
   <option value="秋田県">秋田県</option>
   <option value="山形県">山形県</option>
   <option value="福島県">福島県</option>
   <option value="茨城県">茨城県</option>
   <option value="栃木県">栃木県</option>
   <option value="群馬県">群馬県</option>
   <option value="埼玉県">埼玉県</option>
   <option value="千葉県">千葉県</option>
   <option value="東京都">東京都</option>
   <option value="神奈川県">神奈川県</option>
   <option value="新潟県">新潟県</option>
   <option value="山梨県">山梨県</option>
   <option value="長野県">長野県</option>
   <option value="富山県">富山県</option>
   <option value="石川県">石川県</option>
   <option value="福井県">福井県</option>
   <option value="静岡県">静岡県</option>
   <option value="愛知県">愛知県</option>
   <option value="岐阜県">岐阜県</option>
   <option value="三重県">三重県</option>
   <option value="滋賀県">滋賀県</option>
   <option value="京都府">京都府</option>
   <option value="大阪府">大阪府</option>
   <option value="兵庫県">兵庫県</option>
   <option value="奈良県">奈良県</option>
   <option value="和歌山県">和歌山県</option>
   <option value="鳥取県">鳥取県</option>
   <option value="島根県">島根県</option>
   <option value="岡山県">岡山県</option>
   <option value="広島県">広島県</option>
   <option value="山口県">山口県</option>
   <option value="徳島県">徳島県</option>
   <option value="香川県">香川県</option>
   <option value="愛媛県">愛媛県</option>
   <option value="高知県">高知県</option>
   <option value="福岡県">福岡県</option>
   <option value="佐賀県">佐賀県</option>
   <option value="長崎県">長崎県</option>
   <option value="熊本県">熊本県</option>
   <option value="大分県">大分県</option>
   <option value="宮崎県">宮崎県</option>
   <option value="鹿児島県">鹿児島県</option>
   <option value="沖縄県">沖縄県</option>
</select>
            </div>
          </div>
        </div>

        <div class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label for="name" class="block text-sm font-medium leading-5 sm:mt-px sm:pt-2">
            市区町村
          </label>
          <div class="mt-1 sm:mt-0 sm:col-span-2">
            <div class="max-w-lg rounded-md shadow-sm">
              <input type="text" v-model="address1" placeholder="例)　渋谷区神宮前" class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
            </div>
          </div>
        </div>

        <div class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label for="name" class="block text-sm font-medium leading-5 sm:mt-px sm:pt-2">
            番地
          </label>
          <div class="mt-1 sm:mt-0 sm:col-span-2">
            <div class="max-w-lg rounded-md shadow-sm">
              <input type="text" v-model="address2" placeholder="例)　６－１７－１５" class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
            </div>
          </div>
        </div>

        <div class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label for="name" class="block text-sm font-medium leading-5 sm:mt-px sm:pt-2">
            建物名／部屋番号
          </label>
          <div class="mt-1 sm:mt-0 sm:col-span-2">
            <div class="max-w-lg rounded-md shadow-sm">
              <input type="text" placeholder="職場の場合は部署名をご記入ください" class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
            </div>
          </div>
        </div>

        <div class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label for="tel" class="block text-sm font-medium leading-5 sm:mt-px sm:pt-2">
            電話番号 
          </label>

          <div class="mt-1 sm:mt-0 sm:col-span-2">
            <div class="max-w-lg rounded-md shadow-sm">
              <input type="tel" placeholder="0312341234" class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
            </div>
          </div>

        </div>

        <div class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label for="tel2" class="block text-sm font-medium leading-5 sm:mt-px sm:pt-2">
            携帯電話番号
          </label>
          <div class="mt-1 sm:mt-0 sm:col-span-2">
            <div class="max-w-lg rounded-md shadow-sm">
              <input type="tel" placeholder="0312341234" class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
            </div>
          </div>
        </div>

        <div class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label for="fax" class="block text-sm font-medium leading-5 sm:mt-px sm:pt-2">
            FAX番号
          </label>
          <div class="mt-1 sm:mt-0 sm:col-span-2">
            <div class="max-w-lg rounded-md shadow-sm">
              <input type="tel" placeholder="0312341234" class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
            </div>
          </div>
        </div>

        <div class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label for="name" class="block text-sm font-medium leading-5 sm:mt-px sm:pt-2">
            第１メールアドレス
          </label>
          <div class="mt-1 sm:mt-0 sm:col-span-2">
            <div class="max-w-lg rounded-md shadow-sm">
              <input id="name" placeholder="　例)　foo@necsports.net" class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
            </div>
          </div>
        </div>

        <div class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label for="name" class="block text-sm font-medium leading-5 sm:mt-px sm:pt-2">
            第２メールアドレス
          </label>
          <div class="mt-1 sm:mt-0 sm:col-span-2">
            <div class="max-w-lg rounded-md shadow-sm">
              <input id="name" placeholder="　例)　foo@necsports.net" class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
            </div>
          </div>
        </div>

        <div class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label for="name" class="block text-sm font-medium leading-5 sm:mt-px sm:pt-2">
            パスワード
          </label>
          <div class="mt-1 sm:mt-0 sm:col-span-2">
            <div class="max-w-lg rounded-md shadow-sm">
              <input id="name" placeholder="半角英数字記号" class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
            </div>
          </div>
        </div>

        <div class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label class="block text-sm font-medium leading-5 sm:mt-px sm:pt-2">
            メールマガジン配信
          </label>
          <div class="mt-1 sm:mt-0 sm:col-span-2">
            <div class="max-w-lg rounded-md shadow-sm">
              <input type="radio" id="name" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
              <label for="remember_me" class="ml-2 text-sm font-medium leading-5 sm:mt-px sm:pt-2">
              希望する
              </label>
              <input type="radio" id="name" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
              <label for="remember_me" class="ml-2 text-sm font-medium leading-5 sm:mt-px sm:pt-2">
              配信不要
              </label>
            </div>
          </div>
        </div>

        <div class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label for="name" class="block text-sm font-medium leading-5 sm:mt-px sm:pt-2">
            入会したきっかけ
          </label>
          <div class="mt-1 sm:mt-0 sm:col-span-2">
            <div class="max-w-lg rounded-md shadow-sm">
              <input type="radio" id="name" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
              <label for="remember_me" class="ml-2 text-sm font-medium leading-5 sm:mt-px sm:pt-2">
              知人の紹介 
              </label>
              <input type="radio" id="name" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
              <label for="remember_me" class="ml-2 text-sm font-medium leading-5 sm:mt-px sm:pt-2">
              試合を観て
              </label>
              <input type="radio" id="name" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
              <label for="remember_me" class="ml-2 text-sm font-medium leading-5 sm:mt-px sm:pt-2">
              Webサイトを見て
              </label>
              <input type="radio" id="name" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
              <label for="remember_me" class="ml-2 text-sm font-medium leading-5 sm:mt-px sm:pt-2">
              各種入会キャンペーンにて
              </label>
              <input type="radio" id="name" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
              <label for="remember_me" class="ml-2 text-sm font-medium leading-5 sm:mt-px sm:pt-2">
              チラシ、ポスター、雑誌を見て
              </label>
              <input type="radio" id="name" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
              <label for="remember_me" class="ml-2 text-sm font-medium leading-5 sm:mt-px sm:pt-2">
              その他
              </label>
              <input id="name" class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
            </div>
          </div>
        </div>

        <div class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label for="name" class="block text-sm font-medium leading-5 sm:mt-px sm:pt-2">
            選択プレゼント
          </label>
          <div class="mt-1 sm:mt-0 sm:col-span-2">
            <div class="max-w-lg rounded-md shadow-sm">
              <input type="radio" id="name" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
              <label for="remember_me" class="ml-2 text-sm font-medium leading-5 sm:mt-px sm:pt-2">
              レッドロケッツユニフォームＴシャツ (フリー：Lサイズ)
              </label><br>
              <input type="radio" id="name" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
              <label for="remember_me" class="ml-2 text-sm font-medium leading-5 sm:mt-px sm:pt-2">
              グリーンロケッツユニフォームＴシャツ (フリー：Lサイズ)
              </label><br>
              <input type="radio" id="name" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
              <label for="remember_me" class="ml-2 text-sm font-medium leading-5 sm:mt-px sm:pt-2">
              ノートパソコンケース (サイズ：310×230×30㎜)
              </label>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
  <div class="mt-8 border-t border-gray-200 pt-5">
    <div class="flex justify-center">
      <span class="ml-3 inline-flex rounded-md shadow-sm">
        <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent text-lg leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
          登録する
        </button>
      </span>
    </div>
  </div>
</form>
</div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Form',
  props: {
    msg: String
  },
  data() {
    return {
      errors: [],
      name: "",
      zip: "",
      tdfk_cd: "",
      address1: "",
      address2: ""
    };
  },
  methods:{ 
    checkForm: function (e) {
      if (this.name ) {
        return true;
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push({colnm: 'name',msg: 'Name required.'});
      }

      e.preventDefault();
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
