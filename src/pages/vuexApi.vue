<script setup>
import { useVuexApiStore } from '@/stores/vuexApi.js';
const store = useVuexApiStore(),
      isMenuOpenComputed = computed({
        set:(val) => store.menuOpenHandle(val),
        get:() => store.isMenuOpen,
      }),
      menuOpenHandle = () => isMenuOpenComputed.value = !isMenuOpenComputed.value;
onMounted(() => { });
</script>

<template>
  <div class="vuexApi">
    <Head />
    <Login />
    <SlidMenu />
    <p>pinia</p>
    <div class="menuBtn" @click="store.menuOpenHandle(!store.isMenuOpen)">
      {{ !store.isMenuOpen ? "開啟選單1" : "關閉選單1" }}
    </div>
    <p>computed set & get + pinia</p>
    <div class="menuBtn" @click="menuOpenHandle">
      {{ !isMenuOpenComputed ? "開啟選單2" : "關閉選單2" }}
    </div>
    <MenuBar />
    <LoadingBar />
    <ImageBox />
  </div>
</template>

<style lang="scss">
.vuexApi{
  text-align: center;
  > p{ font-size: 24px; }
}
.menuBtn{
  color: #fff;
  display: inline-block;
  background-color: #fa0;
  padding: 10px;
  margin-bottom:20px;
}
</style>