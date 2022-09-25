<script setup>
const imgIdx = ref(0),
      changeType = ref('next'),
      slidList = ref([
        { id: '1', src: "https://source.unsplash.com/600x400?1" },
        { id: '2', src: "https://source.unsplash.com/600x400?2" },
        { id: '3', src: "https://source.unsplash.com/600x400?3" },
        { id: '4', src: "https://source.unsplash.com/600x400?4" },
        { id: '5', src: "https://source.unsplash.com/600x400?5" },
        { id: '6', src: "https://source.unsplash.com/600x400?6" },
        { id: '7', src: "https://source.unsplash.com/600x400?7" },
        { id: '8', src: "https://source.unsplash.com/600x400?8" }
      ]),
      bannerChange = idx => {
        changeType.value = idx > imgIdx.value ? 'next' : 'prev';
        imgIdx.value = idx;
      };
</script>

<template>
  <div class="content">
    <div class="mid">
      <transition-group :name="changeType">
        <img 
          v-for="(item, idx) in slidList" 
          :key="item.id"
          v-show="imgIdx === idx"
          :src="item.src" 
          :alt="item.id"
        >
      </transition-group>
    </div>
    <div class="nav">
      <a 
        v-for="(item, idx) in slidList" 
        :key="item.id"
        :class="{active:imgIdx === idx}"
        href="javascript:;"
        @click="bannerChange(idx)"
      >
        {{idx + 1}}
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.prev, .next{
  &-enter, &-leave{
    &-active{ transition: transform .3s; }
  }
}
.prev{
  &-enter-from{ transform: translateX(-100%); }
  &-leave-to{ transform: translateX(100%) }
}
.next{
  &-enter-from{ transform: translateX(100%); }
  &-leave-to{ transform: translateX(-100%) }
}
.content{ 
  width: 600px;
  margin:0 auto;
}
.mid{
  width: 100%;
  height: 400px;
  overflow: hidden;
  margin-bottom: 20px;
  position: relative;
  > img{
    position:absolute;
    top:0;
    right:0;
  }
}
.nav{
  text-align: center;
  line-height: 30px;
  display: flex;
  justify-content:center;
  > a{
    width: 30px;
    background-color:#fff;
    margin: 0 5px;
    &.active{
      color: #fff;
      background-color:hsl(160, 100%, 37%);
    }
  }
}
</style>