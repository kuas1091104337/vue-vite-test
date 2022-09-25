import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import "virtual:svg-icons-register";

import './assets/main.css'

const app = createApp(App)

app.directive('focus',{
  mounted(el){
    el.focus();
    console.log(el);
  }
});
import { numPrice } from '@/lib/numToPrice.js';
app.directive('price',{
  mounted(el, binding){
    // console.log(binding.value);
    el.innerText = numPrice(binding.value);
  },
  updated(el, binding){
    el.innerText = numPrice(binding.value);
  }
});
app.directive('modle-save',{
  mounted(el, binding){
    const setInputVal = (val) => el.value = val, // 1. 寫入 Input DOM 的 value
          setSyncDate = (val) => binding.instance[el.id] = val, // 2. 同步 Vue 中宣告的的變數(資料)
          setLocalStorage = (val) => localStorage.setItem(`form-${el.id}`, val);// 3. 塞入 localStorage 暫存資料
    // 檢查目前是 localStorage 有沒有暫存的資料
    if(!localStorage[`form-${el.id}`]) setLocalStorage(binding.value);
    setInputVal(localStorage[`form-${el.id}`]);
    setSyncDate(el.value);
    // el.saveHandle = (e) => {
    //   setLocalStorage(e.target.value);
    //   setSyncDate(e.target.value);
    // };
    // el.addEventListener('input',el.saveHandle);
    // el.addEventListener('change',el.saveHandle);
    const saveHandle = (e) => {
      setLocalStorage(e.target.value);
      setSyncDate(e.target.value);
    };
    el.addEventListener('input',saveHandle);
    el.addEventListener('change',saveHandle);
  },
  unmounted(el, binding){}
});

app.use(createPinia())
app.use(router)

app.mount('#app')
