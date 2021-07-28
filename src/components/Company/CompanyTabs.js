import React, { useState } from "react";
import Overview from "./Tabs/Overview";
import About from "./Tabs/About";
import Products from "./Tabs/Products";
import Posts from "./Tabs/Posts";
import Jobs from "./Tabs/Jobs";
import People from "./Tabs/People";
import Videos from "./Tabs/Videos";

const CompanyTabs = () => {
  const [atciveTab, setActiveTab] = useState("Overview");
  const tabs = [
    "Overview",
    "About",
    "Products",
    "Posts",
    "Jobs",
    "People",
    "Videos",
  ];

  const handleTabs = (tab) => {
    console.log(tab);
    setActiveTab(tab);
  };

  return (
    <>
      <div className="tabs card py-2">
        <ul>
          {tabs.map((tab) => {
            return (
              <li
                key={tab}
                className={atciveTab === tab ? "active_tab" : ""}
                onClick={() => {
                  handleTabs(tab);
                }}
              >
                {tab}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="card my-3 p-3">
        {
          {
            Overview: <Overview />,
            About: <About />,
            Products: <Products />,
            Posts: <Posts />,
            Jobs: <Jobs />,
            People: <People />,
            Videos: <Videos />,
          }[atciveTab]
        }
      </div>
    </>
  );
};

export default CompanyTabs;
