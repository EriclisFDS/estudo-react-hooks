import React from "react";
import PageTitle from "../../components/layout/PageTitle";

function NotFound(param) {
  return (
    <div className="Home">
      <PageTitle error
            title="404"
            subtitle="Not Found" 
      ></PageTitle>
    </div>
  );
}

export default NotFound;