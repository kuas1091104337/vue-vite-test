<script setup>
  import { useI18n } from "vue-i18n";
  const { t } = useI18n();
</script>

<template>
  <p>{{t('message')}}</p>
  <p>{{t('upload')}}</p>
</template>

<style lang="scss">
.i18n{
  text-align:center;
  &_img{
    width: 150px;
  }
}
</style>