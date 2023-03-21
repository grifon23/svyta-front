import { Input } from "antd";
import React, { FC, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { BaseInput, Button, DrawerModal } from "../../../../core";
import { IProduct } from "../../interfaces/product";

interface IProps {
  isShow: boolean;
  onClose: () => void;
  submitForm: (data: any) => void;
}
export const DrawerEditorProduct: FC<IProps> = ({
  isShow,
  onClose,
  submitForm,
}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { isDirty, dirtyFields },
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      sizes: "",
      description: "",
      price: "",
      published: false,
    },
  });

  const onSubmitForm = (data: any) => {
    submitForm(data);
    reset();
  };
  return (
    <DrawerModal onClose={onClose} open={isShow}>
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Controller
            render={({ field }) => (
              <BaseInput label="Product name" placeholder="Name" {...field} />
            )}
            name="name"
            control={control}
            defaultValue=""
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Controller
              render={({ field }) => (
                <BaseInput
                  width={"45%"}
                  label="Price"
                  type="number"
                  placeholder="price"
                  {...field}
                />
              )}
              name="price"
              control={control}
              defaultValue=""
            />
            <Controller
              render={({ field }) => (
                <BaseInput
                  label="Sizes"
                  width={"45%"}
                  placeholder="sizes"
                  {...field}
                />
              )}
              name="sizes"
              control={control}
              defaultValue=""
            />
          </div>

          <Controller
            render={({ field }) => (
              <BaseInput
                texterea
                label="About product"
                placeholder="About product ..."
                {...field}
              />
            )}
            name="description"
            control={control}
            defaultValue=""
          />
        </div>

        <div
          style={{ display: "flex", justifyContent: "flex-end", marginTop: 50 }}
        >
          <Button
            mode="primary"
            label="Submit"
            style={{ marginRight: 20 }}
            type="submit"
          />
          <Button label="Cancel" />
        </div>
      </form>
    </DrawerModal>
  );
};
