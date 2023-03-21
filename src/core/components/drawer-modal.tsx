import React, { FC } from "react";
import { Drawer } from "antd";
import { Button } from "./button";

interface IProps {
  open: boolean;
  onClose: () => void;
  children: JSX.Element | JSX.Element[];
}
export const DrawerModal: FC<IProps> = ({ open, onClose, children }) => {
  return (
    <Drawer
      width={720}
      onClose={onClose}
      open={open}
      bodyStyle={{ paddingBottom: 80 }}
    >
      {children}
    </Drawer>
  );
};
