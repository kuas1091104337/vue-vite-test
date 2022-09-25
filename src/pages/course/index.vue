<script setup>
import axios from 'axios';
import router from '@/router';
const courseData = ref([]),
      toNewPage = (id) => {
        router.push({path:'/course/'+id})
      },
      routeTest = (id) => {
        const saveUrl = router.resolve({path:'/course/'+id});
        console.log(saveUrl.href);
        // window.open(saveUrl.href) 開新網址
      };
onMounted(() => {
  axios.get('https://vue-lessons-api.herokuapp.com/courses/list')
  .then(function(res){
    courseData.value = res.data;
    // console.log(res.data); console.log(courseData.value);
  }).catch(function(error){
    console.log(error.response.data);
  });
});
</script>

<template>
<div class="courses">
  <!-- <a 
    class="courses_card" 
    v-for="item in courseData" 
    :key="item.id"
    @click="toNewPage(item.id)"
  > -->
  <RouterLink 
    class="courses_card" 
    v-for="item in courseData" 
    :key="item.id"
    :to="/course/+item.id"
    @click="routeTest(item.id)"
  ><!--  -->
    <img :src="item.photo" :alt="item.name" />
    <div class="courses__content">
      <h1>{{item.name}}</h1>
      <div class="courses__content_teacher">
        <div class="courses__content__img">
          <img :src="item.teacher.img" :alt="item.teacher.name" />
          <p>{{item.teacher.name}}</p>
        </div>
        <h2>NTD:{{item.money}}</h2>
      </div>
    </div>
  </RouterLink>
  <!-- </a> -->
</div>
</template>

<style lang="scss">
.courses {
  &_card {
    width: 320px;
    background-color: rgba(231, 231, 231,.8);
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(#000, .5);
    padding: 10px;
    margin:0 auto 20px;
    transition: background-color 0.3s;
    &:hover { background-color: rgba(231, 231, 231) }
    > img { margin-right: 10px; }
  }
  &__content {
    > h1 { font-size: 14px; }
    &_teacher {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 5px;
      > h2 { font-size: 14px; }
    }
    &__img{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      > img {
        border-radius: 50%;
        margin-right: 10px;
      }
    }
  }
}
</style>