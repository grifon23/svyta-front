import React, { FC } from "react";
import { createStyleSheet, Txt } from "../../../core";

interface IProps {
  imgUrl?: string;
  name: string;
  size: string;
  price: string;
  onClick: () => void;
}

export const ProductCard: FC<IProps> = ({
  name,
  imgUrl,
  size,
  price,
  onClick,
}) => {
  return (
    <div onClick={onClick} style={{ margin: "20px " }}>
      <img src={imgUrl} style={{ height: 550, width: 400 }} alt="" />

      <div>
        <div style={{ ...styles.containerBottom, margin: "10px 0px" }}>
          <Txt mod="sm" color={"gray"}>
            Розмір
          </Txt>
          <Txt mod="sm" color={"gray"}>
            {size}
          </Txt>
        </div>
        <div style={styles.containerBottom}>
          <Txt mod="md" weight="700">
            {name}
          </Txt>

          <Txt mod="md" weight="700">
            {`Ціна: ${price} грн`}
          </Txt>
        </div>
      </div>
    </div>
  );
};

const styles = createStyleSheet({
  containerBottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
