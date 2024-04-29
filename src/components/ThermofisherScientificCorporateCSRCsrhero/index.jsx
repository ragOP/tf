import React from "react";
import { Text, Img, Heading } from "./..";

export default function ThermofisherScientificCorporateCSRCsrhero({
  corporatetext = "Corporate Social Responsibility",
  togetherwearetext,
  descriptiontext,
  readmoretext = "Read more",
  operationstitle = "Operations",
  operationsdescription = "Leveraging our capabilities to support our customers while conducting our business and relationships with integrity",
  textone,
  textone1,
  texttwo,
  ...props
}) {
  return (
    <div {...props}>
      <div className="container-xs flex items-start justify-between gap-5 md:flex-col md:p-5">
        <div className="flex w-[46%] flex-col items-start gap-[34px] md:w-full">
          <Heading as="h6" className="uppercase tracking-[1.80px]">
            {corporatetext}
          </Heading>
          <Text size="7xl" as="p" className="w-full">
            <span className="text-gray-900">
              <>
                Together we are <br />
              </>
            </span>
            <span className="font-bold text-gray-900">building a brighter future</span>
          </Text>
        </div>
        <div className="mt-14 flex w-[46%] flex-col gap-[25px] md:w-full">
          <Text size="xl" as="p" className="leading-[30px] !text-gray-900_cc">
            <span className="text-gray-900_cc">
              As the world leader in serving science, we understand that we have a unique opportunity and responsibility
              to use our position&nbsp;
            </span>
            <span className="font-medium text-gray-900">
              to make a positive impact on society – not only by enabling our customers’ success, but also through our
              actions as a Company to make the world a better place.
            </span>
          </Text>
          <div className="flex items-start gap-2 py-[7px]">
            <Img src="images/img_thumbs_up.svg" alt="thumbsup" className="h-[18px]" />
            <a href="#">
              <Text as="p" className="tracking-[0.64px] !text-gray-800">
                {readmoretext}
              </Text>
            </a>
          </div>
        </div>
      </div>
      <div className="flex self-stretch md:flex-col">
        <div className="relative h-[500px] flex-1 md:h-auto md:w-full md:flex-none md:self-stretch">
          <Img src="images/img_rectangle_19941.png" alt="image" className="h-[500px] w-full object-cover" />
          <div className="absolute bottom-[0.00px] left-0 right-0 m-auto flex flex-col items-start gap-[21px] bg-gradient px-10 pt-10 sm:px-5 sm:pt-5">
            <Heading size="lg" as="h3" className="!text-white-A700_b2">
              {operationstitle}
            </Heading>
            <Text as="p" className="!font-normal !text-white-A700_19">
              {operationsdescription}
            </Text>
          </div>
        </div>
        <div className="relative h-[500px] flex-1 md:h-auto md:w-full md:flex-none md:self-stretch">
          <Img src="images/img_rectangle_19941_500x360.png" alt="image" className="h-[500px] w-full object-cover" />
          <Text className="absolute bottom-[0.00px] left-0 right-0 m-auto w-max">{textone}</Text>
        </div>
        <div className="flex w-[50%] md:w-full md:flex-col">
          <div className="relative h-[500px] w-full md:h-auto">
            <Img src="images/img_rectangle_19941_1.png" alt="image" className="h-[500px] w-full object-cover" />
            <Text className="absolute bottom-[0.00px] left-0 right-0 m-auto w-max">{textone1}</Text>
          </div>
          <div className="relative h-[500px] w-full md:h-auto">
            <Img src="images/img_rectangle_19941_2.png" alt="image" className="h-[500px] w-full object-cover" />
            <Text className="absolute bottom-[0.00px] left-0 right-0 m-auto w-max">{texttwo}</Text>
          </div>
        </div>
      </div>
    </div>
  );
}
