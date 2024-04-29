import React from "react";
import { Img, Text, Heading } from "./..";

export default function ThermofisherScientificCorporateCSREthics({
  title = "ETHICS",
  description,
  codereview = "All directors, officers and employees of the Company are responsible for reviewing this Code and certifying annually that they have reviewed and are in compliance with it",
  trainingdescription = "All employees receive annual training on specific Code elements to ensure they have complete understanding of our ethics and compliance expectations",
  readmorelink = "Read more",
  ...props
}) {
  return (
    <div {...props}>
      <div className="container-xs flex flex-col items-start gap-[50px] md:p-5">
        <Heading as="h6" className="uppercase tracking-[1.80px]">
          {title}
        </Heading>
        <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
          <div className="flex w-[46%] justify-center md:w-full">
            <div className="flex w-full flex-col">
              <Text size="6xl" as="p" className="leading-[56px]">
                <span className="text-gray-900">Annual review, certification and training on&nbsp;</span>
                <span className="font-medium text-gray-900">our code of business conduct and ethics</span>
              </Text>
              <div className="relative mt-8 h-[90px] md:h-auto">
                <Text size="xl" as="p" className="w-full leading-[30px]">
                  {codereview}
                </Text>
                <Img
                  src="images/img_television.svg"
                  alt="television"
                  className="absolute left-[2.00px] top-[9.00px] m-auto h-[12px]"
                />
              </div>
              <div className="relative mt-[54px] h-[90px] md:h-auto">
                <Text size="xl" as="p" className="w-full leading-[30px]">
                  {trainingdescription}
                </Text>
                <Img
                  src="images/img_television.svg"
                  alt="television"
                  className="absolute left-[2.00px] top-[8.00px] m-auto h-[12px]"
                />
              </div>
              <div className="mt-[39px] flex items-center gap-2">
                <Img src="images/img_thumbs_up.svg" alt="thumbsup" className="h-[18px] self-end" />
                <a href="#" className="self-start">
                  <Text as="p" className="tracking-[0.64px] !text-gray-800">
                    {readmorelink}
                  </Text>
                </a>
              </div>
            </div>
          </div>
          <Img src="images/img_rectangle_19948.png" alt="image" className="h-[491px] w-[46%] object-cover md:w-full" />
        </div>
      </div>
    </div>
  );
}
