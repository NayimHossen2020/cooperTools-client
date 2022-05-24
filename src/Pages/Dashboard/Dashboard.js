import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import PageTitle from "./../Shared/PageTitle";

const Dashboard = () => {
  return (
    <div className="my-10 container mx-auto ">
      <PageTitle title="Dashboard"></PageTitle>

      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ml-5">
          <h2 className="text-3xl font-bold text-primary">Dashboard</h2>
          <Outlet />
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><NavLink to="/dashboard">My Order</NavLink></li>
            <li><NavLink to="/dashboard/addReview">Add Review</NavLink></li>
            <li><NavLink to="/dashboard/profile">Profile</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
