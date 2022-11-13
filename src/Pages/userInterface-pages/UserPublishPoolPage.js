import React from "react";
import UserInterfaceNavbar from "../../user_interface/UserInterfaceNavbar";
import Sidebar from "../../user_interface/Sidebar";
import "../../user_interface/userInterface.css";
import UserPublishPool from "../../user_interface/UserPublishPool";

const UserPublishPoolPage = () => {
  return (
    <section className="user-dashboard">
      <UserInterfaceNavbar />
      <div className="container">
        <div className="row userDashboard-row">
          <Sidebar />
          <UserPublishPool />
        </div>
      </div>
    </section>
  );
};

export default UserPublishPoolPage;
