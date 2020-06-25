<template>
  <div class="jumbotron bg-primary mb-5 rounded-0">
    <div class="container">
      <div
        data-letter-crap="/assets/img/bonjour.png"
        style="width: 500px; height: 100px"
      ></div>
      <h1 class="text-light">My name is Nathanaël.</h1>
      <p class="lead text-light">
        I am a constant-learning web developer living in Montevideo, Uruguay.
      </p>
      <ul class>
        <li class="badge badge-secondary mr-1">webdev</li>
        <li class="badge badge-secondary mr-1">design</li>
        <li class="badge badge-secondary mr-1">mgmt</li>
        <li class="badge badge-secondary mr-1">music</li>
      </ul>
      <p id="available" class="text-success mt-1 mb-2">
        <b>Available for work</b>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
ul {
  padding-left: 0;
}
[data-letter-crap] {
  white-space: pre;
  overflow: hidden;
  font-size: 8px;
  line-height: 10px;
  font-family: monospace;
  padding: 0;
  color: white;
}
</style>
