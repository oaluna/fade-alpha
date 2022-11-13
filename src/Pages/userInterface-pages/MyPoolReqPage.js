import React from "react";
import MyPoolRequests from "../../user_interface/MyPoolRequests";
import Sidebar from "../../user_interface/Sidebar";
import UserInterfaceNavbar from "../../user_interface/UserInterfaceNavbar";
import "../../user_interface/userInterface.css";

const MyPoolReqPage = () => {
  return (
    <section className="user-dashboard">
      <UserInterfaceNavbar />
      <div className="container">
        <div className="row userDashboard-row">
          <Sidebar />
          <MyPoolRequests />
        </div>
      </div>
    </section>
  );
};

export default MyPoolReqPage;
