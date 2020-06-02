<template>
  <div id="app">
    <Navigation />
    <Home msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Home from "./components/Home.vue";
import Navigation from "./components/Navigation.vue";

@Component({
  components: {
    Home,
    Navigation
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
</style>
