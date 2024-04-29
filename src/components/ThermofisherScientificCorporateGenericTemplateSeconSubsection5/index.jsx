import React from "react";
import { Text, Img, Heading } from "./..";

export default function ThermofisherScientificCorporateGenericTemplateSeconSubsection5({
  sectiontitle = "Section Title",
  description = "Whether they are improving life for patients, protecting our global climate or keeping people safe, our customers look to Thermo Fisher Scientific for innovative solutions.",
  month = "January 11th, 2023",
  readmore = "Read more",
  description1 = "Whether they are improving life for patients, protecting our global climate or keeping people safe, our customers look to Thermo Fisher Scientific for innovative solutions.",
  month1 = "January 11th, 2023",
  readmore1 = "Read more",
  ...props
}) {
  return (
    <div {...props} className="container-xs">
      <Heading as="h6" className="uppercase tracking-[1.80px]">
        {sectiontitle}
      </Heading>
      <div className="flex gap-[100px] self-stretch md:flex-col">
        {[...Array(2)].map((d, index) => (
          <div key={"listdescription" + index} className="flex w-full flex-col items-start gap-[18px]">
            <Text size="4xl" as="p" className="w-full leading-10">
              {description}
            </Text>
            <Text size="xl" as="p" className="!text-gray-100_01">
              {month}
            </Text>
            <Img src="images/img_group_186.png" alt="image" className="h-[300px] w-full object-cover md:h-auto" />
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
