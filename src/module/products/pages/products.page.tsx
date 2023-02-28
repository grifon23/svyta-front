import React, { useState } from "react";

import { tabGendeOptions } from "../config/tabs-gender.config";
import { Tabs } from "../../../core/components";
import { ProductCard } from "../components";
import { mockListProducts } from "../mock-data";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";

export const ProductsPage = () => {
  const navigate = useNavigate();

  const [tabs, setTabs] = useState<"m" | "w">("m");
  return (
    <div>
      <Tabs
        items={tabGendeOptions}
        onChange={(key: any) => setTabs(key)}
        value={tabs}
      />
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
    </div>
  );
};
