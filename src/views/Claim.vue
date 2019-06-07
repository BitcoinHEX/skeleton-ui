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
          v-bind:class="{'is-active': step == 'submit'}">
          <a>Submit</a>
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
        Find Claim
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
        Review Claim
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
              v-on:click="move('submit')">
              Next
            </button>
          </div>
        </div>
      </div>

      <div v-if="step == 'submit'">
        Submit
        <div class="space-20"></div>
        <div class="columns">
          <div class="column">
            <button
              class="button is-danger is-fullwidth"
              v-on:click="move('sign_claim_message')">
              Back
            </button>
          </div>
          <div class="column">
            <button
              class="button is-primary is-fullwidth"
              v-on:click="move('finished')">
              Confirm
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
    submit_validate() {

    },
  },
};
</script>

<style scoped>
</style>
