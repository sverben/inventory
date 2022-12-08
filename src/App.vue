<script>
import Header from "@/components/Header.vue";
import Results from "@/components/Results.vue";

export default {
  data() {
    return {
      query: '',
      results: []
    }
  },
  methods: {
    async search(q) {
      this.query = q
      if (q.length < 3) return this.results = []

      const res = await fetch(`https://inventory.djoamersfoort.nl/api/v1/items/search/${q}`)
      const data = await res.json()

      // check if user didn't search for something else already
      if (this.query !== q) return

      this.results = data.items
      console.log(this.results)
    }
  },
  components: {
    Header,
    Results
  }
}
</script>

<template>
  <Header @search="search"></Header>
  <Results :results="results"></Results>
</template>

<style scoped>
</style>
