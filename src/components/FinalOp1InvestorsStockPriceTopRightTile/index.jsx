import React from "react";
import { Img, Text } from "./..";

export default function FinalOp1InvestorsStockPriceTopRightTile({
  calendarimage = "images/img_calendar.svg",
  pressreleasetext = "2023 Third-Quarter Press Release & Supplemental Schedules",
  ...props
}) {
  return (
    <div {...props}>
      <Img src={calendarimage} alt="image" className="h-[40px] w-[40px]" />
      <Text as="p" className="w-full !font-normal leading-6">
        {pressreleasetext}
      </Text>
      <Img src="images/img_arrow_right_red_a700.svg" alt="image" className="h-[16px]" />
    </div>
  );
}
