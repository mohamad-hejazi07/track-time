import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import moment from "moment";
import _ from "lodash";

export default function Statistic({ timeList }) {
  const [dataset, setDataset] = useState(timeList);

  useEffect(() => {
    setDataset((dataset) => dataset.map((d) => ({ ...d, sum: d.end - d.start })));
  }, []);

  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  });

  /*Create Data Structure for the Daily Statistic*/
  function groupByDay(list) {
    const grouppedListByDay = _.groupBy(list, (d) => moment(d.start).startOf("day").format("dddd"));
    const labels = Object.keys(grouppedListByDay).map((k) => k);
    const newData = Object.values(grouppedListByDay).map((v) => v.reduce((prev, curr) => prev + curr.sum, 0) / 1000 / 60);
    setData({ ...data, labels, datasets: [...data.datasets, { data: newData }] });
  }

  /*Create Data Structure for the Daily Statistic*/
  function groupByWeek(list) {
    const grouppedListByWeek = _.groupBy(list, (d) => moment(d.start).startOf("isoWeek").format("[W]WW"));
    const labels = Object.keys(grouppedListByWeek).map((k) => k);
    const newData = Object.values(grouppedListByWeek).map((v) => v.reduce((prev, curr) => prev + curr.sum, 0) / 1000 / 60);
    setData({ ...data, labels, datasets: [...data.datasets, { data: newData }] });
  }

  /*Create Data Structure for the Daily Statistic*/
  function groupByMonth(list) {
    const grouppedListByMonth = _.groupBy(list, (d) => moment(d.start).startOf("month").format("MMMM"));
    const labels = Object.keys(grouppedListByMonth).map((k) => k);
    const newData = Object.values(grouppedListByMonth).map((v) => v.reduce((prev, curr) => prev + curr.sum, 0) / 1000 / 60);
    setData({ ...data, labels, datasets: [...data.datasets, { data: newData }] });
  }

  return (
    <React.Fragment>
      <p className="buttons">
        <button className="button is-info" onClick={() => groupByDay(dataset)}>
          Day
        </button>
        <button className="button is-info" onClick={() => groupByWeek(dataset)}>
          Week
        </button>
        <button className="button is-info" onClick={() => groupByMonth(dataset)}>
          Month
        </button>
      </p>
      {/* react-chartjs-2 Options */}
      <Bar data={data} options={{ plugins: { legend: { display: false } } }} />
    </React.Fragment>
  );
}
