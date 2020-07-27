<template>
  <div>
    <div class="container">
      <h2>お問い合わせ</h2>
    </div>
<form @submit.prevent="inquiry">
  <v-container fluid>
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
        <v-col cols="12">
        <v-btn type="submit" block x-large color="success" dark>
          送信する
        </v-btn>
        </v-col>
        </v-row>
  </v-container>
</form>
</div>
</template>

<script>

export default {
  auth: false,
  computed: {
    user() {
      return this.$auth.user;
    },
    auth() {
      return this.$store.$auth;
    },
  },
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
    inquiry() {
      let self = this;
      this.$store.$auth.ctx.$axios.post('/rcms-api/1/inquiry1/messages/send',
      {
        from_mail:'test2@email.com',
        inquiry_category_id: 1,
        name: 'aaaa',
        body: 'test',
        ext_01: 'ext_01',
        ext_04: '1',
      },{
        headers: {'X-RCMS-API-ACCESS-TOKEN': this.$store.$auth.getToken('local')}
      }
      ).then(function(response) {
        if (response.data.errors.length == 0) {
          self.$store.dispatch('snackbar/setMessage', 'お問い合わせ送信しました。');
          self.$store.dispatch('snackbar/snackOn');
          self.$router.push('/');
        }
      });
    }
  },
  data () {
    return {
      access_token: '',
      email2:'',
    }
  },
}
</script>
