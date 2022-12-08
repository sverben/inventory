<script>
import Result from "@/components/Result.vue";

export default {
  props: [
    'results'
  ],
  components: {
    Result
  }
}
</script>

<template>
  <div class="results">
    <Result v-for="result in results" :definition="result"></Result>
  </div>
</template>

<style scoped>
  .results {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
</style>