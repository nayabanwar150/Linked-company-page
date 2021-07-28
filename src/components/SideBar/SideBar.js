import React from "react";

const SideBar = () => {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Pages people also viewed</h3>
        </div>
        <div className="company-suggestions-details mx-3">
          <div className="row">
            <div className="col-2 company_small_logo">
              <img
                src={`${process.env.PUBLIC_URL}/notion.png`}
                height="50"
                width="50"
              />
            </div>
            <div className="col-10 company_small_details ps-4">
              <h5>Notion</h5>
              <p>Computer Software</p>
              <p>78,054 followers</p>
              <button className="btn btn-info">+ Follow</button>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-2 company_small_logo">
              <img
                src={`${process.env.PUBLIC_URL}/sktech.jpeg`}
                height="50"
                width="50"
              />
            </div>
            <div className="col-10 company_small_details ps-4">
              <h5>Sketch</h5>
              <p>Computer Software</p>
              <p>78,054 followers</p>
              <button className="btn btn-info">+ Follow</button>
            </div>
          </div>
          <hr />
          <div className="text-center">
            <a href="#">See all similar pages</a>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
