import React, { FC } from "react";
import { Oval } from "react-loader-spinner";

export const Loader: FC = () => {
  return (
    <Oval
      height={100}
      width={100}
      color={"green"}
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="gray"
      strokeWidth={4}
      strokeWidthSecondary={3}
    />
  );
};
