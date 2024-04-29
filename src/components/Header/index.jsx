import React from "react";
import { Button, Img, Text } from "./..";

export default function Header({ ...props }) {
  return (
    <header {...props}>
      <div className="flex w-full justify-between gap-5 bg-white-A700 pr-4 md:flex-col">
        <div className="relative h-[80px] w-[12%] md:h-auto md:w-full">
          <Img src="images/img_header_logo.svg" alt="headerlogo" className="h-[28px] w-[128px]" />
          <Img
            src="images/img_thermo_fisher_scientific.png"
            alt="thermofisher"
            className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[80px] w-full object-cover"
          />
        </div>
        <div className="flex items-center gap-[42px] md:flex-col">
          <Text />
          <Text />
          <Text />
          <Text />
          <Text />
          <a href="#">
            <Img src="images/img_search.svg" alt="search" className="h-[16px] w-[16px] md:w-full" />
          </a>
          <Button shape="round" className="min-w-[157px] text-white-A700 sm:pr-5">
            Thermofisher.com
          </Button>
        </div>
      </div>
    </header>
  );
}
