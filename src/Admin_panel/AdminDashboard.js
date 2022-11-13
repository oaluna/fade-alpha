import React, { useState, useEffect } from "react";

import "./Admin_panel.css";
import PoolStatisticsApi from "./PoolStatisticsApi";
import RequestPools from "./RequestPools";
import API from "../API";

const AdminDashboard = () => {
  const [RidersLength, setRidersLength] = useState(0);
  const [completedPools, setCompletedPools] = useState(0);
  const [cancelledPools, setCancelledPools] = useState(0);
  const [runningPools, setRunningPools] = useState(0);
  const [inactivePools, setInactivePools] = useState([]);

  useEffect(() => {
    const getStatistics = async () => {
      try {
        const { data } = await API.get("/publishPool");
        setRidersLength(data.length);
        console.log(`Riders Length: ${data.length}`);

        // completed Pools
        const completedPools = data.filter((Pool) => {
          return Pool.status === "Completed";
        });
        setCompletedPools(completedPools.length);
        console.log(`Completed Pools: ${completedPools.length}`);

        // Rinning Pools
        const runningPools = data.filter((Pool) => {
          return Pool.status === "Active";
        });
        setRunningPools(runningPools.length);
        console.log(`Completed Pools: ${runningPools.length}`);

        // Cancelled Pools
        const cancelledPools = data.filter((Pool) => {
          return Pool.status === "Cancelled";
        });
        setCancelledPools(cancelledPools.length);
        console.log(`Completed Pools: ${cancelledPools.length}`);

        //total Riders
        // const totalRiders = data.map((Pool) => {
        //   return Pool.PoolrId;
        // }

        // function to filter inactive Pools
        const filterInactivePools = data.filter((Pool) => {
          return Pool.status === "Inactive";
        });
        setInactivePools(filterInactivePools);
      } catch (error) {
        console.log(error);
      }
    };
    getStatistics();

    // get admin dashboard route when user login
    const getAdminDashboard = async () => {
      const { data } = await API.get("user/user-dashboard", {
        headers: {
          token: localStorage.getItem("authToken"),
        },
      });
      // alert(data);
    };
    getAdminDashboard();
  }, [RidersLength]);

  // statistics api
  const StatisticsApi = [
    {
      id: "1",
      title: "Total Riders",
      value: 30,
      cardIconbg: "#2f978a",
      statisticColbg: "#5ca199",
      icon: "fas fa-user",
    },
    {
      id: "2",
      title: "Total Drivers",
      value: `${RidersLength}`,
      cardIconbg: "#C63535",
      statisticColbg: "#E74E52",
      icon: "fas fa-user-tie",
    },
    {
      id: "3",
      title: "Total Revenue",
      value: 46,
      cardIconbg: "#329C52",
      statisticColbg: "#3AAD59",
      icon: "fas fa-dollar-sign",
    },
    {
      id: "4",
      title: "Total Pools",
      value: 45,
      cardIconbg: "#2f978a",
      statisticColbg: "#5ca199",
      icon: "fas fa-car",
    },
    {
      id: "5",
      title: "Cancelled Pool",
      value: `${cancelledPools}`,
      cardIconbg: "#C63535",
      statisticColbg: "#E74E52",
      icon: "fas fa-times",
    },
    {
      id: "6",
      title: "Completed Pools",
      value: `${completedPools}`,
      cardIconbg: "#329C52",
      statisticColbg: "#3AAD59",
      icon: "fas fa-check",
    },
    {
      id: "7",
      title: "Running Pools",
      value: `${runningPools}`,
      cardIconbg: "#C5803E",
      statisticColbg: "#FBA95A",
      icon: "fas fa-car-side",
    },
  ];

  return (
    <div className="col-md-9 adminProfile-main">
      <div className="">
        <h2>Pools Statistics</h2>
        <div className="row">
          {StatisticsApi.map((statistic) => {
            const { id, title, value, statisticColbg, cardIconbg, icon } =
              statistic;
            return (
              <div className="col-md-4" key={id}>
                <PoolStatisticsApi
                  title={title}
                  value={value}
                  cardIconbg={cardIconbg}
                  statisticColbg={statisticColbg}
                  icon={icon}
                />
              </div>
            );
          })}
        </div>
        {inactivePools.map((Pool) => {
          const {
            _id,
            goingfrom,
            goingto,
            name,
            passenger,
            // status,
            date,
            email,
          } = Pool;
          return (
            <RequestPools
              id={_id}
              goingfrom={goingfrom}
              goingto={goingto}
              name={name}
              passenger={passenger}
              date={date}
              email={email}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AdminDashboard;
