// import axios from 'axios';
import { apiGetHKAapiDomainName } from '@/api/index.js';
import { ref } from 'vue';
// export function FetchsData(apiUrl = ''){
export function FetchsData(domainName = ''){
  const isLoad = ref(false),
        FetchData = ref([]),
        errorMsg = ref('');
  // axios.get(apiUrl)
  // .then((res) => {
  //   isLoad.value = true;
  //   FetchData.value = res.data;
  // }).catch((error) => {errorMsg.value = error.request.statusText});

  (async () => {
    try{
      const res = await apiGetHKAapiDomainName(domainName);
      isLoad.value = true;
      FetchData.value = res.data;
      console.log(res.data);
    }catch(error){
      console.log(error);
      errorMsg.value = error.request.statusText
      throw new Error(error);
    }
  })();
  return { isLoad, FetchData, errorMsg }
}