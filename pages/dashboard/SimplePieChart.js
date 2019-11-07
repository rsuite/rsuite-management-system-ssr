import React from "react";
import Chartist from "react-chartist";

const SimplePieChart = ({ className, title, data, type, options }) => (
  <div className="simple-chart">
    <h3>{title}</h3>
    <Chartist
      data={data}
      type={type}
      options={{
        height: 300,
        ...options
      }}
    />
  </div>
);

export default SimplePieChart;
