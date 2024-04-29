import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../pages/Style.css";
import { Img, Text, Button } from "../components";
import MainComponent from "./MainComponent";

const Navigation = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const submenuRef = useRef(null);
  const blueDivStyle = {
    backgroundColor: "white",

    // width: '1400px', // Example width
    height: "330px", // Example height
    padding: "20px", // Example padding
    color: "white", // Example text color
    borderRadius: "10px", // Example border radius
    textAlign: "center", // Example text alignment
  };
  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  const handleClickOutside = (event) => {
    if (submenuRef.current && !submenuRef.current.contains(event.target)) {
      setShowSubMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    
    <div>
      <header>
        <div className="bg-white-A700">
          <div className="flex md:flex-col justify-between w-full gap-5 mx-auto md:p-5 max-w-[1404px]">
            <div className="h-[80px] w-[12%] relative">
              <Link to="/homepage">
                <Img
                  src="images/img_logo.svg"
                  alt="logo_one"
                  className="justify-center h-[28px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                />
              </Link>
              <Link to="/homepage">
                <Img
                  src="images/img_thermo_fisher_scientific.png"
                  alt="thermofisher"
                  className="justify-center h-[80px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                />
              </Link>
            </div>

            <div className="flex md:flex-col justify-center items-center gap-[42px]">
              <nav className="navbar">
                <div className="navdiv">
                  <button onClick={toggleSubMenu}>ABOUT</button>
                  {showSubMenu && (
                    <div ref={submenuRef}>
                      <div className="submenu">
                      
                     <MainComponent/>
                      </div>
                    </div>
                  )}
                  <Link to="/thermofisherscientificcorporatecsr">
                    CORPORATE SOCIAL RESPONSIBILITY
                  </Link>
                  <Link to="/finalop1investorsstockpricetopright">
                    INVESTORS
                  </Link>
                  <Link to="/thermofisherscientificcorporatenewsroom">
                    NEWSROOM
                  </Link>
                  <Img
                    src="images/img_search.svg"
                    alt="search_one"
                    className="h-[16px] w-[16px]"
                  />
                  <Button size="xs" shape="round" className="min-w-[137px]">
                    Thermofisher.com
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navigation;
