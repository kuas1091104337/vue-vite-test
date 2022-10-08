<script setup>
  import { useI18n } from "vue-i18n";
  const { t } = useI18n();
</script>

<template>
  <p>{{t('cancel')}}</p>
  <p>{{t('email')}}</p>
  <p>{{t('date')}}</p>
  <p>{{t('subject')}}</p>
</template>

<style lang="scss">

</style>