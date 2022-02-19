import React from "react";
import App from "../components/App.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import SearchPage from "../Pages/SearchPage.js";
import AboutUs from "../Pages/AboutUs.js";
import SearchRide from "../Pages/SearchRide.js";
import ContactUs from "../Pages/ContactUs.js";
import Error404 from "../Pages/Error404.js";
import Works from "../Pages/Works.js";
import UserDashboardPage from "../Pages/userInterface-pages/UserDashboardPage.js";
import UserLogoutPage from "../Pages/userInterface-pages/UserLogoutPage.js";
import UserPublishRidePage from "../Pages/userInterface-pages/UserPublishRidePage.js";
import UserRideRequestPage from "../Pages/userInterface-pages/UserRideRequestPage.js";
import UserProfilePage from "../Pages/userInterface-pages/UserProfilePage.js";
import PublishRidePage from "../Pages/PublishRidePage.js";

function Routes() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/home" component={App} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/publishride" component={PublishRidePage} />
          <Route path="/search" component={SearchRide} />
          <Route path="/availablerides" component={SearchPage} />
          <Route path="/about" component={AboutUs} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/howitworks" components={Works} />

          {/* User Interface */}
          <Route path="/user-dashboard" exact component={UserDashboardPage} />
          <Route path="/user-dashboard/logout" component={UserLogoutPage} />
          <Route path="/user-dashboard/profile" component={UserProfilePage} />
          <Route
            path="/user-dashboard/publishride"
            component={UserPublishRidePage}
          />
          <Route
            path="/user-dashboard/riderequest"
            component={UserRideRequestPage}
          />

          {/* Error page */}
          <Route component={Error404} />
        </Switch>
      </Router>
    </>
  );
}

export default Routes;
