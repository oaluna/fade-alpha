import React from "react";
import Header from "./Header/Header";
import Navbar from "./Header/Navbar";
import PublishPool from "./publish_Pool/PublishPool";
import PoolServices from "./Pool_service/PoolServices";
import PopularPools from "./popular_Pools/PopularPools";
import Footer from "./footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <PoolServices />
      <PublishPool />
      <PopularPools />
      <Footer />
    </>
  );
}

export default App;
