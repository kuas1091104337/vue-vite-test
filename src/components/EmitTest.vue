<script setup>
// const emit = defineEmits(['CallBack']),
const emit = defineEmits({
        CallBack: (num) => {
          // console.log('emit =>',num);
          // return num.value === 0 ? true : false;
          return num.value > 0 ? true : false;
        }
      }),
      num = ref(7788);
onMounted(() => {
  emit('CallBack',num);
});
</script>

<template>
<p>{{num}}</p>
</template>

<style lang="scss">

</style>