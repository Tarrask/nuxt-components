<template>
  <div>
    <input v-model="password" type="password">
    <password-meter :password="password" :score.sync="score"></password-meter>
    <p>score: {{ score }}</p>
  </div>
</template>

<script>
import PasswordMeter from '@/components/PasswordMeter';

export default {
  components: { PasswordMeter },
  data() {
    return {
      password: '',
      score: 0
    }
  }
}
</script>

<style lang="scss">
</style>
