<script setup>
const props = defineProps({
                isOpen:{
                  type:Boolean,
                  default:false
                },
                menuToggle:{
                  type:Function,
                  default:() => {}
                },
              });//,
      // emit = defineEmits(['menuToggle']),
      // menuHandle = () => emit('menuToggle');
</script>
<template>
<div :class="['nav',{open:props.isOpen}]">
  <a 
    href="javascript:;"
    @click="props.menuToggle"
  >close</a>
  <!-- <a 
    href="javascript:;"
    @click="menuHandle"
  >close</a> -->
</div>
</template>

<style lang="scss" scoped>
.nav{
  width: 250px;
  height: 100%;
  background-color:#fff;
  position:fixed;
  top:0;
  right:0;
  transform:translate3d(100%,0,0);
  transition:transform .3s;
  &.open{transform:translate3d(0,0,0);}
  > a{
    text-indent:100%;
    white-space:nowrap;
    width: 44px;
    height: 44px;
    background-color:blue;
    overflow:hidden;
    position:absolute;
    top:20px;
    right:20px;
    &:before, &:after{
      content:"";
      width: 80%;
      height: 4px;
      background-color:#fff;
      margin:auto;
      position:absolute;
      top:0;
      right: 0;
      left:0; 
      bottom: 0;
    }
    &:before{transform:rotate(45deg); }
    &:after{transform:rotate(-45deg); }
  }
}
</style>