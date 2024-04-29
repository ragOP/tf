import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Img, Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ThermofisherScientificCorporateCSRClimatenature from "../../components/ThermofisherScientificCorporateCSRClimatenature";
import ThermofisherScientificCorporateCSRColumn13 from "../../components/ThermofisherScientificCorporateCSRColumn13";
import ThermofisherScientificCorporateCSRColumnreadmore from "../../components/ThermofisherScientificCorporateCSRColumnreadmore";
import ThermofisherScientificCorporateCSRCorporate from "../../components/ThermofisherScientificCorporateCSRCorporate";
import ThermofisherScientificCorporateCSRCsrhero from "../../components/ThermofisherScientificCorporateCSRCsrhero";
import ThermofisherScientificCorporateCSRDiversityand from "../../components/ThermofisherScientificCorporateCSRDiversityand";
import ThermofisherScientificCorporateCSREnvironment from "../../components/ThermofisherScientificCorporateCSREnvironment";
import ThermofisherScientificCorporateCSREthics from "../../components/ThermofisherScientificCorporateCSREthics";
import ThermofisherScientificCorporateCSROurcsr from "../../components/ThermofisherScientificCorporateCSROurcsr";
import ThermofisherScientificCorporateGenericTemplateSeconDiversityand from "../../components/ThermofisherScientificCorporateGenericTemplateSeconDiversityand";
import Navigation from "components/Navigation";
const data = [
  { userimage: "images/img_shutterstock_1898590327.png", investmenttext: "In R&D Investment" },
  {
    userimage: "images/img_shutterstock_1898590327_193x290.png",
    pricetext: "Net-zero emission",
    investmenttext: "by 2050 ",
  },
  {
    userimage: "images/img_shutterstock_1898590327_1.png",
    pricetext: "25% reduction",
    investmenttext: "in absolute scope 1 and 2 emissions since 2018",
  },
  {
    userimage: "images/img_shutterstock_1898590327_194x288.png",
    pricetext: "89.5K students",
    investmenttext: "reached through STEM education",
  },
];

export default function ThermofisherScientificCorporateCSRPage() {
  return (
    <>
     <Navigation/>
      <Helmet>
        <title>thermo-react-app</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        {/* <Header /> */}
        <div className="mt-[57px] flex flex-col items-center">
          <ThermofisherScientificCorporateCSRCsrhero className="flex flex-col items-center gap-[49px] self-stretch" />
          <ThermofisherScientificCorporateCSROurcsr className="flex items-end justify-center self-stretch bg-gray-900 py-[49px] md:py-5" />
          <div className="container-xs mt-[77px] flex flex-col gap-[35px] md:p-5">
            <div className="flex flex-col items-start gap-[81px] pb-8 md:gap-[60px] sm:gap-10 sm:pb-5">
              <Heading as="h1" className="uppercase tracking-[1.80px]">
                CSR Report
              </Heading>
              <div className="mb-[5px] ml-8 flex w-[97%] flex-col items-start gap-7 md:ml-0 md:w-full">
                <div className="flex items-start self-stretch md:flex-col">
                  <Text size="4xl" as="p" className="mt-1.5 !text-white-A700">
                    <span className="font-bold text-white-A700">Corporate Social Responsibility</span>
                    <span className="text-white-A700">&nbsp;</span>
                    <span className="font-light text-white-A700">Report</span>
                  </Text>
                  <div className="ml-[15px] flex md:ml-0">
                    <Text size="4xl" as="p" className="!text-white-A700">
                      2023
                    </Text>
                  </div>
                  <div className="ml-[50px] flex w-[45%] items-center gap-4 bg-black-900_4c md:ml-0 md:w-full sm:flex-col">
                    <div className="flex flex-col items-center bg-red-A700 p-2.5 sm:p-5">
                      <Img
                        src="images/img_pdf_svgrepo_com_white_a700.svg"
                        alt="pdfsvgrepocom"
                        className="h-[32px] w-[32px]"
                      />
                    </div>
                    <Text as="p" className="mb-3.5 self-end !text-white-A700 sm:p-5">
                      <span className="text-white-A700">Thermo Fisher Scientific&nbsp;</span>
                      <span className="font-normal text-white-A700">: CSR Annual Report 2023</span>
                    </Text>
                  </div>
                </div>
                <Text size="xl" as="p" className="w-full leading-[30px] !text-white-A700">
                  Our Corporate Social Responsibility (CSR) reports are available to provide further detail to our CSR
                  Programs and the progress we make each year. You can download current and previous years reports in
                  PDF format below.
                </Text>
                <div className="flex w-[33%] items-start justify-between gap-5 md:w-full">
                  <div className="flex items-start gap-4">
                    <Text size="xl" as="p" className="mt-1 !text-white-A700">
                      2021 Reports
                    </Text>
                    <Img src="images/img_arrow_right.svg" alt="arrowright" className="h-[36px]" />
                  </div>
                  <div className="flex items-start gap-4">
                    <Text size="xl" as="p" className="!text-white-A700">
                      2022 Reports
                    </Text>
                    <Img src="images/img_arrow_right.svg" alt="arrowright" className="h-[16px]" />
                  </div>
                </div>
                <div className="flex flex-col gap-[0.5px] self-stretch rounded bg-indigo-900">
                  {[...Array(1)].map((d, index) => (
                    <ThermofisherScientificCorporateCSRColumnreadmore
                      ouresg="Our ESG Reporting Hub"
                      findoutmore="Find out more about Thermofisher ESG hub"
                      readmoretext="Explore ESG Hub"
                      key={"listouresg" + index}
                      className="flex flex-1 flex-col pt-8 sm:pt-5"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-12">
              <Heading as="h2" className="uppercase tracking-[1.80px]">
                HIGHLIGHTS
              </Heading>
              <div className="flex gap-[27px] self-stretch md:flex-col">
                {data.map((d, index) => (
                  <ThermofisherScientificCorporateCSRColumn13
                    {...d}
                    key={"list13Billion" + index}
                    className="flex w-full flex-col items-start gap-[21px]"
                  />
                ))}
              </div>
            </div>
          </div>
          <ThermofisherScientificCorporateGenericTemplateSeconDiversityand
            sectiontitle="Strategic Framework"
            className="mt-20 flex flex-col items-center self-stretch bg-gray-100_01 py-[35px] sm:py-5"
          />
          <div className="container-xs mt-[125px] md:p-5">
            <div className="flex flex-col items-start gap-[50px]">
              <Heading as="h2" className="uppercase tracking-[1.80px]">
                Diversity & inclusion
              </Heading>
              <ThermofisherScientificCorporateCSRDiversityand className="self-stretch pb-[30px] sm:pb-5" />
            </div>
          </div>
          <ThermofisherScientificCorporateCSRCorporate className="mt-[125px] flex flex-col items-center gap-[50px] self-stretch" />
          <ThermofisherScientificCorporateCSREthics className="mt-[77px] flex items-center justify-center self-stretch bg-white-A700" />
          <ThermofisherScientificCorporateCSREnvironment className="mt-20 flex flex-col items-center gap-10 self-stretch" />
          <ThermofisherScientificCorporateCSRClimatenature className="mx-auto mt-10 flex w-full max-w-[1240px] items-center justify-center md:flex-col md:p-5" />
        </div>
        <Footer className="mt-[129px] bg-gray-800" />
      </div>
    </>
  );
}
