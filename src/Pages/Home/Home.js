import React from "react";
import PageTitle from "../Shared/PageTitle";
import Banner from "../Home/Banner/Banner";
import Products from './Products';
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <PageTitle title="Home"></PageTitle>
      <Banner />
      <Products />
      <Reviews />
    </div>
  );
};

export default Home;
