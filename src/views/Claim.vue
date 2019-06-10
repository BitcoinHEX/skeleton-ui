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
        Sign Claim Message
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
        Finished
        <div class="space-20"></div>
        <div class="columns">
          <div class="column">
            <button
              class="button is-success is-fullwidth"
              v-on:click="move('find_claim')">
              Restart
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
