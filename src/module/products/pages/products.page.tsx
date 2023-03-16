import { memo, useEffect, useMemo, useState } from "react";

import { tabGendeOptions } from "../config/tabs-gender.config";
import {
  BaseInput,
  DrawerModal,
  LoaderContainer,
  Tabs,
} from "../../../core/components";
import { DrawerEditorProduct, ProductCard } from "../components";
import { mockImagesProductst } from "../mock-data";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../core/components/button";
import { getProductsReq } from "../../../api/product";
import { IProduct } from "../interfaces/product";

interface IForm {
  name: string;
  description: string;
  price: string;
  sizes: string;
  count: string;
}
export const ProductsPage = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [tabs, setTabs] = useState<"m" | "w">("m");
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const getProducts = async () => {
    setIsLoading(true);
    try {
      const resp = await getProductsReq();
      const templ = resp.data.map((el, index) => {
        return { ...el, imgUrl: mockImagesProductst[index].imgUrl };
      });
      setProducts(templ);
      console.log("data", templ);
    } catch (error) {
      console.log("error", error);
    }
    setTimeout(() => setIsLoading(false), 500);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const createProduct = async (data: IProduct) => {
    try {
      console.log("create product", data);
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
        {products.map((it) => (
          <ProductCard
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
          />
        ))}
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
        isShow={open}
        onClose={onClose}
        submitForm={createProduct}
      />
    </div>
  );
};
