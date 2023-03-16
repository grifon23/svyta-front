import { IProduct } from "./../../module/products/interfaces/product";
import { baseUrl } from "./../../config/index";
import axios from "axios";
import { IGetProductsResponse, IPayloadProduct } from "./interfaces";

export const getProductsReq = () => {
  return axios.get<IGetProductsResponse>(`${baseUrl}/products`);
};

export const getOneProductReq = (id: number) => {
  return axios.get<IProduct>(`${baseUrl}/products/${id}`);
};

export const storeProductReq = (data: IPayloadProduct) => {
  return axios.post(`${baseUrl}/products`, data);
};

export const updateProductReq = (id: number, data: IPayloadProduct) => {
  return axios.patch(`${baseUrl}/products/${id}`, data);
};

export const removeProductReq = (id: number) => {
  return axios.delete(`${baseUrl}/products/${id}`);
};
