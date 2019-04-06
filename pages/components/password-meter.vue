<template>
  <div class="container">
    <div class="row">
      <div class="col-8">
        <div class="form-group">
          <label for="exemple_password">Password</label>
          <input
            id="exemple_password"
            v-model="password"
            class="form-control"
            type="password"
          >
          <password-meter :password="password" :score.sync="score"></password-meter>
          <p>score: {{ score }}</p>
        </div>
        <div class="form-group">
          <label for="exemple_password">Password</label>
          <input
            id="exemple_password"
            v-model="password"
            class="form-control"
            type="password"
          >
          <password-meter
            :password="password"
            :score.sync="score"
            :shadow="false"
            type="progress"
          ></password-meter>
          <p>score: {{ score }}</p>
        </div>
      </div>
    </div>
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
    };
  }
};
</script>

<style lang="scss">
</style>
