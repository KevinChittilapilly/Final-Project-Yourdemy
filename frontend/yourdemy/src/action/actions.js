import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/";

export const getCourses =  () => {
    let userid = sessionStorage.getItem("userid")||1
    const request = [
      axios.get(API_BASE_URL+'courses/'),
      axios.get(API_BASE_URL+'user/'+userid)
    ]
    return axios.all(request)
    .then(axios.spread((coursesResponse, userResponse) => {
      console.log([coursesResponse, userResponse]); // This will log the responses as an array
     
      return [coursesResponse, userResponse]; // Return responses as an array
    }))
    .catch(error => {
      console.error("Error", error); // Proper error logging
      return error; // You might want to handle this differently depending on your error handling strategy
    });
}

export const getCoursesDetails =  (id) => {
  return axios.get(API_BASE_URL+'courses/'+id).then((resp)=>{
     console.log(resp)
     return resp.data
   }).catch(error => {
    console.error("Error", error); // Proper error logging
    return error; // You might want to handle this differently depending on your error handling strategy
  });
}

export const signupUser = async (userData) => {
  try {
    const response = await axios.post(API_BASE_URL + 'signup/', userData);
    console.log(response.data);
    return response.data;
  } catch(error) {
    console.error('Signup error', error.response.data);
    throw error.response.data;
  }
}

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(API_BASE_URL + 'login/', userData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Login error:", error.response.data);
    throw error.response.data;
  }
}

export const feedbackUser = async (userData) => {
  try {
    const response = await axios.post(API_BASE_URL + 'feedback/', userData);
    console.log(response.data);
    return response.data;
  } catch(error) {
    console.error('Feedback error', error.response.data);
    throw error.response.data;
  }
}

export const saveUser = (id, userData) => {
  return axios.put(API_BASE_URL + 'save/' + id + '/', userData)
    .then(response => {
      console.log("Response:", response);
      return response.data; // Returning the updated data
    })
    .catch(error => {
      console.error("Error in updating user:", error);
      return error; // You might want to handle this differently depending on your error handling strategy
    });
}