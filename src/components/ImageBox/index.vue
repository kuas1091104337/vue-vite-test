<script setup>
import { useVuexApiStore } from '@/stores/vuexApi.js';
const store = useVuexApiStore();
</script>

<template>
<div class="vuexApi_box" v-show="store.isLoad">
  <ImgShow /> 
  <ChangeBtn />
</div>
</template>

<style lang="scss">
.vuexApi_box{
  width: 516px;
  margin:0 auto;
}
</style>