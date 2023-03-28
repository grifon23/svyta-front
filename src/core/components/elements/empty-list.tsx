import React from "react";

export const EmptyList = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <p
        style={{
          fontSize: "20px",
          fontWeight: "500",
          opacity: 0.5,
        }}
      >
        List is empty
      </p>
    </div>
  );
};
