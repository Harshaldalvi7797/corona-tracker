import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api/index";
import styles from "./Chart.module.css";
import { Line, Bar } from "react-chartjs-2";

const Charts = ({ data, country }) => {
  // console.log(data.confirmed);
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchApi = async () => {
      setDailyData(await fetchDailyData());
    };
    // console.log(dailyData);
    fetchApi();
  }, []);

  const barChart = data.confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)"
            ],
            data: [
              data.confirmed.value,
              data.recovered.value,
              data.deaths.value
            ]
          }
        ]
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` }
      }}
    />
  ) : null;

  const LineChart = dailyData[0] ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infeted",
            borderColor: "#3333ff",
            fill: true
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "#rgba(255, 0, 0, 0.5)",
            fill: true
          }
        ]
      }}
    />
  ) : null;

  return (
    <div style={{ marginTop: "50px" }}>
      {/* {LineChart} */}
      {country ? barChart : LineChart}
    </div>
  );
};
export default Charts;
