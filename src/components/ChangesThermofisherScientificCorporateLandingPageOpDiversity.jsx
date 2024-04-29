import React from "react";
import {  Img, Slider, Text, Button ,Heading} from '../components'

export default function ChangesThermofisherScientificCorporateLandingPageOpDiversity({
  career = "CAREER",
  description,
  readmoreThree = "EXPLORE OPPORTUNITIES",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex md:flex-col justify-between items-start w-full gap-5 mx-auto md:p-5 max-w-[1259px]">
        <div className="flex flex-col w-[45%] md:w-full gap-[25px]">
          <div className="flex flex-col ml-[19px] gap-[50px]">
            <a href="#">
              <Heading size="s" as="h1" className="!text-teal-700 tracking-[1.80px] uppercase">
                {career}
              </Heading>
            </a>
            <div>
              <div>
                <Text size="5xl" as="p" className="flex">
                  <span className="text-gray-900 font-bold">
                    <>
                      Work in an inclusive global
                      <br />
                      environment{" "}
                    </>
                  </span>
                  <span className="text-gray-900 font-normal">
                    <>
                      that values the
                      <br />
                      power of diverse talent,
                      <br />
                      background and experiences
                    </>
                  </span>
                </Text>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-2 py-[7px]">
            <Img src="images/img_rectangle_19957.svg" alt="image_nine" className="h-[18px] mt-[3px]" />
            <Text as="p" className="mb-1 !text-gray-800 tracking-[0.64px]">
              {readmoreThree}
            </Text>
          </div>
        </div>
        <Img
          src="images/img_adobestock_216739539.png"
          alt="adobestock_one"
          className="w-[47%] md:w-full mt-[72px] object-cover"
        />
      </div>
    </div>
  );
}
