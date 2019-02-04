<template lang="html">
  <div class="container">
    <submit-button :status="status1" label="Login" @click="toggle1"></submit-button>
    <submit-button :status="status2" label="Login" @click="toggle2"></submit-button>
  </div>
</template>

<script>
import SubmitButton, * as Status from '@/components/SubmitButton';

export default {
  components: { SubmitButton },
  data() {
    return {
      status1: Status.READY,
      status2: Status.READY
    };
  },
  methods: {
    toggle1() {
      this.status1 = Status.PENDING;
      this.status2 = Status.READY;
      setTimeout(() => { this.status1 = Status.SUCCESS }, 1000);
    },
    toggle2() {
      this.status1 = Status.READY;
      this.status2 = Status.PENDING;
      setTimeout(() => { this.status2 = Status.ERROR }, 1000);
    }
  }
};
</script>

<style>
.container {
  margin: 2em;
}
button {
  width: 10em;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  text-align: center;
  vertical-align: middle;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

.btn-success {
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
}
.btn-primary {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}
.btn-primary:disabled {
  opacity: .65;
}
.btn-danger {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}
</style>
