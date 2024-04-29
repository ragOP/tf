import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Input, Heading, Button, Slider } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Option2FinalColumnjanuary from "../../components/Option2FinalColumnjanuary";
import Option2FinalSocialmedia from "../../components/Option2FinalSocialmedia";
import Navigation from "components/Navigation";

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
    image: "images/img_rectangle_19960_1.png",
    text: "January 5th, 2023",
    text1: "Thermo Fisher Scientific Authorizes $4 Billion of Share Repurchases",
  },
];
const data1 = [
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
    eightyeight: "88%",
    believethat:
      "believe that artificial intelligence computing will have completely transformed the operation of labs.",
  },
  {
    eightyeight: "74%",
    believethat: "say that fewer human workers will be needed in labs because of productivity gains tied to robotics.",
  },
];
const data2 = [
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

export default function Option2FinalPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
     <Navigation/>
      <Helmet>
        <title>thermo</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        {/* header navigation section */}
        {/* <Header /> */}

        {/* main content section */}
        <div className="mt-[37px] flex flex-col items-center gap-5">
          {/* newsroom highlight section */}
          <div className="container-xs flex flex-col items-center md:p-5">
            <Heading size="s" as="h1" className="uppercase tracking-[1.80px] !text-teal-700">
              NEWSROOM
            </Heading>
          </div>
          <div className="flex flex-col items-center self-stretch">
            {/* featured stories section */}
            <div className="flex flex-col items-center gap-[60px] self-stretch sm:gap-[30px]">
              <div className="container-xs flex flex-col gap-[9px] md:p-5">
                <div className="flex items-start justify-between gap-5 md:flex-col">
                  <Text size="3xl" as="p" className="w-[48%] md:w-full">
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
                <div className="flex items-start gap-2 py-[7px]">
                  <Img src="images/img_thumbs_up.svg" alt="thumbsup" className="h-[18px]" />
                  <a href="#">
                    <Text as="p" className="!font-medium tracking-[0.64px] !text-gray-800">
                      Read more
                    </Text>
                  </a>
                </div>
              </div>

              {/* stories slider section */}
              <div className="relative h-[461px] self-stretch md:h-auto">
                <div className="flex h-[461px] w-full bg-[url(/public/images/img_frame_1000003964.png)] bg-cover bg-no-repeat md:h-auto">
                  <Slider
                    autoPlay
                    autoPlayInterval={2000}
                    responsive={{ 0: { items: 1 }, 550: { items: 1 }, 1050: { items: 1 } }}
                    renderDotsItem={(props) => {
                      return props?.isActive ? (
                        <div className="mr-1.5 h-[6px] w-[18px] bg-white-A700" />
                      ) : (
                        <div className="mr-1.5 h-[6px] w-[6px] bg-white-A700" />
                      );
                    }}
                    activeIndex={sliderState}
                    onSlideChanged={(e) => {
                      setSliderState(e?.item);
                    }}
                    ref={sliderRef}
                    items={[...Array(3)].map(() => (
                      <React.Fragment key={Math.random()}>
                        <div className="mx-2.5 flex h-[461px] w-[38%] items-start justify-center bg-[url(/public/images/img_group_9.svg)] bg-cover bg-no-repeat p-[39px] md:h-auto md:w-full sm:p-5">
                          <div className="mb-5 flex w-[68%] flex-col items-start justify-center gap-[18px] pb-[153px] md:w-full md:pb-5">
                            <Heading size="s" as="h3" className="uppercase tracking-[1.80px]">
                              Our Stories
                            </Heading>
                            <Text size="2xl" as="p" className="w-full leading-[56px] !text-gray-100">
                              <span className="text-gray-100">My work is a story of&nbsp;</span>
                              <span className="font-bold text-gray-100">
                                <>
                                  problem <br />
                                  solving.
                                </>
                              </span>
                            </Text>
                          </div>
                        </div>
                      </React.Fragment>
                    ))}
                  />
                </div>
              </div>
            </div>

            {/* latest podcasts section */}
            <div className="container-xs mt-[77px] flex flex-col items-start gap-[45px] md:p-5">
              <Heading size="s" as="h4" className="uppercase tracking-[1.80px] !text-teal-700">
                Latest Podcasts
              </Heading>
              <div className="flex gap-10 self-stretch md:flex-col">
                <div className="flex w-full items-center gap-6 bg-gray-100 pr-6 sm:flex-col sm:pr-5">
                  <Img
                    src="images/img_podcast_placeholder.png"
                    alt="image"
                    className="h-[140px] w-[140px] object-cover sm:w-full"
                  />
                  <div className="flex flex-1 flex-col gap-2 sm:self-stretch">
                    <Text as="p" className="!font-medium leading-6">
                      Delivering on the promise of cell therapies: Programmed immune cells attack cancer and other...
                    </Text>
                    <div className="flex items-center gap-3.5">
                      <Button size="xs" shape="round" className="w-[32px]">
                        <Img src="images/img_contrast.svg" />
                      </Button>
                      <Text size="xs" as="p" className="self-end !font-medium !text-red-A700">
                        Watch Science with a Twist | Season 2 : Episode 10
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex w-full bg-gray-100 pr-6 sm:pr-5">
                  <div className="flex w-full items-center gap-6 sm:flex-col">
                    <Img
                      src="images/img_podcast_placeholder.png"
                      alt="podcast"
                      className="h-[140px] w-[140px] object-cover sm:w-full"
                    />
                    <div className="flex flex-1 flex-col gap-2 sm:self-stretch">
                      <Text as="p" className="!font-medium leading-6">
                        Disrupting the Status Quo: The Importance of Diversity in Clinical Trials
                      </Text>
                      <div className="flex items-center gap-3.5">
                        <Button size="xs" shape="round" className="w-[32px]">
                          <Img src="images/img_contrast.svg" />
                        </Button>
                        <Text size="xs" as="p" className="self-end !font-medium !text-red-A700">
                          Watch Science with a Twist | Season 2 : Episode 11
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[7px] py-2">
                <Img src="images/img_thumbs_up.svg" alt="thumbsup" className="h-[18px]" />
                <Text as="p" className="self-start !font-medium tracking-[0.64px] !text-gray-800">
                  View all podcasrs
                </Text>
              </div>
            </div>

            {/* press releases section */}
            <div className="container-xs mt-[78px] flex flex-col items-start gap-[49px] md:p-5">
              <Heading size="s" as="h5" className="uppercase tracking-[1.80px] !text-teal-700">
                Press Releases
              </Heading>
              <div className="flex gap-[23px] self-stretch md:flex-col">
                {data.map((d, index) => (
                  <Option2FinalColumnjanuary
                    {...d}
                    key={"listjanuary" + index}
                    className="flex w-full flex-col items-start gap-[19px]"
                  />
                ))}
              </div>
              <div className="flex items-center gap-[7px] py-2">
                <Img src="images/img_thumbs_up.svg" alt="thumbsup" className="h-[18px]" />
                <Text as="p" className="self-start !font-medium tracking-[0.64px] !text-gray-800">
                  View all press releases
                </Text>
              </div>
            </div>

            {/* in the news section */}
            <div className="container-xs mt-[78px] flex flex-col items-start gap-[49px] md:p-5">
              <Heading size="s" as="h6" className="uppercase tracking-[1.80px] !text-teal-700">
                In The News
              </Heading>
              <div className="flex gap-[23px] self-stretch md:flex-col">
                <div className="flex w-full flex-col items-start gap-4">
                  <Text
                    as="p"
                    className="flex items-center justify-center rounded-sm bg-orange-800 px-3 pb-[7px] pt-px !font-medium !text-white-A700"
                  >
                    The Washington Post
                  </Text>
                  <Img
                    src="images/img_rectangle_19960_2.png"
                    alt="the_washington"
                    className="h-[250px] w-full object-cover md:h-auto"
                  />
                  <div className="flex flex-col items-start gap-[18px] self-stretch">
                    <Text size="md" as="p" className="!font-normal !text-gray-600">
                      January 5th, 2021
                    </Text>
                    <Text size="md" as="p" className="w-full leading-7">
                      Shanya Gill, 12, invented early detection device for fire
                    </Text>
                    <div className="flex items-start gap-2 py-[7px]">
                      <Img src="images/img_thumbs_up.svg" alt="read_more" className="h-[18px]" />
                      <a href="#">
                        <Text as="p" className="!font-medium tracking-[0.64px] !text-gray-800">
                          Read more
                        </Text>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start gap-[17px]">
                  <div className="flex rounded-sm bg-orange-800 px-2 pb-2">
                    <Text as="p" className="!font-medium !text-white-A700">
                      Business Insider
                    </Text>
                  </div>
                  <Img
                    src="images/img_rectangle_19960_3.png"
                    alt="image"
                    className="h-[250px] w-full object-cover md:h-auto"
                  />
                  <div className="flex flex-col items-start gap-[18px] self-stretch">
                    <Text size="md" as="p" className="!font-normal !text-gray-600">
                      January 5th, 2021
                    </Text>
                    <Text size="md" as="p" className="w-full leading-7">
                      A middle-schooler just won $25,000 for inventing a fire-detection device that works faster than
                      the average smoke detector
                    </Text>
                    <div className="flex items-start gap-2 py-[7px]">
                      <Img src="images/img_thumbs_up.svg" alt="thumbsup" className="h-[18px]" />
                      <a href="#">
                        <Text as="p" className="!font-medium tracking-[0.64px] !text-gray-800">
                          Read more
                        </Text>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start gap-[17px]">
                  <div className="flex rounded-sm bg-orange-800 px-2 pb-2">
                    <Text as="p" className="!font-medium !text-white-A700">
                      Time
                    </Text>
                  </div>
                  <Img
                    src="images/img_rectangle_19960_4.png"
                    alt="image"
                    className="h-[250px] w-full object-cover md:h-auto"
                  />
                  <div className="flex flex-col items-start gap-[18px] self-stretch">
                    <Text size="md" as="p" className="!font-normal !text-gray-600">
                      January 5th, 2021
                    </Text>
                    <Text size="md" as="p" className="w-full leading-7">
                      <>
                        A More Accurate Diagnosis
                        <br />
                        Thermo Fisher Scientific Preeclampsia Blood Tests
                      </>
                    </Text>
                    <div className="flex items-start gap-2 py-[7px]">
                      <Img src="images/img_thumbs_up.svg" alt="thumbsup" className="h-[18px]" />
                      <a href="#">
                        <Text as="p" className="!font-medium tracking-[0.64px] !text-gray-800">
                          Read more
                        </Text>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* thought leadership section */}
            <div className="mt-[153px] flex flex-col items-center gap-20 self-stretch md:gap-[60px] sm:gap-10">
              <div className="flex flex-col items-center self-stretch bg-black-900 py-10 sm:py-5">
                <div className="container-xs mt-1 flex flex-col items-center md:p-5">
                  <Heading size="s" as="h6" className="uppercase tracking-[1.80px] !text-lime-700">
                    THOUGHT LEADERSHIP
                  </Heading>
                </div>
                <div className="container-xs mt-[46px] flex md:flex-col md:p-5">
                  <Img
                    src="images/img_cover_1.png"
                    alt="coverone"
                    className="h-[392px] w-[25%] object-cover md:w-full"
                  />
                  <div className="flex flex-1 flex-col items-start justify-center bg-gray-400_33 p-12 md:self-stretch md:p-5">
                    <Text size="xl" as="p" className="!text-white-A700">
                      Today’s optimism is tomorrow’s innovation
                    </Text>
                    <Text as="p" className="mt-[27px] w-full leading-6 !text-white-A700">
                      <>
                        Scientists’ role is to move us toward a better future. But what does that future look like? What
                        does the next generation lab look like, who is standing in it and what problems will they be
                        solving?
                        <br />
                        <br />
                        Thermo Fisher Scientific partnered with Savanta, a leading market research company, to
                        understand what professionals in Life Sciences expect the world to look like in 2030. We
                        conducted 20 hour-long in-depth interviews and surveyed more than 600 Life Science professionals
                        from the United States and Europe.
                      </>
                    </Text>
                    <div className="mt-12 flex items-center gap-2 py-2">
                      <Img src="images/img_thumbs_up.svg" alt="thumbsup" className="h-[18px]" />
                      <Text as="p" className="self-start !font-medium tracking-[0.64px] !text-white-A700">
                        Read whitepaper
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="container-xs mt-[23px] flex flex-col items-center gap-6 rounded bg-red-900 p-[26px] md:p-5">
                  <Text
                    size="lg"
                    as="p"
                    className="mt-3.5 w-[98%] text-center italic leading-[37px] !text-white-A700 md:w-full"
                  >
                    “It is an exciting time to be a scientist. And it’s getting better. I feel like I’m just exploring
                    my hobby or a passion, and I get paid for it.”
                  </Text>
                  <Text as="p" className="text-center !text-white-A700">
                    Masi, Director, Biotechnology
                  </Text>
                </div>
              </div>
              <div className="container-xs flex flex-col gap-[37px] md:p-5">
                <div className="flex flex-col items-start">
                  <Text size="xl" as="p" className="w-full leading-10 !text-black-900_01">
                    Faced with these challenges, scientists are not afraid to tackle them, and are confident they are
                    going to succeed:
                  </Text>
                  <div className="mt-[30px] flex gap-0.5 self-stretch md:flex-col">
                    {data2.map((d, index) => (
                      <div
                        key={"listninetyone" + index}
                        className="flex w-full flex-col items-start gap-1.5 rounded bg-gray-100 p-[22px] sm:p-5"
                      >
                        <Text size="xl" as="p" className="ml-[9px] mt-4 md:ml-0">
                          {d.ninetyone}
                        </Text>
                        <Text as="p" className="w-[94%] self-center leading-6 md:w-full">
                          {d.description}
                        </Text>
                      </div>
                    ))}
                  </div>
                  <Text size="xl" as="p" className="mt-[57px] !font-light !text-black-900_01">
                    <span className="text-black-900_01">By 2030,&nbsp;</span>
                    <span className="font-medium text-black-900_01">scientist believe the following:</span>
                  </Text>
                </div>
                <div className="grid grid-cols-2 gap-0.5 pr-[620px] md:grid-cols-1 md:pr-5">
                  {data1.map((d, index) => (
                    <div
                      key={"grideightyeight" + index}
                      className="flex w-full flex-col items-start justify-center gap-1.5 rounded bg-teal-100_3a p-6 sm:p-5"
                    >
                      <Text size="xl" as="p" className="mt-[5px]">
                        {d.eightyeight}
                      </Text>
                      <Text as="p" className="mb-2 w-full leading-6">
                        {d.believethat}
                      </Text>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 py-2 pr-2">
                  <Img src="images/img_thumbs_up.svg" alt="thumbsup" className="h-[18px]" />
                  <Text as="p" className="self-start !font-medium tracking-[0.64px] !text-gray-800">
                    Learn more about thought leadership
                  </Text>
                </div>
              </div>
            </div>
            <div className="mt-[81px] flex flex-col items-center justify-center self-stretch rounded-sm bg-gray-200_7f p-[46px] md:p-5">
              {/* social media section */}
              <div className="flex w-[92%] flex-col gap-[39px] md:w-full">
                <div className="container-xs flex flex-col items-center md:p-5">
                  <Heading size="s" as="h6" className="uppercase tracking-[1.80px] !text-teal-700">
                    SOCIAL MEDIA
                  </Heading>
                </div>
                <Option2FinalSocialmedia className="mx-auto flex w-full max-w-[1240px] gap-8 md:flex-col md:p-5" />

                {/* social media follow section */}
                <div className="container-xs flex flex-col items-end md:p-5">
                  <div className="flex items-center gap-2.5">
                    <Text as="p" className="!font-medium !text-gray-800_7f">
                      Follow us on
                    </Text>
                    <div className="flex gap-4 self-end">
                      <Img src="images/img_link_teal_700.svg" alt="link" className="h-[16px] w-[16px]" />
                      <Img src="images/img_pajamas_twitter.svg" alt="pajamastwitter" className="h-[16px] w-[16px]" />
                      <div className="flex flex-col py-0.5">
                        <Img src="images/img_warning.svg" alt="warning" className="h-[11px]" />
                      </div>
                      <div className="flex flex-col items-center px-1">
                        <Img src="images/img_facebook_teal_700.svg" alt="facebook" className="h-[16px]" />
                      </div>
                      <Img src="images/img_info.svg" alt="info" className="h-[16px] w-[16px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* newsroom alerts section */}
            <div className="container-xs mt-20 flex items-center justify-between gap-5 bg-gray-100 p-[23px] md:flex-col md:p-5">
              <div className="ml-[7px] flex w-[52%] flex-col items-start gap-1 md:ml-0 md:w-full">
                <Text size="md" as="p">
                  Newsroom Alerts
                </Text>
                <Text as="p">Get updates on the latest investor events, reports, news and more from our IR team.</Text>
                <div className="flex w-[73%] flex-col items-start gap-3 md:w-full">
                  <Text size="xs" as="p" className="!font-medium">
                    Email ID
                  </Text>
                  <Input
                    shape="round"
                    type="email"
                    name="email"
                    placeholder={`primary_investor@vc.com`}
                    className="sm:pr-5"
                  />
                </div>
              </div>
              <div className="flex w-[27%] justify-center md:w-full">
                <Img src="images/img_thumbs_up.svg" alt="thumbsup_eleven" className="h-[78px] w-[12%]" />
                <div className="relative ml-[-1px] flex flex-1 justify-center bg-red-A700 p-[17px]">
                  <div className="flex self-end p-[7px]">
                    <Text as="p" className="self-start !font-medium tracking-[0.64px] !text-white-A700">
                      SUBSCRIBE
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* footer section */}
        <Footer className="mt-[148px] bg-gray-800" />
      </div>
    </>
  );
}
