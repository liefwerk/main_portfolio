<template>
  <div id="app">
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer";

export default {
  components: {
    Footer
  }
};
</script>

<style lang="scss">
// Required
@import "~bootstrap/scss/bootstrap.scss";
@import "~bootstrap-vue/src/index.scss";

@import "assets/custom.scss";
</style>
