<template>
  <div class="container">
    <h2 id="latest">Latest project</h2>
    <small>Hello {{ this.projects.title }}</small>
    <span>{{ this.projects.site_url }}</span>
    <img
      class="img-fluid"
      id="project_img"
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
      test: "hello"
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

<style lang="scss" scoped>
// Required
@import "../../node_modules/bootstrap/scss/functions";
@import "../../node_modules/bootstrap/scss/variables";
@import "../../node_modules/bootstrap/scss/mixins";

#latest::before {
  content: "";
  display: inline-block;
  width: 0.1em;
  height: 0.7em;
  background-color: $primary;
  margin-right: 0.2em;
}
</style>
