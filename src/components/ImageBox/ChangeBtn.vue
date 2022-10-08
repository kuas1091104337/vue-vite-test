<script setup>
import { useVuexApiStore } from '@/stores/vuexApi.js';
const store = useVuexApiStore();
</script>

<template>
<div class="vuexApi_box_btn">
  <a @click="store.changeImg(-1)" href="javascript:;">上一張</a>
  <a @click="store.changeImg(1)" href="javascript:;">下一張</a>
</div>
</template>

<style lang="scss">
.vuexApi_box_btn {
  width: 100%;
  display: flex;
  justify-content: center;
  > a {
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    padding: 10px 10px;
  }
}
</style>