<script setup>
  const inputText = ref(null),
        num = ref('123456789'),
        handleClick = (num,e) => {
          console.log(num);
          console.log(e.target);
        };
  // onMounted(() => {
  //   inputText.value.focus();
  // });
</script>

<template>
  <ol class="slotList">
    <!-- <SlotsBar :content="'最新消息'"/> -->
    <SlotsBar>最新消息</SlotsBar>
    <SlotsBar>關於我們</SlotsBar>
    <SlotsBar>熱門商品</SlotsBar>
    <SlotsBar>你也感興趣的</SlotsBar>
    <SlotsBar/>
  </ol>
  <SlotsTitle>
    <p>Mike <a href="javascript:;">open</a></p>
  </SlotsTitle>
  <SlotsTitle>Mike</SlotsTitle>
  <input 
    v-focus
    type="number" 
    v-model="num"
  />
  <p v-price="num"></p>
  <!-- <input ref="inputText" type="text" placeholder="input text"/> -->
  <!-- <input v-focus type="text" placeholder="input text"/> -->
  <div>
    <a 
      class="eventA" 
      href="javascript:;"
      @click="handleClick(7788,$event)"
    >click</a>
  </div>
</template>

<style lang="scss">
.slotList{
  color: #fff;
  background-color:blue;
}
.eventA{
  color: #fff;
  font-size: 25px;
}
</style>