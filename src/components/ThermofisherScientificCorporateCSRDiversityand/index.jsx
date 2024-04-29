import React from "react";
import { Img, Text, Button } from "./..";

export default function ThermofisherScientificCorporateCSRDiversityand({
  ifyassociatetext,
  developingtext = "Developing scientific breakthroughs as part of the Graduate Leadership Development Program.",
  ourworkisastorytext,
  descriptiontext = "Our commitment to fostering a culture that values diversity and inclusion (D&I) considers gender and ethnicity diversity as well as diversity of backgrounds, experiences and viewpoints.",
  readmoretext = "Read full story",
  oneoffourtext,
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex w-full items-center justify-between gap-5 md:flex-col">
        <div className="flex w-[49%] justify-center gap-2 md:w-full sm:flex-col">
          <div className="relative h-[367px] flex-1 md:h-auto sm:w-full sm:flex-none sm:self-stretch">
            <Img
              src="images/img_shutterstock_413063374.png"
              alt="shutterstock"
              className="h-[367px] w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col items-start justify-end gap-[19px] bg-indigo-900_b2 p-6 sm:p-5">
              <Text as="p" className="ml-1.5 mt-[231px] !text-white-A700 md:ml-0">
                <span className="font-bold text-white-A700">Ify</span>
                <span className="text-white-A700">&nbsp;</span>
                <span className="font-light text-white-A700">| Associate, Graduate Leadership Development Program</span>
              </Text>
              <Text as="p" className="ml-1.5 w-full leading-6 !text-white-A700 md:ml-0">
                {developingtext}
              </Text>
            </div>
          </div>
          <div className="h-[367px] w-[24px] bg-indigo-900" />
          <div className="h-[367px] w-[16px] bg-indigo-900_cc" />
          <div className="h-[367px] w-[8px] bg-indigo-900_7f" />
        </div>
        <div className="flex w-[46%] flex-col items-start md:w-full">
          <Text size="6xl" as="p">
            <span className="text-gray-900">Our work is a&nbsp;</span>
            <span className="text-gray-900">&nbsp;</span>
            <span className="font-bold text-gray-900">story of purpose</span>
          </Text>
          <Text size="xl" as="p" className="mt-[23px] w-full leading-[30px]">
            {descriptiontext}
          </Text>
          <div className="mt-4 flex items-center gap-2 py-2">
            <Img src="images/img_thumbs_up.svg" alt="thumbsup" className="h-[18px]" />
            <Text as="p" className="self-start tracking-[0.64px] !text-gray-800">
              {readmoretext}
            </Text>
          </div>
          <div className="mt-[78px] flex gap-4">
            <div className="flex rotate-[180deg] items-start gap-4">
              <Button
                size="md"
                variant="outline"
                shape="circle"
                color="undefined_undefined"
                className="w-[42px] !rounded-[21px]"
              >
                <Img src="images/img_arrow_right_gray_400.svg" />
              </Button>
              <Text size="s" as="p" className="mt-2.5 rotate-[180deg] !text-gray-800">
                <span className="text-gray-800">1&nbsp;</span>
                <span className="text-gray_800_75">of 4</span>
              </Text>
            </div>
            <Img src="images/img_clock.svg" alt="clock" className="h-[42px] w-[42px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
