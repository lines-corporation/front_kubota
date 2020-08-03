<template>
  <div class="container">
    <h2>現在、申し込みできるチケット一覧</h2>

    <v-simple-table :fixed-header="false">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              チケット名
            </th>
            <th class="text-left">
              年月日
            </th>
            <th class="text-left">
              申し込み
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
            <td>{{ item.subject }}</td>
            <td>{{ item.ymd }}</td>
            <td>
              <v-btn icon :to="'/ticket/' + item.topics_id" nuxt>
                <v-icon>mdi-forward</v-icon>
              </v-btn>
            </td>
          </router-link>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  data: () => ({
    topics_list: [],
  }),
  computed: {
    user() {
      return this.$auth.user
    },
    auth() {
      return this.$store.$auth
    },
  },
  mounted() {
    console.log(this.$auth.loggedIn)
    let self = this
    let url = "/rcms-api/1/topics1"
    this.$auth.ctx.$axios.get(url).then(function (response) {
      self.topics_list = response.data.list
    })
  },
}
</script>
