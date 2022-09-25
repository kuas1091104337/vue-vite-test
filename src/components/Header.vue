<script setup>
// const emit = defineEmits(['menuToggle']),
//       menuHandle = () => emit('menuToggle');
const props = defineProps({
                menuToggle:{
                  type:Function,
                  default:() => {}
                }
              });
</script>

<template>
<header>
  <nav>
    <button @click="props.menuToggle">menu</button>
    <!-- <button @click="menuHandle">menu</button> -->
  </nav>
</header>
</template>

<style lang="scss" scoped>
header{
  width: 100%;
  height: 30px;
  background-color:blue;
  position:fixed;
  top:0;
  left:0;
}
nav{
  width: 100%;
  height: 100%;
  margin: 0;
}
button{
  text-align:center;
  white-space:nowrap;
  width: 50px;
  height: 100%;
  border: none;
  overflow:hidden;
  position:absolute;
  top:0;
  left:20px;
}
</style>