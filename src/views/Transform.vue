<template>
  <div class="container">

    <div class="space-40"></div>
    <h4 class="title is-4 has-text-centered">Transform Days</h4>

    <div v-for="day in days" v-bind:key="day.day">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">Day {{day.day}} / {{totalDays}}</p>
              <p class="subtitle is-5">{{day.hexAvailable}} Hex Available</p>
            </div>
            <div class="media-right">
              <b>Your HEX in Lobby:</b> {{day.hexInLobby}} HEX<br>
            </div>
          </div>
          <div class="content">
            <b>All ETH in Lobby:</b> {{day.allEthInLobby}} ETH<br>
            <b>Your ETH in Lobby:</b> {{day.ethInLobby}} ETH<br>
            <b>Ends In:</b>
            <Countdown v-if="day.active" :timestamp="day.endsAt"></Countdown>
            <span v-if="!day.active"> Ended</span><br>
            <div class="space-20"></div>
          </div>
        </div>
        <footer class="card-footer" v-if="day.active">
          <a class="card-footer-item">Add to Lobby</a>
        </footer>
        <footer class="card-footer" v-if="!day.active && day.hexInLobby > 0">
          <a class="card-footer-item">Transfer to Wallet</a>
        </footer>
      </div>
      <div class="space-10"></div>
    </div>

  </div>
</template>

<script>
import Countdown from '@/components/Countdown.vue';

export default {
  name: 'transform',
  data() {
    return {
      totalDays: 351,
      days: [
        {
          day: 1,
          hexAvailable: 332,
          hexInLobby: 0,
          allEthInLobby: 12,
          ethInLobby: 0,
          endsAt: 1564531200,
          active: true,
        },
        {
          day: 2,
          hexAvailable: 330,
          hexInLobby: 9.0183867745,
          allEthInLobby: 4.1231321,
          ethInLobby: 0.112,
          endsAt: 1544531200,
          active: false,
        },
        {
          day: 3,
          hexAvailable: 400,
          hexInLobby: 0,
          allEthInLobby: 19,
          ethInLobby: 0,
          endsAt: 1161531200,
          active: false,
        },
      ],
    };
  },
  components: {
    Countdown,
  },
};
</script>
