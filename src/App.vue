<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://github.com/filipesoccol/vue-ipfs-components" target="_blank">
      <img src="./assets/logo.svg" class="logo" alt="Vite logo" />
    </a>
  </div>
  <h1>Vue IPFS Components</h1>
  <h2>Load any IPFS content from the fastest gateway available just passing a valid path.</h2>
  <HelloWorld />
</template>

<style scoped>
.logo {
  height: 6em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
