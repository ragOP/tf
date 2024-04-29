import React from "react";
import { Text, Img, Heading } from "./..";

export default function ThermofisherScientificCorporateCSRColumnreadmore({
  ouresg = "Our ESG Reporting Hub",
  findoutmore = "Find out more about Thermofisher ESG hub",
  readmoretext = "Explore ESG Hub",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
        <div className="flex flex-col items-start gap-[19px] pb-1.5">
          <Heading size="lg" as="h3" className="!text-white-A700">
            {ouresg}
          </Heading>
          <Text size="xl" as="p" className="!text-white-A700">
            {findoutmore}
          </Text>
        </div>
        <div className="flex w-[27%] justify-center md:w-full">
          <Img src="images/img_thumbs_up.svg" alt="image" className="h-[78px] w-[12%]" />
          <div className="relative ml-[-1px] flex flex-1 justify-center bg-red-A700 p-[17px]">
            <div className="flex self-end p-2">
              <Text as="p" className="self-start tracking-[0.64px] !text-white-A700">
                {readmoretext}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
