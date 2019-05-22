<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="./assets/logo.jpg">
        </a>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarHeader"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarHeader" class="navbar-menu">
        <div class="navbar-start"></div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <router-link to="/send" class="navbar-item">Send</router-link>
              <router-link to="/" class="navbar-item">Receive</router-link>
              <router-link to="/stake" class="navbar-item">Stake</router-link>
              <router-link to="/claim" class="navbar-item">Claim</router-link>
              <router-link to="/transform" class="navbar-item">Transform</router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style>
</style>
