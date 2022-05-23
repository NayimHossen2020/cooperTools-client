import React from "react";
import PageTitle from "../Shared/PageTitle";
import Banner from "../Home/Banner/Banner";
import Products from './Products';

const Home = () => {
  return (
    <div>
      <PageTitle title="Home"></PageTitle>
      <Banner />
      <Products/>
    </div>
  );
};

export default Home;
