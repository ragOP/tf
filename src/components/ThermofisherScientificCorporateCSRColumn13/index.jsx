import React from "react";
import { Text, Img } from "./..";

export default function ThermofisherScientificCorporateCSRColumn13({
  userimage = "images/img_shutterstock_1898590327.png",
  pricetext,
  investmenttext = "In R&D Investment",
  ...props
}) {
  return (
    <div {...props}>
      <Img src={userimage} alt="13_billion" className="h-[193px] w-full object-cover md:h-auto" />
      <div className="flex flex-col items-start gap-1.5">
        <Text size="4xl" as="p" className="!text-white-A700">
          <span className="text-gray-900">$</span>
          <span className="text-gray-900">1.3&nbsp;</span>
          <span className="text-gray-900">billion</span>
        </Text>
        <Text as="p" className="!font-normal">
          {investmenttext}
        </Text>
      </div>
    </div>
  );
}
