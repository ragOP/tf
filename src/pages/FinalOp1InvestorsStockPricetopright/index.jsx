import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Input, CheckBox, Heading, Button } from "../../components";
import FinalOp1InvestorsStockPriceTopRightColumnlatestnew from "../../components/FinalOp1InvestorsStockPriceTopRightColumnlatestnew";
import FinalOp1InvestorsStockPriceTopRightColumnreconcili from "../../components/FinalOp1InvestorsStockPriceTopRightColumnreconcili";
import FinalOp1InvestorsStockPriceTopRightTile from "../../components/FinalOp1InvestorsStockPriceTopRightTile";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Navigation from "components/Navigation";
const data = [
  {
    calendarimage: "images/img_calendar.svg",
    pressreleasetext:
      "2023 Third-Quarter Press Release & Supplemental Schedules",
  },
  {
    calendarimage: "images/img_ebene_1.svg",
    pressreleasetext: "2023 Third-Quarter Infographic & Earning Presentation",
  },
  { calendarimage: "images/img_document_1.svg", pressreleasetext: "Form 10 Q" },
  {
    calendarimage: "images/img_megaphone.svg",
    pressreleasetext: "2023 Third-Quarter Earning Transcript",
  },
  {
    calendarimage: "images/img_user.svg",
    pressreleasetext: "Q323 Other Financial Disclosures",
  },
];
const data1 = [
  {
    text: "Reconciliation and Financial Package",
    downloadbuttontext: "Download PDF",
  },
  { text: "Interactive Proxy Statement", downloadbuttontext: "Download PDF" },
  { text: "Latest 10-K", downloadbuttontext: "Download PDF" },
];
const data2 = [
  { webcastone: "images/img_close.svg", webcasttwo: "Webcast" },
  {
    webcastone: "images/img_close_black_900_01.svg",
    webcasttwo: "Presentation",
  },
  {
    webcastone: "images/img_close_black_900_01_32x32.svg",
    webcasttwo: "Press Release",
  },
];

