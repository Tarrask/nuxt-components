<template lang="html">
  <div class="score_container">
    <div v-for="(v, i) in count" :key="i" class="score">
      <div
        :class="{ active: score > i }"
        :style="{ 'background-color': colors[i] }"
        class="score_inner"
      ></div>
    </div>
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
      default: () => [ 'crimson', 'orange', 'gold', 'limegreen', 'green' ]
    },
    'texts': {
      type: Array,
      default: () => [ 'very weak', 'weak', 'medium', 'strong', 'very strong' ]
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
  flex-flow: column-reverse nowrap;
  width: 0.75em;
  margin-left: 5px;

  .score {
    background: lightgray;
    margin: 0;
    flex: 1 1;

    .score_inner {
      height: 0%;
      opacity: 0;
      transition: width 0.2s ease-out, opacity 0.2s ease-out;
      &.active {
        height: 100%;
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
