<script setup>
import { useFetch } from '@/composables';
// const { isLoad, FetchData, errorMsg } = useFetch(
//   'https://vue-lessons-api.herokuapp.com/photo/list'
// );
const { isLoad, FetchData, errorMsg } = useFetch('/photo/list');
onMounted(() => { });
</script>

<template>
  <div class="FDwrap">
    <img 
      v-if="!isLoad"
      class="FDloading" 
      src="@/assets/img/load.gif" 
      alt="load"
    />
    <h1 v-if="errorMsg">ERROR : {{errorMsg}}</h1>
    <div v-if="isLoad" class="imgBlock">
      <img 
        v-for="(item, idx) in FetchData" 
        :key="item.url" 
        :src="item.url" 
        :alt="idx" 
      />
    </div>
  </div>
</template>

<!-- <style lang="scss" src="@/assets/scss/layout.scss"></style> -->
<style lang="scss">
// @import "@/assets/scss/variables.scss";
.FDwrap{
  text-align:center;
  // width: 500px;
  // margin:0 auto;
  background-color:$lineGreen;
}
.FDloading {
  display: block;
  width: 50px;
  margin: 0 auto;
}
</style>