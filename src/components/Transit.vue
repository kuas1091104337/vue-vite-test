<script setup>
const isAmin = ref(false),
      AminHandle = () => isAmin.value = !isAmin.value;
</script>

<template>
  <transition name="fade">
    <div v-show="isAmin" class="box"></div>
  </transition>
  <transition name="bounce">
    <div v-show="isAmin" class="box"></div>
  </transition>
  <button @click="AminHandle">click</button>
</template>

<style lang="scss">
@keyframes bounce{
 0%{transform:scale3d(0,0,1)}
 50%{transform:scale3d(1.25,1.25,1)}
 100%{transform:scale3d(1,1,1)}
}
.box{
  width: 100px;
  height: 100px;
  background-color:blue;
}
.fade{
  &-enter-from, &-leave-to{
    opacity: 0;
  }
  &-leave, &-enter{
    &-active{
      transition: opacity .5s;
    }
  }
  &-enter-to, &-leave-from{
    opacity: 1;
  }
}
.bounce{
  &-leave, &-enter{
    &-active{
      animation: bounce .5s;
    }
  }
  &-enter-active{
    animation-direction: reverse;
  }
}
</style>