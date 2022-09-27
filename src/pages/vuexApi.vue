<script setup>
import { useVuexApiStore } from '@/stores/vuexApi.js';
const store = useVuexApiStore(),
      imgLoad = (imgArr) => {

      },
      init = () => {
        
      };
onMounted(() => {
  init();
});
// store.refName
</script>

<template>
  <div class="vuexApi">
    <LoadingBar />
    <ImageBox />
  </div>
</template>

<style lang="scss">

</style>