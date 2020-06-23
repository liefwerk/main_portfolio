<template>
  <div class="container my-5">
    <h2 id="latest">Other projects</h2>
    <div v-for="project in projects" :key="project.id" class="my-4">
      <h3>{{ project.title }}</h3>
      <div class="pb-5">
        <ul>
          <li
            class="badge badge-secondary mr-1"
            v-for="tag in project.tags"
            :key="tag"
          >
            {{ tag }}
          </li>
        </ul>
        <p>{{ project.content }}</p>
        <a
          v-if="project.site_url"
          class="float-right btn btn-outline-info"
          href="#"
          >Visit the website</a
        >
        <small v-if="!project.site_url" class="float-right" href="#"
          >The website isn't online anymore.</small
        >
      </div>
    </div>
  </div>
</template>

<script lang="js">
import axios from "axios";

export default  {
  data() {
    return {
      projects: []
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
          baseURL: "http://45.33.98.225:3000",
        }, config);
        const res = await instance.get("/projects");
        const projects = res.data;
        projects.forEach(element => {
          if (!element.is_showcased){
            this.projects.push(element)
            element.tags = element.tags.split(",");
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
