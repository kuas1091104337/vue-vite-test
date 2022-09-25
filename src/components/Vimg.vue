<script setup>
  const props = defineProps(['className', 'src', 'alt', 'width', 'height']),
        {className, src, alt, width, height} = props; 
  // {
  //   str:{
  //     type:String,
  //     default:'text'
  //   },
  //   bool:{
  //     type:Boolean,
  //     default:false
  //   },
  //   num:{
  //     type:Number,
  //     default:0
  //   },
  //   arr:{
  //     type:Array,
  //     default:() => []
  //   },
  //   obj:{
  //     type:Object,
  //     default:() => ({})
  //   },
  //   handleFn:{
  //     type:Function,
  //     default:() => {}
  //   },
  // }
</script>

<template>
<img
  :class="className"
  :src="src"
  :alt="alt"
  :width="width"
  :height="height"
/>
</template>

<style lang="scss">

</style>