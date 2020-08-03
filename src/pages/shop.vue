<template>
  <div class="container">
    <h2>グッズ</h2>
    <v-container fluid>
      <v-row dense>
        <v-col v-for="card in cards" :key="card.title">
          <v-card>
            <v-img
              class="white--text align-end"
              height="200px"
              width="300px"
              :src="card.src"
            />
            <v-card-title>{{ card.title }}</v-card-title>
            <v-card-text class="text--primary">
              <div>価格：2,500円</div>
              <div>Whitehaven Beach</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text>
                カートに入れる
              </v-btn>

              <v-btn color="orange" text>
                詳しくみる
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  auth: false,
  data: () => ({
    cards: [
      {
        title: "Pre-fab homes",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 6,
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 6,
      },
      {
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 6,
      },
    ],
  }),
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
