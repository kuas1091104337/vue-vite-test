<script setup>
import { useState } from '@/composables';
const { idx, addState, removeState } = useState();
</script>

<template>
  <div class="STblock">
    <h1>number:{{idx}}</h1>
    <button @click="addState">add</button>
    <button @click="removeState">remove</button>
  </div>
</template>

<style lang="scss">
.STblock {
  color: #fff;
  text-align:center;
  width: 300px;
  border: 1px solid #000;
  background-color:red;
  padding: 15px 15px;
  margin: 0 auto 5px;
}
</style>