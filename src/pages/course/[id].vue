<script setup>
import axios from 'axios';
import router from '@/router';
let timer = null;
const courseId = reactive({data:{}}),
      ifError = ref(false);
onMounted(() => {
  const route = useRoute();
  // console.log(route.params.id);
  axios.get('https://vue-lessons-api.herokuapp.com/courses/'+route.params.id)
  .then((res) => {
    courseId.data = res.data.data[0];
    // console.log(res.data.data); console.log(courseId.data);
  }).catch((error) => {
    ifError.value = true;
    courseId.data.error_message = error.response.data.error_message
    timer = setTimeout(() => {
      console.log('回上一頁');
      // router.push('/course');
      router.push({path:'/course'});
      // router.go(-1); // 回上一頁
    },3000);
    // console.log(error.response.data);
    console.log(error.response.data.error_message);
  });
});
onUnmounted(() => {
  clearTimeout(timer);
});
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