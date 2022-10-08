<script setup>
import { apiGetHKAdomContent } from '@/api/index.js';
// import axios from 'axios';
const html = ref(''); 
onMounted(() => {
  // axios.get('https://vue-lessons-api.herokuapp.com/dom/content')
  // .then(function(res){html.value = res.data})
  // .catch(function(error){console.log(error.response.data)});
  
  (async () => {
    try{
      const res = await apiGetHKAdomContent();
      html.value = res.data;
      console.log(res.data);
    }catch(error){
      console.log(error.response.data);
      throw new Error(error);
    }
  })();
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