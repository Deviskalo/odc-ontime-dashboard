import React from "react";
import { Bar } from "react-chartjs-2";

const Dashboard = () => {
  // Your chart data and options
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
        label: "Monthly Data",
        data: [65, 59, 80, 81, 56, 55, 40, 75, 56, 70, 68, 90],
        backgroundColor: "rgba(75,192,192,0.6)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "category", // Set the x-axis scale to "category"
        title: {
          display: true,
          text: "Months",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Value",
        },
      },
    },
  };

  return (
    <div className="flex mt-4 p-4 gap-4">
      <div className="w-1/2 border-black border h-20 p-4 rounded">
        <p>Hello world</p>
        <p>Hello world</p>
      </div>
      <div className="w-1/2 border-black border h-20 p-4 rounded">
        <p>Hello world</p>
        <p>Hello world</p>
      </div>
      {/* Add your chart container here */}
      <div className="w-1/2 border-black border h-20 p-4 rounded">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Dashboard;
