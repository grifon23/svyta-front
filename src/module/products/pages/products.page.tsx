import { useState } from "react";

import { tabGendeOptions } from "../config/tabs-gender.config";
import { BaseInput, DrawerModal, Tabs } from "../../../core/components";
import { ProductCard } from "../components";
import { mockListProducts } from "../mock-data";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../core/components/button";

interface IForm {
  name: string;
  description: string;
  price: string;
  sizes: string;
  count: string;
}
export const ProductsPage = () => {
  const navigate = useNavigate();

  const [tabs, setTabs] = useState<"m" | "w">("m");
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  console.log("input", input);
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
      <DrawerModal
        onClose={onClose}
        open={open}
        extraTop={
          <div style={{ display: "flex", width: "50%" }}>
            <Button label="Submit" style={{ marginRight: 20 }} />
            <Button label="Cancel" />
          </div>
        }
      >
        <BaseInput
          //error={form.errors.name}
          style={{ marginBottom: "16px" }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Name position"
          label="Name position"
        />
      </DrawerModal>
    </div>
  );
};
