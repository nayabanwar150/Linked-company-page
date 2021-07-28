import React from "react";

const Overview = () => {
  return (
    <div>
      <p>
        Figma is a design platform for teams who build products together. Born
        on the Web, Figma helps teams create, share, test, and ship better
        designs from start to finish. Whether it’s consolidating tools,
        simplifying workflows, or collaborating across teams and time zones,
        Figma makes the design process faster, more efficient, and fun while
        keeping everyone on the same page.
      </p>
      <div className="row container">
        <div className="col-sm-12 col-md-5 card p-3">
          <p>Contact Info</p>
          <a href="https://figma.com">figma.com</a>
        </div>
        <div className="col-md-2" />
        <div className="col-sm-12 col-md-5 card p-3">
          <p>Funding via Crunbase</p>
          <p>Series E</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
