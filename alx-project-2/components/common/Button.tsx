import React from "react";
import { ButtonProps } from "@/interfaces";

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  small: "px-3 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({
  title,
  size = "medium",
  shape = "rounded-md",
  onClick,
}) => {
  const classes = `${sizeClasses[size]} ${shape} bg-blue-600 text-white hover:bg-blue-700 transition duration-200`;

  return (
    <button className={classes} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
