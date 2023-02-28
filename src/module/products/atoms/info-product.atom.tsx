import React, { FC } from "react";
import { Txt } from "../../../core";

interface IProps {
  name: string;
  price: string;
  size: string;
}
export const InfoProductAtom: FC<IProps> = ({ name, size, price }) => {
  return (
    <div>
      <Txt mod="x2" weight="600" style={{ marginBottom: 10 }}>
        {name}
      </Txt>

      <Txt mod="x2" weight="700">
        {price}
      </Txt>
      <div style={{ display: "flex", alignItems: "center", marginTop: 20 }}>
        <Txt mod="lg" color="gray" style={{ marginRight: 10 }}>
          Розміри:
        </Txt>
        <Txt mod="lg" color={"grey"}>
          {size}
        </Txt>
      </div>
    </div>
  );
};
