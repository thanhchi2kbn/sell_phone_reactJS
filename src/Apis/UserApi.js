import axiosClient from "./Api";


const url = "users";

const getAll = (config) =>{
    return axiosClient.get(url,config)
};


const create = (body) => {
    return axiosClient.post(url,body)
}

const updateByID = (id,data, config) => {
    return axiosClient.put(`${url}/${id}`,data,config)
}

const deleteByID = (id) => {
    return axiosClient.delete(`${url}/${id}`)
}

const UserApi = {getAll,create,updateByID,deleteByID}
export default UserApi