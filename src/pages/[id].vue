<script setup>
const route = useRoute(),
      acitveClass = ref(''),
      addClass = computed(() => `computed-${route.params.id}`);
console.log(route.params);
watch(() => route.params.id,(newVal) => {
  acitveClass.value = `watch-${newVal}`
  console.log(newVal)
});
</script>

<template>
  <h1 :class="[addClass, acitveClass]">{{route.params.id}}</h1>
</template>

<style lang="scss">
h1{
  &[class*=watch-], &[class*=computed-]{
    color: #fff;
    font-size: 36px;
    text-align:center;
  }
  &[class*=computed-]{background-color:red;}
  &[class*=watch-]{background-color:blue;}
}
</style>