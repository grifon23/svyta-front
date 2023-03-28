import React, { FC } from "react";
import { CloseCircleOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import { createStyleSheet, Txt } from "../../../core";

interface IProps {
  imgUrl?: string;
  name: string;
  size: string;
  price: string;
  onClick: () => void;
  onRemove?: () => void;
  onEditProduct?: () => void;
}

export const ProductCard: FC<IProps> = ({
  name,
  imgUrl,
  size,
  price,
  onClick,
  onRemove,
  onEditProduct,
}) => {
  return (
    <div style={{ margin: "20px", position: "relative" }}>
      <div style={styles.groupBtn}>
        <Tooltip title="edit product">
          <Button
            onClick={onEditProduct}
            style={styles.btn}
            type="primary"
            shape="circle"
            icon={<EditOutlined />}
          />
        </Tooltip>
        <Tooltip title="delete product">
          <Button
            onClick={onRemove}
            style={styles.btn}
            type="primary"
            shape="circle"
            icon={<CloseCircleOutlined />}
          />
        </Tooltip>
      </div>

      <div onClick={onClick}>
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
    </div>
  );
};

const styles = createStyleSheet({
  containerBottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  groupBtn: {
    position: "absolute",
    right: 10,
    top: 0,
    display: "flex",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "transparent",
    color: "white",
    opacity: 0.5,
    fontSize: 20,
  },
});
