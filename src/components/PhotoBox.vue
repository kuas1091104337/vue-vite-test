<script setup>
import { apiGetHKAphotoList } from '@/api/index.js';
// import axios from 'axios'; 
// const photoArr = ref([]);
// onMounted(() => {
//   axios.get('https://vue-lessons-api.herokuapp.com/photo/list')
//   .then((res) => {photoArr.value = res.data})
//   .catch((error) => {console.log(error.response.data)});
// });

// const photoArr = await axios.get(
//                   //  "https://vue-lessons-api.herokuapp.com/photo/list?status=error"
//                    "https://vue-lessons-api.herokuapp.com/photo/list"
//                  );

const photoArr = await apiGetHKAphotoList();
console.log(photoArr);
</script>

<template>
  <img 
    v-for="(item, idx) in photoArr.data" 
    :key="item.url"
    :src="item.url" 
    :alt="idx+1"
    class="suspImg"
  >
</template>

<style lang="scss">
.suspImg{
  vertical-align: top;
  width: 200px;
}
</style>