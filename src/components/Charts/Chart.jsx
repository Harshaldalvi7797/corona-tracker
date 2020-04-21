import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api/index";
//import { Chart, Line } from "react-charts";
//import { Line, Bar } from "react-chartjs-2";

import styles from "./chart.css";
import { style } from "@material-ui/system";

const Charts = () => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchApi = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchApi();
  });
  // const data = React.useMemo(
  //   () => [

  //     {
  //       label: "Series 2",
  //       data: [
  //         [0, 3],
  //         [1, 1],
  //         [2, 5],
  //         [3, 6],
  //         [4, 4]
  //       ]
  //     }
  //   ],
  //   []
  // );

  // const axes = React.useMemo(
  //   () => [
  //     { primary: true, type: "linear", position: "bottom" },
  //     { type: "linear", position: "left" }
  //   ],
  //   []
  // );

  // const LineChart = dailyData.length ? (
  //   <Line
  //     data={{
  //       labels: dailyData.map(({ date }) => date),
  //       datasets: [
  //         {
  //           data: dailyData.map(({ confirmed }) => confirmed),
  //           label: "infected",
  //           borderColor: "#3333f"
  //         },
  //         {
  //           data: dailyData.map(({ deaths }) => deaths),
  //           label: "deaths",
  //           borderColor: "#3333f"
  //         }
  //       ]
  //     }}
  //   />
  // ) : null;

  return (
    <div
      className={styles.container}
      style={{
        width: "400px",
        height: "300px"
      }}
    >
      {/* {LineChart} */}
      {/* <Chart data={data} axes={axes} /> */}
      <h1>hiiii</h1>
    </div>
  );
};
export default Charts;
