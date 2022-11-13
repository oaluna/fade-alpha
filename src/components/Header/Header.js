import React, { useEffect } from "react";
import HeaderPoolSearch from "./HeaderPoolSearch";
import AOS from "aos";

const Header = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section>
      <div className="header">
        <div className="row mainRow d-flex flex-col justify-content-center align-items-center">
          <div className="col-12 col-md-6 mainRowCol1">
            <HeaderPoolSearch />
          </div>
          <div
            className="col-12 col-md-6 mainRowCol2"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            <lottie-player
              className="lottiePlayer"
              src="https://lottie.host/a4078a5b-fd4f-4d4b-be26-83fcf9411939/mwK2zauT5m.json"
              background="transparent"
              speed="1"
              style={{width:"100%", maxWidth: "900px", height: "500px", marginTop: "-5vh" }}
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
      </div>
      <div style={{}}>
        <svg
          id="shape"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 240"
          style={{
            marginTop: "-9%",
            zIndex: "0",

            zindex: "1",
          }}
        >
          <path
            fill="transparent"
            style={{ maskMode: "var(--gradient)" }}
            fill-opacity="1"
            d="M0,32L120,74.7C240,117,480,203,720,218.7C960,235,1200,181,1320,154.7L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Header;
