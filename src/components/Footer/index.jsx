import React from "react";
import { Text, Img, Heading } from "./..";

export default function Footer({ ...props }) {
  return (
    <footer {...props}>
      <div className="relative h-[465px] w-full md:h-auto">
        <div className="absolute left-[5%] top-[0.00px] z-[3] m-auto flex w-[48%] flex-col items-start gap-5">
          <Heading size="xs" as="h6" className="!text-gray-200">
            About Thermo Fisher Scientific
          </Heading>
          <div className="flex w-[92%] flex-col items-start gap-4 md:w-full">
            <Text as="p" className="w-full !font-normal leading-[25px] !text-blue_gray-100">
              Thermo Fisher Scientific Inc. (NYSE: TMO) is the world leader in serving science, with annual revenue over
              $40 billion. Our Mission is to enable our customers to make the world healthier, cleaner and safer.
              Whether our customers are accelerating life sciences research, solving complex analytical challenges,
              increasing productivity in their laboratories, improving patient health through diagnostics or the
              development and manufacture of life-changing therapies, we are here to support them. Our global team
              delivers an unrivaled combination of innovative technologies, purchasing convenience and pharmaceutical
              services through our industry-leading brands, including Thermo Scientific, Applied Biosystems, Invitrogen,
              Fisher Scientific, Unity Lab Services, Patheon and PPD.
            </Text>
            <Text as="p" className="flex !font-normal !text-blue_gray-100">
              <span className="text-blue_gray-100">For more information, please visit&nbsp;</span>
              <a href="#" className="text-blue_gray-100 underline">
                www.thermofisher.com
              </a>
            </Text>
          </div>
        </div>
        <div className="flex w-full flex-col items-center" >
          <div className="container-xs relative z-[2] pl-[1140px] md:p-5 md:pl-5">
            <div className="flex flex-col items-start gap-5">
              <Heading size="xs" as="h6" className="!text-gray-200">
                Connect
              </Heading>
              <div className="flex flex-col items-start gap-6 pt-2">
                <div className="flex gap-6">
                  <Img src="images/img_link.svg" alt="link" className="h-[24px] w-[24px]" />
                  <Img src="images/img_pajamas_twitter.svg" alt="pajamastwitter" className="h-[24px] w-[24px]" />
                </div>
                <div className="flex gap-6">
                  <div className="flex flex-col py-[3px]">
                    <Img src="images/img_warning.svg" alt="warning" className="h-[16px]" />
                  </div>
                  <div className="flex flex-col items-center px-1.5">
                    <Img src="images/img_facebook.svg" alt="facebook" className="h-[24px]" />
                  </div>
                </div>
                <Img src="images/img_info.svg" alt="info" className="h-[24px] w-[24px]" />
              </div>
            </div>
          </div>
          <div className="relative mt-[-168px] flex flex-col items-center self-stretch">
            <div className="container-xs flex flex-col items-end pl-14 pr-[156px] md:p-5 md:px-5">
              <div className="flex w-[33%] items-start justify-between gap-5 md:w-full sm:flex-col">
                <ul className="flex flex-col gap-3.5">
                  <li>
                    <a href="Company" target="_blank" rel="noreferrer">
                      <Heading size="xs" as="h6" className="!text-white-A700">
                        Company
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="Sustainability" target="_blank" rel="noreferrer">
                      <Heading size="xs" as="h6" className="!text-white-A700">
                        Sustainability
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="Investors" target="_blank" rel="noreferrer">
                      <Heading size="xs" as="h6" className="!text-white-A700">
                        Investors
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="Newsroom" target="_blank" rel="noreferrer">
                      <Heading size="xs" as="h6" className="!text-white-A700">
                        Newsroom
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="Careers" target="_blank" rel="noreferrer">
                      <Heading size="xs" as="h6" className="!text-white-A700">
                        Careers
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="About" target="_blank" rel="noreferrer">
                      <Heading size="xs" as="h6" className="!text-white-A700">
                        About
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Heading size="xs" as="h6" className="!text-white-A700">
                        Contact Us
                      </Heading>
                    </a>
                  </li>
                </ul>
                <ul className="flex flex-col items-start">
                  <li>
                    <a href="Brands" target="_blank" rel="noreferrer">
                      <Heading size="xs" as="h6" className="!text-white-A700">
                        Brands
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="mt-[13px]">
                      <Heading size="xs" as="h6" className="!text-white-A700">
                        Thermo Scientific
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="mt-[13px]">
                      <Heading size="xs" as="h6" className="!text-white-A700">
                        Applied Biosystems
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="Invitrogen" target="_blank" rel="noreferrer" className="mt-[13px]">
                      <Heading size="xs" as="h6" className="!text-white-A700">
                        Invitrogen
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="mt-[13px]">
                      <Heading size="xs" as="h6" className="!text-white-A700">
                        Fisher Scientific
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="mt-[13px]">
                      <Heading size="xs" as="h6" className="!text-white-A700">
                        Unity Labs Services
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="Patheon" target="_blank" rel="noreferrer" className="mt-[13px]">
                      <Heading size="xs" as="h6" className="!text-white-A700">
                        Patheon
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="PPD" target="_blank" rel="noreferrer" className="mt-[13px]">
                      <Heading size="xs" as="h6" className="!text-white-A700">
                        PPD
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="mt-[151px]">
                      <Text size="s" as="p" className="!text-gray-200">
                        Privacy Information Center
                      </Text>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative mt-[-85px] flex self-stretch border-t border-solid border-gray-500 bg-gray-800 p-8 sm:p-5">
              <div className="mx-auto flex w-full max-w-[883px] items-start md:flex-col">
                <Img src="images/img_footer_logo.svg" alt="footerlogo" className="h-[32px] w-[146px]" />
                <Text size="s" as="p" className="ml-[100px] mt-1.5 !text-gray-200 md:ml-0">
                  © Copyright 2006-2023 Thermo Fisher Scientific Inc. All rights reserved.
                </Text>
                <a href="#" className="ml-16 mt-[5px] md:ml-0">
                  <Text size="s" as="p" className="!text-gray-200">
                    Terms & Conditions
                  </Text>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
