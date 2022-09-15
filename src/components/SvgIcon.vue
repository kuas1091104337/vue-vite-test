<script setup>
const props = defineProps({
        name: {
          type: String,
          required: true,
        },
        className: {
          type: String,
        },
        color: {
          type: String,
          default: "#333",
        },
      }),
      svgName = computed(() => {
        if (props.name.includes("/")) {
          return `#${props.name}`;
        } else {
          return `#/${props.name}`;
        }
      }),
      svgClass = computed(() =>
        props.className ? "svg-icon " + props.className : "svg-icon"
      );
</script>

<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="svgName" :fill="color" />
  </svg>
 </template>
  
<style lang="scss">
.svg{
  &-icon{
    width: 100%;
    height: 100%;
    max-width: 36px;
    max-height: 36px;
    /* max-width: 100px;
    max-height: 100px; */
    fill: currentColor;
    overflow: hidden;
  }
  &-shadow{
    filter:drop-shadow(2px 1px 0 rgba(#f0f, .8)) drop-shadow(-2px -1px 0 rgba(#0ff, .8));
  }
}
</style>
  
  