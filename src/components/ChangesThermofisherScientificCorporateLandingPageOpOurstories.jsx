import React from "react";
import {  Img, Slider, Text, Button,Heading } from '../components'

export default function ChangesThermofisherScientificCorporateLandingPageOpOurstories({
  ourstories = "Mission Stories",
  description = (
    <>
      Delivering COVID-19 solutions when <br />
      the world needed it most
    </>
  ),
  description1 = (
    <>
      Our Mission is to enable our customers to <br />
      make the world healthier, cleaner and safer.
    </>
  ),
  readmore = "READ MORE",
  ...props
}) {
  return (
    <div {...props}>
      <div className="w-full pl-[93px] pr-14 md:px-5 bg-black-900">
        <div className="flex md:flex-col justify-between items-start w-full gap-5 mx-auto md:p-5 max-w-[1247px]">
          <div className="flex flex-col w-[28%] md:w-full mt-[61px] gap-[25px]">
            <div className="flex flex-col ml-[7px]">
              <Heading size="s" as="h1" className="!text-teal-100 tracking-[1.80px] uppercase">
                {ourstories}
              </Heading>
              <Text size="lg" as="p" className="mt-[50px] !text-white-A700 !font-medium !leading-7">
                {description}
              </Text>
              <Text as="p" className="w-[91%] md:w-full mt-6 !text-white-A700_87 !font-normal opacity-0.5 leading-6">
                {description1}
              </Text>
            </div>
            <div className="flex items-start gap-2 py-[7px]">
              <Img src="images/img_rectangle_19957.svg" alt="image_one" className="h-[18px] mt-[3px]" />
              <a href="#" className="mb-1">
                <Text as="p" className="!text-gray-800 tracking-[0.64px]">
                  {readmore}
                </Text>
              </a>
            </div>
          </div>
          <div className="flex md:flex-col justify-between items-start w-[51%] md:w-full gap-5">
            <div className="flex w-[54px] h-[6px] mt-[72px]" />
            <div className="flex justify-center w-[85%] md:w-full">
              <Img src="images/img_rectangle_19815.png" alt="image_two" className="h-[408px] w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
