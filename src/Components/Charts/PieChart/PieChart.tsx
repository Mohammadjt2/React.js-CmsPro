import React, { useEffect } from "react";
import Chart from "chart.js/auto";

function PieChart(): JSX.Element {
  useEffect(() => {
    const data = [
      { ماه: 10, فروش: 10 },
      { ماه: 11, فروش: 41 },
      { ماه: 12, فروش: 49 },
    ];

    new Chart("pie", {
      type: "pie",
      data: {
        labels: data.map((row) => row.ماه),
        datasets: [
          {
            label: "درصد سود دهی ماهانه",
            data: data.map((row) => row.فروش),
          },
        ],
      },
    });
  }, []);

  return (
    <>
      <canvas id="pie"></canvas>
    </>
  );
}
export default PieChart;
