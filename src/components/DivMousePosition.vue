<script setup> 
  import { useDivMousePosition } from '@/composables';
  const { Xaxis, Yaxis, mpDiv } = useDivMousePosition();
</script>

<template>
  <div class="mpDiv" ref="mpDiv">
    <h3>Mouse Position</h3>
    <p>mpDiv.x : {{Xaxis}}, mpDiv.y : {{Yaxis}}</p>
  </div>
</template>

<style lang="scss">
.mpDiv{
  color: #fff;
  width: 600px;
  height: 300px;
  background-color:blue;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin:0 auto;
}
</style>