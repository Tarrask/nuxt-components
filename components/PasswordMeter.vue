<template lang="html">
  <component :is="types[type]" :score="score.score + 1" v-bind="$attrs"></component>
</template>

<script>
import zxcvbn from 'zxcvbn';

import ScoreMeterBar from './ScoreMeterBar';
import ScoreMeterProgress from './ScoreMeterProgress';
import ScoreMeterStack from './ScoreMeterStack';

export default {
  components: { ScoreMeterBar, ScoreMeterProgress, ScoreMeterStack },
  props: {
    'type': {
      type: String,
      default: 'bar'
    },
    'password': {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      count: 5,
      colors: [ 'crimson', 'orange', 'gold', 'limegreen', 'green' ],
      texts: [ 'very weak', 'weak', 'medium', 'strong', 'very strong' ],
      types: {
        'bar': 'ScoreMeterBar',
        'progress': 'ScoreMeterProgress',
        'stack': 'score-meter-stack'
      }
    };
  },
  computed: {
    score() {
      let score = this.password.length === 0 ? 0 : zxcvbn(this.password);
      this.$emit('update:score', score.score + 1);
      return score;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
