<script setup>
const time = ref(0),
      timer = setInterval(() => {
        time.value++;
        if(time.value >= 5){
          clearInterval(timer); 
          console.log('clearInterval');
          alert('clearInterval')
        }
      },1000);
onUnmounted(() => {
  clearInterval(timer); 
});

</script>

<template>
  <h1 class="indexH1">{{time}}</h1>
  <main>
    <TheWelcome />
  </main>
</template>

<style lang="scss">
.indexH1{
  color:#ff0;
  text-align: center;
}
</style>