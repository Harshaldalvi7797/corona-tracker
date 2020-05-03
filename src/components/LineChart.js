import React from "react";

import { Line } from "react-chartjs-2";

export default function LineChart() {
  const data = {
    labels: ["Jane", "Feb", "march"],
    datasets: [
      {
        label: "Sales for 2020",
        data: [3, 2, 2]
      }
    ]
  };
  return (
    <div>
      <Line data={data} />
    </div>
  );
}
