<script setup>
// const props = defineProps({
//                 content:{
//                   type:String,
//                   default:'text'
//                 }
//               });
</script>

<template>
<li class="slotBar">
  <p class="slotBar_item">
    <img src="@/assets/logo.svg" alt="vue logo">
    <slot>預設內容</slot>
    <!-- {{props.content}} -->
  </p>
</li>
</template>

<style lang="scss">
  .slotBar{
    vertical-align: middle;
    &_item{
      display: flex;
      align-items:center;
      > img{
        width: 50px;
        margin-right: 10px;
      }
    }
  }
</style>