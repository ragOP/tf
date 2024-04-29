import React from "react";
import { Img, Text, Heading } from "./..";

export default function ThermofisherScientificCorporateCSRCorporate({
  price = "CORPORATE GOVERNANCE",
  publicpolicytext = (
    <>
      Public policy engagement and <br />
      executive compensation
    </>
  ),
  descriptiontext,
  readmoretext = "READ MORE",
  ...props
}) {
  return (
    <div {...props}>
      <div className="container-xs flex flex-col items-center md:p-5">
        <Heading as="h6" className="uppercase tracking-[1.80px]">
          {price}
        </Heading>
      </div>
      <div className="container-xs relative h-[416px] md:h-auto md:p-5">
        <div className="h-[387px] w-full bg-gray-100_01" />
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full justify-center md:relative md:flex-col">
          <div className="relative z-[1] flex h-[416px] w-[49%] items-start bg-[url(/public/images/img_group_23.svg)] bg-cover bg-no-repeat p-12 md:h-auto md:w-full md:p-5">
            <div className="mb-[11px] flex w-[85%] flex-col items-start md:w-full">
              <Text size="6xl" as="p" className="w-full leading-[56px] !text-white-A700">
                {publicpolicytext}
              </Text>
              <Text size="xl" as="p" className="mt-[17px] w-full leading-[30px] !text-white-A700">
                <span className="text-white-A700">
                  For policies on our public policy engagement and political participation, as well as ESG-related
                  elements in executive compensation, please refer to our latest
                </span>
                <a href="#" className="text-white-A700 underline">
                  &nbsp;
                </a>
                <a href="#" className="text-white-A700 underline">
                  proxy statement
                </a>
                <span className="text-white-A700">&nbsp;on the&nbsp;</span>
                <a href="#" className="text-white-A700 underline">
                  SEC filings website
                </a>
                <span className="text-white-A700">.</span>
              </Text>
              <a href="#" className="mt-[39px]">
                <Text as="p" className="tracking-[0.64px] !text-white-A700">
                  {readmoretext}
                </Text>
              </a>
            </div>
          </div>
          <Img
            src="images/img_shutterstock_2201783433.png"
            alt="shutterstock"
            className="relative ml-[-277px] h-[416px] w-[51%] rounded-br rounded-tr object-cover md:ml-0 md:w-full"
          />
        </div>
      </div>
    </div>
  );
}
