import axios from 'axios';
const photoList = axios.create({ 
  baseURL:'https://vue-lessons-api.herokuapp.com/', 
});

// photoList.interceptors.request.use(
//   (config) => console.log("請求發起前", config),
//   (error) => Promise.reject(error)
// );

// photoList.interceptors.response.use(
//   (response) => console.log("請求發起後", response),
//   (error) => Promise.reject(error)
// );

export const getPhotoList = () => photoList.get("/photo/list");
