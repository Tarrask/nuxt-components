<template>
  <button
    :type="type"
    class="btn"
    :class="`btn-${currentVariant}`"
    :disabled="!ready"
    @click.prevent="$emit('click')"
  >
    <template v-if="success">
      <fa-icon name="check"></fa-icon> {{ successLabel || label }}
    </template>
    <template v-else-if="error">
      <fa-icon name="times"></fa-icon> {{ errorLabel || label }}
    </template>
    <template v-else-if="debouncedPending">
      <fa-icon name="spinner" spin></fa-icon> {{ pendingLabel || label }}
    </template>
    <template v-else>
     <fa-icon v-if="icon" :name="icon"></fa-icon> {{ label }}
   </template>
 </button>
</template>

<doc>
Un bouton a utiliser lorsque de l'envoi d'un formulaire. Le bouton se désactive dès qu'il est utilisé, afin
d'éviter les multiples clics. Il indique aussi une eventuelle erreur.

```

```
</doc>

<script>
import Icon from 'vue-awesome/components/Icon.vue';

import 'vue-awesome/icons/spinner';
import 'vue-awesome/icons/check';
import 'vue-awesome/icons/times';

// Should certainly use Symbol for that, but browser support is not OK (IE11)
const READY = "READY";
const PENDING = "PENDING";
const SUCCESS = "SUCCESS";
const ERROR = "ERROR";

export { READY, PENDING, SUCCESS, ERROR };
export default {
  components: { 'fa-icon': Icon },
  props: {
    'type': {
      type: String,
      default: 'submit'
    },
    'variant': {
      type: String,
      default: 'primary'
    },
    'icon': {
      type: String
    },
    'label': {
      type: String,
      required: true
    },
    'pendingLabel': String,
    'successLabel': String,
    'errorLabel': String,
    'status': {
      type: String, // one of [READY, PENDING, SUCCESS, ERROR]
      require: true
    }
  },
  data() {
    return {
      debouncedPending: false
    };
  },
  computed: {
    ready() { return this.status === READY },
    pending() { return this.status === PENDING },
    success() { return this.status === SUCCESS },
    error() { return this.status === ERROR },
    currentVariant() {
      if(this.success) {
        return 'success';
      }
      else if(this.error) {
        return 'danger';
      }
      else {
        return this.variant;
      }
    }
  },
  watch: {
    status(val) {
      if(val === PENDING) {
        this.pendingTimeout = setTimeout(() => { this.debouncedPending = true }, 200);
      }
      else {
        if(this.pendingTimeout) {
          clearTimeout(this.pendingTimeout);
          delete this.pendingTimeout;
        }
        this.debouncedPending = false;
      }
    }
  }
}
</script>

<style>
</style>
