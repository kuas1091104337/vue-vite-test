<script setup> 
import { useMenuStore } from '@/stores/menu.js';
const store = useMenuStore();
console.log(store.isOpen);
</script>

<template>
  <div :class="['menu', {open:store.isOpen}]">
    <a class="menu_btn" @click="store.menuOpen(false)">
      <i class="menu_btn_icon"></i>
    </a>
    <ul class="menu_nav">
      <li><a>abous</a></li>
      <li><a>content</a></li>
      <li><a>user</a></li>
      <li><a>address</a></li>
    </ul>
  </div>
</template>

<style lang="scss">
.open + .menu {transform: translate3d(0,0,0);}
.menu {
  width: 350px;
  height: 100%;
  background-color: #fff;
  position: fixed;
  top: 0;
  right: 0;
  // z-index: 1;
  transform: translate3d(100%,0,0);
  transition: transform .3s;
  &_btn {
    width: 44px;
    height: 44px;
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
    &_icon{
      width: 70%;
      height: 4px;
      background-color: #000;
      border-radius: 10px;
      margin:auto;
      position:absolute;
      top:0;
      right:0;
      left:0;
      bottom:0;
      transform: rotate(45deg);
      &:after{
        content: "";
        width: 100%;
        height: 100%;
        background-color: #000;
        border-radius: 10px;
        position:absolute;
        top:0;
        left:0;
        transform: rotate(90deg);
      }
    }
  }
  &_nav {
    width: 100%;
    list-style: none;
    padding: 0;
    margin-top: -150px;
    position: absolute;
    top: 50%;
    a {
      font-size: 22px;
      line-height: 75px;
      cursor: pointer;
      display: block;
      padding-left: 50px;
    }
  }
  &.open {transform: translate3d(0,0,0);}
  
}
</style>