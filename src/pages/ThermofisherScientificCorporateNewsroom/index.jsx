import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Input, Heading, Slider, Button } from "../../components";
import Footer from "../../components/Footer";
import ThermofisherScientificCorporateNewsroomColumnjanuary from "../../components/ThermofisherScientificCorporateNewsroomColumnjanuary";
import ThermofisherScientificCorporateNewsroomColumnsettings from "../../components/ThermofisherScientificCorporateNewsroomColumnsettings";
import ThermofisherScientificCorporateNewsroomRow from "../../components/ThermofisherScientificCorporateNewsroomRow";

const data = [
  {
    image: "images/img_rectangle_19960.png",
    text: "January 5th, 2023",
    text1: "Thermo Fisher Scientific Prices Offering of USD-Denominated Senior Notes",
  },
  {
    image: "images/img_rectangle_19960_250x398.png",
    text: "January 5th, 2023",
    text1:
      "Thermo Fisher Scientific & Flagship Pioneering Expand Ongoing Strategic Partnership to Jointly Create New Platform Companies with First-in-Class Enabling Technologies for Life Sciences",
  },
  {
    image: "images/img_rectangle_19958_300x570.png",
    text: "January 5th, 2023",
    text1: "Thermo Fisher Scientific Authorizes $4 Billion of Share Repurchases",
  },
];
const data1 = [
  {
    ninetyone: "91%",
    description:
      "of scientist agree that Life Sciences companies should prioritize people and humanity over the products and services they provide.",
  },
  {
    ninetyone: "76%",
    description:
      "of scientists believe they will live to see a complete cure to most types of cancers during their lifetime.",
  },
  {
    ninetyone: "92%",
    description: "of scientists say implementation of environmentally responsible R&D can be achieved by 2050.",
  },
];
const data2 = [
  {
    eightyeight: "88%",
    believethat:
      "believe that artificial intelligence computing will have completely transformed the operation of labs.",
  },
  {
    eightyeight: "74%",
    believethat: "say that fewer human workers will be needed in labs because of productivity gains tied to robotics.",
  },
  {
    eightyeight: "74%",
    believethat: "agree that by 2030, virtual labs will rival traditional ones in terms of numbers and output.",
  },
  {
    eightyeight: "64%",
    believethat: "say the labs of 2030 will be unrecognizable compared to right before the pandemic.",
  },
];
const data3 = [{ trashone: "images/img_trash.svg" }, { trashone: "images/img_warning_teal_700.svg" }];

