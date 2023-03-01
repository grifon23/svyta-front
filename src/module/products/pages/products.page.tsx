import React, { useState } from "react";

import { tabGendeOptions } from "../config/tabs-gender.config";
import { DrawerModal, Tabs } from "../../../core/components";
import { ProductCard } from "../components";
import { mockListProducts } from "../mock-data";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../../core/components/button";

export const ProductsPage = () => {
  const navigate = useNavigate();

  const [tabs, setTabs] = useState<"m" | "w">("m");
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
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
        <Button label="Створити позицію" onClick={() => setOpen(true)} />
      </div>

      <div className="list-products">
        {mockListProducts.map((it) => (
          <ProductCard
            onClick={() =>
              navigate(`/product-detailed/${it.id}`, {
                state: { product: it },
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
      <DrawerModal onClose={onClose} open={open} />
    </div>
  );
};
