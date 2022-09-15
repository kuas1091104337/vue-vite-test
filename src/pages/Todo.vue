<script setup>
// const images = ref([
//   new URL('../assets/img/Puzzle/1.png', import.meta.url).href,
//   new URL('../assets/img/Puzzle/2.png', import.meta.url).href
// ])
import P1 from '@/assets/img/Puzzle/1.png';
import P2 from '@/assets/img/Puzzle/2.png';
import P3 from '@/assets/img/Puzzle/3.png';
import P4 from '@/assets/img/Puzzle/4.png';
import P5 from '@/assets/img/Puzzle/5.png';
import P6 from '@/assets/img/Puzzle/6.png';
import P7 from '@/assets/img/Puzzle/7.png';
import P8 from '@/assets/img/Puzzle/8.png';
import P9 from '@/assets/img/Puzzle/9.png';
const todostart = ref([
        {idx: 8, url: P9},
        {idx: 1, url: P2},
        {idx: 6, url: P7},
        {idx: 5, url: P6},
        {idx: 7, url: P8},
        {idx: 0, url: P1},
        {idx: 3, url: P4},
        {idx: 2, url: P3},
        {idx: 4, url: P5 }
      ]),
      todoend = ref([]),
      winIdx = ref(0),
      // isWin = ref(false),
      clickHandle = (item,idx) => {
        todoend.value.push(item);
        todostart.value.splice(idx,1);
      },
      resetHandle = (item,idx) => {
        todostart.value.push(item);
        todoend.value.splice(idx,1);
      },
      isWin = computed(() => {
        winIdx.value = 0;
        todoend.value.forEach((item, idx) => {
          if(item.idx === idx) winIdx.value++;
        });
        return winIdx.value === 9;
      });
// watch(
//   () => todoend.value,
//   (newArr) => {
//     winIdx.value = 0;
//     newArr.forEach((item, idx) => {
//       if(item.idx === idx) winIdx.value++;
//       if(winIdx.value === 9) isWin.value = true; 
//     });
//   },{deep:true}
// );
</script>

<template>
  <div class="todo">
    <ul class="todo_box todo_start">
      <li 
        class="todo_box_list" 
        v-for="(item,idx) in todostart" 
        :key="item.url"
        @click="clickHandle(item,idx)"
      >
        <img class="todo_box__img" :src="item.url" :alt="item.idx">
      </li>
    </ul>
    <ul class="todo_box todo_end">
      <li class="todo_box_bg">
        <img class="todo_box_bg_img" src="@/assets/img/Puzzle/bg2.jpg">
      </li>
      <li 
        class="todo_box_list"
        v-for="(item,idx) in todoend" 
        :key="item.url"
        @click="resetHandle(item,idx)"
      >
        <img class="todo_box__img" :src="item.url" :alt="item.idx">
      </li>
    </ul>
    <div :class="['todo_win',{open:isWin}]" >
      <p class="todo_win_txt">闖關成功</p>
    </div>
  </div>
</template>

<style lang="scss">
.todo{
  position: relative;
  overflow: hidden;
  &_start{background-color: #fff;}
  &_box{
    width: 500px;
    height: 500px;
    display: flex;
    flex-wrap:wrap;
    align-content:flex-start;
    list-style: none;
    padding-left: 0;
    margin:30px auto;
    position: relative;
    &_bg{
      height: 100%;
      position:absolute;
      top:0;
      left:0;
      z-index:-1;
      &_img{width: 100%;}
    }
    &_list{
      flex:0 0 33.3333%;
      cursor:pointer;
      box-sizing:border-box;
      border: 1px solid #fff;
    }
    &__img{
      width: 100%;
      display: block;
    }
  }
  &_win{
    width: 100%;
    height: 100%;
    display: flex;
    background-color:rgba(#000,.8);
    position:absolute;
    top:0;
    left:0;
    transform:translate3d(0,-100%,0);
    transition:transform .4s;
    &.open{transform:translate3d(0,0,0);}
    &_txt{
      color: #fff;
      font-size: 60px;
      margin:auto;
    }
  }
}

</style>