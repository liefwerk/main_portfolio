<template>
  <div class="container">
    <h1 class="display-2">Hello {{ this.projects.title }}</h1>
    <img
      class="img-fluid"
      :src="`/assets/img/${projects.img_url}`"
      :alt="projects.title"
    />
  </div>
</template>

<script lang="js">
import axios from "axios";

export default  {
  data() {
    return {
      projects: "",
    };
  },
  async created() {
    this.fetchData();
  },
  methods: {
    async fetchData () {
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
        const res = await instance.get("/projects");
        this.projects = res.data[0];
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
