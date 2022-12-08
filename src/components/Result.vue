<script>
export default {
  components: {},

  data() {
    return {
      toggled: false
    }
  },
  props: [
    'definition'
  ]
}
</script>

<template>
  <div class="result" @click="toggled = !toggled">
    <div class="primary">
      <div class="left">
        <div class="name">{{ definition.name }}</div>
        <div class="more">Waar ligt dit?</div>
      </div>
      <div class="right">
        <font-awesome-icon class="open" :class="{ rotate: toggled, reset: !toggled }" icon="fa-solid fa-caret-down"></font-awesome-icon>
      </div>
    </div>
    <div class="extra" v-if="toggled">
      <img class="location" :src="`https://inventory.djoamersfoort.nl/api/v1/location/${definition.location_id}/photo`" alt="Location">
      <div class="description">{{ definition.location_description }}</div>
    </div>
  </div>
</template>

<style scoped>
  .result {
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    cursor: pointer;
    overflow: hidden;
    user-select: none;
  }

  .primary {
    display: flex;
    gap: 5px;
    background: var(--primary);
    padding: 10px;
  }
  .left {
    flex: 1;
  }
  .name {
    font-size: 20px;
    margin-bottom: 3px;
  }
  .more {
    font-size: 14px;
  }
  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 10px;
  }

  .open {
    font-size: 16px;
    transition: .5s ease;
  }
  .reset {
    transform: rotate(0);
  }
  .rotate {
    transform: rotate(180deg);
  }


  .extra {
    z-index: -1;
    display: flex;
    flex-direction: column;
    padding: 0 10px 10px;
    gap: 5px;
    background: var(--primary);
    animation: show .3s ease forwards;
  }

  @keyframes show {
    0% {
      filter: opacity(0);
      transform: translateY(-100%);
    }
    100% {
      filter: opacity(1);
      transform: translateY(0);
    }
  }
</style>