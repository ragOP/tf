import React from "react";
import { Text, Img, Heading } from "./..";

export default function ThermofisherScientificCorporateGenericTemplateSeconSubsection3({
  sectiontitle = "Section Title",
  publicpolicy = (
    <>
      Public policy engagement and <br />
      executive compensation
    </>
  ),
  description,
  readmoreTwo = "READ MORE",
  description1 = "At Thermo Fisher, our focus on high-impact innovation enables our customers to address some of the world’s greatest challenges. As we deliver new technologies and services, we help our customers break new ground in their important work. This includes helping them accelerate research so that they can bring life-changing therapies to patients. We have long believed that good corporate governance is important to ensure that Thermo Fisher is managed for the long-term benefit of our shareholders and other stakeholders.",
  ...props
}) {
  return (
    <div {...props} className="container-xs">
      <Heading as="h6" className="uppercase tracking-[1.80px]">
        {sectiontitle}
      </Heading>
      <div className="relative h-[416px] self-stretch md:h-auto">
        <div className="h-[387px] w-full bg-gray-100_01" />
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full justify-center md:relative md:flex-col">
          <div className="relative z-[1] flex h-[416px] w-[49%] items-start bg-[url(/public/images/img_group_10.svg)] bg-cover bg-no-repeat p-12 md:h-auto md:w-full md:p-5">
            <div className="mb-3 flex w-[85%] flex-col items-start gap-[27px] md:w-full">
              <Heading size="xl" as="h1" className="w-full leading-[56px] !text-white-A700">
                {publicpolicy}
              </Heading>
              <Text size="xl" as="p" className="w-full leading-[30px] !text-white-A700">
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
              <a href="#">
                <Text as="p" className="tracking-[0.64px] !text-white-A700">
                  {readmoreTwo}
                </Text>
              </a>
            </div>
          </div>
          <Img
            src="images/img_group_186.png"
            alt="shutterstock"
            className="relative ml-[-277px] h-[416px] w-[51%] object-cover md:ml-0 md:w-full"
          />
        </div>
      </div>
      <Text size="xl" as="p" className="w-full leading-[30px] !text-gray-900_cc">
        {description1}
      </Text>
    </div>
  );
}
