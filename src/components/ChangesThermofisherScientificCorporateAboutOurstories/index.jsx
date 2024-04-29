import React from "react";
import { Text, Img, Slider } from "./..";

export default function ChangesThermofisherScientificCorporateAboutOurstories({
  associatetext,
  developmenttext = "Developing scientific breakthroughs as part of the Graduate Leadership Development Program.",
  myworkisatext,
  bornalmosttext = "Born almost three months premature, I grew up passionate about healthcare and cutting-edge technologies to create better health outcomes. My attraction to Thermo Fisher Scientific was simple: the chance to make a positive impact through problem solving.",
  readmoretext = "Read full story",
  ...props
}) {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <div {...props}>
      <div className="flex w-full self-stretch md:flex-col">
        <Slider
          autoPlay
          autoPlayInterval={2000}
          responsive={{ 0: { items: 1 }, 550: { items: 1 }, 1050: { items: 2 } }}
          disableDotsControls
          activeIndex={sliderState}
          onSlideChanged={(e) => {
            setSliderState(e?.item);
          }}
          ref={sliderRef}
          items={[...Array(6)].map(() => (
            <React.Fragment key={Math.random()}>
              <div className="mx-2.5 flex w-[49%] justify-center gap-2 md:mx-0 md:w-full md:flex-col">
                <div className="relative h-[367px] flex-1 md:h-auto md:w-full md:flex-none md:self-stretch">
                  <Img
                    src="images/img_shutterstock_413063374_367x516.png"
                    alt="shutterstock"
                    className="h-[367px] w-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col items-start justify-end gap-[19px] bg-indigo-900_b2 p-6 sm:p-5">
                    <Text as="p" className="ml-1.5 mt-[231px] !text-white-A700 md:ml-0">
                      <span className="font-bold text-white-A700">Ify</span>
                      <span className="text-white-A700">&nbsp;</span>
                      <span className="font-light text-white-A700">
                        | Associate, Graduate Leadership Development Program
                      </span>
                    </Text>
                    <Text as="p" className="ml-1.5 w-full leading-6 !text-white-A700 md:ml-0">
                      {developmenttext}
                    </Text>
                  </div>
                </div>
                <div className="h-[367px] w-[24px] bg-indigo-900" />
                <div className="h-[367px] w-[16px] bg-indigo-900_cc" />
                <div className="h-[367px] w-[8px] bg-indigo-900_7f" />
              </div>
            </React.Fragment>
          ))}
        />
      </div>
      <div className="flex h-[6px] w-[54px]" />
    </div>
  );
}
