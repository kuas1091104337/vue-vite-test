<script setup>
import { useVuexApiStore } from '@/stores/vuexApi.js';
const store = useVuexApiStore(),
      isLoad = computed(() => {
        console.log(store);
        return true;
      });
</script>

<template>
   <!-- -->
<div class="vuexApi_box" v-show="isLoad">
  <ImgShow />
  <ChangeBtn />
</div>
</template>

<style lang="scss">
.vuexApi_box{width: 500px;}
</style>