import React from "react";
import { Text, Img } from "./..";

export default function ThermofisherScientificCorporateNewsroomColumnjanuary({
  image = "images/img_rectangle_19960.png",
  text = "January 5th, 2023",
  text1 = "Thermo Fisher Scientific Prices Offering of USD-Denominated Senior Notes",
  ...props
}) {
  return (
    <div {...props}>
      <Img src={image} alt="january_5th2023" className="h-[250px] w-full object-cover md:h-auto" />
      <Text size="xl" as="p" className="!text-gray-600">
        {text}
      </Text>
      <a
        href="https://newsroom.thermofisher.com/newsroom/press-releases/press-release-details/2023/Thermo-Fisher-Scientific-Prices-Offering-of-USD-Denominated-Senior-Notes-91581aa51/default.aspx"
        target="_blank"
        rel="noreferrer"
        className="w-full leading-7"
      >
        <Text size="xl" as="p" className="!font-medium">
          {text1}
        </Text>
      </a>
    </div>
  );
}
