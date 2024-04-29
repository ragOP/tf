import React from "react";
import { Text, Img, Heading } from "./..";

const data = [
  {
    clipboardone: "images/img_clipboard_1.svg",
    reporting: "Reporting",
    description:
      "In line with our commitment to transparency, we publish an annual CSR Report that outlines our progress consistent with our CSR strategy.",
  },
  {
    clipboardone: "images/img_microscope_1_1.svg",
    reporting: "Materiality Assessment",
    description:
      "In line with the Company’s growth and evolution, we conducted an initial materiality assessment in 2019 through an in-depth process led by an independent third-party advisor.",
  },
  {
    clipboardone: "images/img_hand_internal_launch.svg",
    reporting: "Stakeholder Engagement",
    description: "We are committed to creating sustainable value for all our stakeholders.",
  },
  {
    clipboardone: "images/img_currency_dollar.svg",
    reporting: "Sustainable Finance",
    description:
      "We embed our environmental, social and governance (ESG) priorities within the business to drive ownership and progress toward our commitments.",
  },
];

export default function ThermofisherScientificCorporateGenericTemplateSeconDiversityand({
  sectiontitle = "FOUR SECTION LAYOUT",
  reportingtitle = "Reporting",
  reportingdescription = "In line with our commitment to transparency, we publish an annual CSR Report that outlines our progress consistent with our CSR strategy.",
  materialitytitle = "Materiality Assessment",
  materialitydescription = "In line with the Company’s growth and evolution, we conducted an initial materiality assessment in 2019 through an in-depth process led by an independent third-party advisor.",
  stakeholdertitle = "Stakeholder Engagement",
  stakeholderdescription = "We are committed to creating sustainable value for all our stakeholders.",
  sustainabletitle = "Sustainable Finance",
  sustainabledescription = "We embed our environmental, social and governance (ESG) priorities within the business to drive ownership and progress toward our commitments.",
  readmorelink = "Read more",
  ...props
}) {
  return (
    <div {...props}>
      <div className="container-xs mt-[22px] flex flex-col items-center md:p-5">
        <Heading as="h6" className="uppercase tracking-[1.80px]">
          {sectiontitle}
        </Heading>
      </div>
      <div className="container-xs mt-[50px] flex gap-16 p-7 md:flex-col md:p-5">
        {data.map((d, index) => (
          <div key={"listclipboardon" + index} className="flex w-full flex-col items-center gap-[54px] sm:gap-[27px]">
            <Img src={d.clipboardone} alt="clipboardone" className="h-[85px] w-[85px]" />
            <div className="flex flex-col items-start gap-[27px] self-stretch">
              <Text size="xl" as="p" className="!font-medium">
                {d.reporting}
              </Text>
              <Text as="p" className="w-full !font-normal leading-6">
                {d.description}
              </Text>
            </div>
          </div>
        ))}
      </div>
      <div className="container-xs mt-8 flex flex-col items-start px-8 md:p-5 sm:px-5">
        <div className="flex items-start gap-2 py-[7px]">
          <Img src="images/img_thumbs_up.svg" alt="thumbsup" className="h-[18px]" />
          <a href="#">
            <Text as="p" className="tracking-[0.64px] !text-gray-800">
              {readmorelink}
            </Text>
          </a>
        </div>
      </div>
    </div>
  );
}
