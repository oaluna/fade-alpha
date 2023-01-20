import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="aboutUs">
      <div className="cover"></div>
      <div className="container">
        <h1 className="text-center">About Us</h1>
        <h3>
          Welcome To <strong>Fade</strong>
        </h3>
        <p>
          <strong>We are a carpool-oriented ride-sharing application.</strong>
          We aim to reduce users' daily travel cost and time by encouraging a
          regular commitment to carpooling. You can have someone take you to
          work every day, or have someone tag along so you can get on that
          carpool lane, and save all that time wasted sitting in rush hour
          traffic. <br /> <br />
          We understand that safety is of upmost importance when it comes to
          ride-sharing. That is why we encourage drivers building trusting,
          professional relationships with their Riders, and vice-versa.
        </p>
        <h5>How it Works</h5>
        <ul>
          <li>Enter your Itinerary</li>
          <li>Get matched with the closest matching route</li>
          <li>Enjoy a traffic congestion-free life.</li>
        </ul>
        <p>
          This app is still in the development phase, so stay tuned with more
          updates as we prepare a release candidate!
        </p>
        <p
          className="my-5 p-5"
          style={{ fontWeight: "bold", textAlign: "center" }}
        >
          <img src="images/fade-logo-alt.png" alt="logo" />
          <br />
          <br />
          <span className="lastLine">Have a nice day !</span>
        </p>
      </div>
    </section>
  );
};

export default About;
