import React from "react";
import { Text, Img, Heading } from "./..";

const data = [
  { price: "$1.3 billion", inrd: "In R&D Investment" },
  { price: "Net-zero emission", inrd: "by 2050 " },
  { price: "25% reduction", inrd: "in absolute scope 1 and 2 emissions since 2018" },
  { price: "89.5K students", inrd: "reached through STEM education" },
];

export default function ThermofisherScientificCorporateGenericTemplateSeconSubsection4({
  sectiontitle = "Section Title",
  corporate,
  zipcode = "2022",
  thermofisher,
  description = "Our Corporate Social Responsibility (CSR) reports are available to provide further detail to our CSR Programs and the progress we make each year. You can download current and previous years reports in PDF format below.",
  sectiontitle1 = "Section Title",
  price,
  inrd = "In R&D Investment",
  netzero = "Net-zero emission",
  by2050 = "by 2050 ",
  p25reduction = "25% reduction",
  inabsolute = "in absolute scope 1 and 2 emissions since 2018",
  p895kstudents = "89.5K students",
  reachedthrough = "reached through STEM education",
  ...props
}) {
  return (
    <div {...props} className="container-xs">
      <div className="flex flex-col items-start gap-[50px] self-stretch">
        <Heading as="h6" className="uppercase tracking-[1.80px]">
          {sectiontitle}
        </Heading>
        <div className="self-stretch rounded bg-indigo-900 p-8 sm:p-5">
          <div className="flex flex-col gap-8">
            <div className="flex items-start self-start md:flex-col">
              <Text size="4xl" as="p" className="mt-[5px] !text-white-A700">
                <span className="font-bold text-white-A700">Corporate Social Responsibility</span>
                <span className="text-white-A700">&nbsp;</span>
                <span className="font-light text-white-A700">Report</span>
              </Text>
              <div className="ml-[15px] flex items-center gap-2 md:ml-0">
                <Text size="4xl" as="p" className="!text-white-A700">
                  {zipcode}
                </Text>
                <Img src="images/img_arrow_down.svg" alt="arrowdown" className="mb-2.5 h-[6px] self-end" />
              </div>
              <div className="ml-[30px] flex items-center gap-4 bg-deep_purple-500 pr-6 md:ml-0 sm:flex-col sm:pr-5">
                <div className="flex flex-col items-center bg-red-A700 p-2.5 sm:p-5">
                  <Img src="images/img_pdf_svgrepo_com.svg" alt="pdfsvgrepocom" className="h-[32px] w-[32px]" />
                </div>
                <Text as="p" className="mb-3.5 self-end !text-white-A700">
                  <span className="text-white-A700">Thermo Fisher Scientific&nbsp;</span>
                  <span className="font-normal text-white-A700">: CSR Annual Report 2022</span>
                </Text>
                <Img src="images/img_light_bulb.svg" alt="lightbulb" className="h-[15px] sm:w-full" />
              </div>
            </div>
            <Text size="xl" as="p" className="leading-[30px] !text-white-A700">
              {description}
            </Text>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-12 self-stretch">
        <Heading as="h6" className="uppercase tracking-[1.80px]">
          {sectiontitle1}
        </Heading>
        <div className="flex gap-[27px] self-stretch md:flex-col">
          {data.map((d, index) => (
            <div key={"list13Billion" + index} className="flex w-full flex-col items-start gap-[21px]">
              <Img
                src="images/img_group_186.png"
                alt="13_billion"
                className="h-[193px] w-full object-cover md:h-auto"
              />
              <div className="flex flex-col items-start gap-1.5">
                <Text size="4xl" as="p" className="!text-white-A700">
                  <span className="text-gray-900">$</span>
                  <span className="text-gray-900">1.3&nbsp;</span>
                  <span className="text-gray-900">billion</span>
                </Text>
                <Text as="p" className="!font-normal">
                  {d.inrd}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
