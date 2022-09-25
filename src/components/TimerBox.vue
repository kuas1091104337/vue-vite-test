<script setup>
let timer = null;
const num = ref(5),
      emit = defineEmits({
        TimeOut: (num) => num.value === 0 ? true : false
      });
      // emit = defineEmits(['TimeOut']);
onMounted(() => {
  timer = setInterval(() => {
    num.value--;
    if(num.value === 0){
      clearInterval(timer);
      emit('TimeOut',num);
    }
  },1000);
});
</script>

<template>
  <p class="timeTxt">{{num}}</p>
</template>

<style lang="scss">
  .timeTxt{
    color: #fff;
    font-size: 50px;
    position: fixed;
    top: 50px;
    right: 50px;
  }
</style>