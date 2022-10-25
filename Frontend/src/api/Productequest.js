import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8000" });

// Product
export const getProductbyId = (id) => API.get(`/product/${id}`);
export const getAllProduct = () => API.get("/product/");
export const updateProduct = (id, formData) =>
  API.put(`/product/${id}`, formData);
export const deleteProduct = (id) => API.delete(`/product/${id}`);

// Order
export const orderProduct = (id, formData) =>
  API.post(`/order/${id}`, formData);
export const getAllOrder = () => API.get("/order/admin");
export const getOrder = (userId) => API.get(`/order/${userId}`);
export const deleteOrder = (id) => API.delete(`/order/${id}`);
export const acceptOrder = (id, userId) => API.put(`order/${id}/${userId}`);
