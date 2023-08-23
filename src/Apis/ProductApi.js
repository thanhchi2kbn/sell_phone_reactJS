import axiosClient from "./Api";

const url = "/phones";

export  const  PAGE_SIZE = 5; // Số sản phẩm trên mỗi trang

const getAll = (page, config) => {
  const offset = (page - 1) * PAGE_SIZE;
  return axiosClient.get(`${url}?_start=${offset}&_limit=${PAGE_SIZE}`, config);
};

const getAllList = (config) => {
  return axiosClient.get(`${url}`, config);
};



const getByID = (id, config) => {
  return axiosClient.get(`${url}/${id}`, config);
};

const create = (body) => {
  return axiosClient.post(url, body);
};

const updateByID = (id, data, config) => {
  return axiosClient.put(`${url}/${id}`, data, config);
};

const deleteByID = (id) => {
  return axiosClient.delete(`${url}/${id}`);
};

const ProductApi = { getAll, getByID, create, updateByID, deleteByID,getAllList };
export default ProductApi;
