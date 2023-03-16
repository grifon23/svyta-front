import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { BaseInput, Button, DrawerModal } from "../../../core";
import { IProduct } from "../interfaces/product";

interface IProps {
  isShow: boolean;
  onClose: () => void;
  submitForm: (data: IProduct) => void;
}
export const DrawerEditorProduct: FC<IProps> = ({
  isShow,
  onClose,
  submitForm,
}) => {
  const { register, handleSubmit } = useForm<IProduct>({
    defaultValues: {},
  });
  return (
    <DrawerModal
      onClose={onClose}
      open={isShow}
      extraTop={
        <div style={{ display: "flex", width: "50%" }}>
          <Button
            label="Submit"
            style={{ marginRight: 20 }}
            onClick={(e: any) => {
              e.preventDefault();
              //  console.log("click");
            }}
          />
          <Button label="Cancel" />
        </div>
      }
    >
      <form onSubmit={handleSubmit(submitForm)}>
        <BaseInput
          {...register("name", { required: true })}
          //="First name"
          //error={form.errors.name}
          style={{ marginBottom: "16px" }}
          //value={input}
          //onChange={(e) => setInput(e.target.value)}
          //placeholder="Name position"
          label="Name position"
        />
      </form>
    </DrawerModal>
  );
};
