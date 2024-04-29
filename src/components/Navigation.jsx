import React from 'react'
import { Link } from 'react-router-dom';
// import './Style.css';
import '../pages/Style.css'
import {  Img, Slider, Text, Button } from '../components'
const Navigation = () => {
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
                    {/* <a href="#">ABOUT</a> */}
                    <Link to="/changesthermofisherscientificcorporateabout">ABOUT</Link>
                    {/* {<a href="#">CORPORATE SOCIAL RESPONSIBILITY</a> */}
                    <Link to="/thermofisherscientificcorporatecsr">CORPORATE SOCIAL RESPONSIBILITY</Link>
                    {/* {<a href="#">INVESTORS</a> */}
                    <Link to="/finalop1investorsstockpricetopright">INVESTORS</Link>
                    {/* {<a href="#">NEWSROOM</a> */}
                    <Link to="/thermofisherscientificcorporatenewsroom">NEWSROOM</Link>
                    
                    <a href="#"><Text /></a>
                    <a href="#"><Text /></a>
                    <a href="#"><Text /></a>
                    <a href="#"><Text /></a>
                    <a href="#"><Text /></a>
                    <Img src="images/img_search.svg" alt="search_one" className="h-[16px] w-[16px]" />
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
  )
}

export default Navigation
