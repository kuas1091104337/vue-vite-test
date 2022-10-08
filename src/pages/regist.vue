<script setup>
  import { apiPostHKAauthRegistered } from '@/api/index.js';
  // import axios from 'axios'; 
  const isReg = ref(false),
        reg = reactive({
          username:'',
          password:'',
          sex:'',
          email:'',
          age:'',
          terms:false,
        }),
        errorMsg = reactive({msg:{}}),
        regSubmit = async () => {
          // axios.post('https://vue-lessons-api.herokuapp.com/auth/registered',reg)
          // .then(res => isReg.value = res.data.success)
          // .catch(error => errorHandle(error.response.data.error_message));
          try{
            const res = await apiPostHKAauthRegistered(reg);
            // isReg.value = true;
            isReg.value = res.data.success;
            console.log(res.data);
          }catch(error){
            console.log(error, error.response.data);
            errorHandle(error.response.data.error_message);
            throw new Error(error.message);
          }
        },
        errorHandle = (errorObj) => errorMsg.msg = errorObj;
</script>

<template>
<form class="form" method="get">
  <div v-if="!isReg">
    <div class="formBox">
      <label class="formBox_label" for="username">NAME</label>
      <input
        type="text"
        id="username"
        class="formBox_input"
        placeholder="輸入使用者名稱"
        v-model="reg.username"
      />
      <!-- v-model-save="reg.name" -->
      <p class="formBox_error" v-if="errorMsg.msg.username">
        {{errorMsg.msg.username}}
      </p>
    </div>
    <div class="formBox">
      <label class="formBox_label" for="password">PASSWORD</label>
      <input
        type="password"
        id="password"
        class="formBox_input"
        placeholder="輸入密碼"
        v-model="reg.password"
      />
      <!-- v-model-save="reg.password" -->
      <p class="formBox_error" v-if="errorMsg.msg.password">
        {{errorMsg.msg.password}}
      </p>
    </div>
    <div class="formBox">
      <label class="formBox_label" for="email">E-MAIL</label>
      <input
        type="email"
        id="email"
        class="formBox_input"
        placeholder="輸入email"
        v-model="reg.email"
      />
      <!-- v-model-save="reg.email" -->
      <p class="formBox_error" v-if="errorMsg.msg.email">
        {{errorMsg.msg.email}}
      </p>
    </div>
    <div class="formBox">
      <label class="formBox_label" for="age">年齡</label>
      <input
        type="number"
        id="age"
        class="formBox_input"
        placeholder="輸入年齡"
        v-model="reg.age"
      />
    </div>
    <div class="formBox">
      <input 
        type="radio" 
        id="boy"
        name="sex"
        class="formBox_radio"
        value="boy" 
        v-model="reg.sex"
      />
      <label for="boy">boy</label>
      <input 
        type="radio"
        id="girl"
        name="sex"
        class="formBox_radio"
        value="girl"
        v-model="reg.sex"
      />
      <label for="girl">girl</label>
      <input 
        type="radio"
        id="both"
        name="sex"
        class="formBox_radio"
        value="both"
        v-model="reg.sex"
      />
      <label for="both">both</label>
    </div>
    <div class="formBox">
      <input
        type="checkbox"
        id="checkbox"
        v-model="reg.terms"
      />
      <label for="checkbox">我已閱讀使用者條款</label>
    </div>
    <a class="form_btn" @click="regSubmit">送出</a>
  </div>
  <div v-if="isReg">
    <h1>註冊成功</h1>
  </div>
</form>
</template>

<style lang="scss">
.form{
  width: 180px;
  margin:20px auto;
  &Box{
    margin-bottom: 20px;
    &_label{
      color: white;
      display: block;
      margin-bottom: 3px;
    }
    &_input{
      width: 180px;
      height: 24px;
      padding-left: 5px;
    }
    &_radio{ margin:0 8px; }
      &_error {
      color: rgb(255, 119, 119);
      font-size: 12px;
      padding-top: 4px;
    }
  }
  &_btn{
    color: white;
    font-size: 14px;
    width: 180px;
    background-color: skyblue;
    border: none;
    display: flex;
    justify-content: center;
    cursor: pointer;
    padding: 5px 0;
    margin: 10px auto 0 auto;
  }
}
h1{
  color: aliceblue;
  text-align: center;
}

</style>