<template>
  <button
    :type="type"
    :class="[ baseClass, currentClass ]"
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

/**
 * SubmitButton is a smart button that can change state, for exemple during
 * a xhr request.
 */
export default {
  components: { 'fa-icon': Icon },
  props: {
    /**
     * The type of button, submit, reset, button
     * Default to submit
     */
    'type': {
      type: String,
      default: 'submit'
    },
    /**
     * The base class of the button, by default 'btn' to fit bootstrap class
     */
    'baseClass': {
      type: String,
      default: 'btn'
    },
    /**
     * The additionnal class of the button when it is in READY state.
     * Default to btn-primary
     */
    'readyClass': {
      type: String,
      default: 'btn-primary'
    },
    /**
     * The additionnal class of the button when it is in PENDING state.
     * Default to btn-primary
     */
    'pendingClass': {
      type: String,
      default: 'btn-primary'
    },
    /**
     * The additionnal class of the button when it is in SUCCESS state.
     * Default to btn-success
     */
    'successClass': {
      type: String,
      default: 'btn-success'
    },
    /**
     *  The additionnal class of the button when it is in ERROR state.
     * Default to btn-danger
     */
    'errorClass': {
      type: String,
      default: 'btn-danger'
    },
    'icon': {
      type: String,
      default: undefined
    },
    'label': {
      type: String,
      required: true
    },
    'pendingLabel': {
      type: String,
      default: undefined
    },
    'successLabel': {
      type: String,
      default: undefined
    },
    'errorLabel': {
      type: String,
      default: undefined
    },
    'status': {
      type: String, // one of [READY, PENDING, SUCCESS, ERROR]
      required: true
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
    currentClass() {
      switch(this.status) {
        case READY: return this.readyClass;
        case PENDING: return this.pendingClass;
        case SUCCESS: return this.successClass;
        case ERROR: return this.errorClass;
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
