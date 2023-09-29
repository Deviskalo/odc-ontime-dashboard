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
        <div className="w-1/2 flex border-black border justify-center align-center h-20 p-4 rounded-[10px]">
          <p className="font-bold md:text-sm mt-0 absolute 2xl:text-bold pt-[1px]">
            Total Logged In Users
          </p>
          <p className="my-4 text-center p-2">100</p>
        </div>
        <div className="w-1/2 flex border-black border justify-center align-center h-20 p-4 rounded-[10px]">
          <p className="font-bold mt-0 absolute  pt-[1px]">Total Events</p>
          <p className="my-4 text-center p-2">5</p>
        </div>
        <div className="w-1/2 flex flex-col items-center border-black border h-20 p-4 rounded-[10px]">
          <p className="font-bold mt-[-12px]">Gender</p>
          <div className="flex justify-between w-full">
            <div className="flex flex-col items-start">
              <p className="mx-1">Male</p>
              <p className="mx-1">Female</p>
            </div>
            <div className="flex flex-col items-end">
              <p className="mx-1">75</p>
              <p className="mx-1">25</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  m-4 mt-1 border border-black border h-[10%] relative rounded-[10px] justify-center align-center">
        <canvas ref={canvasRef}></canvas>
      </div>

      <div className="flex gap-[19%] p-2 border-black m-4 h-40 border  relative justify-center rounded-[10px]">
        <p>Name</p>
        <p>Action</p>
        <p>Users</p>
        <p>Date Created</p>
        <hr className="absolute bg-black w-full h-[2px] mt-[30px]" />
      </div>
    </div>
  );
};

export default Dashboard;
