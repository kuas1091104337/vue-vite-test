<script setup>
const props = defineProps({
        isOpen:{
          type:Boolean,
          default:false
        }
      }),
      boxList = ref(null),
      boxListH = ref(0),
      listArr = reactive([
        { name: "2020 Vue3 專業職人 | 入門篇", money: 3200},
        { name: "2020 Vue3 專業職人 | 加值篇", money: 100},
        { name: "2020 Vue3 專業職人 | 進階篇", money: 500},
        { name: "現代 JavaScript 職人之路｜入門篇", money: 300},
        { name: "現代 JavaScript 職人之路｜中階實戰篇", money: 1600},
        { name: "現代 JavaScript 職人之路｜面試篇", money: 1800},
        { name: "職人必修的RWD 網頁入門班", money: 900},
        { name: "HTML5+Animate CC 網頁動畫與遊戲互動", money: 2000}
      ]),
      slBoxH = computed(() => {
        return props.isOpen ? listArr.length * boxListH.value + 'px' : 0 ;
      });
onMounted(() => {
  boxListH.value = boxList.value[0].offsetHeight;
});
</script>

<template>
<ul class="slBox" :style="{height:slBoxH}">
  <li 
    class="slBox_list" 
    v-for="(list, idx) in listArr"
    :key="list.name"
    ref="boxList"
  >
    {{idx + 1}}. {{list.name}}, ${{list.money}}
  </li>
</ul>
</template>

<style lang="scss">
.slBox{
  width: 100%;
  background-color: #fff;
  list-style: none;
  padding-left: 0;
  height: 0;
  transition: height 0.4s;
  &_list{
    color: darkslategray;
    font-size: 14px;
    line-height: 40px;
    text-align:center;
    + .slBox_list{box-shadow: 0 1px #d2d2d2 inset;}
  }
}
</style>