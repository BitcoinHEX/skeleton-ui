<template>
  <div id="app">
    <nav class="navbar navbar-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="./assets/logo.jpg">
        </a>
        <a
          class="navbar-burger burger"
          v-bind:class="{'is-active': navbarHeaderExpanded}"
          v-on:click="navbarHeader = !navbarHeaderExpanded;"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarHeader" class="navbar-menu" v-bind:class="{'is-active': navbarHeaderExpanded}">
        <div class="navbar-start"></div>
        <div class="navbar-end">
          <router-link to="/" class="navbar-item">Wallet</router-link>
          <router-link to="/stake" class="navbar-item">Stake</router-link>
          <router-link to="/claim" class="navbar-item">Claim</router-link>
          <router-link to="/transform" class="navbar-item">Transform</router-link>
          <router-link to="/refer" class="navbar-item">Refer</router-link>
          <router-link to="/stats" class="navbar-item">Stats</router-link>
        </div>
      </div>
    </nav>
    <div class="view">
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

<style>
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
