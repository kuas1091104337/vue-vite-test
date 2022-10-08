<script setup>
import { apiGetHKAcityList } from '@/api/index.js';
// import axios from 'axios'; 
const emailData = ref(''),
      passwordData = ref(''),
      terms = ref(false),
      formData = reactive({
        selecArr:[],
        tags:[
          {tag:'Html'},
          {tag:'Css'},
          {tag:'JavaScript'},
          {tag:'Html5'},
          {tag:'Css3'},
          {tag:'Sass'},
          {tag:'Canvas'},
          {tag:'Vuejs'},
          {tag:'React'}
        ]
      }),
      twZip = reactive({city:[],area:[],tst:[]}),
      selectCity = ref(''),
      selectArea = ref(''),
      lazyVal = ref(''),
      numberVal = ref(''),
      trimVal = ref(''),
      handleSubmit = () => console.log(email.value, password.value, terms.value),
      checkSubmit = () => {
        console.log(formData.selecArr, formData.selecArr.length)
        formData.selecArr.forEach(el => {
          console.log(el);
        });
      },
      selectSubmit = () => console.log(selectCity.value, selectArea.value);
watch(selectCity,(newCity) => {
  const selectObj = twZip.city.filter(objCity => objCity.name === newCity);
  twZip.area = selectObj[0].area;
  selectArea.value = '';
});
onMounted(() => {
  // axios.get('https://vue-lessons-api.herokuapp.com/city/list')
  // .then(function(res){twZip.city = res.data.twzip.city})
  // .catch(function(error){console.log(error.response.data)});

  (async () => {
    try{
      const res = await apiGetHKAcityList();
      twZip.city = res.data.twzip.city;
      console.log(res.data);
    }catch(error){
      console.log(error.response.data);
      throw new Error(error);
    }
  })();
});
watch(lazyVal,(newVal) => console.log('lazyVal : '+newVal));
watch(numberVal,(newVal) => console.log('numberVal : '+newVal));
watch(trimVal,(newVal) => console.log('trimVal : '+newVal));
</script>

<template> 
<!-- action="http://127.0.0.1:5173/from" -->
<form class="form" method="get">
  <div class="formBox">
    <label class="formBox_label" for="email">E-MAIL</label>
    <input
      id="email"
      class="formBox_input"
      type="text"
      placeholder="輸入email"
      v-model="emailData"
      required
    />
  </div>
  <div class="formBox">
    <label class="formBox_label" for="password">PASSWORD</label>
    <input
      id="password"
      class="formBox_input"
      type="text"
      placeholder="輸入密碼"
      v-model="passwordData"
    />
  </div>
  <div class="formBox">
    <input
      type="checkbox"
      id="checkbox"
      v-model="terms"
    />
    <label for="checkbox">我已閱讀使用者條款</label>
  </div>
  <!-- <button class="form_btn" type="submit" @click="handleSubmit">送出</button> -->
  <input class="form_btn" @click="handleSubmit" type="submit" value="送出">
  <!-- <a class="form_btn" @click="handleSubmit">送出</a> -->
</form>
<form class="form" method="get">
  <ul>
    <li v-for="item in formData.tags" :key="item.tag">
      <input 
        type="checkbox" 
        :id="item.tag"
        :value="item.tag"
        v-model="formData.selecArr"
      >
      <label :for="item.tag">{{item.tag}}</label>
    </li>
  </ul>
  <a class="form_btn" @click="checkSubmit">送出</a>
</form>
<form class="form" method="get">
  <div class="select-box">
    <select v-model="selectCity">
      <option disabled value="">請選擇縣市</option>
      <option 
        v-for="item in twZip.city" 
        :key="item.name" 
        :value="item.name"
      >
        {{item.name}}
      </option>
    </select>
    <select v-model="selectArea">
      <option disabled value="">請選擇區域</option>
      <option 
        v-for="item in twZip.area"
        :key="item.name" 
        :value="item.zip"
      >
        {{item.name}}
      </option>
    </select>
  </div>
  <a class="form_btn" @click="selectSubmit">送出</a>
</form>
<form class="form" method="get">
  <input class="formBox_input" type="text" placeholder="lazy" v-model.lazy="lazyVal"/>
  <p class="formBox_label">{{lazyVal}}</p>
  <input class="formBox_input" type="text" placeholder="number" v-model.number="numberVal"/>
  <p class="formBox_label">{{numberVal}}</p>
  <input class="formBox_input" type="text" placeholder="trim" v-model.trim="trimVal"/>
  <p class="formBox_label">{{trimVal}}</p>
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
ul{
  list-style: none;
  padding-left: 0;
}
</style>