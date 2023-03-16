import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getOneProductReq } from "../../../api/product";
import { Button } from "../../../core/components/button";
import { InfoProductAtom } from "../atoms";
import { IProduct } from "../interfaces/product";
import { LoaderContainer } from "../../../core";

export const DetailedProductPage = () => {
  const { state } = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState({} as IProduct);

  const loadProduct = async () => {
    setIsLoading(true);
    try {
      const { data } = await getOneProductReq(state.id);

      setProduct({ ...data, imgUrl: state.img });
    } catch (error) {}
    setIsLoading(false);
  };

  useEffect(() => {
    loadProduct();
  }, [state]);

  if (isLoading) {
    return <LoaderContainer />;
  }

  return (
    <div>
      <div style={{ display: "flex" }}>
        <img src={product.imgUrl} height={500} />
        <div style={{ marginLeft: 50 }}>
          <InfoProductAtom
            name={product.name}
            price={product.price}
            size={product.size}
          />

          <div style={{ display: "flex", marginTop: 50 }}>
            <Button
              mode="primary"
              label="Додати в замовлення"
              style={{ marginRight: 30 }}
            />

            <Button colorLabel="green" label="Купити в один клік" />
          </div>
        </div>
      </div>
    </div>
  );
};
