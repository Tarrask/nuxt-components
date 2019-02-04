<template lang="html">
  <div class="split-container">
    <div>
      <ul>
        <li><nuxt-link to="/components/submit-button">Submit button</nuxt-link></li>
        <li><nuxt-link to="/components/password-meter">Password meter</nuxt-link></li>
      </ul>
    </div>
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.split-container {
  display: flex;
  flex-flow: row nowrap;
}
</style>
