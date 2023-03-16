import React from "react";
import { Loader } from "./elements";

export const LoaderContainer = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
      }}
    >
      <Loader />
    </div>
  );
};
