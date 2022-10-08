import axios from 'axios';
const courses_id = axios.create({ 
  baseURL:'https://vue-lessons-api.herokuapp.com/', 
});

// courses_id.interceptors.request.use(
//   (config) => console.log("請求發起前", config),
//   (error) => Promise.reject(error)
// );

// courses_id.interceptors.response.use(
//   (response) => console.log("請求發起後", response),
//   (error) => Promise.reject(error)
// );

export const getCourses_id = () => courses_id.get("/courses/");