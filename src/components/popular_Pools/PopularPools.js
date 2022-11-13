import React, { useState, useEffect } from "react";
import SinglePopularPool from "./SinglePopularPool";
import "./popularPools.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import API from "../../API";

const PopularPools = () => {
  const [show, setShow] = useState(false);
  const [popularPools, setPopularPools] = useState([]);

  useEffect(() => {
    const fetchPopularPools = async () => {
      try {
        const { data } = await API.get("publishPool");
        setPopularPools(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPopularPools();
  });
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <section className="popularPools">
        <div className="container">
          <div className="mask">
            <h2 data-aos="zoom-in" data-aos-duration="1000">
              Our Popular and Latest Pools
            </h2>
            <div className="row popularPoolsRow">
              <SinglePopularPool GoingFrom="San Francisco" GoingTo="San Jose" />
              <SinglePopularPool
                GoingFrom="Livermore"
                GoingTo="San Francisco"
              />
              <SinglePopularPool GoingFrom="Danville" GoingTo="Livermore" />
              <SinglePopularPool GoingFrom="San Jose" GoingTo="Albany" />
            </div>
            {show ? (
              <div>
                <div className="row popularPoolsRow">
                  <SinglePopularPool GoingFrom="San Mateo" GoingTo="Belmont" />
                  <SinglePopularPool GoingFrom="Fremont" GoingTo="Marin" />
                  <SinglePopularPool GoingFrom="Marin" GoingTo="Concord" />
                  <SinglePopularPool GoingFrom="Richmond" GoingTo="Gilroy" />
                </div>
              </div>
            ) : null}

            <div className="see-more">
              <Link to="">
                <button
                  className="btn btn-primary"
                  onClick={() => setShow(!show)}
                >
                  {show ? "See Less" : "See More"}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularPools;
