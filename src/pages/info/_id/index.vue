<template>
  <div class="container">
    <div class="article-page">
      <header>
        <h2 class="form-ttl">
          {{ item.subject }}
        </h2>
      </header>
      <p>
        {{ item.ymd }}
      </p>
      <p v-html="item.contents" />
    </div>
  </div>
</template>

<script>
export default {
  auth: false,
  data: () => ({
    item: [],
  }),
  mounted() {
    let self = this
    let url = "/rcms-api/1/info/" + this.$route.params.id
    this.$auth.ctx.$axios.get(url).then(function (response) {
      self.item = response.data.details
    })
  },
}
</script>
