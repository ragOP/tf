import React from "react";
import { Img } from "./..";

export default function ThermofisherScientificCorporateCSRClimatenature({ ...props }) {
  return (
    <div {...props} className="container-xs">
      <div className="w-full">
        <Img
          src="images/img_greener_future_carousel.png"
          alt="greenerfuture"
          className="h-[266px] w-full object-cover md:h-auto"
        />
      </div>
      <div className="w-full">
        <Img
          src="images/img_csr_overview_page_image.png"
          alt="csroverview"
          className="h-[266px] w-full object-cover md:h-auto"
        />
      </div>
      <div className="w-full">
        <Img src="images/img_image_04_1.png" alt="image04one" className="h-[266px] w-full object-cover md:h-auto" />
      </div>
    </div>
  );
}
