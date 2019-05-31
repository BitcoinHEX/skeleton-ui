<template>
  <span class="countdown">
    {{days}} Days {{hours}} Hours {{minutes}} Minutes {{seconds}} Seconds
  </span>
</template>
<script>
export default {
  name: 'countdown',
  props: ['timestamp'],
  data() {
    return {
      now: Math.floor(Date.now() / 1000),
      timer: null,
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      this.now = Math.floor(Date.now() / 1000);
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  computed: {
    seconds() {
      return (this.timestamp - this.now) % 60;
    },
    minutes() {
      return Math.trunc((this.timestamp - this.now) / 60) % 60;
    },
    hours() {
      return Math.trunc((this.timestamp - this.now) / 60 / 60) % 24;
    },
    days() {
      return Math.trunc((this.timestamp - this.now) / 60 / 60 / 24);
    },
  },
};
</script>

<style>
</style>
