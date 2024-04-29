import React from "react";
import { Text, Img, Heading } from "./..";

export default function ThermofisherScientificCorporateCSREnvironment({
  environmenttext = "ENVIRONMENT",
  ourcommitmenttext = "Our commitment to the environment is deeply rooted in our Mission.",
  descriptiontext = (
    <>
      By championing a healthy planet that sustains human health and natural resources, we can build a brighter future
      for generations to come. <br />
      <br />
      Through our culture of continuous improvement, we manage risks, minimize adverse impacts and unlock opportunities
      through collaborations that help our customers achieve their environmental sustainability goals.
    </>
  ),
  readmoretext = "READ MORE",
  innovationtext = (
    <>
      We recognize the urgency of addressing our changing climate and understand the power of innovation to create a
      better world. <br />
      We innovate to provide our customers with the solutions to develop greener technologies, ensure safe air and water
      quality, and advance climate research.
    </>
  ),
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex justify-center self-stretch bg-gray-100_01 py-[57px] md:py-5">
        <div className="container-xs flex flex-col items-start gap-[50px] md:p-5">
          <Heading as="h6" className="uppercase tracking-[1.80px]">
            {environmenttext}
          </Heading>
          <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
            <Img
              src="images/img_shutterstock_2046698978.png"
              alt="shutterstock"
              className="h-[497px] w-[46%] object-cover md:w-full"
            />
            <div className="flex w-[46%] flex-col items-start gap-[35px] pb-[11px] md:w-full">
              <Text size="6xl" as="p" className="w-full !font-medium leading-[46px]">
                {ourcommitmenttext}
              </Text>
              <Text size="xl" as="p" className="w-full leading-[30px]">
                {descriptiontext}
              </Text>
              <a href="#">
                <Text as="p" className="tracking-[0.64px] !text-red-A700">
                  {readmoretext}
                </Text>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xs flex justify-center bg-gray-100_01 p-8 md:p-5">
        <Text size="xl" as="p" className="w-full leading-[30px]">
          {innovationtext}
        </Text>
      </div>
    </div>
  );
}
