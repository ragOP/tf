import React from "react";

const sizes = {
  xl: "text-[38px] font-bold md:text-4xl sm:text-[34px]",
  s: "text-lg font-bold",
  md: "text-xl font-bold",
  xs: "text-base font-bold",
  lg: "text-3xl font-bold md:text-[28px] sm:text-[26px]",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-teal-700 font-helveticaneueltwg ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
