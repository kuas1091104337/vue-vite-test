<script setup>
import axios from 'axios';
const html = ref('');
onMounted(() => {
  axios.get('https://vue-lessons-api.herokuapp.com/dom/content')
  .then(function(res){
    console.log(res.data);
    html.value = res.data
    console.log(html.value);
  }).catch(function(error){
    console.log(error.response.data);
    console.error(error.response.data.msg);
  });
});
</script>

<template>
  <div class="content" v-html="html.html"></div>
</template>

<style lang="scss">
.content{
  width: 500px;
  margin:0 auto;
  img{
    width: 100%;
    height: auto;
    display: block;
  }
}
</style>