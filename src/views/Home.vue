<template>
  <div>
    <Jumbotron />
    <ShowcasedProject />
    <Projects />
  </div>
</template>

<script lang="js">
import axios from "axios";
import Jumbotron from '../components/Jumbotron';
import ShowcasedProject from '../components/ShowcasedProject';
import Projects from '../components/Projects';

export default  {
  components: {
    Jumbotron,
    ShowcasedProject,
    Projects
  },
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
        }, config);
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
