import { FC, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { BaseInput, Button, DrawerModal } from "../../../../core";
import { FIELD_IS_REQUIRED } from "../../../../typing";
import { ICreateProductForm } from "../../interfaces/create-product-form.interfaces";
import { IProduct } from "../../interfaces/product";

interface IProps {
  isShow: boolean;
  onClose: () => void;
  submitForm: (data: any) => void;
  defaultData?: IProduct;
  updateProduct: (id: number, data: ICreateProductForm) => void;
}
export const DrawerEditorProduct: FC<IProps> = ({
  isShow,
  onClose,
  submitForm,
  defaultData,
  updateProduct,
}) => {
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
    reset,
  } = useForm<ICreateProductForm>({
    defaultValues: { description: defaultData?.description },
  });

  const onSubmitForm = (data: any) => {
    if (defaultData?.id) {
      updateProduct(+defaultData.id, data);
    } else {
      submitForm(data);
    }
    reset();
  };

  useEffect(() => {
    if (!defaultData) return;
    setValue("name", defaultData.name);
    setValue("price", defaultData.price);
    setValue("size", defaultData.size);
    setValue("description", defaultData.description);
  }, [defaultData, setValue]);

  const hideDrawer = () => {
    onClose();
    reset();
  };

  return (
    <DrawerModal onClose={hideDrawer} open={isShow}>
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
            rules={{ required: FIELD_IS_REQUIRED }}
            render={({ field }) => (
              <BaseInput
                label="Product name"
                placeholder="Name"
                {...field}
                error={errors.name?.message}
              />
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
              rules={{ required: FIELD_IS_REQUIRED }}
              render={({ field }) => (
                <BaseInput
                  error={errors.price?.message}
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
              rules={{ required: FIELD_IS_REQUIRED }}
              render={({ field }) => (
                <BaseInput
                  error={errors.size?.message}
                  label="Sizes"
                  width={"45%"}
                  placeholder="sizes"
                  {...field}
                />
              )}
              name="size"
              control={control}
              defaultValue=""
            />
          </div>

          <Controller
            rules={{ required: FIELD_IS_REQUIRED }}
            render={({ field }) => (
              <BaseInput
                texterea
                error={errors.description?.message}
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
