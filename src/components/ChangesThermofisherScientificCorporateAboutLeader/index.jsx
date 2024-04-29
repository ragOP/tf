import React from "react";
import { Text, Heading, Img } from "./..";

export default function ChangesThermofisherScientificCorporateAboutLeader({
  userimage = "images/img_rectangle_19930.png",
  username = "Lisa P. Britt",
  userrole = "Senior Vice President & Chief Human Resources Officer",
  ...props
}) {
  return (
    <div {...props}>
      <div className="self-stretch">
        <Img src={userimage} alt="lisa_pbritt" className="h-[347px] w-full object-cover md:h-auto" />
        <div className="relative mt-[-38px] bg-teal-700 p-[15px]">
          <div className="flex flex-col items-start gap-1">
            <Heading size="xs" as="h6" className="!text-white-A700">
              {username}
            </Heading>
            <Text size="s" as="p" className="w-full leading-[22px] !text-white-A700">
              {userrole}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
