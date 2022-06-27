import React from "react";

import { useParams } from 'react-router-dom';

import PageTitle from "../../components/layout/PageTitle";

function Param(param) {

    const { id } = useParams();

    return (
        <div className="Param">
            <PageTitle
            title="Param"
            subtitle={id} 
            ></PageTitle>
        </div>
  );
}

export default Param;