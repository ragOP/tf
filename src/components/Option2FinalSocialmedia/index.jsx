import React from "react";
import { Text, Button, Img } from "./..";

export default function Option2FinalSocialmedia({
  description = "Our President & CEO, Marc Casper, talks with Jim Cramer of “Mad Money” about the future of gene therapy upon the recent acquisition of Brammer Bio and the importance of precisions medicine to Thermo Fisher Scientific’s growth strategy.",
  thermofisher = "Thermo Fisher Scientific | Fri, 03 Feb 2023",
  description1 = "@thermofisher As we get ready to celebrate Earth Day this Saturday, April 22nd, we will share throughout the week, the many ways our colleagues around the globe are working to reduce our impact on the environment and help secure a more socially responsible, sustainable future.",
  thermofisher1 = "Thermo Fisher Scientific | Fri, 17 Apr 2023",
  description2 = "Our President & CEO, Marc Casper, talks with Jim Cramer of “Mad Money” about the future of gene therapy upon the recent acquisition of Brammer Bio and the importance of precisions medicine to Thermo Fisher Scientific’s growth strategy.",
  thermofisher2 = "Thermo Fisher Scientific | Fri, 03 Feb 2023",
  ...props
}) {
  return (
    <div {...props} className="container-xs">
      <div className="flex w-full flex-col items-start justify-center rounded-sm bg-gray-200_7f p-6 sm:p-5">
        <Button color="light_blue_800" shape="circle" className="w-[40px] !rounded-[20px]">
          <Img src="images/img_link.svg" />
        </Button>
        <Text as="p" className="mt-5 w-full italic leading-6">
          {description}
        </Text>
        <Text size="xs" as="p" className="mt-[46px] !text-gray-700">
          {thermofisher}
        </Text>
      </div>
      <div className="flex w-full flex-col items-start justify-center gap-[21px] rounded-sm bg-gray-200_7f p-6 sm:p-5">
        <div className="flex flex-col rounded-[20px] bg-black-900_01">
          <Button color="black_900_01" shape="circle" className="w-[40px] !rounded-[20px]">
            <Img src="images/img_group_145.png" />
          </Button>
        </div>
        <Text as="p" className="w-full italic leading-6">
          {description1}
        </Text>
        <Text size="xs" as="p" className="!text-gray-700">
          {thermofisher1}
        </Text>
      </div>
      <div className="flex w-full flex-col items-start justify-center rounded-sm bg-gray-200_7f p-6 sm:p-5">
        <Button color="blue_A700" shape="circle" className="w-[40px] !rounded-[20px]">
          <Img src="images/img_facebook.svg" />
        </Button>
        <Text as="p" className="mt-5 w-full italic leading-6">
          {description2}
        </Text>
        <Text size="xs" as="p" className="mt-[46px] !text-gray-700">
          {thermofisher2}
        </Text>
      </div>
    </div>
  );
}
