import { IProduct } from "../../module/products/interfaces/product";

export interface IGetProductsResponse extends Array<IProduct> {}

export interface IPayloadProduct extends IProduct {}
