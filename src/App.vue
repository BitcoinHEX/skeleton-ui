<template>
  <div id="app">
    <nav class="navbar is-light" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="./assets/logo.png">
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
        <div class="navbar-start">
          <router-link to="/wallet" class="navbar-item">
            <i class="fas fa-wallet fa-fw"></i>Wallet
          </router-link>
          <router-link to="/stake" class="navbar-item">
            <i class="mdi mdi-bank fa-fw"></i>Stake
          </router-link>
          <router-link to="/claim" class="navbar-item">
            <i class="fab fa-btc fa-fw"></i>Claim
          </router-link>
          <router-link to="/refer" class="navbar-item">
            <i class="fas fa-share-alt fa-fw"></i>Refer
          </router-link>
          <router-link to="/stats" class="navbar-item">
            <i class="fas fa-chart-pie fa-fw"></i>Stats
          </router-link>
          <router-link to="/transform" class="navbar-item">
            <i class="fas fa-random fa-fw"></i>Transform
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
  margin-top: 52px;
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

.space-10 {
  height: 8px;
}

.space-20 {
  height: 16px;
}

.space-40 {
  height: 32px;
}
</style>
