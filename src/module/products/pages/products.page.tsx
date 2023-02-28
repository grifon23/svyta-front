import React, { useState } from "react";

import { tabGendeOptions } from "../config/tabs-gender.config";
import { Tabs } from "../../../core/components";
import { ProductCard } from "../components";
import { mockListProducts } from "../mock-data";
import "./index.css";

export const ProductsPage = () => {
  const [tabs, setTabs] = useState<"m" | "w">("m");
  return (
    <div>
      <Tabs
        style={{ marginTop: 20 }}
        items={tabGendeOptions}
        onChange={(key: any) => setTabs(key)}
        value={tabs}
      />
      <div className="list-products">
        {mockListProducts.map((it) => (
          <ProductCard
            onClick={() => {}}
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
