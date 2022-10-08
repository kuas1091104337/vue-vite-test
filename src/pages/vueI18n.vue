<script setup>
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
console.log(locale);
watch(locale, (newlocale) => {
  console.log(newlocale);
  localStorage.setItem("locale", newlocale);
});
</script>

<template>
<div class="i18n">
  <img class="i18n_img" src="../assets/logo.svg" alt="vue logo">
  <nav class="navChildren">
    <RouterLink to="/vueI18n/">vue i18n</RouterLink>
    <RouterLink to="/vueI18n/about">about</RouterLink>
  </nav>
  <div>
    <select v-model="locale">
      <option disabled value="">語言選擇</option>
      <option value="zh-TW">zh-TW</option>
      <option value="en-US">en-US</option>
      <option value="jp-JP">jp-JP</option>
    </select>
  </div>
  <RouterView />
</div>
</template>

<style lang="scss">
.i18n{
  text-align:center;
  &_img{
    width: 150px;
  }
}
</style>