export default function ThermofisherScientificCorporateNewsroomPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);
  const [sliderState1, setSliderState1] = React.useState(0);
  const sliderRef1 = React.useRef(null);

  return (
    <>
      <Helmet>
        <title>thermo-react-app</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700_87 opacity-0.5">
        <header>
          <div className="flex items-center justify-between gap-5 bg-white-A700 px-4 md:flex-col">
            <Img src="images/img_header_logo.svg" alt="headerlogo" className="h-[28px] w-[128px]" />
            <div className="flex items-center md:flex-col">
              <ul className="flex flex-wrap gap-[39px]">
                <li>
                  <a href="#" className="flex items-center justify-center bg-white-A700">
                    <Text />
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-center bg-white-A700">
                    <Text />
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-center bg-white-A700">
                    <Text />
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-center bg-white-A700">
                    <Text />
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-center bg-white-A700">
                    <Text />
                  </a>
                </li>
              </ul>
              <a href="#">
                <Img
                  src="images/img_search.svg"
                  alt="search"
                  className="ml-[50px] h-[16px] w-[16px] md:ml-0 md:w-full"
                />
              </a>
              <Button shape="round" className="ml-[35px] min-w-[157px] text-white-A700 md:ml-0 sm:pr-5">
                Thermofisher.com
              </Button>
            </div>
          </div>
        </header>
        <div className="mt-[37px] flex flex-col items-center gap-[79px] md:gap-[59px] sm:gap-[39px]">
          <div className="flex flex-col items-center gap-5 self-stretch">
            <div className="container-xs flex flex-col items-center md:p-5">
              <Heading as="h1" className="uppercase tracking-[1.80px]">
                NEWSROOM
              </Heading>
            </div>
            <div className="flex flex-col items-center gap-[61px] self-stretch sm:gap-[30px]">
              <div className="container-xs flex pb-[11px] md:p-5">
                <div className="flex w-full flex-col items-start gap-4">
                  <div className="flex items-start justify-between gap-5 self-stretch md:flex-col">
                    <Text size="8xl" as="p" className="w-[48%] md:w-full">
                      <span className="font-bold text-gray-900">
                        <>
                          Advance health equity <br />
                        </>
                      </span>
                      <span className="font-normal text-gray-900">
                        <>
                          among HIV positive youth <br />
                          in Sub-Saharan Africa
                        </>
                      </span>
                    </Text>
                    <Heading size="md" as="h2" className="w-[44%] leading-7 !text-gray-900 md:w-full">
                      <>
                        Thermo Fisher Scientific and Project HOPE Partner to Advance Health Equity Among HIV Positive
                        Youth in Sub-Saharan Africa.
                        <br />
                        <br />
                        Collaboration designed to improve health outcomes by enabling expanded access to HIV testing and
                        support services in Nigeria
                      </>
                    </Heading>
                  </div>
                  <a href="#">
                    <Text as="p" className="tracking-[0.64px] !text-red-A700">
                      READ MORE
                    </Text>
                  </a>
                </div>
              </div>
              <div className="flex h-[461px] items-center justify-between gap-5 self-stretch bg-[url(/public/images/img_group_90.png)] bg-cover bg-no-repeat md:h-auto md:flex-col">
                <div className="flex h-[461px] w-[35%] items-start bg-[url(/public/images/img_group_42.svg)] bg-cover bg-no-repeat py-20 pl-20 pr-14 md:h-auto md:w-full md:p-5">
                  <div className="mb-[295px] ml-5 flex h-[6px] w-[66px] md:ml-0" />
                </div>
                <Img
                  src="images/img_vector_red_a700.png"
                  alt="vector"
                  className="h-[461px] w-[20%] object-cover md:w-full"
                />
              </div>
            </div>
          </div>
          <div className="container-xs flex flex-col items-start gap-[45px] md:p-5">
            <Heading as="h2" className="uppercase tracking-[1.80px]">
              Latest Podcasts
            </Heading>
            <div className="flex gap-10 self-stretch md:flex-col">
              {[...Array(2)].map((d, index) => (
                <ThermofisherScientificCorporateNewsroomRow
                  deliveringontext="Delivering on the promise of cell therapies: Programmed immune cells attack cancer and other..."
                  watchsciencetext="Watch Science with a Twist | Season 2 : Episode 10"
                  key={"listdeliveringo" + index}
                  className="flex w-full items-center bg-gray-100_01 pr-6 sm:pr-5"
                />
              ))}
            </div>
            <div className="flex flex-col items-start justify-center py-[7px]">
              <Text as="p" className="tracking-[0.64px] !text-gray-800">
                VIEW ALL PODCASTS
              </Text>
              <Img src="images/img_thumbs_up.svg" alt="thumbsup" className="relative mt-[-16px] h-[18px]" />
            </div>
          </div>
          <div className="container-xs flex flex-col items-start gap-[49px] md:p-5">
            <Heading as="h2" className="uppercase tracking-[1.80px]">
              Press Releases
            </Heading>
            <div className="flex gap-[23px] self-stretch md:flex-col">
              {data.map((d, index) => (
                <ThermofisherScientificCorporateNewsroomColumnjanuary
                  {...d}
                  key={"listjanuary" + index}
                  className="flex w-full flex-col items-start gap-[19px]"
                />
              ))}
            </div>
            <div className="flex flex-col items-start justify-center py-[7px]">
              <Text as="p" className="tracking-[0.64px] !text-gray-800">
                VIEW ALL PRESS RELEASES
              </Text>
              <Img src="images/img_thumbs_up.svg" alt="thumbsup" className="relative mt-[-16px] h-[18px]" />
            </div>
          </div>
          <div className="flex flex-col items-center self-stretch rounded-sm bg-gray-200_7f p-[41px] md:p-5">
            <div className="mt-1 flex w-[91%] flex-col gap-[42px] md:w-full">
              <div className="container-xs flex flex-col items-center md:p-5">
                <Heading as="h2" className="uppercase tracking-[1.80px]">
                  SOCIAL MEDIA
                </Heading>
              </div>
              <div className="container-xs flex md:p-5">
                <div className="flex w-full flex-col gap-10">
                  <div className="flex gap-5 md:flex-col">
                    {[...Array(2)].map((d, index) => (
                      <ThermofisherScientificCorporateNewsroomColumnsettings
                        thermofisher="Thermo Fisher"
                        thermofishertext="@thermofisher"
                        novcountertext=".Nov 14"
                        image="images/img_f_6o1rzw0ae3t6t.png"
                        key={"listsettings" + index}
                        className="flex w-full flex-col items-end rounded-lg bg-white-A700 p-10 sm:p-5"
                      />
                    ))}
                  </div>
                  <div className="flex items-start justify-between gap-5 sm:flex-col">
                    <div className="flex flex-col items-start justify-center py-[7px]">
                      <Text as="p" className="tracking-[0.64px] !text-gray-800">
                        VIEW POSTS ON X
                      </Text>
                      <Img src="images/img_thumbs_up.svg" alt="thumbsup" className="relative mt-[-16px] h-[18px]" />
                    </div>
                    <div className="mt-[7px] flex w-[22%] items-center justify-between gap-5 sm:w-full">
                      <Text as="p" className="!text-gray-800_7f">
                        Follow us on
                      </Text>
                      <div className="flex w-[54%] justify-center gap-4 self-end">
                        <Img src="images/img_link_teal_700.svg" alt="link" className="h-[16px] w-[16px]" />
                        <div className="flex flex-1 gap-4 md:flex-row">
                          {data3.map((d, index) => (
                            <div key={"listtrashone" + index} className="flex flex-col py-px">
                              <Img src={d.trashone} alt="trash" className="h-[12px]" />
                            </div>
                          ))}
                        </div>
                        <div className="flex flex-col items-center px-1">
                          <Img src="images/img_facebook_teal_700.svg" alt="facebook" className="h-[16px]" />
                        </div>
                        <Img src="images/img_info_teal_700.svg" alt="info" className="h-[16px] w-[16px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-xs relative h-[981px] md:h-auto md:p-5">
            <div className="flex w-full items-center justify-center md:flex-col">
              <div className="flex w-[25%] flex-col items-start md:w-full">
                <Heading as="h2" className="uppercase tracking-[1.80px]">
                  MEDIA GALLERY
                </Heading>
                <Img
                  src="images/img_rectangle_19964.png"
                  alt="image"
                  className="mt-[50px] h-[520px] w-full object-cover md:h-auto"
                />
                <div className="mt-[350px] flex flex-col items-start justify-center py-[7px]">
                  <Text as="p" className="tracking-[0.64px] !text-gray-800">
                    VIEW ALL MEDIA
                  </Text>
                  <Img src="images/img_thumbs_up.svg" alt="thumbsup" className="relative mt-[-16px] h-[18px]" />
                </div>
              </div>
              <Img
                src="images/img_rectangle_19968.png"
                alt="image"
                className="relative mb-[87px] ml-[-411px] h-[300px] w-full self-end object-cover md:ml-0"
              />
            </div>
            <div className="absolute right-[-0.08px] top-[7%] m-auto flex w-[67%] justify-end md:relative md:flex-col">
              <div className="w-[50%] md:w-full">
                <Img
                  src="images/img_rectangle_19965.png"
                  alt="image"
                  className="h-[259px] w-full object-cover md:h-auto"
                />
                <Img
                  src="images/img_rectangle_19966.png"
                  alt="image"
                  className="h-[259px] w-full object-cover md:h-auto"
                />
              </div>
              <Img
                src="images/img_rectangle_19967.png"
                alt="image"
                className="h-[520px] w-[50%] object-cover md:w-full"
              />
            </div>
          </div>
          <div className="container-xs flex flex-col gap-[33px] md:p-5">
            <div className="flex flex-col items-start gap-[50px]">
              <Heading as="h2" className="uppercase tracking-[1.80px]">
                STORIES
              </Heading>
              <div className="flex w-full flex-col self-stretch">
                <Slider
                  autoPlay
                  autoPlayInterval={2000}
                  responsive={{ 0: { items: 1 }, 550: { items: 1 }, 1050: { items: 3 } }}
                  disableDotsControls
                  activeIndex={sliderState1}
                  onSlideChanged={(e) => {
                    setSliderState1(e?.item);
                  }}
                  ref={sliderRef1}
                  items={[...Array(9)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <div className="mx-2.5 flex w-full flex-col items-start gap-[17px] md:mx-0">
                        <Img
                          src="images/img_rectangle_19960_1.png"
                          alt="image"
                          className="h-[250px] w-full object-cover md:h-auto"
                        />
                        <Text size="2xl" as="p">
                          Life undiscovered
                        </Text>
                        <Text size="xl" as="p" className="w-full leading-[30px] !text-gray-700_01">
                          For geomicrobiologist Dr. Brandi Kiel Reese, going a step beyond means making connections
                          between tiny microbes and huge advances in science.
                        </Text>
                        <div className="flex flex-col items-start justify-center py-[7px]">
                          <a href="#">
                            <Text as="p" className="tracking-[0.64px] !text-gray-800">
                              READ MORE
                            </Text>
                          </a>
                          <Img src="images/img_thumbs_up.svg" alt="thumbsup" className="relative mt-[-16px] h-[18px]" />
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-center py-[7px]">
              <Text as="p" className="tracking-[0.64px] !text-gray-800">
                VIEW ALL STORIES
              </Text>
              <Img src="images/img_thumbs_up.svg" alt="thumbsup" className="relative mt-[-16px] h-[18px]" />
            </div>
          </div>
          <div className="container-xs flex flex-col gap-[33px] md:p-5">
            <div>
              <div className="flex flex-col gap-[49px]">
                <div className="flex items-center justify-between gap-5">
                  <Heading as="h2" className="uppercase tracking-[1.80px]">
                    In The News
                  </Heading>
                </div>
                <div className="flex w-full gap-[23px] md:flex-col">
                  <Slider
                    autoPlay
                    autoPlayInterval={2000}
                    responsive={{ 0: { items: 1 }, 550: { items: 1 }, 1050: { items: 3 } }}
                    renderDotsItem={(props) => {
                      return props?.isActive ? (
                        <div className="mr-1 h-[6px] w-[24px] bg-red-A700" />
                      ) : (
                        <div className="mr-1 h-[6px] w-[6px] bg-gray_600_75" />
                      );
                    }}
                    activeIndex={sliderState}
                    onSlideChanged={(e) => {
                      setSliderState(e?.item);
                    }}
                    ref={sliderRef}
                    items={[...Array(9)].map(() => (
                      <React.Fragment key={Math.random()}>
                        <div className="mx-2.5 flex w-full flex-col items-start gap-4 md:mx-0">
                          <Text
                            as="p"
                            className="flex items-center justify-center rounded-sm bg-orange-800 px-3 pb-[7px] pt-px !text-white-A700"
                          >
                            The Washington Post
                          </Text>
                          <Img
                            src="images/img_rectangle_19960_4.png"
                            alt="image"
                            className="h-[250px] w-full object-cover md:h-auto"
                          />
                          <div className="flex flex-col items-start gap-5 self-stretch">
                            <Text size="xl" as="p" className="!text-gray-600">
                              January 5th, 2021
                            </Text>
                            <Text size="xl" as="p" className="w-full !font-medium leading-7">
                              Shanya Gill, 12, invented early detection device for fire
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-center py-[7px]">
                            <a href="#">
                              <Text as="p" className="tracking-[0.64px] !text-gray-800">
                                READ MORE
                              </Text>
                            </a>
                            <Img
                              src="images/img_thumbs_up.svg"
                              alt="thumbsup"
                              className="relative mt-[-16px] h-[18px]"
                            />
                          </div>
                        </div>
                      </React.Fragment>
                    ))}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center py-[7px]">
              <Text as="p" className="tracking-[0.64px] !text-gray-800">
                VIEW ALL NEWS
              </Text>
              <Img src="images/img_thumbs_up.svg" alt="thumbsup_eleven" className="relative mt-[-16px] h-[18px]" />
            </div>
          </div>
          <div className="flex flex-col items-center self-stretch">
            <div className="flex flex-col items-center gap-[46px] self-stretch bg-black-900 py-[45px] md:py-5">
              <div className="container-xs flex flex-col items-center md:p-5">
                <Heading as="h2" className="uppercase tracking-[1.80px] !text-lime-700">
                  THOUGHT LEADERSHIP
                </Heading>
              </div>
              <div className="container-xs mb-[204px] flex md:flex-col md:p-5">
                <Img src="images/img_cover_1.png" alt="coverone" className="h-[392px] w-[25%] object-cover md:w-full" />
                <div className="flex flex-1 flex-col items-start justify-center bg-gray-400_33 p-[47px] md:self-stretch md:p-5">
                  <Text size="4xl" as="p" className="!text-white-A700">
                    Today’s optimism is tomorrow’s innovation
                  </Text>
                  <Text as="p" className="mt-[27px] w-full !font-normal leading-6 !text-white-A700">
                    <>
                      Scientists’ role is to move us toward a better future. But what does that future look like? What
                      does the next generation lab look like, who is standing in it and what problems will they be
                      solving?
                      <br />
                      <br />
                      Thermo Fisher Scientific partnered with Savanta, a leading market research company, to understand
                      what professionals in Life Sciences expect the world to look like in 2030. We conducted 20
                      hour-long in-depth interviews and surveyed more than 600 Life Science professionals from the
                      United States and Europe.
                    </>
                  </Text>
                  <div className="mt-12 flex flex-col items-start justify-center py-[7px]">
                    <Text as="p" className="tracking-[0.64px] !text-gray-800">
                      VIEW WHITEPAPER
                    </Text>
                    <Img src="images/img_thumbs_up.svg" alt="thumbsup" className="relative mt-[-16px] h-[18px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="container-xs relative mt-[-218px] flex flex-col items-start md:p-5">
              <div className="flex flex-col items-center justify-center gap-6 self-stretch rounded bg-red-900 p-8 sm:p-5">
                <Text size="3xl" as="p" className="w-full text-center italic leading-[37px] !text-white-A700">
                  “It is an exciting time to be a scientist. And it’s getting better. I feel like I’m just exploring my
                  hobby or a passion, and I get paid for it.”
                </Text>
                <Text as="p" className="text-center !font-normal !text-white-A700">
                  Masi, Director, Biotechnology
                </Text>
              </div>
              <div className="mt-[72px] flex flex-col gap-10 self-stretch">
                <Text size="4xl" as="p" className="leading-10 !text-black-900_01">
                  Faced with these challenges, scientists are not afraid to tackle them, and are confident they are
                  going to succeed:
                </Text>
                <div className="flex gap-0.5 md:flex-col">
                  {data1.map((d, index) => (
                    <div
                      key={"listninetyone" + index}
                      className="flex w-full flex-col items-start justify-center gap-1.5 rounded bg-gray-100_01 p-[29px] sm:p-5"
                    >
                      <Text size="4xl" as="p">
                        {d.ninetyone}
                      </Text>
                      <Text as="p" className="w-[98%] !font-normal leading-6 md:w-full">
                        {d.description}
                      </Text>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-12 flex flex-col items-start gap-[37px] self-stretch">
                <Text size="4xl" as="p" className="!font-light !text-black-900_01">
                  <span className="text-black-900_01">By 2030,&nbsp;</span>
                  <span className="font-medium text-black-900_01">scientist believe the following:</span>
                </Text>
                <div className="flex gap-0.5 self-stretch md:flex-col">
                  {data2.map((d, index) => (
                    <div
                      key={"listeightyeight" + index}
                      className="flex w-full flex-col items-start justify-center gap-1.5 rounded bg-teal-100_3a p-6 sm:p-5"
                    >
                      <Text size="4xl" as="p" className="mt-[5px]">
                        {d.eightyeight}
                      </Text>
                      <Text as="p" className="mb-2 w-full !font-normal leading-6">
                        {d.believethat}
                      </Text>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col items-start justify-center py-[7px]">
                  <Text as="p" className="tracking-[0.64px] !text-gray-800">
                    LEARN MORE ABOUT THOUGHT LEADERSHIP
                  </Text>
                  <Img src="images/img_thumbs_up.svg" alt="thumbsup" className="relative mt-[-16px] h-[18px]" />
                </div>
              </div>
              <div className="mt-[78px] flex gap-[100px] self-stretch md:flex-col">
                <div className="flex w-full flex-col items-start gap-[50px]">
                  <Heading as="h3" className="uppercase tracking-[1.80px]">
                    AWARDS
                  </Heading>
                  <div className="flex flex-col items-start gap-[18px] self-stretch">
                    <Text size="4xl" as="p" className="w-[95%] leading-10 md:w-full">
                      Thermo Fisher Scientific’s Clinical Research Business Honored in CRO Leadership Awards
                    </Text>
                    <Text size="xl" as="p" className="!text-gray-600">
                      January 11th, 2023
                    </Text>
                    <Img
                      src="images/img_rectangle_19958_1.png"
                      alt="image"
                      className="h-[300px] w-full object-cover md:h-auto"
                    />
                    <div className="flex items-start gap-2 py-[7px]">
                      <Img src="images/img_thumbs_up.svg" alt="read_more" className="h-[18px]" />
                      <a href="#">
                        <Text as="p" className="tracking-[0.64px] !text-gray-800">
                          Read more
                        </Text>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col gap-[18px]">
                  <div className="flex flex-col items-start gap-[17px]">
                    <Text size="4xl" as="p" className="w-full leading-10">
                      Thermo Fisher Scientific Recognized by R&D 100 Awards for Innovations in Science and Technology
                    </Text>
                    <Text size="xl" as="p" className="!text-gray-600">
                      January 11th, 2023
                    </Text>
                  </div>
                  <div className="relative h-[300px] md:h-auto">
                    <Img src="images/img_rectangle_19958_2.png" alt="image" className="h-[300px] w-full object-cover" />
                    <div className="absolute left-0 right-0 top-[19%] m-auto flex w-[57%] items-start justify-between gap-5">
                      <div className="flex h-[25px] w-[35%] items-center justify-center bg-[url(/public/images/img_group_41.svg)] bg-cover bg-no-repeat md:h-auto">
                        <Text as="p" className="self-start !text-white-A700">
                          2023
                        </Text>
                      </div>
                      <div className="flex h-[61px] w-[46%] items-end justify-center bg-[url(/public/images/img_group_41.svg)] bg-cover bg-no-repeat p-2 md:h-auto">
                        <Text size="4xl" as="p" className="mt-2 !text-white-A700">
                          2023
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 py-[7px]">
                    <Img src="images/img_thumbs_up.svg" alt="thumbsup" className="h-[18px]" />
                    <a href="#">
                      <Text as="p" className="tracking-[0.64px] !text-gray-800">
                        Read more
                      </Text>
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-[49px] flex flex-col items-start justify-center py-[7px]">
                <Text as="p" className="tracking-[0.64px] !text-gray-800">
                  SEE ALL AWARDS
                </Text>
                <Img src="images/img_thumbs_up.svg" alt="thumbsup" className="relative mt-[-16px] h-[18px]" />
              </div>
            </div>
          </div>
          <div className="flex w-[86%] items-center justify-between gap-5 bg-gray-100_01 p-[23px] md:w-full md:flex-col sm:p-5">
            <div className="ml-[9px] flex w-[52%] flex-col items-start md:ml-0 md:w-full">
              <Text size="xl" as="p" className="!font-medium">
                Newsroom Alerts
              </Text>
              <Text as="p" className="mt-[5px] !font-normal">
                Get updates on the latest investor events, reports, news and more from our IR team.
              </Text>
              <div className="mt-[35px] flex w-[73%] flex-col items-start gap-3 md:w-full">
                <Text size="s" as="p" className="!font-medium">
                  Email ID
                </Text>
                <Input
                  shape="round"
                  type="email"
                  name="email"
                  placeholder={`primary_investor@vc.com`}
                  className="self-stretch sm:pr-5"
                />
              </div>
            </div>
            <div className="flex w-[27%] justify-center md:w-full">
              <Img src="images/img_thumbs_up.svg" alt="thumbsup" className="h-[78px] w-[12%]" />
              <div className="relative ml-[-1px] flex flex-1 justify-center bg-red-A700 p-[17px]">
                <div className="flex self-end p-[7px]">
                  <Text as="p" className="self-start tracking-[0.64px] !text-white-A700">
                    SUBSCRIBE
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="mt-[116px] bg-gray-800" />
      </div>
    </>
  );
}
