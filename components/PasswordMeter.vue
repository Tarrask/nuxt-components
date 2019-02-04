<template lang="html">
  <component :is="types[type]" :score="score" v-bind="$attrs"></component>
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
      if(this.password.length === 0) {
        return 0;
      }
      else {
        return zxcvbn(this.password).score + 1;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
