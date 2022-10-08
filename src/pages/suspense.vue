<script setup>
const isError = ref(false),
      errorMSG = ref(''),
      errorTxt = ref('');
onErrorCaptured((error) => {
  isError.value = true;
  errorMSG.value = error.response.data.error_msg;
  errorTxt.value = error.message;
  console.log(error);
});
</script>

<template>
<div class="Suspense">
  <Suspense>
    <template #default>
      <PhotoBox />
    </template>
    <template #fallback>
      <p v-if="!isError" class="suspLoad">Loading...</p>
    </template>
  </Suspense>
  <div v-if="isError">
    <h3 class="suspLoad">{{errorMSG}}</h3>
    <p class="errorTxt">{{errorTxt}}</p>
  </div>
</div>
</template>

<style lang="scss">
.Suspense{text-align:center;}
.suspLoad{
  color:#fff;
  font-size: 36px;
  background-color:#fa0;
}
.errorTxt{color:#aaa;}
</style>