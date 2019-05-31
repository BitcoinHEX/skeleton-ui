<template>
  <div class="container">

    <div class="space-40"></div>

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

    <div class="space-40"></div>

    <h4 class="title is-4 has-text-centered">Your Referrals</h4>

    <div v-for="referral in referrals" v-bind:key="referral.txid">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <div class="content">
              <b>Time:</b> {{referral.time}}<br>
              <b>Method:</b> {{referral.method}}<br>
              <b>HEX Earned:</b> {{referral.hex}} HEX<br>
            </div>
          </div>
        </div>
      </div>
      <div class="space-10"></div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'refer',
  data() {
    return {
      refLink: 'https://hex.win/?r=0x3f5CE5FBFe3E9af3971dD833D26bA9b5C936f0bE',
      referrals: [
        {
          txid: '435wyrtgdsfgf',
          time: '11:09PM 1 Jan 2016',
          method: 'Claim',
          hex: '12',
        },
        {
          txid: 'afskdjgaksdfk21',
          time: '12:09PM 1 Jan 2016',
          method: 'Transform',
          hex: '1000',
        },
        {
          txid: '4twegudjhujermdf',
          time: '13:09PM 1 Jan 2016',
          method: 'Stake',
          hex: '2000',
        },
      ],
    };
  },
  components: {},
};
</script>
