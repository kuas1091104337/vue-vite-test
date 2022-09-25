<script setup>
// const emit = defineEmits(['AddInt']),
const emit = defineEmits({
        AddInt:(e,val) => {
          console.log('emit =>', val);
          console.log('el =>', e);
          return val > 0 ? true : false ;
        }
      }),
      handleClick = (e,a=1,b=2) => {
        const val = a + b;
        emit('AddInt',e,val)
      };
</script>

<template>
<button @click="handleClick">click</button>
</template>

<style lang="scss">

</style>