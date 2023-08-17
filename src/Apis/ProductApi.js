import axiosClient from "./Api";


const url = "/phones";

const getAll = (config) =>{
    return axiosClient.get(url,config)
};

// const get = (url1,config) =>{
//     return axiosClient.get(url1,config)
// };

const create = (body) => {
    return axiosClient.post(url,body)
}

const updateByID = (id,data, config) => {
    return axiosClient.put(`${url}/${id}`,data,config)
}

const deleteByID = (id) => {
    return axiosClient.delete(`${url}/${id}`)
}

const ProductApi = {getAll,create,updateByID,deleteByID}
export default ProductApi