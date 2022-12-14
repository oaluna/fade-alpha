import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./poolServices.css";
import servicesApi from "./serviceApi";
import AOS from "aos";

const PoolServices = () => {
  const [services, setServices] = useState(servicesApi);
  return (
    <>
      <section className="PoolServiceContainer">
        <div className="Pool-services container">
          <div className="row PoolServicesRow">
            {services.map((service, index) => {
              const { icon, heading, text, linkTo } = service;
              return (
                <div
                  className="col-12 col-md-4 PoolServicesRowCol"
                  key={index}
                  data-aos="zoom-in"
                  data-aos-duration="1700"
                >
                  <i className={`serviceIcon ${icon}`} />
                  <Link to={linkTo}>
                    <h4>{heading}</h4>
                  </Link>
                  <p className="text-white">{text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default PoolServices;
