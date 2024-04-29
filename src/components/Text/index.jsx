import React from "react";

const sizes = {
  "5xl": "text-[34px] font-normal md:text-[32px] sm:text-3xl",
  "6xl": "text-[38px] font-normal md:text-4xl sm:text-[34px]",
  xs: "text-xs font-normal",
  lg: "text-lg font-normal",
  "7xl": "text-[46px] font-normal md:text-[42px] sm:text-4xl",
  "8xl": "text-[50px] font-medium md:text-[46px] sm:text-[40px]",
  s: "text-sm font-normal",
  "2xl": "text-2xl font-medium md:text-[22px]",
  "3xl": "text-[25px] font-normal md:text-[23px] sm:text-[21px]",
  "4xl": "text-3xl font-medium md:text-[28px] sm:text-[26px]",
  xl: "text-xl font-normal",
  md: "text-base font-medium",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-900 font-helveticaneueltwg ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
