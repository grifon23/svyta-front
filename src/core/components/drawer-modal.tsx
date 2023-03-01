import React, { FC } from "react";
import { Drawer } from "antd";
import { Button } from "./button";

interface IProps {
  open: boolean;
  onClose: () => void;
  children: JSX.Element | JSX.Element[];
  extraTop?: JSX.Element;
}
export const DrawerModal: FC<IProps> = ({
  open,
  onClose,
  children,
  extraTop,
}) => {
  return (
    <Drawer
      title="Create a new position"
      width={720}
      onClose={onClose}
      open={open}
      bodyStyle={{ paddingBottom: 80 }}
      extra={extraTop}
    >
      {children}
    </Drawer>
  );
};
