<template v-for="(item, index) in this.projects">
  <div class="container">
    <h2 id="latest">Other projects</h2>
    <h3>Titre</h3>
    <div class="my-2">
      <span class="float-right site_url">Url</span>
    </div>
    <div>
      <ul>
        <li class="badge badge-secondary mr-1">Tag</li>
      </ul>
      <p>Contenu</p>
      <a class="float-right" href="#">View more</a>
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
          baseURL: "http://127.0.0.1:3000",
        }, config);
        const res = await instance.get("/projects");
        const projects = res.data;
        projects.forEach(element => {
          if (!element.is_showcased){
            this.projects.push(element)
          }
        });
        console.log(this.projects);
        
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
