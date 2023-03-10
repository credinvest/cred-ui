import React, { FC } from "react";

interface Props {
  label: string;
}
const Button: FC<Props> = ({ label }) => {
  return <button> {label} </button>;
};

export default Button;
