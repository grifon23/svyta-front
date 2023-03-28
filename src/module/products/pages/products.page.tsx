import { useEffect, useState } from "react";

import { tabGendeOptions } from "../config/tabs-gender.config";
import { EmptyList, LoaderContainer, Tabs } from "../../../core/components";
import { DrawerEditorProduct, ProductCard } from "../components";
import { mockImagesProductst } from "../mock-data";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../core/components/button";
import {
  getOneProductReq,
  getProductsReq,
  removeProductReq,
  storeProductReq,
  updateProductReq,
} from "../../../api/product";
import { IProduct } from "../interfaces/product";
import { message } from "antd";
import _ from "lodash";
import { ICreateProductForm } from "../interfaces/create-product-form.interfaces";

export const ProductsPage = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingOne, setIsLoadingOne] = useState(true);
  const [tabs, setTabs] = useState<"m" | "w">("m");
  const [open, setOpen] = useState(false);
  const [defaultData, setDefaultData] = useState<IProduct>();

  const getProducts = async () => {
    setIsLoading(true);
    try {
      const resp = await getProductsReq();
      const templ = resp.data.map((el, index) => {
        return { ...el, imgUrl: mockImagesProductst[index].imgUrl };
      });
      setProducts(templ);
    } catch (error) {
      console.log("error", error);
    }
    setTimeout(() => setIsLoading(false), 500);
  };

  useEffect(() => {
    getProducts();
  }, []);
  const getOneProduct = async (id: number) => {
    setIsLoadingOne(true);
    try {
      const { data } = await getOneProductReq(id);

      setDefaultData(data);
    } catch (error) {}
    setIsLoadingOne(false);
  };

  useEffect(() => {
    if (defaultData) setOpen(true);
  }, [defaultData]);

  const createProduct = async (data: any) => {
    try {
      await storeProductReq(data);
      console.log("create product", data);
      message.success("Success created product");
      setTimeout(() => onClose(), 700);
    } catch (error) {}
  };

  const onUpdateProduct = async (id: number, data: any) => {
    try {
      await updateProductReq(id, data);
      message.success("Success update product");
      setTimeout(() => onClose(), 700);
    } catch (error) {}
  };

  const deleteProduct = async (id: string) => {
    try {
      await removeProductReq(+id);
      const templ = products.filter((it) => it.id !== id);
      setProducts(templ);
    } catch (error) {}
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const listProducts = () => {
    if (isLoading) {
      return <LoaderContainer />;
    }
    return (
      <div className="list-products">
        {_.isEmpty(products) && !isLoading ? (
          <EmptyList />
        ) : (
          products.map((it) => (
            <ProductCard
              onEditProduct={() => getOneProduct(+it.id)}
              onClick={() =>
                navigate(`/product-detailed/${it.id}`, {
                  state: { id: it.id, img: it.imgUrl },
                })
              }
              key={it.id}
              imgUrl={it.imgUrl}
              name={it.name}
              size={it.size}
              price={it.price}
              onRemove={() => deleteProduct(it.id)}
            />
          ))
        )}
      </div>
    );
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Tabs
          items={tabGendeOptions}
          onChange={(key: any) => setTabs(key)}
          value={tabs}
        />
        <Button label="Створити позицію" onClick={showDrawer} />
      </div>
      {listProducts()}

      <DrawerEditorProduct
        updateProduct={onUpdateProduct}
        defaultData={defaultData}
        isShow={open}
        onClose={onClose}
        submitForm={createProduct}
      />
    </div>
  );
};
