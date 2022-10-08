<script setup>
  const SVIname = ref('Mike'),
        SVIcolor = ref('#f00'),
        SVImove = ref('0px'),
        clickHandle = () => {
          SVIname.value = 'Alex'
          SVIcolor.value = '#00f'
          SVImove.value = '200px'
        },
        resetHandle = () => {
          SVIname.value = 'Mike'
          SVIcolor.value = '#f00'
          SVImove.value = '0px'
        };
</script>

<template>
  <div class="SVIwrap">
    <h3>{{SVIname}}</h3>
    <button @click="clickHandle">click</button>
    <button @click="resetHandle">reset</button>
  </div>
</template>

<style lang="scss">
.SVIwrap{
  width: 300px;
  height: 300px;
  background-color:#333;
  margin:50px auto;
  > h3{
    color: v-bind(SVIcolor);
    font-size: 30px;
    position:relative;
    left: v-bind(SVImove);
    transition:color .4s, left .4s;
  }
}
</style>