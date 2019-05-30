<template>
  <div class="container">
    <div class="card has-text-centered">
      <div class="card-content">
        <div class="content">
          <h4 class="title is-4 has-text-centered">Your Referral Address</h4>
          <div class="field has-addons">
            <div class="control is-expanded">
              <input class="input" type="text" :value="refLink">
            </div>
            <div class="control">
              <button class="button is-info" v-clipboard:copy="this.refLink">
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'refer',
  data() {
    return {
      refLink: 'https://hex.win/?r=0x3f5CE5FBFe3E9af3971dD833D26bA9b5C936f0bE',
    };
  },
  components: {},
};
</script>
