<script>
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  export default {
    components: {
      Swiper, SwiperSlide
    },
    setup() {
      const onSwiper = (swiper) => {
              console.log(swiper);
            },
            onSlideChange = () => {
              console.log('slide change');
            };
      return {
        onSwiper, onSlideChange, modules:[Navigation, Pagination, Scrollbar, A11y]
      };
    },
  };
</script>
<template>
  <div class="swWrap">
    <!-- <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="5"
      navigation
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    > -->
    <swiper :navigation="true" :modules="modules" class="mySwiper">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide>
      <swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide>
      <swiper-slide>Slide 9</swiper-slide>
      <swiper-slide>Slide 10</swiper-slide>
      <swiper-slide>Slide 11</swiper-slide>
      <swiper-slide>Slide 12</swiper-slide>
    </swiper>
  </div>
</template>

<style lang="scss">
.swWrap{
  width: 600px;
  height: 300px;
  margin:0 auto;
}
.swiper {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  color:#f0f;
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
}
.swiper-slide img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}
</style>