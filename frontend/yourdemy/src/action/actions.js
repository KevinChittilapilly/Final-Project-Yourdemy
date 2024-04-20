import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/";

export const getCourses =  () => {
     return axios.get(API_BASE_URL+'courses/').then((resp)=>{
        console.log(resp)
        return resp.data
      }).catch(
        console.log("Error")
      )
}

export const getCoursesDetails =  (id) => {
  console.log(id)
  return axios.get(API_BASE_URL+'courses/'+id).then((resp)=>{
     console.log(resp)
     return resp.data
   }).catch(
     console.log("Error")
   )
}