import React from "react";

const CompanyDetails = () => {
  return (
    <div className="mb-3">
      <div className="card">
        <div className="card-img company_image">
          <img src={`${process.env.PUBLIC_URL}/company.jpeg`} />
        </div>
        <div className="company_logo">
          <img src={`${process.env.PUBLIC_URL}/figma.jpeg`} />
        </div>
        <div className="card-body container">
          <h1 className="card-title">Figma</h1>
          <p className="card-text">
            A design platform for teams who build products together.
          </p>
          <p className="company_more_info">
            Design San Francisco, CA 200,096 followers
          </p>
          <a href="#">See all 516 employees on LinkedIn</a>
          <div className="company_actions_btns">
            <button className="btn btn-primary">+ Follow</button>
            <button className="btn btn-outline-primary">Visit Website</button>
            <button className="btn btn-info">More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
