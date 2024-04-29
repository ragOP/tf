import React from "react";
// import { Text, Button, Img } from "./..";
import {  Img, Slider, Text, Button,Heading } from '../components'

export default function ChangesThermofisherScientificCorporateLandingPageOpListdescription({
  description = "Our President & CEO, Marc Casper, talks with Jim Cramer of “Mad Money” about the future of gene therapy upon the recent acquisition of Brammer Bio and the importance of precisions medicine to Thermo Fisher Scientific’s growth strategy.",
  thermofisher = "Thermo Fisher Scientific | Fri, 03 Feb 2023",
  description1 = "@thermofisher As we get ready to celebrate Earth Day this Saturday, April 22nd, we will share throughout the week, the many ways our colleagues around the globe are working to reduce our impact on the environment and help secure a more socially responsible, sustainable future.",
  thermofisher1 = "Thermo Fisher Scientific | Fri, 17 Apr 2023",
  description2 = "Our President & CEO, Marc Casper, talks with Jim Cramer of “Mad Money” about the future of gene therapy upon the recent acquisition of Brammer Bio and the importance of precisions medicine to Thermo Fisher Scientific’s growth strategy.",
  thermofisher2 = "Thermo Fisher Scientific | Fri, 03 Feb 2023",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col justify-center w-full p-6 sm:p-5 bg-gray-200 rounded-sm">
        <div className="flex flex-col w-[12%] md:w-full">
          <Button color="light_blue_800" shape="circle" className="w-[40px]">
            <Img src="images/img_group_16.svg" />
          </Button>
        </div>
        <Text as="p" className="mt-5 !font-normal leading-6 italic">
          {description}
        </Text>
        <Text size="xs" as="p" className="mt-[46px] !text-gray-700">
          {thermofisher}
        </Text>
      </div>
      <div className="flex flex-col justify-center w-full gap-[21px] p-6 sm:p-5 bg-gray-200 rounded-sm">
        <div className="w-[12%] md:w-full">
          <div>
            <div className="flex flex-col bg-black-900_01 rounded-[50%]">
              <Button color="black_900_01" shape="circle" className="w-[40px]">
                <Img src="images/img_group_13.png" />
              </Button>
            </div>
          </div>
        </div>
        <Text as="p" className="!font-normal leading-6 italic">
          {description1}
        </Text>
        <Text size="xs" as="p" className="!text-gray-700">
          {thermofisher1}
        </Text>
      </div>
      <div className="flex flex-col justify-center w-full p-6 sm:p-5 bg-gray-200 rounded-sm">
        <div className="flex flex-col w-[12%] md:w-full">
          <Button color="blue_A700" shape="circle" className="w-[40px]">
            <Img src="images/img_group_11.svg" />
          </Button>
        </div>
        <Text as="p" className="mt-5 !font-normal leading-6 italic">
          {description2}
        </Text>
        <Text size="xs" as="p" className="mt-[46px] !text-gray-700">
          {thermofisher2}
        </Text>
      </div>
    </div>
  );
}
