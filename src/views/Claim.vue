<template>
  <div>
    <div class="tabs is-fullwidth">
      <ul>
        <li
          v-bind:class="{'is-active': step == 'find_claim'}">
          <a>Find Claim</a>
        </li>
        <i class="fas fa-chevron-right"></i>
        <li
          v-bind:class="{'is-active': step == 'review_claim'}">
          <a>Review Claim</a>
        </li>
        <i class="fas fa-chevron-right"></i>
        <li
          v-bind:class="{'is-active': step == 'sign_claim_message'}">
          <a>Sign Claim Message</a>
        </li>
        <i class="fas fa-chevron-right"></i>
        <li
          v-bind:class="{'is-active': step == 'finished'}">
          <a>Finished</a>
        </li>
      </ul>
    </div>
    <div class="container">
      <div v-if="step == 'find_claim'">
      <div class="content">
        <strong>Enter your Bitcoin Address into the box and click next.</strong>
      </div>
        <div class="field has-addons">
          <p class="control">
            <a class="button is-static">
              Bitcoin Address
            </a>
          </p>
          <p class="control is-expanded">
            <input class="input" type="text">
          </p>
        </div>
        <div class="space-20"></div>
        <div class="columns">
          <div class="column">
            <button
              class="button is-primary is-fullwidth"
              v-on:click="move('review_claim')">
              Next
            </button>
          </div>
        </div>
      </div>

      <div v-if="step == 'review_claim'">
      <div class="content">
        <strong>Here's the math that applies to your claim. Click next.</strong>
      </div>
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">0.13 BTC</p>
                <p class="subtitle is-6">129800 HEX</p>
              </div>
            </div>
            <div class="content">
              <b>Speed Bonus:</b> 100 HEX<br>
              <b>Viral Bonus:</b> 100 HEX<br>
              <b>Late to Claim Penalty:</b> -400 HEX
            </div>
          </div>
        </div>
        <div class="space-20"></div>
        <div class="columns">
          <div class="column">
            <button
              class="button is-danger is-fullwidth"
              v-on:click="move('find_claim')">
              Back
            </button>
          </div>
          <div class="column">
            <button
              class="button is-primary is-fullwidth"
              v-on:click="move('sign_claim_message')">
              Next
            </button>
          </div>
        </div>
      </div>

      <div v-if="step == 'sign_claim_message'">
      <div class="content">
        <strong>Copy this text to your Bitcoin Wallet and sign it from [BTC address]. Paste the signed statement into the box below and click Submit.
         This text will only work for that address. </strong>
      </div>
        <div class="space-20"></div>
        <div class="columns">
          <div class="column">
            <button
              class="button is-danger is-fullwidth"
              v-on:click="move('review_claim')">
              Back
            </button>
          </div>
          <div class="column">
            <button
              class="button is-primary is-fullwidth"
              v-on:click="move('finished')">
              Submit Claim
            </button>
          </div>
        </div>
      </div>

      <div v-if="step == 'finished'">
      <div class="content">
        <strong>Congratulations!</strong> Your claim is on it's way to the blockchain to be verified. If you have another address you'd like to claim, click Return to start.
      </div>
        <div class="space-20"></div>
        <div class="columns">
          <div class="column">
            <button
              class="button is-success is-fullwidth"
              v-on:click="move('find_claim')">
              Return to start
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'claim',
  data() {
    return {
      step: 'find_claim',
    };
  },
  methods: {
    move(step) {
      this.step = step;
    },
    find_claim_validate() {

    },
    review_claim_validate() {

    },
    sign_claim_message_validate() {

    },
  },
};
</script>

<style scoped>
</style>
