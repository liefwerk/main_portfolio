<template>
  <div class="container">
    <h1 class="display-2">Hello {{ this.user.name }}</h1>
  </div>
</template>

<script lang="js">
import { Component, Prop, Vue } from "vue-property-decorator";
import axios from "axios";

@Component
export default class Home extends Vue {
  data() {
    return {
      user: "",
    };
  }
  async created() {
    const config = {
      headers: {
        Accept: "application/json",
        crossdomain: true,
        AccessControlAllowOrigin: "*",
      },
    };
    try {
      const instance = axios.create({
        baseURL: "http://127.0.0.1:3000",
      });
      const res = await instance.get("/users");
      this.user = res.data[1];
    } catch (error) {
      console.log(error);
    }
  }
}
</script>

<style lang="scss" scoped></style>
