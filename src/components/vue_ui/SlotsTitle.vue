<script setup>

</script>

<template>
  <div class="list">
    <img alt="Vue logo" class="list_logo" src="@/assets/logo.svg" />
    <slot>Mike</slot>
  </div>
</template>

<style lang="scss">
  .list{
    font-size: 36px;
    display: flex;
    align-items:center;
    padding: 10px;
    &_logo{
      width: 50px;
      margin-right: 10px;
    }
  }
</style>