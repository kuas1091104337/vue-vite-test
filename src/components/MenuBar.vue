<script setup>
import { useVuexApiStore } from '../stores/vuexApi';
const store = useVuexApiStore();
</script>

<template>
  <div id="menu" :class="{open:store.isMenuOpen}">
    ^ to top ^
  </div>
</template>

<style lang="scss">
#menu {
  color: #fff;
  font-size: 80px;
  font-weight: bold;
  text-align: center;
  line-height: 300px;
  position: fixed;
  width: 100%;
  height: 300px;
  background-color: #fa0;
  right: 0;
  bottom: 0;
  transform:translate3d(0,100%,0);
  transition: transform 0.3s;
  &.open {transform:translate3d(0,0,0);}
}
</style>