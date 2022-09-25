<script setup>
  const props = defineProps({
    msgProps:{
      type:String,
      default:'txt'
    },
    str:{
      type:String,
      default:'text'
    },
    bool:{
      type:Boolean,
      default:false
    },
    num:{
      type:Number,
      default:0
    },
    arr:{
      type:Array,
      default:() => []
    },
    obj:{
      type:Object,
      default:() => ({})
    },
    fn:{
      type:Function,
      default:() => {}
    }
  });
</script>

<template>
  <h1 class="propsH1">Mike</h1>
  <p>{{props.msgProps}}</p>
  <p>{{props.str}}</p>
  <p>{{props.bool}}</p>
  <p>{{props.num}}</p>
  <p>{{props.arr}}</p>
  <p>{{props.obj}}</p>
  <p>{{props.fn}}</p>
</template>

<style lang="scss">
  .propsH1{
    color: #0ff;
    font-size: 32px;
  }
</style>