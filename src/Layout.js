import React from "react";
import CompanyDetails from "./components/Company/CompanyDetails";
import CompanyTabs from "./components/Company/CompanyTabs";
import MainHeader from "./components/Navbar/MainHeader";
import SideBar from "./components/SideBar/SideBar";

const Layout = () => {
  return (
    <div>
      <div className="Header">
        <MainHeader />
      </div>
      <div className="container main_content mt-4">
        <div className="row">
          <div className="col-sm-12 col-md-8">
            <CompanyDetails />
            <CompanyTabs />
          </div>
          <div className="col-sm-12 col-md-4">
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
