import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaInvision,
  FaPinterest,
  FaTwitterSquare,
  FaYoutube,
} from "react-icons/fa";
import FooterLinks from "./FooterLinks";

const FooterCol = [
  {
    link1: "How it works",
    link1url: "/howitworks",
    link2: "About Us",
    link2url: "/about",
    link3: "Contact Us",
    link3url: "/contact",
    link4: "Help",
    link4url: "/",
  },
  {
    link1: "Blogs",
    link1url: "/",
    link2: "Privacy and Policy",
    link2url: "/",
    link3: "Publish Pool",
    link3url: "/publishPool",
    link4: "Book a Pool",
    link4url: "/search",
  },
];

const Footer = () => {
  return (
    <section className="Footer">
      <div className="">
        <div className="row FooterRow d-flex justify-content-around">
          <FooterLinks FooterCol={FooterCol} />
          <div
            className="col-12 col-md-6 col-lg-4 FooterSocialCol"
            // data-aos="zoom-in"
            // data-aos-duration="1000"
          >
            <h5>Connect with us</h5>
            <div className="social-links">
              <FaFacebook />
              <FaPinterest />
              <FaInvision />
              <FaTwitterSquare />
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>
      <div className="footerCopyright">
        <img
          src="https://res.cloudinary.com/dgdnpkfun/image/upload/v1662069198/logo_lq7li3.svg"
          alt="oscarluna"
        />{" "}
        <h6>Copyright &copy; 2022 by Oscar Armando Luna</h6>
      </div>
    </section>
  );
};

export default Footer;
