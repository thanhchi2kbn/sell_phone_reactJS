import axios from "axios";
const axiosClient = axios.create({
  baseURL: " http://localhost:3004",
  params: {
    abc: "test",
  }
})

//interceptort của request chạy trươc khi reques nó gửi đi nó sẽ chèn thêm
// những cái dưới
// axiosClient.interceptors.request.use(
//   function (config){
//     config.headers["token"] =  localStorage.getItem("token");
//     config.params["vti"] = "academy";

//     return config
//   },

//   function (error){
//     return Promise.reject(error)
//   }
// );

// //interceptort của response trước khi nó nhận về thì nó cũng chèn thêm
// // những cái dưới
// axiosClient.interceptors.response.use(
//   function (response){
//     response.checked =true ;

//     return response
//   },

//   function (error){
//     return Promise.reject(error)
//   }
// )



export default axiosClient;