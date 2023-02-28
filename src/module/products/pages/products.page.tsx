import React, { useState } from "react";

import { WomanOutlined, ManOutlined } from "@ant-design/icons";
import { tabGendeOptions } from "../config/tabs-gender.config";
import { Tabs } from "../../../core/components";

export const ProductsPage = () => {
  const [tabs, setTabs] = useState<"m" | "w">("m");
  console.log("tabs", tabs);
  return (
    <div>
      <Tabs
        items={tabGendeOptions}
        onChange={(key: any) => setTabs(key)}
        value={tabs}
      />
      <p>Products</p>
    </div>
  );
};
