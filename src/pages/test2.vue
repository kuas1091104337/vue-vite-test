<script setup>
  const idx = ref(0),
        txt = ref(''),
        num = ref(0),
        numData = reactive({idx:0}),
        dataTxt = ref(''),
        numTxt = ref(''),
        txtStyle = ref('home'),
        data = reactive({idx:0}),
        toInfoPage = () => window.open("https://hiskio.com/courses/286/about"),
        toCoursePage = () => window.open("https://hiskio.com/courses/286/lectures");
  watch(idx, (newIdx, oldIdx) => {
    txt.value = `new : ${newIdx} , old : ${oldIdx}`
  });
  watch(() => data.idx, (newIdx, oldIdx) => {
    dataTxt.value = `new : ${newIdx} , old : ${oldIdx}`
  });
  setInterval(() => {
    if(idx.value < 10)  idx.value++
    if(data.idx < 10)  data.idx++
  },1000);
  watchEffect(() => {
    numTxt.value = num.value;
    console.log(num.value);
  });
  setTimeout(() => {
    num.value++;
    numData.idx++;
  },1000);
  onMounted(() => {
    setTimeout(() => {
      txtStyle.value = 'about';
    },1500);
  });
</script>

<template>
  <div>
    <ConetntBar :txtStyle="txtStyle"/>
    <p>{{numTxt}}</p>
    <p>{{txt}}</p>
    <p>{{dataTxt}}</p>
    <a class="card" @click="toCoursePage">
      <div class="card_content">
        <img class="card_content_img" src="../assets/img/courses.jpg" />
        <p class="card_content_info" @click="toInfoPage">課程資訊</p>
      </div>
      <div class="card_text">
        <p>2020 Vue3 專業職人 | 入門篇 (預購中)</p>
      </div>
    </a>
  </div>
</template>

<style lang="scss">
.card {
  color: #121c29;
  text-decoration: none;
  width: 235px;
  background-color: #f6f6f6;
  display: block;
  cursor: pointer;
  border: 2px solid #121c29;
  border-radius: 8px;
  box-shadow: 0 5px 10px #121c29;
  overflow: hidden;
  margin:0 auto;
  &_content{
    position: relative;
    &_img{
      width: 100%;
      display: block;
    }
    &_info{
      color: #fff;
      font-size: 14px;
      background-color: rgba(#000,.7);
      padding: 5px 10px;
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
  &_text{
    font-size: 20px;
    padding:10px 15px 15px 15px;
  }
}
</style>