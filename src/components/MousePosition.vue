<script setup>
import { useMousePosition } from '@/composables';
// console.log(useMousePosition().x);
const { x, y, pos, Xaxis, Yaxis } = useMousePosition();
</script>

<template>
  <div class="MPbox">
    <h3>Mouse Position</h3>
    <!-- <p>x : {{useMousePosition().x}}, y : {{useMousePosition().y}}</p> -->
    <p>x : {{x}}, y : {{y}}</p>
    <p>pos.x : {{pos.x}}, pos.y : {{pos.y}}</p>
    <p>position.x : {{Xaxis}}, position.y : {{Yaxis}}</p>
  </div>
</template>

<style lang="scss">

</style>