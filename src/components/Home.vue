<template>
  <div class="container">
    <h1 class="display-2">Hello</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  @Prop() private msg!: string;
}
</script>

<style lang="scss" scoped>
</style>