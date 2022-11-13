import React, { useEffect } from "react";
import "../../style/publishPoolForm.css";
import PublishPoolFormCard from "./PublishPoolFormCard";
import AOS from "aos";

const PublishPoolForm = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <section
        className="publish-Pool-container"
        data-aos="fade-down"
        data-aos-duration="1200"
      >
        <div className="container d-flex justify-content-end">
          <div className="publish-Pool-form ">
            <PublishPoolFormCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default PublishPoolForm;
