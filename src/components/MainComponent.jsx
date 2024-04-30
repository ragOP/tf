import React, { useState } from "react";
import "./Main.css";
import { Link } from "react-router-dom";

const MainComponent = () => {
  return (
    <div className="div">
      <div className="div-2">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/848f5bbb90204763c38de89929a0f689ace379b6e1a6b388a9b5713c3cbcc03c?apiKey=ac79695e9bf24039b66fc35f3a5b9f35&"
          className="img"
          alt=""
        />
        <div className="div-3">
          <div className="div-4">
            <ColumnComponent />
            <Column2Component />
          </div>
        </div>
        <div className="div-35"></div>
      </div>
    </div>
  );
};

const ColumnComponent = () => {
  return (
    <div className="column">
      <div className="div-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/96ee973cd55ba293b58a78439e7e86156f07649adf97e781b0c3959893cb71aa?apiKey=ac79695e9bf24039b66fc35f3a5b9f35&"
          className="img"
        />
        <div className="div-6">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/45415b58623de04f7081b4e446857b8d069da9863fb42f492d604f85f34c76f9?apiKey=ac79695e9bf24039b66fc35f3a5b9f35&"
            className="img"
          />
          <p style={{ zIndex: "1000" }}>Our Mission</p>
        </div>
        <div className="div-8">
          <div className="div-9" style={{ marginRight: "80px" }}>
            Everything we do starts with our Mission: to enable our customers to
            make the world
            {/* <span style={{ fontWeight: 500, fontSize: '20px', lineHeight: '28px' }}>
              healthier, cleaner,
            </span> */}
            <br />
            <span
              style={{ fontWeight: 500, fontSize: "20px", lineHeight: "28px" }}
            >
              and safer.
            </span>
          </div>
          <div className="div-10">
            <div className="div-11"></div>
            <div className="div-12">Read More</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Column2Component = () => {
  const [openLink, setOpenLink] = useState(null);

  const toggleSubMenu = (link) => {
    setOpenLink(openLink === link ? null : link);
  };

  const handleClick = () => {
    const currentUrl = window.location.href;
    if (
      currentUrl ===
      "http://localhost:3000/changesthermofisherscientificcorporateabout"
    ) {
      window.location.reload();
    }
  };

  return (
    <div className="column-2">
      <div className="div-13">
        <div className="div-14">
          <div className="link">
            <div
              style={{ cursor: "pointer" }}
              onClick={() => toggleSubMenu("our-company")}
            >
              <NavItem
                title="Our Company"
                isOpen={openLink === "our-company"}
              />
            </div>
            {openLink === "our-company" && (
              <div className="submenu-1">
                <ul>
                  <Link
                    onClick={handleClick}
                    to="/changesthermofisherscientificcorporateabout"
                  >
                    <li>Our Mission</li>
                  </Link>
                  <Link
                    onClick={handleClick}
                    to="/changesthermofisherscientificcorporateabout"
                  >
                    <li>Our Values</li>
                  </Link>
                  <Link
                    onClick={handleClick}
                    to="/changesthermofisherscientificcorporateabout"
                  >
                    <li>Innovation</li>
                  </Link>
                </ul>
              </div>
            )}
          </div>
          <div className="link">
            <div
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              <NavItem style={{ color: "black" }} />
              <p className="txt">Our Stories</p>
            </div>
          </div>
          <div className="link">
            <div>
              <div
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <NavItem style={{ color: "black" }} />
                <p className="txt">Information Security</p>
              </div>
            </div>
          </div>
        </div>
        <div className="div-30">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/60981647a1d00dc88a921a2934ec079e21ae4977c68a1f6321dbea3d446d66b4?apiKey=ac79695e9bf24039b66fc35f3a5b9f35&"
            className="img-2"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ title, isOpen }) => {
  return (
    <div className="nav-item">
      <div className="div-15">
        <div className="div-16">
          {isOpen ? (
            <div className="div-18"></div>
          ) : (
            <div className="div-17"></div>
          )}
        </div>
        <div className="div-19">{title}</div>
      </div>
    </div>
  );
};

export default MainComponent;
