<template>
  <div id="app">
    <nav class="navbar navbar-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="./assets/logo.jpg">
        </a>
        <a
          class="navbar-burger burger"
          v-bind:class="{'is-active': navbarHeaderExpanded}"
          v-on:click="navbarHeaderExpanded = !navbarHeaderExpanded;"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarHeader" class="navbar-menu" v-bind:class="{'is-active': navbarHeaderExpanded}">
        <div class="navbar-start"></div>
        <div class="navbar-end">
          <router-link to="/" class="navbar-item">
            <i class="fas fa-wallet"></i>&nbsp;Wallet
          </router-link>
          <router-link to="/stake" class="navbar-item">
            <i class="mdi mdi-bank"></i>&nbsp;Stake
          </router-link>
          <router-link to="/claim" class="navbar-item">
            <i class="fab fa-btc"></i>&nbsp;Claim
          </router-link>
          <router-link to="/transform" class="navbar-item">
            <i class="fas fa-exchange-alt fa-fw"></i>&nbsp;Transform
          </router-link>
          <router-link to="/refer" class="navbar-item">
            <i class="fas fa-share-alt"></i>&nbsp;Refer
          </router-link>
          <router-link to="/stats" class="navbar-item">
            <i class="fas fa-chart-line fa-fw"></i>&nbsp;Stats
          </router-link>
        </div>
      </div>
    </nav>
    <div class="view" v-on:mouseover="navbarHeaderExpanded = false">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      navbarHeaderExpanded: false,
    };
  },
};
</script>

<style lang="scss">
.view {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  padding-top: 60px;
}
.navbar-top {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
}
.container {
  padding-left: 10px;
  padding-right: 10px;
}
</style>
