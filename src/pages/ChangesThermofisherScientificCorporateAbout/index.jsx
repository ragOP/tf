import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Heading, Button } from "../../components";
import ChangesThermofisherScientificCorporateAboutLeader from "../../components/ChangesThermofisherScientificCorporateAboutLeader";
import ChangesThermofisherScientificCorporateAboutOurstories from "../../components/ChangesThermofisherScientificCorporateAboutOurstories";
import Footer from "../../components/Footer";
import Navigation from "components/Navigation";

const data = [
  {
    image: "images/img_thermo_scientific.svg",
    acommitmentto: "A commitment to analytical precision",
  },
  {
    image: "images/img_applied_biosystems.svg",
    acommitmentto: "The path to genomic discoveries",
  },
  {
    image: "images/img_layer_1.svg",
    acommitmentto: "Accelerating discovery research",
  },
  {
    image: "images/img_layer_1_light_blue_900_01.svg",
    acommitmentto:
      "<>The scientific marketplace for choice and <br />convenience</>",
  },
  {
    image: "images/img_layer_1_gray_700_02.svg",
    acommitmentto: "<>The laboratory service and support <br />solution</>",
  },
  {
    image: "images/img_layer_1_black_900_01.svg",
    acommitmentto: "End-to-end pharma services solutions",
  },
  {
    image: "images/img_union.svg",
    acommitmentto: "Helping deliver life-changing therapies",
  },
  {
    image: "images/img_vector_light_blue_900.svg",
    acommitmentto: "Solutions for the everyday and the extra challenging",
  },
];
const data1 = [
  {
    userimage: "images/img_rectangle_19930.png",
    username: "Lisa P. Britt",
    userrole: "Senior Vice President & Chief Human Resources Officer",
  },
  {
    userimage: "images/img_rectangle_19930_347x280.png",
    username: "Aditya Joshi",
    userrole: "Vice President & Chief Strategy Officer",
  },
  {
    userimage: "images/img_rectangle_19930_1.png",
    username: "Michel Lagarde",
    userrole: "Executive Vice President & Chief Operating Officer",
  },
  {
    userimage: "images/img_rectangle_19930_2.png",
    username: "Karen E. Nelson",
    userrole: "Chief Scientific Officer",
  },
  {
    userimage: "images/img_rectangle_19930_3.png",
    username: "Sandy Pound",
    userrole: "Vice President & Chief Communications Officer",
  },
  {
    userimage: "images/img_rectangle_19930_4.png",
    username: "Alan Sachs",
    userrole: "Chief Medical Officer",
  },
  {
    userimage: "images/img_rectangle_19930_5.png",
    username: "Ryan Snyder",
    userrole: "Senior Vice President & Chief Information Officer",
  },
  {
    userimage: "images/img_rectangle_19930_6.png",
    username: "Stephen Williamson",
    userrole: "Senior Vice President & Chief Financial Officer",
  },
];

