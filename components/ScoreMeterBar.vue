<template lang="html">
  <div class="score_container">
    <div v-for="(v, i) in count" :key="i" class="score">
      <div class="score_inner" :class="{ active: score > i }" :style="{ 'background-color': colors[i+1] }"></div>
    </div>
    <div class="score_text" :style="{ 'color': colors[score] }">{{ texts[score] }}</div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    'score': {
      type: Number,
      default: 0
    },
    'count': {
      type: Number,
      default: 5
    },
    'colors': {
      type: Array,
      default: () => [ 'gray', 'crimson', 'orange', 'gold', 'limegreen', 'green' ]
    },
    'texts': {
      type: Array,
      default: () => [ 'no password', 'very weak', 'weak', 'medium', 'strong', 'very strong' ]
    }
  },
  data() {
    return {
    };
  }
};
</script>

<style lang="scss" scoped>

.score_container {
  position: relative;
  display: flex;
  width: 100%;
  flex-flow: row no-wrap;

  .score {
    background: lightgray;
    margin: 5px 3px;
    flex: 1 1;

    .score_inner {
      width: 0%;
      opacity: 0;
      height: 5px;
      transition: width 0.2s ease-out, opacity 0.2s ease-out;
      &.active {
        width: 100%;
        opacity: 1;
      }
    }
  }
  .score_text {
    position: absolute;
    right: 3px;
    top: 10px;
    text-transform: uppercase;
    font-size: 0.75em;
  }
}
</style>
