<script setup>
import { useVuexApiStore } from '@/stores/vuexApi.js';
const store = useVuexApiStore(),
      photoArr = computed(() => {
        return 123
      }),
      idx = computed(() => {
        return 321
      });
</script>

<template>
<div>
  <img
    class="vuexApi_box_img"
    alt=""
  />
  <!-- v-for="(item, idx) in photoArr"
  v-show="imgIdx === idx"
  :key="item.url"
  :src="item.url" -->
</div>
</template>

<style lang="scss">
.vuexApi_box_img{
  border: 8px solid #42b983;
}
</style>