<script setup>
import { useVuexApiStore } from '@/stores/vuexApi.js';
const store = useVuexApiStore();
</script>

<template>
  <div class="VAhead">
    <div class="VAhead_nav">
      <a class="VAhead_nav_a" @click="store.menuHandle(!store.isOpen)">Menu</a>
      <a class="VAhead_nav_a" @click="store.loginHandle(!store.isLogin)">Login</a>
      <!-- <a class="VAhead_nav_a" @click="stateHandle('menuHandleActions',!isOpen && isLogin && true)">Menu</a>
      <a class="VAhead_nav_a" @click="stateHandle('loginHandleActions',!isLogin && isOpen && true)">Login</a> -->
    </div>
  </div>
</template>

<style lang="scss" >
.VAhead{
  line-height: 44px;
  width: 100%;
  background-color:#42b983;
  position:fixed;
  top:0;
  left:0;
  z-index:1;
  &_nav{
    padding: 0 30px;
    display: flex;
    &_a{
      color: #fff;
      padding: 0 15px;
      &:hover{
        background-color:#787878;
      }
    }
  }
}
</style>