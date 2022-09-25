<script setup>
  import imgSrc from '@/assets/logo.svg';
import HelloWorldVue from '../components/HelloWorld.vue';
  const data = ref('Hello Mike!'),
        str = ref('amos'),
        bool = ref(true),
        num = ref(1450),
        resVal = ref(0),
        arr = reactive([1,2,3]),
        obj = reactive({a:'a',b:'b',c:'c'}),
        fn = () => console.log(123),
        isOpen = ref(true),
        openFn = () => {
          isOpen.value = !isOpen.value
          console.log(isOpen.value);
        },
        handCallBackFn = (num) => console.log('emit =>',num.value),
        handleTimeOut = (num) => console.log('time is over',num.value),
        addHandle = (e,val) => {
          console.log(e.target);
          resVal.value = val
        };
</script>

<template>
  <div class="about">
    <component :is="HelloWorldVue" />
    <Vimg
      alt="vue logo"
      className="logo"
      :src="imgSrc"
      width="100"
      height="100"
    />
    <div class="side">
      <p>{{resVal}}</p>
      <Add @AddInt="addHandle"/>
    </div>
    <h1>This is an about page</h1>
    <TimerBox @TimeOut="handleTimeOut"/>
    <div class="slWrap">
      <!-- 用 props -->
      <!-- <TitleBar :openFn="openFn"/> -->
      <!-- 用 emits -->
      <TitleBar @handleListOpen="openFn"/>
      <ListItem :isOpen="isOpen"/>
    </div>
    <EmitTest @CallBack="handCallBackFn"/>
    <PropsTest 
      :msgProps="data"
      :str="str"
      :bool="bool"
      :num="num"
      :arr="arr"
      :obj="obj"
      :fn="fn"
    />
  </div>
</template>

<style lang="scss">
.side{display: inline-block;}
.slWrap{
  width: 400px;
  overflow: hidden;
  border: 1px solid #42b983;
  border-radius: 10px;
  margin:0 auto;
}
</style>
