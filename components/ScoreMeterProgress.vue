<template lang="html">
  <div class="score-container">
    <div class="score" :class="{ shadow }">
      <div
        class="score-inner"
        :style="{
          'width': `${score / (count) * 100}%`,
          'background': color
        }"
      ></div>
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
    },
    'shadow': {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
    };
  },
  computed: {
    color() {
      if(this.shadow) {
        return `linear-gradient(to bottom, ${this.colors[this.score]} 17%,#ffffff 29%,${this.colors[this.score]} 42%)`;
      }
      else {
        return this.colors[this.score];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.score-container {
  position: relative;
  margin-top: 0.25em;
  width: 100%;
  .score {
    background: lighten(lightgray, 10%);
    border: 1px solid lighten(gray, 20%);
    .score-inner {
      height: 10px;
      color: red;
      transition: width 0.2s ease-out, background 0.5s ease-out;
    }
    &.shadow {
      box-shadow: 0 -10px 10px -10px inset rgba(0,0,0,0.3);
      .score-inner {
        box-shadow: 0 -10px 10px -10px inset rgba(0,0,0,0.7);
      }
    }
  }
  .score_text {
    position: absolute;
    right: 0;
    top: 13px;
    text-transform: uppercase;
    font-size: 0.75em;
  }
}
</style>
