<script setup>
import axios from 'axios';
const imgData = ref([]),
      imgIdx = ref(0),
      imgLength = ref(0),
      isLoad = ref(false),
      // addFn = () => {
      //   imgIdx.value++
      //   if(imgIdx.value >= imgData.value.length) imgIdx.value = 0
      // },
      // subFn = () => {
      //   imgIdx.value--
      //   if(imgIdx.value < 0) imgIdx.value = imgData.value.length - 1
      // },
      changeFn = (val) => {
        imgIdx.value += val;
        imgIdx.value = (imgIdx.value + imgLength.value) % imgLength.value;
      },
      imgLoad = (imgUrlArr) => {
        let i = 0;
        imgUrlArr.forEach(el => {
          const newImg = new Image();
          newImg.src = el.url
          newImg.onload = () => {
            i++;
            if(imgUrlArr.length === i){
              imgData.value = imgUrlArr;
              imgLength.value = imgData.value.length;
              isLoad.value = true;
            } 
          }
        });
      };
onMounted(() => {
  axios.get('https://vue-lessons-api.herokuapp.com/photo/list')
  .then(function(res){
    imgLoad(res.data)
    // console.log(res.data);
    // console.log(imgData.value.length);
  }).catch(function(error){
    console.log(error.response.data);
    console.error(error.response.data.msg);
  });
});
</script>

<template>
  <div class="banner">
    <img class="banner_load" src="@/assets/img/load.gif" v-if="!isLoad"/>
    <div class="banner_wrap" v-if="isLoad">
      <img
        v-for="(item, idx) in imgData" :key="item.url"
        v-show="idx === imgIdx"
        :src="item.url" 
        :alt="idx"
        class="banner_wrap_img"
      >
    </div>
    <div class="banner_btn" v-if="isLoad">
      <a @click="changeFn(-1)">上一張</a>
      <a @click="changeFn(1)">下一張</a>
      <!-- <a @click="subFn">上一張</a>
      <a @click="addFn">下一張</a> -->
    </div>
  </div>
</template>

<style lang="scss">
.banner {
  width: 520px;
  margin:0 auto;
  &_load {
    width: 40px;
    display: block;
    margin:140px auto 0;
  }
  &_wrap{
    border: 10px solid #42b983;
    &_img{vertical-align: top;}
  }
  &_btn {
    width: 100%;
    display: flex;
    justify-content: center;
    > a {
      color: #fff;
      font-size: 18px;
      font-weight: bold;
      padding: 10px 10px;
    }
  }
}

</style>