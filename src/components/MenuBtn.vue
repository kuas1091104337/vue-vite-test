<script setup>
import { useMenuStore } from '@/stores/menu.js';
const store = useMenuStore();
// store.refName
const menuHandle = () => {
  console.log(store.isOpen);
  store.menuOpen(true);
}; 
</script>

<template>
  <a class="menuBtn" @click="menuHandle">
  <!-- <a class="menuBtn" @click="store.menuOpen(true)"> -->
    <i class="menuBtn_bar"/>
  </a>
</template>

<style lang="scss">
.menuBtn {
  width: 44px;
  height: 44px;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  // z-index: 1;
  &_bar{
    width: 70%;
    height: 3px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 9px 0 #fff,  0 -9px 0 #fff;
    margin:auto;
    position:absolute;
    top:0;
    right:0;
    left:0;
    bottom:0;
  }
}
.open > .menuBtn_bar{ }
</style>