import axiosClient from "./Api";

const url = "/phones";

export  const  PAGE_SIZE = 5; // Số sản phẩm trên mỗi trang

const getPaging = (limit, page, ...rest ) => {
  const nameFilter = rest[0]
  return axiosClient.get("/phones",{
    params: {
      _limit: limit,
      _page: page,
      ...nameFilter
    }
  });
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

const ProductApi = { getPaging, getByID, create, updateByID, deleteByID,getAllList };
export default ProductApi;
