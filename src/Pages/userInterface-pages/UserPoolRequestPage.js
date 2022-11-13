import React from "react";
import UserInterfaceNavbar from "../../user_interface/UserInterfaceNavbar";
import Sidebar from "../../user_interface/Sidebar";
import UserPoolRequest from "../../user_interface/UserPoolRequest.js";
import "../../user_interface/userInterface.css";

const UserPoolRequestPage = () => {
  return (
    <section className="user-dashboard">
      <UserInterfaceNavbar />
      <div className="container">
        <div className="row userDashboard-row">
          <Sidebar />
          <UserPoolRequest />
        </div>
      </div>
    </section>
  );
};

export default UserPoolRequestPage;
