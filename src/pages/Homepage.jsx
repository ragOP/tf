import React from "react";
import { Helmet } from "react-helmet";
import {  Img, Slider, Text, Button } from '../components'
import { Heading } from "components/Heading";
import ChangesThermofisherScientificCorporateLandingPageOpB2 from "../components/ChangesThermofisherScientificCorporateLandingPageOpB2";
import ChangesThermofisherScientificCorporateLandingPageOpDiversity from "../components/ChangesThermofisherScientificCorporateLandingPageOpDiversity";
import ChangesThermofisherScientificCorporateLandingPageOpDiversityand from "../components/ChangesThermofisherScientificCorporateLandingPageOpDiversityand";
import ChangesThermofisherScientificCorporateLandingPageOpListdescription from "../components/ChangesThermofisherScientificCorporateLandingPageOpListdescription";
import ChangesThermofisherScientificCorporateLandingPageOpOurstories from "../components/ChangesThermofisherScientificCorporateLandingPageOpOurstories";
// import ChangesThermofisherScientificCorporateLandingPageOpSustainability from "../../components/ChangesThermofisherScientificCorporateLandingPageOpSustainability";
import Footer from "../components/Footer";

import { Link } from 'react-router-dom';
import Navigation from "components/Navigation";
export default function Homepage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      <Helmet>
        <title>Homepage</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
       <Navigation/>
        <div>
          <Img src="images/img_group_196.png" alt="image" className="h-[844px] w-full z-[1] object-cover" />
          <ChangesThermofisherScientificCorporateLandingPageOpOurstories className="mt-[-2px]" />
          <div>
            <div className="py-[50px] md:py-5 bg-gray-100_01">
              {/* <ChangesThermofisherScientificCorporateLandingPageOpSustainability className="flex flex-col mt-[27px] pb-[7px] pl-[7px] gap-[50px]" /> */}
            </div>
            <div className="mt-8 pt-[38px] sm:pt-5">
              <div>
                <div>
                  <div className="h-[609px] relative">
                    <div className="flex md:flex-col justify-center items-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                      <div className="flex self-end justify-center w-[41%] md:w-full z-[1]">
                        <div className="h-[529px] w-full relative">
                          <Img
                            src="images/img_mask_group.png"
                            alt="image_four"
                            className="justify-center h-[529px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                          />
                          <Img
                            src="images/img_mask_group_teal_700.svg"
                            alt="image_five"
                            className="justify-center h-[529px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-end ml-[-281px] pt-[73px] gap-16 md:pt-5 bg-white-A700 flex-1">
                        <div className="flex flex-col w-[68%] md:w-full mr-10 gap-4">
                          <Text size="7xl" as="p" className="flex">
                            <span className="text-gray-900 text-[38px] font-medium">$ </span>
                            <span className="text-gray-900 text-[38px] font-bold">44.915</span>
                            <span className="text-gray-900">&nbsp;</span>
                            <span className="text-gray-900 text-3xl font-medium">billion</span>
                          </Text>
                          <Text size="lg" as="p" className="!text-gray-900_a2 opacity-0.8 !leading-[30px]">
                            Thermo Fisher Scientific Inc. is the world leader in serving science, with annual revenue
                            over $44 billion. Our Mission is to enable our customers to make the world healthier,
                            cleaner and safer.
                          </Text>
                        </div>
                        <div className="h-[288px] w-[83%] relative">
                          <Img
                            src="images/img_rectangle_19920.svg"
                            alt="image_six"
                            className="justify-center h-[288px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                          />
                          <div className="flex flex-col w-[82%] right-[7%] top-[16%] m-auto absolute">
                            <Heading size="s" as="h1" className="!text-teal-700 tracking-[1.80px] uppercase">
                              Q1 Highlights
                            </Heading>
                            <div className="flex justify-between items-center mt-[29px] gap-5">
                              <Text size="lg" as="p" className="self-end">
                                First quarter revenue was
                              </Text>
                              <Text size="3xl" as="p" className="flex text-right">
                                <span className="text-gray-900">$11.82</span>
                                <span className="text-gray-900 text-xl">billion</span>
                              </Text>
                            </div>
                            <div className="flex justify-between items-center mt-3.5 gap-5">
                              <Text size="lg" as="p">
                                GAAP diluted earnings per share (EPS)
                              </Text>
                              <Text size="3xl" as="p" className="text-right">
                                $5.6
                              </Text>
                            </div>
                            <div className="flex justify-between items-start mt-3.5 gap-5">
                              <Text size="lg" as="p" className="mt-[5px]">
                                Adjusted EPS
                              </Text>
                              <Text size="3xl" as="p" className="text-right">
                                $7.25
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Heading
                      size="s"
                      as="h2"
                      className="left-[7%] top-[1%] m-auto !text-teal-700 tracking-[1.80px] uppercase absolute"
                    >
                      ANNUAL REVENUE
                    </Heading>
                  </div>
                  <div className="mt-[-1px] p-[15px] z-[1] bg-black-900">
                    <div className="w-full mb-[11px] mx-auto md:p-5 max-w-[1176px]">
                      <div className="flex md:flex-col justify-between items-center gap-5">
                        <div className="flex self-end justify-center items-start w-[19%] md:w-full gap-[25px]">
                          <Text size="lg" as="p" className="!text-teal-100 !font-medium">
                            Stock Price
                          </Text>
                          <Button color="teal_700" size="xs" shape="round" className="w-full font-medium !rounded-sm">
                            NYSE : TMO
                          </Button>
                        </div>
                        <div className="flex sm:flex-col justify-center items-center gap-5">
                          <Text size="5xl" as="p" className="flex">
                            <span className="text-white-A700">$</span>
                            <span className="text-white-A700">&nbsp;</span>
                            <span className="text-white-A700">588.84</span>
                          </Text>
                          <Text as="p" className="self-end !text-white-A700_a2 !font-normal opacity-0.8">
                            04/14/2023 | 04:00 pm (Pricing delayed by 15 mins)
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="p-12 md:p-5 bg-gray-100_01">
                <div className="flex flex-col w-full mt-[29px] gap-[33px] mx-auto md:p-5 max-w-[1252px]">
                  <div className="ml-3">
                    <div className="flex flex-col gap-[49px]">
                      <Heading size="s" as="h3" className="!text-teal-700 tracking-[1.80px] uppercase">
                        News Room
                      </Heading>
                      <div className="flex md:flex-col justify-between gap-5">
                        <div className="flex flex-col w-[44%] md:w-full gap-[18px]">
                          <div className="flex w-[26%] md:w-full">
                            <div className="flex flex-col items-center w-full">
                              <Text size="lg" as="p" className="!text-white-A700 !font-medium z-[1]">
                                Latest News
                              </Text>
                              <div className="self-stretch h-[32px] mt-[-23px] bg-orange-800 rounded-sm" />
                            </div>
                          </div>
                          <Text size="3xl" as="p" className="!leading-10">
                            12-year-old Develops Fire Detection System; Wins $25,000 Top Award at the Inaugural Thermo
                            Fisher Scientific Junior Innovators Challenge
                          </Text>
                          <Text size="lg" as="p" className="!text-gray-600">
                            January 11th, 2023
                          </Text>
                          <Img
                            src="images/img_rectangle_19937.png"
                            alt="image_seven"
                            className="h-[282px] object-cover"
                          />
                        </div>
                        <div className="flex flex-col w-[44%] md:w-full gap-[18px]">
                          <div className="flex w-[26%] md:w-full ml-[3px]">
                            <div className="flex flex-col items-center w-full">
                              <Text size="lg" as="p" className="!text-white-A700 !font-medium z-[1]">
                                Latest News
                              </Text>
                              <div className="self-stretch h-[32px] mt-[-23px] bg-orange-800 rounded-sm" />
                            </div>
                          </div>
                          <Text size="3xl" as="p" className="ml-[3px] !leading-10">
                            Thermo Fisher Scientific Announces Oncomine Clinical Research Grant Awardees and Opens
                            Spring 2023 Submissions
                          </Text>
                          <Text size="lg" as="p" className="ml-0.5 !text-gray-600">
                            April 17th, 2023
                          </Text>
                          <div className="h-[282px] relative">
                            <Slider
                              autoPlay
                              autoPlayInterval={2000}
                              responsive={{ 0: { items: 1 }, 550: { items: 1 }, 1050: { items: 1 } }}
                              renderDotsItem={(props) => {
                                return props?.isActive ? <div /> : <div />;
                              }}
                              activeIndex={sliderState}
                              onSlideChanged={(e) => {
                                setSliderState(e?.item);
                              }}
                              ref={sliderRef}
                              className="justify-center w-full left-0 bottom-0 right-0 top-0 m-auto absolute"
                              items={[...Array(3)].map(() => (
                                <React.Fragment key={Math.random()}>
                                  <div className="flex justify-center mx-auto">
                                    <div className="h-[282px] w-full relative">
                                      <Img
                                        src="images/img_image_3.png"
                                        alt="imagethree_one"
                                        className="justify-center h-[282px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                                      />
                                      <Img
                                        src="images/img_image_2.png"
                                        alt="imagetwo_one"
                                        className="justify-center h-[282px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                                      />
                                    </div>
                                  </div>
                                </React.Fragment>
                              ))}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between w-[68%] md:w-full gap-5">
                    <ChangesThermofisherScientificCorporateLandingPageOpB2
                      readmore="Read more"
                      imageOne="images/img_rectangle_19957.svg"
                      className="flex items-start gap-2 py-[7px]"
                    />
                    <ChangesThermofisherScientificCorporateLandingPageOpB2 className="flex w-[155px] h-[39px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-[77px] gap-[54px]">
              <ChangesThermofisherScientificCorporateLandingPageOpDiversity className="pl-20 pr-14 md:px-5" />
              <div>
                <div className="flex flex-col justify-center gap-[50px] p-[45px] md:p-5 bg-gray-100_01">
                  <Heading size="s" as="h4" className="ml-[54px] !text-teal-700 tracking-[1.80px] uppercase">
                    Diversity & inclusion
                  </Heading>
                  <ChangesThermofisherScientificCorporateLandingPageOpDiversityand className="w-full mb-0.5 pb-[30px] mx-auto md:p-5 sm:pb-5 bg-gray-100 max-w-[1192px]" />
                </div>
              </div>
            </div>
            <ChangesThermofisherScientificCorporateLandingPageOpListdescription className="flex md:flex-col w-full mt-20 gap-8 mx-auto md:p-5 max-w-[1240px]" />
          </div>
        </div>
        <Footer className="mt-20 pt-9 sm:pt-5 bg-gray-800" />
      </div>
    </>
  );
}
