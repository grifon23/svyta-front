import React, { FC } from "react";
import { Drawer } from "antd";
import { Button } from "./button";

interface IProps {
  open: boolean;
  onClose: () => void;
}
export const DrawerModal: FC<IProps> = ({ open, onClose }) => {
  return (
    <Drawer
      title="Create a new think"
      width={720}
      onClose={onClose}
      open={open}
      bodyStyle={{ paddingBottom: 80 }}
      extra={
        <div style={{ display: "flex", width: "50%" }}>
          <Button label="Submit" style={{ marginRight: 20 }} />
          <Button label="Cancel" />
        </div>
      }
    ></Drawer>
  );
};
