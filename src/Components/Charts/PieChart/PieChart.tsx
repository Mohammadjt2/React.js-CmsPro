import React, { useEffect } from "react";
import Chart from "chart.js/auto";

function PieChart(): JSX.Element {
  useEffect(() => {
    const data = [
      { ماه: 7, فروش: 10 },
      { ماه: 8, فروش: 30 },
      { ماه: 9, فروش: 60 },
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
