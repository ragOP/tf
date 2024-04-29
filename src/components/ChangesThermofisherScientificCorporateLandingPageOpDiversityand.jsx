import React from "react";
import {  Img, Slider, Text, Button } from '../components'

export default function ChangesThermofisherScientificCorporateLandingPageOpDiversityand({
  ifyassociate,
  developing = "Developing scientific breakthroughs as part of the Graduate Leadership Development Program.",
  myworkisa,
  description = "Our commitment to fostering a culture that values diversity and inclusion (D&I) considers gender and ethnicity diversity as well as diversity of backgrounds, experiences and viewpoints.",
  readmoreFour = "Read full story",
  p1offour,
  ...props
}) {
  return (
    <div {...props}>
      <div className="w-full">
        <div className="flex md:flex-col justify-between items-center gap-5">
          <div className="flex sm:flex-col justify-center w-[49%] md:w-full gap-2">
            <div className="flex-1">
              <div>
                <div>
                  <div className="h-[367px] relative">
                    <Img
                      src="images/img_shutterstock_413063374.png"
                      alt="shutterstock"
                      className="justify-center h-[367px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                    />
                    <div className="flex flex-col justify-center w-full h-full gap-[19px] left-0 bottom-0 right-0 top-0 p-6 m-auto sm:p-5 bg-indigo-900 absolute">
                      <Text as="p" className="flex mt-[231px] ml-1.5 !text-white-A700">
                        <span className="text-white-A700 font-bold">Ify</span>
                        <span className="text-white-A700">&nbsp;</span>
                        <span className="text-white-A700 font-light">
                          | Associate, Graduate Leadership Development Program
                        </span>
                      </Text>
                      <Text as="p" className="ml-1.5 !text-white-A700 leading-6">
                        {developing}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[367px] w-[4%] bg-indigo-900" />
            <div className="h-[367px] w-[3%] opacity-0.8 bg-indigo-900_a2" />
            <div className="h-[367px] w-[8px] opacity-0.5 bg-indigo-900_87" />
          </div>
          <div className="flex flex-col w-[46%] md:w-full">
            <Text size="5xl" as="p" className="flex !font-normal">
              <span className="text-gray-900">Our work is a </span>
              <span className="text-gray-900">&nbsp;</span>
              <span className="text-gray-900 font-bold">story of purpose</span>
            </Text>
            <Text size="lg" as="p" className="mt-[23px] !leading-[30px]">
              {description}
            </Text>
            <div className="flex items-center mt-4 gap-2 py-2">
              <Img src="images/img_rectangle_19957.svg" alt="image_ten" className="h-[18px]" />
              <Text as="p" className="self-start !text-gray-800 tracking-[0.64px]">
                {readmoreFour}
              </Text>
            </div>
            <div className="flex justify-between mt-[78px] gap-5">
              <div className="flex items-start gap-4">
                <Button color="gray_400" variant="outline" shape="circle" className="w-[42px]">
                  <Img src="images/img_arrow_right.svg" />
                </Button>
                <Text size="xs" as="p" className="flex mt-2.5 !text-gray-800 rotate-[180deg]">
                  <span className="text-gray-800">1 </span>
                  <span className="text-gray_800_75">of 4</span>
                </Text>
              </div>
              <Img src="images/img_group_107.svg" alt="image_eleven" className="h-[42px] w-[42px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
