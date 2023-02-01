import React, { useEffect } from "react";
import Chart from "chart.js/auto";

function DoughnutChart(): JSX.Element {
  useEffect(() => {
    const data = [
      { هفته: 1, فروش: 28 },
      { هفته: 2, فروش: 18 },
      { هفته: 3, فروش: 54 },
    ];

    new Chart("doughnut", {
      type: "doughnut",
      data: {
        labels: data.map((row) => row.هفته),
        datasets: [
          {
            label: "درصد سود دهی هفته",
            data: data.map((row) => row.فروش),
          },
        ],
      },
    });
  }, []);

  return (
    <>
      <canvas id="doughnut"></canvas>
    </>
  );
}
export default DoughnutChart;
