import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/Header/Navbar";
import PublishPoolForm from "../components/publish_Pool/PublishPoolForm";

const PublishPoolPage = () => {
  return (
    <>
      <Navbar />
      <PublishPoolForm />
      <Footer />
    </>
  );
};

export default PublishPoolPage;
