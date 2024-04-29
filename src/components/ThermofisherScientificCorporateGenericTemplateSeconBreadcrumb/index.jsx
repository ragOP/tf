import React from "react";
import { Text } from "./..";

export default function ThermofisherScientificCorporateGenericTemplateSeconBreadcrumb({
  investors = "Investors",
  divider = "/",
  recentacquisitions = "Recent Acquisitions",
  ...props
}) {
  return (
    <div {...props}>
      <Text size="xl" as="p" className="self-start !font-medium !text-gray-600">
        {investors}
      </Text>
      <Text size="xl" as="p" className="self-start !font-medium !text-gray-600">
        {divider}
      </Text>
      <Text size="xl" as="p" className="self-end !font-medium !text-gray-600">
        {recentacquisitions}
      </Text>
    </div>
  );
}
