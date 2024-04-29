import React from "react";
import { Img, Text, Heading, Button } from "./..";

export default function ThermofisherScientificCorporateNewsroomColumnsettings({
  thermofisher = "Thermo Fisher",
  thermofishertext = "@thermofisher",
  novcountertext = ".Nov 14",
  descriptiontext,
  image = "images/img_f_6o1rzw0ae3t6t.png",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex items-start justify-between gap-5 self-stretch sm:flex-col">
        <div className="flex w-[63%] items-start justify-center sm:w-full">
          <Button size="xl" shape="round" className="w-[60px]">
            <Img src="images/img_settings.svg" />
          </Button>
          <Heading as="h6" className="ml-3.5 mt-4 !text-gray-900">
            {thermofisher}
          </Heading>
          <div className="ml-[7px] mt-[17px] flex flex-1 justify-center gap-[7px]">
            <div className="relative h-[20px] w-[16%] self-end md:h-auto">
              <Img src="images/img_star_1.svg" alt="thermo_fisher" className="h-[20px] w-full rounded" />
              <Img
                src="images/img_checkmark_white_a700.svg"
                alt="thermo_fisher"
                className="absolute bottom-[6.57px] left-0 right-0 m-auto h-[6px] rounded-[1px]"
              />
            </div>
            <Text as="p" className="self-start !font-normal !text-gray-900_7f">
              {thermofishertext}
            </Text>
          </div>
        </div>
        <Text as="p" className="mt-[17px] text-right !font-normal !text-gray-900_7f">
          {novcountertext}
        </Text>
      </div>
      <Text as="p" className="w-[85%] !font-normal leading-6 !text-black-900_01 md:w-full">
        <span className="text-black-900_01">Today is&nbsp;</span>
        <a href="#" className="text-red-A700 underline">
          #WorldDiabetesDay
        </a>
        <span className="text-red-A700">.</span>
        <span className="text-black-900_01">&nbsp;Did you know 1 in 10 adults worldwide have&nbsp;</span>
        <a href="#" className="text-red-A700 underline">
          #diabetes
        </a>
        <span className="text-red-A700">?</span>
        <span className="text-black-900_01">
          &nbsp;We are proud to support and enable efforts to diagnose and treat diabetes, and ultimately improve
          outcomes for patients around the world:
        </span>
        <span className="text-red-A700">&nbsp;</span>
        <a href="#" className="text-red-A700 underline">
          https://bit.ly/47dF2nH
        </a>
      </Text>
      <Img src={image} alt="image" className="mt-4 h-[452px] w-[452px] rounded object-cover" />
    </div>
  );
}
