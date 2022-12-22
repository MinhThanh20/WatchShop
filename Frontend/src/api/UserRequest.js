import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8000" });

export const getUser = (userId) => API.get(`/user/${userId}`);
export const getAllUser = () => API.get(`/user`)
export const deleteUser = (id) => API.delete(`/user/${id}`)
export const updateUser = (id, formData) => API.put(`/user/${id}`, formData);
