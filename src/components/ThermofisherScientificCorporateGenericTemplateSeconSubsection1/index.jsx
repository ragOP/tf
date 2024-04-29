import React from "react";
import { Text, Img, Heading } from "./..";

export default function ThermofisherScientificCorporateGenericTemplateSeconSubsection1({
  p3column = "3 Column Section Title",
  sampleimage = "Sample Image",
  date1 = "January 5th, 2023",
  description1 = "Whether they are improving life for patients, protecting our global climate or keeping people safe, our customers look to Thermo Fisher Scientific for innovative solutions.",
  readmore = "Read more",
  sampleimage1 = "Sample Image",
  date2 = "January 5th, 2023",
  description2 = "Whether they are improving life for patients, protecting our global climate or keeping people safe, our customers look to Thermo Fisher Scientific for innovative solutions.",
  readmore1 = "Read more",
  sampleimage2 = "Sample Image",
  date3 = "January 5th, 2023",
  description3 = "Whether they are improving life for patients, protecting our global climate or keeping people safe, our customers look to Thermo Fisher Scientific for innovative solutions.",
  readmore2 = "Read more",
  ...props
}) {
  return (
    <div {...props} className="container-xs">
      <Heading as="h6" className="uppercase tracking-[1.80px]">
        {p3column}
      </Heading>
      <div className="flex gap-[23px] self-stretch md:flex-col">
        {[...Array(3)].map((d, index) => (
          <div key={"listmonth" + index} className="flex w-full flex-col items-start gap-[18px]">
            <div className="relative h-[250px] self-stretch md:h-auto">
              <Img src="images/img_group_186.png" alt="sample_image" className="h-[250px] w-full object-cover" />
              <Text
                size="s"
                as="p"
                className="absolute left-[20.00px] top-[18.85px] m-auto tracking-[0.56px] !text-white-A700"
              >
                {sampleimage}
              </Text>
            </div>
            <Text size="xl" as="p" className="!text-gray-600">
              {date1}
            </Text>
            <Text size="xl" as="p" className="w-full !font-medium leading-7">
              {description1}
            </Text>
            <div className="flex items-start gap-2 py-[7px]">
              <Img src="images/img_thumbs_up.svg" alt="read_more" className="h-[18px]" />
              <a href="#">
                <Text as="p" className="tracking-[0.64px] !text-gray-800">
                  {readmore}
                </Text>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
