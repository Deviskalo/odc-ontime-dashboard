import React, { useRef, useState, useEffect } from "react";

import { Chart } from "chart.js/auto";

const data = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "OnTime Data",
      data: [12, 10, 3, 5, 2, 3, 7, 8, 19, 10, 11, 12],
      backgroundColor: "#E34518",
    },
  ],
};

const Dashboard = () => {
  const canvasRef = useRef(null);

  const chartRef = useRef(null);

  // eslint-disable-next-line no-unused-vars
  const [dataa, setData] = useState(data);

  useEffect(() => {
    if (canvasRef.current) {
      if (chartRef.current) {
        chartRef.current.destroy();
      }

      const ctx = canvasRef.current.getContext("2d");

      chartRef.current = new Chart(ctx, {
        type: "bar",
        data: data,
      });
    }
  }, [dataa]);

  useEffect(() => {
    chartRef.current.data = data;

    chartRef.current.update();
  }, [dataa]);

  return (
    <div className="mt-20">
      <div className="flex mt-4 p-4 gap-4">
        <div className="w-1/2 border-black border h-20 p-4 rounded-[20px]">
          <p>Hello world</p>
          <p>Hello world</p>
        </div>
        <div className="w-1/2 border-black border h-20 p-4 rounded-[20px]">
          <p>Hello world</p>
          <p>Hello world</p>
        </div>
        <div className="w-1/2 border-black border h-20 p-4 rounded-[20px]">
          <p>Hello world</p>
          <p>Hello world</p>
        </div>
      </div>
      <div className="flex-1  m-4 border border-black border relative rounded-[20px] justify-center align-center">
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
};

export default Dashboard;
