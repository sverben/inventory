<script>
export default {
  data() {
    return {
      query: ''
    }
  },
  watch: {
    query(q) {
      this.$emit('search', q)
    }
  }
}
</script>

<template>
  <div class="header">
    <h2 class="title">Zoeken</h2>
    <input type="text" v-model="query">
  </div>
</template>

<style scoped>
  .header {
    margin-bottom: 10px;
  }
  .title {
    margin: 10px 0;
    text-align: center;
  }
</style>