<script setup>
const isOpen = ref(false),
      menuToggle = () => isOpen.value = !isOpen.value;
</script>

<template>
  <!-- <Header @menuToggle="menuToggle" />
  <Nav :isOpen="isOpen" @menuToggle="menuToggle" /> -->
  <Header :menuToggle="menuToggle" />
  <Nav :isOpen="isOpen" :menuToggle="menuToggle" />  
</template>

<style lang="scss">

</style>