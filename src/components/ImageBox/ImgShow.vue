<script setup>
import { useVuexApiStore } from '@/stores/vuexApi.js';
const store = useVuexApiStore();
      console.log(store); 
      // store.activeIdx store.photoArr store.isLoad
</script>

<template>
<div>
  <img
    v-for="(item, idx) in store.photoArr"
    v-show="store.activeIdx === idx"
    class="vuexApi_box_img"
    :key="item.url"
    :src="item.url"
    :alt="idx"
  />
</div>
</template>

<style lang="scss">
.vuexApi_box_img{ border: 8px solid #42b983; }
</style>