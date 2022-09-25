<script setup>
// const props = defineProps({
//   openFn:{
//     type:Function,
//     default:() => {}
//   }
// });
const emit = defineEmits(['handleListOpen']),
      handleListOpen = () => emit('handleListOpen');
</script>

<template>
  <a class="title" @click="handleListOpen">課程列表</a>
  <!-- <a class="title" @click="props.openFn">課程列表</a> -->
</template>

<style lang="scss">
  .title {
    color: darkslategray;
    font-size: 20px;
    font-weight: bold;
    line-height: 50px;
    text-align:center;
    width: 100%;
    display: block;
    background-color: #42b983;
    cursor: pointer;
  }
</style>