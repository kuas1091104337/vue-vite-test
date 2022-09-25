<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="greetings">
    <!-- <h1 class="green">{{ msg }}</h1> -->
    <h3>
      You’ve successfully created a project with
      <a target="_blank" href="https://vitejs.dev/">Vite</a> +
      <a target="_blank" href="https://vuejs.org/">Vue 3</a>.
    </h3>
  </div>
</template>

<style lang="scss">
  .greetings{
    text-align: center;
    > h3 {font-size: 18px; }
    // h1 { font-weight: 500; font-size: 2.6rem; top: -10px; }
  }
</style>
