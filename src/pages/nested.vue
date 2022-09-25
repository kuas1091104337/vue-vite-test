<script setup>

</script>

<template>
  <nav class="navChildren">
    <RouterLink to="/nested/">Nested</RouterLink>
    <RouterLink to="/nested/test1">Test1</RouterLink>
    <RouterLink to="/nested/test2">Test2</RouterLink>
  </nav>
  <RouterView />
</template>

<style lang="scss">
.navChildren{
  .router-link-exact-active{
    color: var(--color-text);
    &:hover {background-color: transparent;}
  }
}
</style>