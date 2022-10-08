<script setup>
import { useVuexApiStore } from '@/stores/vuexApi.js';
const store = useVuexApiStore();
</script>

<template>
  <div>
    <img 
      v-show="!store.isLoad"
      class="vuexApi_load" 
      src="../assets/img/load.gif" 
      alt="load"
    />
  </div>
</template>

<style lang="scss">
.vuexApi_load { width: 40px; }
</style>