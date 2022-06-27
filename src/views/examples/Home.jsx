import React from "react";
import PageTitle from "../../components/layout/PageTitle";

function Home(param) {
  return (
    <div className="Home">
        <PageTitle
            title="Módulo Hooks"
            subtitle="Hooks são uma nova adição ao React 16.8." 
        ></PageTitle>
    </div>
  );
}

export default Home;