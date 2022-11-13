import React, { useState } from "react";
import "./PublishPool.css";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
// import AOS from "aos";

const PublishPool = () => {
  const history = useHistory();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const handleClick = () => {
    if (!user) {
      toast.info("Please Login to Publish a Pool", { position: "top-center" });
      history.push("/login");
    } else {
      history.push("/publishPool");
    }
  };
  // useEffect(() => {
  //   AOS.init();
  //   AOS.refresh();
  // }, []);
  return (
    <section className="publish-Pool">
      <div className="container" style={{ padding: 0 }}>
        <div
          className="row publish-PoolRow d-flex justify-content-center align-items-center"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className="col-12 col-md-6 publish-PoolRow-col1">
            <h2>
              <strong>Drive for Fade and save time, together.</strong>
            </h2>
            <p>
              <strong>
                Join our fleet of Fade Drivers, and help us make that morning
                commute a little more pleasant.
              </strong>{" "}
              <br />
              <br />
              Post a Pool
            </p>
            <button
              className="btn btn-outline-success"
              style={{ backgroundColor: "#0b635c", border: "none" }}
              onClick={handleClick}
            >
              Publish Your Pool
            </button>
          </div>
          <div
            className="col-12 col-md-6"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            <img
              src="images/publishRide.svg"
              alt="Publish Pool"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublishPool;
