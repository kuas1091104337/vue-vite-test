<script setup>
import gsap from "gsap";
const gsapTo = () => {
        gsap.to(".cube0", {duration: 1, x: 200, ease: "elastic"});
      },
      gsapToBoxs = () => {
        gsap.timeline({ defaults: { duration: 1, ease:"elastic" }})
            .to(".cube1", {x: 100})
            .to(".cube2", {y: 100})
            .to(".cube2", {x: 100, duration: .3});
      };
</script>

<template>
  <div class="cube0 box-100 bg-red"></div>
  <button @click="gsapTo">box red move</button>
  <div class="cube1 box-100 bg-red"></div>
  <div class="cube2 box-100 bg-blue"></div>
  <button @click="gsapToBoxs">box move</button>
  <Banner/>
  <Transit/>
</template>

<style lang="scss">
.box-100{
  width: 100px;
  height: 100px;
}
.bg-red{background-color: red;}
.bg-blue{background-color: blue;}
</style>