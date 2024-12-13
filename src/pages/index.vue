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
  <h1 class="indexH1 border-10px p-10px border-solid bg-#000">{{time}}</h1>
  <main>
    <div class="box">box</div>
    <TheWelcome />
  </main>
</template>

<style lang="scss">
.box{
  @apply border-5 border-solid border-red p-10px ml-12;
  color:#fff;
  background-color:blue;
  border-radius:10px;
  // border:10px solid red;
  // padding:10px;

}
.indexH1{
  color:#ff0;
  text-align: center;
}
</style>