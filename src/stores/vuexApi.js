import { defineStore } from 'pinia';
import { apiGetHKAphotoList } from '@/api/index.js';
// import axios from 'axios';
import { onMounted } from 'vue';
export const useVuexApiStore = defineStore('VuexApi',() => {
  const photoArr = ref([]),
        activeIdx = ref(0),
        isLoad = ref(false),
        isLogin = ref(false),
        isOpen = ref(false),
        isMenuOpen = ref(false),
        imgLoad = (imgArr) => {
          let i = 0;
          imgArr.forEach(el => {
            const img = new Image();
            img.src = el.url;
            img.onload = () => {
              i++;
              if(imgArr.length === i){
                photoArr.value = imgArr;
                isLoad.value = true;
              }
            }
          });
        },
        changeImg = (val) => {
          activeIdx.value += val;
          activeIdx.value = (activeIdx.value + photoArr.value.length) % photoArr.value.length;
        },
        loginHandle = (bool) => {
          isLogin.value = bool;
          bool && isOpen.value && (isOpen.value = false);
        },
        menuHandle = (bool) => {
          isOpen.value = bool;
          bool && isLogin.value && (isLogin.value = false);
        },
        menuOpenHandle = (bool) => isMenuOpen.value = bool;
  onMounted(() => {
    // axios.get('https://vue-lessons-api.herokuapp.com/photo/list')
    // .then((res) => {imgLoad(res.data)})
    // .catch((error) => {console.log(error.response.data)});

    (async () => {
      try{
        const res = await apiGetHKAphotoList();
        imgLoad(res.data)
        console.log(res.data);
      }catch(error){
        console.log(error.response.data);
        throw new Error(error);
      }
    })();
  })
  return { 
    photoArr, activeIdx, isLoad, isLogin, isOpen, isMenuOpen, 
    changeImg, loginHandle, menuHandle, menuOpenHandle 
  }
})