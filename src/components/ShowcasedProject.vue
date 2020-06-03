<template>
  <div class="container">
    <h2 id="latest">Latest project</h2>
    <div class="my-2">
      <span class="float-right site_url">{{ this.showcasedProject.site_url }}</span>
      <img
        class="img-fluid"
        id="project_img"
        :src="`/assets/img/${showcasedProject.img_url}`"
        :alt="showcasedProject.title"
      />
    </div>
    <div>
      <ul>
        <li
          v-for="tag in showcasedProject.tags"
          :key="tag.id"
          class="badge badge-secondary mr-1"
        >{{ tag }}</li>
      </ul>
      <h3>{{ this.showcasedProject.title }}</h3>
      <p>{{ this.showcasedProject.content }}</p>
      <a class="float-right" href="#">View more</a>
    </div>
  </div>
</template>

<script lang="js">
import axios from "axios";

export default  {
  data() {
    return {
      showcasedProject: {}
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
          if (element.is_showcased){
            this.showcasedProject = element
          }
          if (element.tags){
            element.tags = element.tags.split(',')
          }
        });
        
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style lang="scss">
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
  margin-right: 0.5em;
}

.site_url {
  transform: translateY(0.3em);
  font-size: 1.5em;
}

#project_img {
  border-bottom: solid 0.2em $primary;
}
</style>