export default function ChangesThermofisherScientificCorporateAboutPage() {
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
        <header className="flex flex-col items-center gap-[26px]">
          <div className="flex justify-between gap-5 self-stretch bg-white-A700 pr-4 md:flex-col">
            <div className="relative h-[80px] w-[12%] md:h-auto md:w-full -z-10">
              {/* <Img src="images/img_header_logo.svg" alt="headerlogo" className="h-[28px] w-[128px]" /> */}
              {/* <Img
                src="images/img_thermo_fisher_scientific.png"
                alt="thermofisher"
                className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[80px] w-full object-cover"
              /> */}
            </div>
            <div className="flex items-center gap-[35px] md:flex-col">
              <div className="flex flex-wrap items-center md:flex-col md:p-5">
                <Text />
                <Text className="ml-10 md:ml-0" />
                <Text className="ml-[42px] md:ml-0" />
                <Text className="ml-[42px] md:ml-0" />
                <Text className="ml-[42px] md:ml-0" />
                <a href="#">
                  {/* <Img
                    src="images/img_search.svg"
                    alt="search"
                    className="ml-[50px] h-[16px] w-[16px] md:ml-0 md:w-full"
                  /> */}
                </a>
              </div>
              <Button
                shape="round"
                className="min-w-[157px] text-white-A700 md:p-5 sm:pr-5"
              >
                Thermofisher.com
              </Button>
            </div>
          </div>
          <div className="container-xs flex flex-col items-center md:p-5">
            <ul className="flex">
              <li>
                <a href="#">
                  <Heading as="h6" className="uppercase tracking-[1.80px]">
                    ABOUT
                  </Heading>
                </a>
              </li>
            </ul>
          </div>
        </header>
        <div className="mt-[26px] flex flex-col items-center">
          <div className="flex h-[396px] items-center self-stretch bg-[url(/public/images/img_group_484.png)] bg-cover bg-no-repeat md:h-auto md:flex-col">
            <div className="relative -z-10 flex h-[396px] w-[44%] items-center bg-[url(/public/images/img_vector.png)] bg-cover bg-no-repeat py-[178px] pl-[178px] pr-14 md:h-auto md:w-full md:p-5">
              <div className="ml-[18px] flex items-start gap-2.5 md:ml-0">
                <Button
                  size="md"
                  shape="circle"
                  className="w-[40px] !rounded-[20px]"
                >
                  <Img src="images/img_contrast.svg" />
                </Button>
                <Text
                  size="s"
                  as="p"
                  className="mt-[9px] !font-medium !text-white-A700"
                >
                  Watch this video
                </Text>
              </div>
            </div>
            <Img
              src="images/img_rectangle_19900.png"
              alt="image"
              className="relative ml-[-129px] h-[396px] w-[56%] object-cover md:ml-0 md:w-full -z-10"
            />
          </div>
          <div className="mt-[37px] flex w-[87%] md:w-full md:p-5">
            <div className="flex w-full flex-col gap-[50px]">
              <div className="container-xs flex flex-col items-center md:p-5">
                <Heading as="h1" className="uppercase tracking-[1.80px]">
                  OUR MISSION
                </Heading>
              </div>
              <div className="flex items-start justify-between gap-5 md:flex-col">
                <div className="relative h-[601px] w-[45%] md:w-full">
                  <div className="absolute bottom-[0.00px] left-[0.00px] m-auto h-[147px] w-[22%] bg-white-A700" />
                  <Text
                    size="xl"
                    as="p"
                    className="absolute left-0 right-0 top-[0.00px] m-auto w-[97%] !font-medium leading-7"
                  >
                    <span className="text-red-900">
                      <>
                        Everything we do starts with our Mission
                        <br />
                      </>
                    </span>
                    <span className="text-[38px] font-normal text-gray-900">
                      To enable our customers to make the world&nbsp;
                    </span>
                    <span className="text-[38px] font-bold text-gray-900">
                      <>
                        healthier, cleaner, and safer.
                        <br />
                      </>
                    </span>
                    <span className="text-gray-900">
                      <>
                        <br />
                        The nature of our business is to enable growth and
                        innovation within the global scientific community and to
                        help researchers, organizations, and companies solve
                        some of the world’s most pressing issues. We do that by
                        providing cutting-edge technologies and services that
                        are the result of our significant investment in research
                        and development.
                        <br />
                        <br />
                      </>
                    </span>
                    <span className="font-normal text-gray-900">
                      We believe creating a better tomorrow starts with the
                      action we take today, and we continually strive toward
                      improvement and excellence for the benefit of our
                      customers, our colleagues, and the world.
                    </span>
                  </Text>
                </div>
                <Img
                  src="images/img_pexels_mikhail_nilov_8851730.png"
                  alt="pexelsmikhail"
                  className="h-[570px] w-[47%] object-cover md:w-full"
                />
              </div>
            </div>
          </div>
          <div className="mt-[49px] flex flex-col items-center justify-center self-stretch bg-gray-200_66 py-[45px] md:py-5">
            <div className="container-xs flex flex-col items-start gap-[50px] md:p-5">
              <Heading as="h2" className="uppercase tracking-[1.80px]">
                Our Stories
              </Heading>
              <ChangesThermofisherScientificCorporateAboutOurstories className="flex w-[96%] flex-col gap-6 bg-gray-100 md:w-full" />
            </div>
          </div>
          <div className="mt-[77px] flex flex-col items-center gap-[53px] self-stretch sm:gap-[26px]">
            <div className="flex flex-col items-center gap-[27px] self-stretch">
              <div className="container-xs flex flex-col items-center md:p-5">
                <Heading as="h2" className="uppercase tracking-[1.80px]">
                  LEADERSHIP
                </Heading>
              </div>
              <div className="flex justify-center self-stretch bg-teal-700">
                <div className="container-xs flex justify-center pr-[50px] md:p-5 md:pr-5">
                  <div className="flex w-full items-center justify-between gap-5 md:flex-col">
                    <div className="relative h-[408px] w-[46%] md:h-auto md:w-full">
                      <div className="flex w-full justify-center sm:flex-col">
                        <Img
                          src="images/img_marc_2.png"
                          alt="marctwo"
                          className="h-[408px] w-[25%] object-cover sm:w-full"
                        />
                        <Img
                          src="images/img_marc_1.png"
                          alt="marcone"
                          className="h-[408px] w-[408px] object-cover sm:w-full"
                        />
                      </div>
                      <div className="absolute bottom-[24.00px] left-0 right-0 m-auto flex w-[91%] justify-center rounded bg-indigo-900_e5 p-4">
                        <Text
                          size="lg"
                          as="p"
                          className="w-[92%] leading-6 !text-white-A700"
                        >
                          <>
                            Marc Casper
                            <br />
                            Chairman, President & CEO, Thermo Fisher Scientific
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="flex w-[46%] flex-col items-start md:w-full">
                      <Heading
                        as="h3"
                        className="uppercase tracking-[1.80px] !text-gray-100_01"
                      >
                        MESSAGE FROM CEO
                      </Heading>
                      <Text
                        size="3xl"
                        as="p"
                        className="mt-[50px] w-full italic leading-[37px] !text-white-A700"
                      >
                        “ The reason we responded so quickly to the pandemic was
                        the amazing team we have. 90,000 colleagues around the
                        world dedicated to our customers’ success.”
                      </Text>
                      <div className="mt-8 flex p-[7px]">
                        <Text
                          as="p"
                          className="self-start tracking-[0.64px] !text-white-A700"
                        >
                          READ COMPLETE LETTER
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto flex w-full max-w-[1248px] flex-col gap-[51px] md:p-5 sm:gap-[25px]">
              <div className="ml-[7px] flex flex-col items-center md:ml-0">
                <Text size="5xl" as="p" className="!text-indigo-900">
                  <span className="text-indigo-900">O</span>
                  <span className="text-indigo-900">ur&nbsp;</span>
                  <span className="font-bold text-indigo-900">
                    leadership team
                  </span>
                </Text>
              </div>
              <div className="ml-[7px] grid grid-cols-4 gap-10 md:ml-0 md:grid-cols-2 sm:grid-cols-1">
                {data1.map((d, index) => (
                  <ChangesThermofisherScientificCorporateAboutLeader
                    {...d}
                    key={"gridlisapbritt" + index}
                    className="flex w-full flex-col"
                  />
                ))}
              </div>
              <div className="flex flex-col items-start justify-center py-[7px]">
                <Heading
                  size="xs"
                  as="h4"
                  className="uppercase tracking-[0.64px] !text-gray-800"
                >
                  Full Leadership List
                </Heading>
                <Img
                  src="images/img_thumbs_up.svg"
                  alt="thumbsup"
                  className="relative mt-[-16px] h-[18px]"
                />
              </div>
            </div>
          </div>
          <div className="mt-[77px] flex flex-col items-center gap-10 self-stretch">
            <div className="flex flex-col items-center gap-[50px] self-stretch">
              <div className="container-xs flex flex-col items-center md:p-5">
                <Heading as="h2" className="uppercase tracking-[1.80px]">
                  OUR BRANDS
                </Heading>
              </div>
              <div className="flex self-stretch md:flex-col">
                <div className="flex h-[216px] w-[31%] items-center bg-[url(/public/images/img_group_42.svg)] bg-cover bg-no-repeat py-[87px] pl-[87px] pr-14 md:h-auto md:w-full md:p-5">
                  <Img
                    src="images/img_logo.svg"
                    alt="logo"
                    className="ml-3 h-[42px] w-[66%] md:ml-0"
                  />
                </div>
                <div className="flex flex-1 justify-center bg-red-900 p-12 md:self-stretch md:p-5">
                  <Text
                    size="xl"
                    as="p"
                    className="w-[94%] leading-[30px] !text-white-A700"
                  >
                    Whether they are improving life for patients, protecting our
                    global climate or keeping people safe, our customers look to
                    Thermo Fisher Scientific for innovative solutions. Products
                    and services sold under the following Thermo Fisher brands
                    enable customers to push science and technology a step
                    beyond.
                  </Text>
                </div>
              </div>
            </div>
            <div className="container-xs grid grid-cols-3 justify-center gap-[45px] md:grid-cols-2 md:p-5 sm:grid-cols-1">
              {data.map((d, index) => (
                <div
                  key={"gridacommitment" + index}
                  className="flex w-full flex-col items-start justify-center gap-[106px] bg-gray-100_01 p-[39px] md:gap-[79px] sm:gap-[53px] sm:p-5"
                >
                  <Img
                    src={d.image}
                    alt="image"
                    className="mt-10 h-[79px] w-[53%]"
                  />
                  <Text as="p" className="mb-[37px] !text-black-900_01">
                    {d.acommitmentto}
                  </Text>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer className="mt-[77px] bg-gray-800" />
      </div>
    </>
  );
}
