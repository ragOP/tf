import React from "react";
import { Text, Heading } from "./..";

export default function ThermofisherScientificCorporateCSROurcsr({
  title = "OUR CSR COMMITMENT",
  description = "Our CSR strategy supports our success as we continue to create a great place to work for our colleagues, provide high-quality products for our customers, deliver strong returns for our shareholders, make a in our and reduce our impact on the environment ",
  ...props
}) {
  return (
    <div {...props}>
      <div className="container-xs mt-2 flex flex-col items-start gap-9 md:p-5">
        <Heading as="h6" className="uppercase tracking-[1.80px] !text-teal-100">
          {title}
        </Heading>
        <Text size="xl" as="p" className="w-full leading-[30px] !text-white-A700">
          {description}
        </Text>
      </div>
    </div>
  );
}
