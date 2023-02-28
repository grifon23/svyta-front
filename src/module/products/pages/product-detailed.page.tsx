import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { Button } from "../../../core";
import { InfoProductAtom } from "../atoms";

export const DetailedProductPage = () => {
  const params = useParams();
  const { state } = useLocation();
  return (
    <div>
      <div style={{ display: "flex" }}>
        <img src={state.product.imgUrl} height={500} />
        <div style={{ marginLeft: 50 }}>
          <InfoProductAtom
            name={state.product.name}
            price={state.product.price}
            size={state.product.size}
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
