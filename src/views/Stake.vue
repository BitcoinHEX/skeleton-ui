<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <h4 class="title is-4 has-text-centered">Create New Stake</h4>
        <div class="field has-addons">
          <p class="control">
            <a class="button is-static">Amount</a>
          </p>
          <p class="control is-expanded">
            <input class="input" type="text">
          </p>
          <p class="control">
            <a class="button is-static">HEX</a>
          </p>
        </div>
        <div class="field has-addons">
          <p class="control">
            <a class="button is-static">Length</a>
          </p>
          <p class="control is-expanded">
            <input class="input" type="text">
          </p>
          <p class="control">
            <a class="button is-static">Days</a>
          </p>
        </div>
        <a class="button is-primary is-fullwidth">Create Stake</a>
      </div>

      <div class="column">
        <h4 class="title is-4 has-text-centered">Your Stakes</h4>
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">1000 HEX</p>
                <p class="subtitle is-5">1300 Shares</p>
              </div>
            </div>
            <div class="content">
              <b>Ends:</b> 11:09 PM - 1 Jan 2020
            </div>
          </div>
          <footer class="card-footer">
            <a class="card-footer-item">Emergency Unstake</a>
          </footer>
        </div>
        <br>
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">900 HEX</p>
                <p class="subtitle is-5">800 Shares</p>
              </div>
            </div>
            <div class="content">
              <b>Ends:</b> 11:09 PM - 1 Jan 2020
            </div>
          </div>
          <footer class="card-footer">
            <a class="card-footer-item">Good Accounting</a>
            <a class="card-footer-item">Claim Stake</a>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'stake',
  components: {},
};
</script>
