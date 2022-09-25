<script setup>
import gsap from 'gsap';
let tl = null; // tl 給 gsap 的實體存放用
const gsapScrollHandle = () => { // 抓卷軸的位置
        const scrollPercent = document.scrollingElement.scrollTop / (document.documentElement.scrollHeight - window.innerHeight);
        // 然後把這個百分比塞入  是百分比是從0~1
        tl.progress(scrollPercent);
        console.log(tl);
      },
      gsapInit = () => { // 動畫初始化
        // tl 給 gsap 的實體存放用
        // .timeline : 控制動畫執行的時間線，可以產生補間影格讓動畫依序執行。
        console.log(tl);
        tl = gsap.timeline({defaults:{duration:1, ease:"elastic"}});
        tl.to('.pic1',{'margin-left':0,'opacity':1});
        tl.to('.pic2',{'margin-left':0,'opacity':1});
        tl.to('.pic3',{'margin-top':0,'opacity':1});
        tl.to('.pic4',{'transform':'scale(1)','opacity':1});
        tl.to('.pic5',{'width':'240px','opacity':1});
        tl.to('.pic6',{'transform':'scaleX(1)','opacity':1});
        tl.to('.pic7',{'margin-left':0,'opacity':1});
        tl.to('.pic8',{'margin-left':0,'opacity':1});
        tl.to('.pic9',{'transform':'scaleY(1)','opacity':1});
        tl.to('.pic10',{'margin-top':0,'opacity':1});
        tl.to('.pic11',{'width':'240px','opacity':1});
        // 把動畫整個先暫停下來
        tl.pause();
      };
onMounted(() => {
  gsapInit();
  // scroll事件來跑我們動畫的補間進度
  window.addEventListener("scroll", gsapScrollHandle);
});
onUnmounted(() => {
  window.removeEventListener("scroll" ,gsapScrollHandle);
});
</script>

<template>
<div class="gsapWrap">
  <div class="pic pic1"><img src="https://source.unsplash.com/user/erondu/240x240"></div>
  <div class="pic pic2"><img src="https://source.unsplash.com/user/erondu/240x240"></div>
  <div class="pic pic3"><img src="https://source.unsplash.com/user/erondu/240x240"></div>
  <div class="pic pic4"><img src="https://source.unsplash.com/user/erondu/240x240"></div>
  <div class="pic pic5"><img src="https://source.unsplash.com/user/erondu/240x240"></div>
  <div class="pic pic6"><img src="https://source.unsplash.com/user/erondu/240x240"></div>
  <div class="pic pic7"><img src="https://source.unsplash.com/user/erondu/240x240"></div>
  <div class="pic pic8"><img src="https://source.unsplash.com/user/erondu/240x240"></div>
  <div class="pic pic9"><img src="https://source.unsplash.com/user/erondu/240x240"></div>
  <div class="pic pic10"><img src="https://source.unsplash.com/user/erondu/240x240"></div>
  <div class="pic pic11"><img src="https://source.unsplash.com/user/erondu/240x240"></div>
</div>
</template>

<style lang="scss">
.gsapWrap{
  width: 240px;
  margin: 0 auto;
  padding-top: 250px;
}
.pic{
  width: 100%;
  background-color: #fff;
  margin-bottom: 20px;
  opacity: 0;
  > img{ display: block; }
  &1{ margin-left: -100px; }
  &2{ margin-left: 100px; }
  &3{ margin-top: 100px; }
  &4{ transform: scale(0); }
  &5{ width: 0; }
  &6{ transform:scaleX(-1.4); }
  &7{ margin-left: -100px; }
  &8{ margin-left: 100px; }
  &9{ transform:scaleY(-1.4); }
  &10{ margin-top: 100px; }
  &11{ width: 0; }
}
</style>