import React, { FC } from "react";

import "../../../css/components/errors.css";
interface IProps {
  error: string;
}
export const ErrorRow: FC<IProps> = ({ error }) => {
  return (
    <div className="error">
      <p>{error}</p>
    </div>
  );
};
