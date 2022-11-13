import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import PoolRequestCard from "./PoolRequestCard";
import AOS from "aos";
import API from "../API";

const UserDashboard = () => {
  const [userPublishPool, setUserPublishPool] = useState([]);
  const [requestedPools, setRequestedPools] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const userEmail = user.email;

  useEffect(() => {
    API.get("user/user-dashboard", {
      headers: {
        token: localStorage.getItem("authToken"),
      },
    });
    const getUserPublishPool = async () => {
      const { data } = await API.get("publishPool");
      const userPublishPools = data.filter((Pool) => {
        return Pool.email === userEmail;
      });
      setUserPublishPool(userPublishPools);
    };

    const getRequestPools = async () => {
      const { data } = await API.get("requestPool");
      setRequestedPools(data);
    };
    getUserPublishPool();
    getRequestPools();
  }, [userEmail]);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="col-md-9 userProfile-main">
      <div className="container">
        <h2 className="text-center mb-5">Your Pools</h2>
        {/* {console.log(userPublishPool)} */}
        <div className="row mb-5">
          {userPublishPool.map((Pool, index) => {
            const { goingfrom, goingto, date } = Pool;
            return (
              <div
                className="card border-success mb-3 me-3 col-5"
                style={{ maxWidth: "18rem" }}
                key={index}
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="card-header bg-transparent border-success">
                  {goingfrom} <BsArrowRight /> {goingto}
                </div>
                <div className="card-body text-success">
                  <p className="card-text">
                    You went {goingto} from {goingfrom} on {date}
                  </p>
                </div>
                <div className="card-footer bg-transparent border-success">
                  Date: {date}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {requestedPools.map((Pool, index) => {
        const {
          _id,
          PoolId,
          goingfrom,
          goingto,
          PoolStatus,
          requestStatus,
          date,
          passenger,
          publisherId,
          bookerEmail,
        } = Pool;
        return user._id === publisherId ? (
          <PoolRequestCard
            key={index}
            id={_id}
            PoolId={PoolId}
            goingfrom={goingfrom}
            goingto={goingto}
            PoolStatus={PoolStatus}
            requestStatus={requestStatus}
            date={date}
            passenger={passenger}
            bookerEmail={bookerEmail}
          />
        ) : null;
      })}
    </div>
  );
};

export default UserDashboard;
