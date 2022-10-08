<script setup>
import { apiGetHKAcourses_id } from '@/api/index.js';
import axios from 'axios'; 
import router from '@/router';
let timer = null; 
const route = useRoute(),
      courseId = reactive({data:{}}),
      ifError = ref(false);
      // console.log(route.params.id);
onMounted(() => {
  // axios.get('https://vue-lessons-api.herokuapp.com/courses/'+route.params.id)
  // .then((res) => {courseId.data = res.data.data[0]})
  // .catch((error) => {
  //   ifError.value = true;
  //   courseId.data.error_message = error.response.data.error_message
  //   timer = setTimeout(() => {router.push({path:'/course'})},3000);
  // });
  (async () => {
    try{
      const res = await apiGetHKAcourses_id(route.params.id);
      courseId.data = res.data.data[0];
      console.log(res.data);
    }catch(error){
      ifError.value = true;
      courseId.data.error_message = error.response.data.error_message
      timer = setTimeout(() => {
        // router.push('/course');
        router.push({path:'/course'});
        // router.go(-1); // 回上一頁
      },3000);
      throw new Error(error.response.data.error_message);
    }
  })();
});
onUnmounted(() => clearTimeout(timer));
</script>

<template>
  <div class="courseWrap">
    <div v-if="!ifError">
      <h1>{{courseId.data.name}}</h1>
      <h2>NTD : {{courseId.data.money}}</h2>
      <img :src="courseId.data.photo" :alt="courseId.data.name" />
      <div v-if="Object.keys(courseId.data).length">
        <!-- 初始化的時候 courseId 全是空的，所以 .teacher 裡面沒有東西 -->
        <!-- .teacher.img 和 .teacher.name 所以會直接undefined 壞掉 -->
        <img :src="courseId.data.teacher.img" :alt="courseId.data.teacher.name" />
        <p>{{courseId.data.teacher.name}}</p>
      </div>
    </div>
    <!-- error_message -->
    <h1 v-if="ifError">{{courseId.data.error_message}}</h1>
  </div>
</template>

<style lang="scss">
.courseWrap{text-align: center;}
</style>