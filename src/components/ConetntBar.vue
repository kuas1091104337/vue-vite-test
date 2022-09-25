<script setup>
const props = defineProps({
                txtStyle:{
                  type:String,
                  default:'text'
                }
              }),
      // computed
      txt = computed(() => {
        if(props.txtStyle === 'home') return '首頁'
        if(props.txtStyle === 'about') return '關於我們'
      }),
      // watch
      text = ref(''),
      styleHandle = (txtStyle) => {
        if(txtStyle === 'home') text.value = '首頁'
        if(txtStyle === 'about') text.value = '關於我們'
      };
watch(() => props.txtStyle,(newVal) => styleHandle(newVal));
onMounted(() => styleHandle(props.txtStyle));
</script>

<template>
  <p class="conetnt">watch : {{text}} : {{props.txtStyle}}</p>
  <p class="conetnt">computed : {{txt}} : {{props.txtStyle}}</p>
</template>

<style lang="scss">
.conetnt{
  color: blue;
  font-size: 32px;
  background-color:red;
}
</style>