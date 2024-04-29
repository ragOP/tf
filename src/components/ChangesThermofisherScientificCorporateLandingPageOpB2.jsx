import React from "react";
import {  Img, Slider, Text, Button ,Heading} from '../components'

export default function ChangesThermofisherScientificCorporateLandingPageOpB2({ readmore, imageOne, ...props }) {
  return (
    <div {...props}>
      <div className="flex flex-col self-start items-start mb-0.5">
        {!!readmore ? (
          <Heading as="h1" className="!text-gray-800 tracking-[0.64px] uppercase">
            {readmore}
          </Heading>
        ) : null}
        {!!imageOne ? <Img src={imageOne} alt="image_one" className="h-[18px] mt-[-16px]" /> : null}
      </div>
    </div>
  );
}
