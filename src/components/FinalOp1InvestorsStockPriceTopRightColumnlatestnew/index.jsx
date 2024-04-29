import React from "react";
import { Text, Img } from "./..";

export default function FinalOp1InvestorsStockPriceTopRightColumnlatestnew({
  title = "Latest News",
  description = "Thermo Fisher Scientific Authorizes $4 Billion of Share Repurchases",
  date = "January 11th, 2023",
  image = "images/img_rectangle_19958.png",
  readmore = "Read more",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col items-start gap-[17px] self-stretch">
        <div className="flex rounded-sm bg-orange-800 px-2 pb-2">
          <Text size="xl" as="p" className="!font-medium !text-white-A700">
            {title}
          </Text>
        </div>
        <Text size="4xl" as="p" className="w-full leading-10">
          {description}
        </Text>
        <Text size="xl" as="p" className="!text-gray-600">
          {date}
        </Text>
      </div>
      <Img src={image} alt="january" className="h-[300px] w-full object-cover md:h-auto" />
      <div className="flex items-start gap-2 py-[7px]">
        <Img src="images/img_thumbs_up.svg" alt="read_more" className="h-[18px]" />
        <a href="#">
          <Text as="p" className="tracking-[0.64px] !text-gray-800">
            {readmore}
          </Text>
        </a>
      </div>
    </div>
  );
}