export default function FinalOp1InvestorsStockPricetoprightPage() {
  return (
    <>
      <Navigation />
      <Helmet>
        <title>thermo-react-app</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="w-full bg-white-A700">
        {/* <Header /> */}
        <div className="mt-[37px] flex flex-col items-center">
          <div className="flex flex-col items-center self-stretch">
            <div className="container-xs relative z-[2] flex flex-col items-center md:p-5">
              <Heading as="h1" className="uppercase tracking-[1.80px]">
                INVESTORS
              </Heading>
            </div>
            <div className="relative mt-[-20px] flex flex-col items-center self-stretch">
              <div className="container-xs relative z-[1] flex flex-col items-end md:p-5">
                <div className="flex w-[12%] flex-col gap-[7px] md:w-full">
                  <div className="flex flex-wrap items-center gap-[7px] self-start">
                    <Text
                      size="s"
                      as="p"
                      className="self-end text-right !font-medium !text-teal-700"
                    >
                      NYSE : TMO
                    </Text>
                    <Text as="p" className="!font-normal">
                      $ 588.84
                    </Text>
                  </div>
                  <Text
                    size="xs"
                    as="p"
                    className="leading-5 !text-gray-700_cc"
                  >
                    <>
                      04/14/2023 | 04:00 pm <br />
                      (Pricing delayed by 15 mins)
                    </>
                  </Text>
                </div>
              </div>
              <div className="relative mt-[-31px] flex flex-col items-center gap-[81px] self-stretch md:gap-[60px] sm:gap-10">
                <div className="container-xs md:p-5">
                  <div className="flex flex-col gap-[26px]">
                    <Text size="8xl" as="p">
                      <span className="font-normal text-gray-900">
                        <>
                          Healthier, Cleaner and Safer.
                          <br />
                        </>
                      </span>
                      <span className="font-bold text-gray-900">
                        The world leader in serving science
                      </span>
                    </Text>
                    <div className="flex items-start gap-2 py-[7px]">
                      <Img
                        src="images/img_thumbs_up.svg"
                        alt="thumbsup"
                        className="h-[18px]"
                      />
                      <a href="#">
                        <Text
                          as="p"
                          className="tracking-[0.64px] !text-gray-800"
                        >
                          Read more
                        </Text>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="relative h-[384px] self-stretch md:h-auto">
                  <a href="#" className="mb-3 ml-[100px] md:ml-0">
                    <Text as="p" className="tracking-[0.64px] !text-red-A700">
                      READ MORE
                    </Text>
                  </a>
                  <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-[384px] w-full items-center justify-between gap-5 bg-[url(/public/images/img_group_83.png)] bg-cover bg-no-repeat md:relative md:h-auto md:flex-col">
                    <div className="flex h-[384px] w-[59%] items-center justify-center bg-[url(/public/images/img_vector.png)] bg-cover bg-no-repeat px-14 py-[100px] md:h-auto md:w-full md:p-5">
                      <Text
                        size="2xl"
                        as="p"
                        className="w-[81%] !font-normal leading-9 !text-white-A700"
                      >
                        <span className="text-white-A700">
                          Thermo Fisher Scientific Inc. is the world leader in
                          serving science, with annual revenue over&nbsp;
                        </span>
                        <span className="font-medium text-white-A700">
                          <>
                            $40 billion. <br />
                          </>
                        </span>
                        <span className="text-white-A700">
                          <>
                            <br />
                            Our Mission is to enable our customers to make the
                            world&nbsp;
                          </>
                        </span>
                        <span className="font-medium text-white-A700">
                          healthier, cleaner and safer.
                        </span>
                      </Text>
                    </div>
                    <Img
                      src="images/img_vector_red_a700.png"
                      alt="vector"
                      className="h-[384px] w-[7%] object-cover md:w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-[77px] flex w-full max-w-[1241px] flex-col items-start gap-[58px] md:p-5 sm:gap-[29px]">
            <Heading as="h2" className="uppercase tracking-[1.80px]">
              Corporate Overview
            </Heading>
            <div className="flex gap-[15px] self-stretch md:flex-col">
              <div className="flex w-[550px]">
                <div className="flex w-full flex-col items-start">
                  <Button
                    size="lg"
                    shape="round"
                    className="w-full !rounded-[3px] font-medium sm:px-5"
                  >
                    Leadership in fast-growing end markets
                  </Button>
                  <div className="mt-[33px] flex items-start gap-[34px] self-stretch sm:flex-col">
                    <div className="relative h-[310px] flex-1 md:h-auto sm:w-full sm:flex-none sm:self-stretch">
                      <Text
                        size="xl"
                        as="p"
                        className="!font-medium !text-gray-800"
                      >
                        End markets
                      </Text>
                      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[190px] w-full">
                        <CircularProgressbar
                          strokeWidth={8}
                          value={12}
                          styles={{
                            trail: { stroke: "#664fa3" },
                            path: {
                              strokeLinecap: "square",
                              transformOrigin: "center",
                              transform: "rotate(208deg)",
                            },
                          }}
                          className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[190px] w-[94%]"
                        />
                        <CircularProgressbar
                          strokeWidth={2}
                          value={12}
                          styles={{
                            trail: { stroke: "#b5bd0087" },
                            path: {
                              strokeLinecap: "square",
                              transformOrigin: "center",
                              transform: "rotate(208deg)",
                            },
                          }}
                          className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[190px] w-full"
                        />
                        <CircularProgressbar
                          strokeWidth={8}
                          value={12}
                          styles={{
                            trail: { stroke: "#664fa3" },
                            path: {
                              strokeLinecap: "square",
                              transformOrigin: "center",
                              transform: "rotate(255deg)",
                            },
                          }}
                          className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[190px] w-[94%]"
                        />
                        <CircularProgressbar
                          strokeWidth={2}
                          value={12}
                          styles={{
                            trail: { stroke: "#b5bd0087" },
                            path: {
                              strokeLinecap: "square",
                              transformOrigin: "center",
                              transform: "rotate(255deg)",
                            },
                          }}
                          className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[190px] w-full"
                        />
                        <CircularProgressbar
                          strokeWidth={8}
                          value={16}
                          styles={{
                            trail: { stroke: "#664fa3" },
                            path: { strokeLinecap: "square" },
                          }}
                          className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[190px] w-[94%]"
                        />
                        <CircularProgressbar
                          strokeWidth={2}
                          value={16}
                          styles={{
                            trail: { stroke: "#b5bd0087" },
                            path: { strokeLinecap: "square" },
                          }}
                          className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[190px] w-full"
                        />
                      </div>
                    </div>
                    <div className="flex w-[43%] flex-col gap-[26px] sm:w-full">
                      <div className="flex items-start gap-[11px]">
                        <div className="mt-1.5 h-[12px] w-[12px] rounded-md bg-orange-800" />
                        <Text
                          as="p"
                          className="w-[95%] !font-normal leading-6 !text-gray-800"
                        >
                          Enabling advanced materials to power the digital
                          economy and the clean energy transition
                        </Text>
                      </div>
                      <div className="flex items-center gap-[11px]">
                        <div className="h-[12px] w-[12px] self-end rounded-md bg-yellow-700" />
                        <Text as="p" className="!font-normal !text-gray-800">
                          Enabling precision medicine
                        </Text>
                      </div>
                      <div className="flex items-start gap-[11px]">
                        <div className="mt-1.5 h-[12px] w-[12px] rounded-md bg-lime-700" />
                        <Text
                          as="p"
                          className="w-[95%] !font-normal leading-6 !text-gray-800"
                        >
                          Powering the golden age on biology
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="mt-[23px] flex w-[79%] gap-4 md:w-full sm:flex-col">
                    <div className="flex w-[44%] items-center gap-[11px] self-start sm:w-full">
                      <div className="h-[12px] w-[12px] self-end bg-deep_purple-500" />
                      <Text as="p" className="!text-gray-800">
                        Pharma & Biotech 58%
                      </Text>
                    </div>
                    <div className="flex flex-1 items-center gap-[11px] self-end sm:self-stretch">
                      <div className="h-[12px] w-[12px] self-end bg-indigo-900" />
                      <Text as="p" className="!text-gray-800">
                        Diagnostics & Healthcare 15%
                      </Text>
                    </div>
                  </div>
                  <div className="mt-3 flex w-[81%] gap-4 md:w-full sm:flex-col">
                    <div className="flex flex-1 items-center gap-2.5 self-start sm:self-stretch">
                      <div className="h-[12px] w-[12px] self-end bg-teal-100" />
                      <Text as="p" className="!text-gray-800">
                        Academic & Government 14%
                      </Text>
                    </div>
                    <div className="flex w-[46%] items-center gap-[11px] self-end sm:w-full">
                      <div className="h-[12px] w-[12px] self-end bg-teal-700" />
                      <Text as="p" className="!text-gray-800">
                        Industrial & Applied 13%
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-[30%] flex-col items-center gap-[34px] md:w-full">
                <Button
                  size="lg"
                  shape="round"
                  className="w-full !rounded-[3px] font-medium sm:px-5"
                >
                  Very strong recurring revenue mix
                </Button>
                <div className="relative h-[290px] w-[87%] md:h-auto">
                  <div className="mb-[75px] flex w-[46%] flex-col items-center gap-4">
                    <Text
                      size="xl"
                      as="p"
                      className="!font-medium !text-gray-800"
                    >
                      Products
                    </Text>
                    <Text
                      size="2xl"
                      as="p"
                      className="w-full text-center leading-8"
                    >
                      <span className="text-gray-900">
                        <>
                          $43.4 billion
                          <br />
                        </>
                      </span>
                      <span className="text-base font-normal text-gray-900">
                        Revenue
                      </span>
                    </Text>
                  </div>
                  <CircularProgressbar
                    strokeWidth={8}
                    value={16}
                    styles={{
                      trail: { stroke: "#664fa3" },
                      path: { strokeLinecap: "square" },
                    }}
                    className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[148px] w-full"
                  />
                </div>
                <div className="mb-2.5 flex w-[20%] space-x-10 justify-center gap-3.5 md:mb-0 md:w-full mt-10">
                  <div className="flex w-[61%] items-center gap-[11px] md:w-full">
                    <div className="h-[12px] w-[12px] self-end bg-teal-700" />
                    <Text as="p" className="!text-gray-800">
                      Instruments 18%
                    </Text>
                  </div>
                  <div className="flex items-center gap-[11px]">
                    <div className="h-[12px] w-[12px] self-end bg-deep_purple-500" />
                    <Text as="p" className="!text-gray-800">
                      Services & Consumables 82%
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex w-[30%] flex-col gap-8 md:w-full">
                <div className="flex flex-col gap-[34px]">
                  <Button
                    size="lg"
                    shape="round"
                    className="w-full !rounded-[3px] font-medium sm:px-5"
                  >
                    Unparalleled commercial engine
                  </Button>
                  <div className="relative h-[150px] md:h-auto">
                    <Text
                      size="xl"
                      as="p"
                      className="!font-medium !text-gray-800"
                    >
                      Regions
                    </Text>
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[148px] w-full">
                      <CircularProgressbar
                        strokeWidth={8}
                        value={24}
                        styles={{
                          trail: { stroke: "#664fa3" },
                          path: {
                            strokeLinecap: "square",
                            transformOrigin: "center",
                            transform: "rotate(208deg)",
                          },
                        }}
                        className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[148px] w-full"
                      />
                      <CircularProgressbar
                        strokeWidth={8}
                        value={12}
                        styles={{
                          trail: { stroke: "#664fa3" },
                          path: { strokeLinecap: "square" },
                        }}
                        className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[148px] w-full"
                      />
                      <CircularProgressbar
                        strokeWidth={8}
                        value={3}
                        styles={{
                          trail: { stroke: "#664fa3" },
                          path: { strokeLinecap: "square" },
                        }}
                        className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[148px] w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[11px]">
                  <div className="flex gap-4">
                    <div className="flex flex-1 items-center gap-[11px]">
                      <div className="h-[12px] w-[12px] self-end bg-deep_purple-500" />
                      <Text as="p" className="!text-gray-800">
                        North America 54%
                      </Text>
                    </div>
                    <div className="flex w-[35%] items-center gap-[11px]">
                      <div className="h-[12px] w-[12px] self-end bg-teal-700" />
                      <Text as="p" className="!text-gray-800">
                        ROW 3%
                      </Text>
                    </div>
                  </div>
                  <div className="flex gap-[17px]">
                    <div className="flex w-[43%] items-center gap-[11px] self-end">
                      <div className="h-[12px] w-[12px] self-end bg-indigo-900" />
                      <Text as="p" className="!text-gray-800">
                        Europe 25%
                      </Text>
                    </div>
                    <div className="flex flex-1 items-center gap-2.5 self-start">
                      <div className="h-[12px] w-[12px] self-end bg-teal-100" />
                      <Text as="p" className="!text-gray-800">
                        Asia-Pacific 18%
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Text size="s" as="p" className="!text-gray-800_7f">
              NOTE : Revenue and percentage based on unaudited LTM through Q3
              2023
            </Text>
          </div>
          <div className="mt-[83px] flex flex-col items-center justify-center self-stretch bg-gray-900 py-[45px] md:py-5">
            <div className="container-xs flex flex-col items-start gap-[47px] md:p-5">
              <Heading
                as="h2"
                className="uppercase tracking-[1.80px] !text-lime-700"
              >
                Complementary Segments Revenue{" "}
              </Heading>
              <div className="flex w-[92%] gap-[141px] md:w-full md:flex-col">
                <div className="flex flex-col items-start">
                  <Text
                    size="6xl"
                    as="p"
                    className="!font-medium !text-white-A700"
                  >
                    <span className="text-3xl text-white-A700">$10.6</span>
                    <span className="text-white-A700">&nbsp;</span>
                    <span className="text-xl font-normal text-white-A700">
                      billion
                    </span>
                  </Text>
                  <Text as="p" className="!font-normal !text-teal-100">
                    Life Sciences Solutions
                  </Text>
                </div>
                <div className="h-[78px] w-px bg-teal-100_4c md:h-px md:w-[78px]" />
                <div className="flex flex-col items-start gap-[3px]">
                  <Text
                    size="6xl"
                    as="p"
                    className="!font-medium !text-white-A700"
                  >
                    <span className="text-3xl text-white-A700">$4.4</span>
                    <span className="text-white-A700">&nbsp;</span>
                    <span className="text-xl font-normal text-white-A700">
                      billion
                    </span>
                  </Text>
                  <Text as="p" className="!font-normal !text-teal-100">
                    Speciality Diagnostics
                  </Text>
                </div>
                <div className="flex items-start gap-6">
                  <div className="mt-3.5 h-[78px] w-px bg-teal-100_4c" />
                  <div className="flex flex-col items-start gap-[3px]">
                    <Text
                      size="6xl"
                      as="p"
                      className="!font-medium !text-white-A700"
                    >
                      <span className="text-3xl text-white-A700">$7.1</span>
                      <span className="text-white-A700">&nbsp;</span>
                      <span className="text-xl font-normal text-white-A700">
                        billion
                      </span>
                    </Text>
                    <Text as="p" className="!font-normal !text-teal-100">
                      Analytical Instruments
                    </Text>
                  </div>
                </div>
                <div className="flex w-[18%] items-center gap-[25px] md:w-full">
                  <div className="h-[78px] w-px self-end bg-teal-100_4c" />
                  <div className="flex flex-1 flex-col items-start gap-0.5">
                    <Text
                      size="6xl"
                      as="p"
                      className="!font-medium !text-white-A700"
                    >
                      <span className="text-3xl text-white-A700">$23.3</span>
                      <span className="text-white-A700">&nbsp;</span>
                      <span className="text-xl font-normal text-white-A700">
                        billion
                      </span>
                    </Text>
                    <Text
                      as="p"
                      className="w-full !font-normal leading-6 !text-teal-100"
                    >
                      <>
                        Laboratory Products and <br />
                        Biopharma Services
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-xs mt-[78px] flex flex-col items-start gap-11 md:p-5">
            <div className="flex w-[95%] flex-col items-start gap-12 md:w-full">
              <Heading as="h2" className="uppercase tracking-[1.80px]">
                QUARTERLY RESULTS
              </Heading>
              <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
                <Img
                  src="images/img_shutterstock_430939381.png"
                  alt="shutterstock"
                  className="h-[318px] w-[51%] object-cover md:w-full"
                />
                <div className="flex flex-col items-start gap-10">
                  <Text size="6xl" as="p">
                    <span className="font-medium text-gray-900">Q3 2023</span>
                    <span className="text-gray-900">&nbsp;</span>
                    <span className="text-gray-900">Results</span>
                  </Text>
                  <div className="flex flex-col items-start gap-[25px]">
                    <div className="flex items-center self-center bg-gray-100_01 pr-6 sm:flex-col sm:pr-5">
                      <div className="flex flex-col items-center bg-red-A700 p-2.5 sm:p-5">
                        <Img
                          src="images/img_pdf_svgrepo_com.svg"
                          alt="pdfsvgrepocom"
                          className="h-[32px] w-[32px]"
                        />
                      </div>
                      <Text as="p" className="ml-4 sm:ml-0">
                        <span className="text-gray-900">
                          Thermo Fisher Scientific :&nbsp;
                        </span>
                        <span className="font-normal text-gray-900">
                          First Quarter 2023 Results
                        </span>
                      </Text>
                      <Img
                        src="images/img_light_bulb_red_a700.svg"
                        alt="lightbulb"
                        className="ml-6 h-[15px] sm:ml-0 sm:w-full"
                      />
                    </div>
                    <div className="flex items-center gap-[18px]">
                      <Text as="p" className="!font-normal">
                        2023 Q2 Results
                      </Text>
                      <Img
                        src="images/img_arrow_right_red_a700.svg"
                        alt="arrowright"
                        className="h-[16px] self-end"
                      />
                    </div>
                    <div className="flex items-center gap-[18px]">
                      <Text as="p" className="!font-normal">
                        2023 Q1 Results
                      </Text>
                      <Img
                        src="images/img_arrow_right_red_a700.svg"
                        alt="arrowright"
                        className="h-[16px] self-end"
                      />
                    </div>
                  </div>
                  <div className="flex py-[7px] pr-[7px]">
                    <Text
                      as="p"
                      className="self-start tracking-[0.64px] !text-red-A700"
                    >
                      VIEW ALL QUARTERLY RESULTS
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-1 self-stretch md:flex-col">
              {data.map((d, index) => (
                <FinalOp1InvestorsStockPriceTopRightTile
                  {...d}
                  key={"list2023Third" + index}
                  className="flex w-full flex-col gap-4 bg-gray-100_01 p-4"
                />
              ))}
            </div>
            <div className="flex items-start justify-center gap-10 self-stretch bg-indigo-900 p-4 md:flex-col">
              <Text size="xl" as="p" className="mt-5 !font-medium">
                <span className="text-white-A700">2023</span>
                <span className="text-gray-900">&nbsp;</span>
                <span className="font-normal text-white-A700">
                  Investor Day Materials
                </span>
              </Text>
              <div className="flex flex-1 gap-1 md:flex-col md:self-stretch">
                {data2.map((d, index) => (
                  <div
                    key={"listwebcastone" + index}
                    className="flex w-full items-start gap-2.5 rounded bg-deep_purple-500 p-[18px]"
                  >
                    <Img
                      src={d.webcastone}
                      alt="webcast"
                      className="ml-1.5 h-[32px] w-[32px]"
                    />
                    <Text as="p" className="!text-white-A700">
                      {d.webcasttwo}
                    </Text>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="container-xs mt-[116px] md:p-5">
            <div className="flex flex-col items-start gap-[42px]">
              <Heading as="h2" className="uppercase tracking-[1.80px]">
                ANNUAL REPORTS
              </Heading>
              <div className="flex w-[30%] flex-wrap justify-between gap-5 md:w-full">
                <Text as="p" className="!text-red-A700">
                  2022
                </Text>
                <Text as="p" className="!text-black-900_01">
                  2021
                </Text>
                <Text as="p" className="!text-black-900_01">
                  2020
                </Text>
                <Text as="p" className="!text-black-900_01">
                  2019
                </Text>
                <Text as="p" className="!text-black-900_01">
                  2018
                </Text>
              </div>
              <div className="flex items-start justify-between gap-5 self-stretch md:flex-col">
                <Img
                  src="images/img_2022_csr_report_draft_2023_05.png"
                  alt="2022csrreport"
                  className="h-[458px] w-[55%] object-cover md:w-full"
                />
                <div className="flex flex-col items-start">
                  <Heading size="xl" as="h3" className="!text-gray-900">
                    2022 Annual Results
                  </Heading>
                  <div className="mt-[34px] flex flex-col items-start gap-6">
                    <div className="flex items-start gap-4">
                      <Text as="p">2022 Annual Report</Text>
                      <Img
                        src="images/img_arrow_right_red_a700.svg"
                        alt="arrowright"
                        className="h-[16px]"
                      />
                    </div>
                    <div className="flex items-start gap-4">
                      <Text as="p">Interactive Annual Report</Text>
                      <Img
                        src="images/img_arrow_right_red_a700.svg"
                        alt="arrowright"
                        className="h-[16px]"
                      />
                    </div>
                    <div className="flex items-start gap-4">
                      <Text as="p">2023 Proxy Statement</Text>
                      <Img
                        src="images/img_arrow_right_red_a700.svg"
                        alt="arrowright"
                        className="h-[16px]"
                      />
                    </div>
                    <div className="flex items-start gap-4">
                      <Text as="p">Interactive Proxy Statement</Text>
                      <Img
                        src="images/img_arrow_right_red_a700.svg"
                        alt="arrowright"
                        className="h-[16px]"
                      />
                    </div>
                  </div>
                  <div className="mt-16 flex py-[7px] pr-[7px]">
                    <Text
                      as="p"
                      className="self-start tracking-[0.64px] !text-red-A700"
                    >
                      DOWNLOAD ALL REPORTS
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 flex justify-center self-stretch bg-gray-100_01 py-[38px] sm:py-5">
            <div className="container-xs flex justify-center md:p-5">
              <div className="flex w-full flex-col items-start gap-[49px]">
                <Heading as="h2" className="uppercase tracking-[1.80px]">
                  NEWS
                </Heading>
                <div className="flex gap-[100px] self-stretch md:flex-col">
                  {[...Array(2)].map((d, index) => (
                    <FinalOp1InvestorsStockPriceTopRightColumnlatestnew
                      title="Latest News"
                      description="Thermo Fisher Scientific Authorizes $4 Billion of Share Repurchases"
                      date="January 11th, 2023"
                      image="images/img_rectangle_19958.png"
                      readmore="Read more"
                      key={"listlatestnews" + index}
                      className="flex w-full flex-col gap-[18px]"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="container-xs mt-[93px] flex flex-col gap-[69px] md:p-5 sm:gap-[34px]">
            <div className="flex flex-col items-center">
              <Heading as="h2" className="uppercase tracking-[1.80px]">
                INVESTOR RELATIONS KIT
              </Heading>
            </div>
            <div className="flex gap-[52px] md:flex-col">
              {data1.map((d, index) => (
                <FinalOp1InvestorsStockPriceTopRightColumnreconcili
                  {...d}
                  key={"listreconciliat" + index}
                  className="flex w-full flex-col items-center gap-6 border border-solid border-blue_gray-100 p-8 sm:p-5"
                />
              ))}
            </div>
          </div>
          <div className="container-xs mt-[79px] flex flex-col items-start gap-[29px] md:p-5">
            <Text size="2xl" as="p" className="!font-normal">
              Investor Contacts
            </Text>
            <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
              <div className="flex w-[26%] flex-col items-start gap-[21px] md:w-full">
                <Text size="xl" as="p" className="!font-medium">
                  Contact Information
                </Text>
                <Text as="p" className="w-full !font-normal leading-6">
                  <span className="text-gray-900">Rafael Tejada</span>
                  <span className="text-gray-900">&nbsp;</span>
                  <span className="text-gray-900">
                    <>
                      Vice President, <br />
                      Investor Relations
                    </>
                  </span>
                  <span className="text-gray-900">&nbsp;</span>
                  <span className="text-gray-900">
                    <>
                      Thermo Fisher Scientific
                      <br />
                      168 Third Avenue
                    </>
                  </span>
                  <span className="text-gray-900">&nbsp;</span>
                  <span className="text-gray-900">
                    <>
                      Waltham, <br />
                      MA USA 02451
                      <br />
                      <br />
                      Phone:&nbsp;
                    </>
                  </span>
                  <span className="text-red-A700">
                    <>
                      781.622.1111
                      <br />
                    </>
                  </span>
                  <span className="text-gray-900">E-mail:</span>
                  <span className="text-red-A700">&nbsp;</span>
                  <span className="text-red-A700">
                    investorrelations@thermofisher.com
                  </span>
                </Text>
              </div>
              <div className="flex w-[26%] flex-col items-start gap-[19px] md:w-full">
                <Text size="xl" as="p" className="!font-medium">
                  Transfer Agent
                </Text>
                <Text as="p" className="w-full !font-normal leading-6">
                  <span className="text-gray-900">
                    <>
                      American Stock Transfer Share holder Inquiries Operations{" "}
                      <br />
                      Center 620115th <br />
                      Avenue Brooklyn, NY 11219
                      <br />
                      <br />
                      Phone:&nbsp;
                    </>
                  </span>
                  <span className="text-red-A700">
                    <>
                      800.937.5449
                      <br />
                    </>
                  </span>
                  <span className="text-gray-900">
                    Corporate Website:&nbsp;
                  </span>
                  <a href="#" className="text-red-A700 underline">
                    http://www.amstock.com
                  </a>
                </Text>
              </div>
              <div className="flex w-[26%] flex-col items-start gap-[21px] self-start md:w-full">
                <Text size="xl" as="p" className="!font-medium">
                  Accounts
                </Text>
                <Text as="p" className="w-full !font-normal leading-6">
                  <>
                    Pricewater house Coopers LLP <br />
                    125 High Street <br />
                    Boston, MA 02110
                  </>
                </Text>
              </div>
            </div>
          </div>
          <div className="mt-20 flex justify-center self-stretch bg-gray-100_01 py-6 sm:py-5">
            <div className="container-xs flex items-center justify-between gap-5 md:flex-col md:p-5">
              <div className="flex w-[50%] flex-col items-start md:w-full">
                <div className="flex flex-col items-start gap-[15px]">
                  <Text size="2xl" as="p" className="!font-normal">
                    Investor Alerts
                  </Text>
                  <Text as="p" className="mb-[35px] !font-normal">
                    Get updates on the latest investor events, reports, news and
                    more from our IR team.
                  </Text>
                </div>
                <div className="flex w-[72%] gap-4 md:w-full sm:flex-col">
                  <div className="flex w-[45%] gap-4 sm:w-full">
                    <CheckBox
                      name="all"
                      label="All"
                      id="all"
                      className="pb-1.5 pt-px text-left text-sm text-gray-900"
                    />
                    <CheckBox
                      name="pressreleases"
                      label="Press Releases"
                      id="pressreleases"
                      className="flex-1 gap-2 pb-1.5 pt-px text-left text-sm text-gray-900"
                    />
                  </div>
                  <CheckBox
                    name="presentations"
                    label="Presentations"
                    id="presentations"
                    className="flex-1 gap-2 pb-1.5 pt-px text-left text-sm text-gray-900 sm:self-stretch"
                  />
                  <CheckBox
                    name="secfilings"
                    label="SEC Filings"
                    id="secfilings"
                    className="flex-1 gap-2 py-[3px] text-left text-sm text-gray-900 sm:self-stretch"
                  />
                </div>
                <div className="h-[25px] w-[26%] bg-gray-100_01" />
                <div className="flex w-[77%] items-start gap-4 md:w-full sm:flex-col">
                  <Text size="s" as="p" className="mt-[13px] !font-medium">
                    Email ID
                  </Text>
                  <Input
                    shape="round"
                    type="email"
                    name="email"
                    placeholder={`primary_investor@vc.com`}
                    className="flex-grow sm:pr-5"
                  />
                </div>
              </div>
              <div className="flex w-[26%] justify-center md:w-full">
                <Img
                  src="images/img_thumbs_up.svg"
                  alt="thumbsup"
                  className="h-[78px] w-[12%]"
                />
                <div className="relative ml-[-1px] flex flex-1 justify-center bg-red-A700 p-[17px]">
                  <div className="flex self-end p-[7px]">
                    <Text
                      as="p"
                      className="self-start tracking-[0.64px] !text-white-A700"
                    >
                      SUBSCRIBE
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="mt-[156px] bg-gray-800" />
      </div>
    </>
  );
}
