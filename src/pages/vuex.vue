<script setup>

</script>

<template>
  <MenuBtn />
  <div class="content">
    <img class="content_bg" src="https://source.unsplash.com/WLUHO9A_xik/1600x900" alt="background image">
    <img class="content_img" alt="Vue logo" src="@/assets/img/logo.png" />
  </div>
  <MenuSlid />
</template>

<style lang="scss">
.content {
  width: 100%;
  height: 100%;
  display: flex;
  // background-image: url("https://source.unsplash.com/WLUHO9A_xik/1600x900");
  // background-position: center;
  // background-size: cover;
  position:fixed;
  top:0;
  left:0;
  z-index:-1;
  &_bg {
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    opacity: .3;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate3d(-50%,-50%,0);
    z-index:-1;
  }
  &_img {margin: auto;}
}
</style>