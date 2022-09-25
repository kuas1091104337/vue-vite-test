<script setup>
  const number = ref(0),
        tel = ref('0988-012345'),
        mobile = ref('0988-012345'),
        isShow = ref(false),
        txt = ref('Hello Vue!'),
        boxList = ref(null),
        // boxListH = ref(0),
        seachMoney = ref(0),
        numData = reactive({idx:0}),
        message = reactive({text:'mike'}),
        listArr = reactive([
          { name: "2020 Vue3 專業職人 | 入門篇", money: 3200, show: true, status: "red" },
          { name: "2020 Vue3 專業職人 | 加值篇", money: 100, show: false, status: "red" },
          { name: "2020 Vue3 專業職人 | 進階篇", money: 500, show: true, status: "red" },
          { name: "現代 JavaScript 職人之路｜入門篇", money: 300, show: true, status: "blue" },
          { name: "現代 JavaScript 職人之路｜中階實戰篇", money: 1600, show: false, status: "blue" },
          { name: "現代 JavaScript 職人之路｜面試篇", money: 1800, show: true, status: "blue" },
          { name: "職人必修的RWD 網頁入門班", money: 900, show: true, status: "red" },
          { name: "HTML5+Animate CC 網頁動畫與遊戲互動", money: 2000, show: false, status: "blue" },
        ]),
        addFn = () => {
          number.value++;
          numData.idx++;
        },
        subFn = () => {
          number.value--;
          numData.idx--;
        },
        showFn = () => isShow.value = !isShow.value,
        seachArr = computed(() => {
          console.log(seachMoney.value);
          return listArr.filter(item => item.money >= seachMoney.value);
        }),
        boxListH = computed(() => {
          console.log(boxList.value);
          return isShow.value ? seachArr.value.length*boxList.value[0].offsetHeight+'px' : 0 ;
          // return isShow.value ? listArr.length*boxList.value[0].offsetHeight+'px' : 0 ;
          // return isShow.value ? listArr.length*40+'px' : 0 ;
          // if(isShow.value) return listArr.length * 40 + 'px'
          // return 0;
        });
  // console.log(number);
  console.log(seachArr.value);
  // onMounted(() => {
  //   boxListH.value = boxList.value[0].offsetHeight;
  //   console.log(boxList.value[0].offsetHeight);
  // })
  setTimeout(() => {
    message.text = 'alex';
    for (let i = 0, max = listArr.length; i < max; i++) {
      if(listArr[i].show === false) listArr[i].show = true;
    }
  },1500);
</script>

<template>
  <div>
    <div class="wrap">
      <label for="search">課程 search $</label>
      <input type="search" id="search" placeholder="seach money" v-model="seachMoney" />
    </div>
    <div class="box">
      <a class="box_title" @click="showFn">課程列表</a>
      <!-- <ul class="box_wrap" :class="{open:isShow}"> -->
      <ul class="box_wrap" :style="{height:boxListH}">
        <!-- v-for="(list, idx) in listArr"  -->
        <li 
          class="box_wrap_list" 
          v-for="(list, idx) in seachArr" 
          :key="list.name" 
          ref="boxList"
        >
          {{idx + 1}}. {{list.name}}, ${{list.money}}
        </li>
      </ul>
    </div>
    <p v-if="isShow">{{txt}}</p>
    <p v-show="isShow">{{txt}}</p>
    <button @click="showFn">show click</button>
    <ul>
      <li v-for="(item, idx) in listArr" :key="item.name" :class="item.status" v-show="item.show">
        {{idx+1}} - {{item.name}}
      </li>
    </ul>
    <h1>{{number}} - {{numData.idx}}</h1>
    <button @click="addFn">add</button>
    <button @click="subFn">sub</button>
    <h2>{{message.text}}</h2>
    <p>{{number}}</p>
    <h3>{{tel}}</h3>
    <input 
      v-model="tel"
      type="tel"
      placeholder="0988-012345"
      pattern="{4}[]{6}"
      required
    />
    <h3>{{mobile}}</h3>
    <input 
      v-model="mobile" 
      type="mobile" 
      placeholder="0988-012345" 
      pattern="^09[0-9]{8}$" 
      required
    />
  </div>
</template>

<style lang="scss">
.box{
  width: 400px;
  overflow: hidden;
  border: 1px solid #42b983;
  border-radius: 10px;
  margin:0 auto;
  &_title {
    color: darkslategray;
    font-size: 20px;
    font-weight: bold;
    line-height: 50px;
    text-align:center;
    width: 100%;
    display: block;
    background-color: #42b983;
    cursor: pointer;
  }
  &_wrap{
    width: 100%;
    background-color: #fff;
    list-style: none;
    padding-left: 0;
    height: 0;
    transition: height 0.4s;
    // max-height: 0;
    // transition: max-height 0.6s;
    // &.open {
    //   /* height: 200px; */
    //   max-height: 600px;
    //   overflow: auto;
    // }
    &_list{
      color: darkslategray;
      font-size: 14px;
      line-height: 40px;
      text-align:center;
      + .box_wrap_list{
        box-shadow: 0 1px #d2d2d2 inset;
      }
    }
  }
}
.blue{color: blue;}
.red{color: red;}
</style>