import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import ThermofisherScientificCorporateGenericTemplateSecon from "pages/ThermofisherScientificCorporateGenericTemplateSecon";
import ThermofisherScientificCorporateCSR from "pages/ThermofisherScientificCorporateCSR";
import ChangesThermofisherScientificCorporateAbout from "pages/ChangesThermofisherScientificCorporateAbout";
import FinalOp1InvestorsStockPricetopright from "pages/FinalOp1InvestorsStockPricetopright";
import ThermofisherScientificCorporateNewsroom from "pages/ThermofisherScientificCorporateNewsroom";
import Homepage from "pages/Homepage";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Homepage /> },
    { path: "*", element: <NotFound /> },
    {
      path: "thermofisherscientificcorporategenerictemplatesecon",
      element: <ThermofisherScientificCorporateGenericTemplateSecon />,
    },
    {
      path: "Homepage",
      element: <Homepage />,
    },
    {
      path: "thermofisherscientificcorporatecsr",
      element: <ThermofisherScientificCorporateCSR />,
    },
    {
      path: "changesthermofisherscientificcorporateabout",
      element: <ChangesThermofisherScientificCorporateAbout />,
    },
    {
      path: "finalop1investorsstockpricetopright",
      element: <FinalOp1InvestorsStockPricetopright />,
    },
    {
      path: "thermofisherscientificcorporatenewsroom",
      element: <ThermofisherScientificCorporateNewsroom />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
