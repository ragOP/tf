import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div style={{ height: "100vh", padding: "20px", backgroundColor: "#232323", color: "white" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Homepage</h1>
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        This project was generated By{" "}
        <a href="https://www.dhiwise.com" style={{ color: "#87CEFA", textDecoration: "none" }}>
          Dhiwise
        </a>
        . Quickly use below links to navigate through all pages.
      </p>
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/thermofisherscientificcorporategenerictemplatesecon"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            ThermofisherScientificCorporateGenericTemplateSecon
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/thermofisherscientificcorporatecsr" style={{ color: "#87CEFA", textDecoration: "none" }}>
            ThermofisherScientificCorporateCSR
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/changesthermofisherscientificcorporateabout" style={{ color: "#87CEFA", textDecoration: "none" }}>
            ChangesThermofisherScientificCorporateAbout
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/finalop1investorsstockpricetopright" style={{ color: "#87CEFA", textDecoration: "none" }}>
            FinalOp1InvestorsStockPricetopright
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/thermofisherscientificcorporatenewsroom" style={{ color: "#87CEFA", textDecoration: "none" }}>
            ThermofisherScientificCorporateNewsroom
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
