import axios from "axios";

const api = axios.create({
  baseURL: "https://sysco180.dvworks.in",
});

export const fetchBanners = () => api.get("/load_banners");

export const fetchServices = () =>
  api.get("/load_services_blogs?service_choice=services");

export const fetchBlogs = () =>
  api.get("/load_services_blogs?service_choice=blogs");

export default api;