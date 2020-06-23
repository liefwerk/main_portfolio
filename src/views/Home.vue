<template>
  <div>
    <Jumbotron />
    <Services />
    <ShowcasedProject />
    <Projects />
  </div>
</template>

<script lang="js">
import Jumbotron from '../components/Jumbotron';
import ShowcasedProject from '../components/ShowcasedProject';
import Projects from '../components/Projects';
import Services from '../components/Services';

export default  {
  components: {
    Jumbotron,
    ShowcasedProject,
    Projects,
    Services
  },
  data() {
    return {
      projects: "",
    }
  }
}
</script>

<style lang="scss" scoped></style>
