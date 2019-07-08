<template>
  <div class="container">
    <div class="space-20"></div>
      <div class="plate">
        <h4 class="title is-4 has-text-centered">Balance</h4>
        <div class="has-text-centered">{{balance}} HEX</div>
      </div>

      <div class="plate">
        <h4 class="title is-4 has-text-centered">Receive Hex</h4>
        <qrcode :value="address" size="100" level="H"></qrcode>
        <div class="has-text-centered">{{address}}</div>
      </div>

      <div class="plate">
        <h4 class="title is-4 has-text-centered">Send Hex</h4>
        <div class="field has-addons">
          <p class="control">
            <a class="button is-static">To</a>
          </p>
          <p class="control is-expanded">
            <input class="input" type="text">
          </p>
        </div>
        <div class="field has-addons">
          <p class="control">
            <a class="button is-static">Amount</a>
          </p>
          <p class="control is-expanded">
            <input class="input" type="text">
          </p>
        </div>
        <a class="button is-primary is-fullwidth">Send</a>
      </div>
    </div>
</template>

<script>
import qrcode from 'qrcode.vue';

export default {
  name: 'wallet',
  data() {
    return {
    };
  },
  computed: {
    address() {
      return this.$store.state.address;
    },
    balance() {
      return this.$store.state.balance;
    },
  },
  components: {
    qrcode,
  },
};
</script>

<style scoped>
</style>
