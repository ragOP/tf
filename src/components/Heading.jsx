import React from "react";

const sizes = {
  s: "text-lg font-bold leading-[22px]",
  md: "text-3xl font-bold",
  xs: "text-base font-bold leading-8",
  lg: "text-[38px] font-bold",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-helveticaneueltwg ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
