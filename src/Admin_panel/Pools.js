import React from "react";
import { useEffect, useState } from "react";
import SearchedCard from "../components/Search/SearchedCard";
import API from "../API";

const Pools = () => {
  const [Pools, setPools] = useState([]);
  useEffect(() => {
    const getPublishPools = async () => {
      try {
        const { data } = await API.get("publishPool");
        setPools(data);
      } catch (err) {
        console.log(err);
      }
    };
    getPublishPools();
  }, []);
  return (
    <div className="col-md-9 userProfile-main">
      <div className="container">
        <h2>Total Pools</h2>
        {Pools.map((Pool, index) => {
          const { goingfrom, goingto, date, name } = Pool;
          return (
            <SearchedCard
              goingfrom={goingfrom}
              goingto={goingto}
              date={date}
              name={name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Pools;
