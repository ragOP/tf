import React from "react";
import { Img, Text } from "./..";

export default function FinalOp1InvestorsStockPriceTopRightColumnreconcili({
  text = "Reconciliation and Financial Package",
  downloadbuttontext = "Download PDF",
  ...props
}) {
  return (
    <div {...props}>
      <Text size="xl" as="p" className="w-full !font-medium leading-7">
        {text}
      </Text>
      <div className="flex items-start gap-2 self-end">
        <Text size="s" as="p" className="text-right">
          {downloadbuttontext}
        </Text>
        <Img src="images/img_download.svg" alt="download_pdf" className="h-[23px]" />
      </div>
    </div>
  );
}
