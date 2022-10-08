<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';
onMounted(() => {
  setTimeout(() => {
    AOS.init();
  },0);
  // AOS.init({ // 可以通過`data-aos-*`屬性在每個元素的基礎上覆蓋的設置 (預設值)
  //   duration: 500, // 完成動畫所需的時間
  //   delay: 100, // 延遲時間
  //   offset: 150, // 觸發動畫的位置上下(正負px)偏移
  //   easing: 'ease', // 速度曲線
  //   mirror: false, // 是否超過滾動範圍時，做移出的動畫效果
  //   once: false, // 動畫是否只跑一次，或觸發次數
  //   anchorPlacement: 'top-bottom', // 動畫觸發的位置(滑動時觸發設定，錨點的上中下，在螢幕上中下)
  // });
});
</script>

<template>
<img class="aosImg" data-aos="fade-in" src="../assets/img/logo.png" alt="logo">
<img class="aosImg" data-aos="fade-up" src="../assets/img/logo.png" alt="logo">
<img class="aosImg" data-aos="fade-down" src="../assets/img/logo.png" alt="logo">
<img class="aosImg" data-aos="fade-right" src="../assets/img/logo.png" alt="logo">
<img class="aosImg" data-aos="fade-left" src="../assets/img/logo.png" alt="logo">
<img class="aosImg" data-aos="fade-up-right" src="../assets/img/logo.png" alt="logo">
<img class="aosImg" data-aos="fade-up-left" src="../assets/img/logo.png" alt="logo">
<img class="aosImg" data-aos="fade-down-right" src="../assets/img/logo.png" alt="logo">
<img class="aosImg" data-aos="fade-down-left" src="../assets/img/logo.png" alt="logo">
<img class="aosImg" data-aos="flip-left" src="../assets/img/logo.png" alt="logo">
<img class="aosImg" data-aos="flip-right" src="../assets/img/logo.png" alt="logo">
<img class="aosImg" data-aos="flip-up" src="../assets/img/logo.png" alt="logo">
<img class="aosImg" data-aos="flip-down" src="../assets/img/logo.png" alt="logo">
<img class="aosImg" data-aos="zoom-in" src="../assets/img/logo.png" alt="logo">
<img class="aosImg" data-aos="zoom-in-up" src="../assets/img/logo.png" alt="logo">
<img class="aosImg" data-aos="zoom-in-down" src="../assets/img/logo.png" alt="logo">
<img class="aosImg" data-aos="zoom-in-right" src="../assets/img/logo.png" alt="logo">
<img class="aosImg" data-aos="zoom-in-left" src="../assets/img/logo.png" alt="logo">
<img class="aosImg" data-aos="zoom-out" src="../assets/img/logo.png" alt="logo">
<img class="aosImg" data-aos="zoom-out-up" src="../assets/img/logo.png" alt="logo">
<img class="aosImg" data-aos="zoom-out-down" src="../assets/img/logo.png" alt="logo">
<img class="aosImg" data-aos="zoom-out-right" src="../assets/img/logo.png" alt="logo">
<img class="aosImg" data-aos="zoom-out-left" src="../assets/img/logo.png" alt="logo">
</template>

<style lang="scss">
.aosImg{
  display: block;
  margin:0 auto 35px;
}
</style>