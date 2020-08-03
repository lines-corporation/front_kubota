<template>
  <div class="container">
    <h2>ご利用方法</h2>
    <v-list>
      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </template>

        <v-list-item v-for="subItem in item.items" :key="subItem.title">
          <v-list-item-content>
            <v-list-item-title v-text="subItem.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </div>
</template>

<script>
export default {
  auth: false,
  data() {
    return {
      items: [
        {
          action: "チケット関連",
          title: "試合のチケットや払い戻し、利用方法などに関するご質問はこちら",
          active: false,
          items: [{ title: "List Item" }],
        },
        {
          action: "入会関連",
          title: "入会や退会などに関するご質問はこちら",
          active: false,
          items: [
            { title: "Breakfast & brunch" },
            { title: "New American" },
            { title: "Sushi" },
          ],
        },
        {
          action: "グッズ関連",
          title: "グッズの購入や発送などに関するご質問はこちら",
          active: false,
          items: [{ title: "List Item" }],
        },
        {
          action: "サイトの利用方法",
          title: "当サイトの利用方法に関するご質問はこちら",
          active: false,
          items: [{ title: "List Item" }],
        },
        {
          action: "その他",
          title: "その他のご質問はこちら",
          active: false,
          items: [{ title: "List Item" }],
        },
      ],
    }
  },
  computed: {
    user() {
      return this.$auth.user
    },
    auth() {
      return this.$store.$auth
    },
  },
}
</script>
