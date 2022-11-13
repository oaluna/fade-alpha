import React from "react";
import App from "../components/App.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import SearchPage from "../Pages/SearchPage.js";
import AboutUs from "../Pages/AboutUs.js";
import SearchPool from "../Pages/SearchPool.js";
import ContactUs from "../Pages/ContactUs.js";
import Error404 from "../Pages/Error404.js";
import Works from "../Pages/Works.js";
import UserDashboardPage from "../Pages/userInterface-pages/UserDashboardPage.js";
import UserLogoutPage from "../Pages/userInterface-pages/UserLogoutPage.js";
import UserPublishPoolPage from "../Pages/userInterface-pages/UserPublishPoolPage.js";
import UserPoolRequestPage from "../Pages/userInterface-pages/UserPoolRequestPage.js";
import UserProfilePage from "../Pages/userInterface-pages/UserProfilePage.js";
import PublishPoolPage from "../Pages/PublishPoolPage.js";
import UserProfileEditPage from "../Pages/userInterface-pages/UserProfileEditPage.js";
import AdminPanel from ".././Pages/Admin_panel_pages/AdminDashboardPage";
import AdminProfilePage from ".././Pages/Admin_panel_pages/AdminProfilePage";
import AdminRidersPage from ".././Pages/Admin_panel_pages/AdminRidersPage";
import AdminPoolsPage from ".././Pages/Admin_panel_pages/AdminPoolsPage";
import AdminLogout from "../Admin_panel/AdminLogout";
import AdminDriversPage from "../Pages/Admin_panel_pages/AdminDriversPage.js";
import BookingPool from "../components/Search/BookingPool.js";
import MyPoolReqPage from "../Pages/userInterface-pages/MyPoolReqPage.js";
import FilleUploadTest from "../components/test/FilleUploadTest.js";
import MessagingPage from "../Pages/userInterface-pages/MessagingPage.js";
import test2 from "../components/test/test2.js";

function Routes() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/home" component={App} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/publishPool" component={PublishPoolPage} />
          <Route path="/search" component={SearchPool} />
          <Route path="/availablePools" exact component={SearchPage} />
          <Route path="/availablePools/book" component={BookingPool} />
          <Route path="/about" component={AboutUs} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/howitworks" component={Works} />
          {/* <Route path="/formtest" component={Forms} /> */}

          {/* User Interface */}
          <Route path="/user-dashboard" exact component={UserDashboardPage} />
          <Route path="/user-dashboard/logout" component={UserLogoutPage} />
          <Route
            path="/user-dashboard/profile"
            exact
            component={UserProfilePage}
          />
          <Route
            path="/user-dashboard/publishPool"
            component={UserPublishPoolPage}
          />
          <Route
            path="/user-dashboard/Poolrequest"
            component={UserPoolRequestPage}
          />
          <Route
            path="/user-dashboard/profile/edit/:id"
            component={UserProfileEditPage}
          />
          <Route
            path="/user-dashboard/my-Pool-requests"
            component={MyPoolReqPage}
          />

          <Route path="/user-dashboard/messaging" component={MessagingPage} />

          {/* <Route path="/test" component={Test} /> */}
          <Route path="/upload" component={FilleUploadTest} />
          <Route path="/test2" component={test2} />

          {/* Admin Interface */}
          <Route path="/admin-dashboard" exact component={AdminPanel} />
          <Route path="/admin-dashboard/profile" component={AdminProfilePage} />
          <Route path="/admin-dashboard/Riders" component={AdminRidersPage} />
          <Route path="/admin-dashboard/Pools" component={AdminPoolsPage} />
          <Route path="/admin-dashboard/drivers" component={AdminDriversPage} />
          <Route path="/admin-dashboard/logout" component={AdminLogout} />

          {/* Error page */}
          <Route component={Error404} />
        </Switch>
      </Router>
    </>
  );
}

export default Routes;
