<template>
  <v-layout>
    <v-flex class="text-left">
      <h2>規約</h2>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  auth: false,
  data() {
    return {
      items: [
        {
          title: "プライバシーポリシー",
          to: "/privacy",
        },
        {
          title: "特定商取引法に基づく表示",
          to: "/tokutei",
        },
      ],
    }
  },
}
</script>
