import React from "react";
import AdminNavbar from "../../Admin_panel/AdminNavbar";
import SideBar from "../../Admin_panel/SideBar";
import Pools from "../../Admin_panel/Pools";
import "../../user_interface/userInterface.css";

const AdminPoolsPage = () => {
  return (
    <section className="user-dashboard">
      <AdminNavbar />
      <div className="container">
        <div className="row userDashboard-row">
          <SideBar />
          <Pools />
        </div>
      </div>
    </section>
  );
};

export default AdminPoolsPage;
