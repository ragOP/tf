import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded",
};
const variants = {
  outline: {
    gray_400: "border-gray-400 border border-solid",
  },
  fill: {
    gray_900_7f: "bg-gray-900_7f",
    gray_900_b2: "bg-gray-900_b2",
    red_A700: "bg-red-A700",
    red_900: "bg-red-900 text-white-A700",
  },
};
const sizes = {
  md: "h-[42px] px-3",
  xs: "h-[32px] px-[11px]",
  xl: "h-[60px] px-2",
  lg: "h-[46px] px-[35px] text-base",
  sm: "h-[32px] pl-3 pr-8 text-sm",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "sm",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["md", "xs", "xl", "lg", "sm"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["gray_400", "gray_900_7f", "gray_900_b2", "red_A700", "red_900"]),
};

export { Button };
