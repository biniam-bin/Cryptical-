import React from "react";
import { Line } from "react-chartjs-2";
// import "chartjs-adapter-moment";
import Chart from "chart.js/auto";

import jsCalendar from "js-calendar";
var jsCal = new jsCalendar.Generator({ onlyDays: true });

const data = {
  type: "area",
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: (ctx) => 'Chart.js Line Chart - stacked=' + ctx.chart.options.scales.y.stacked
      },
      tooltip: {
        mode: 'index'
      },
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month'
        }
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: 'Value'
        }
      }
    }
  },
  datasets: [
    {
      label: "Downloads",
      data: [33, 53, 85, 41, 44, 65],
      fill: false,
      backgroundColor: "#bc32db",
      borderColor: "#f06eff",
      pointStyle: "circle",
      pointRadius: 10,
      pointHoverRadius: 15,
    },
    {
      label: "ETH earned",
      data: [200, 350, 54, 71, 24, 95],
      fill: false,
      backgroundColor: "#6155ad",
      borderColor: "#290fd4",
      pointStyle: "circle",
      pointRadius: 10,
      pointHoverRadius: 15,
    },
  ],
};
// const days = []
// const date = new Date()
// console.log(date.getDate())
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];

// }

// function getDaysInMonthUTC(month, year) {
//   var date = new Date(Date.UTC(year, month, 1));
//   var days = [];
//   while (date.getUTCMonth() === month) {
//     days.push(new Date(date));
//     date.setUTCDate(date.getUTCDate() + 1);
//   }
//   return days;
// }
// let mydays = getDaysInMonthUTC("02", "2021")
// console.log(mydays)

// const getDaysInMonth = (month, year) =>
//   new Array(31)
//     .fill("")
//     .map((v, i) => new Date(year, month - 1, i + 1))
//     .filter((v) => v.getMonth() === month - 1);

// console.log(getDaysInMonth("02", "2021"))

var januaryDays = jsCal(2016, 0);
var totalDays = januaryDays.daysInMonth; // 29
var days = januaryDays.cells;
console.log(januaryDays);

const Dashboard = () => {
  return (
    <div className="dashboard overflow-y-scroll   uto -z-10">
      <div className="dashboard-wrapper">
        <div className="Dashboard-graph-wrapper z-0 h-72 w-full flex items-center justify-center my-6">
          <div className="dashboard-wrapper z-0 mt-14 h-48 md:h-72 w-full  md:w-11/12 bg-[#9641c7] shadow-2xl shadow-indigo-700 rounded-md">
            <Line
              className="rounded-lg bg-[#5e2f79] z-0 shadow-2xl shadow-indigo-700"
              data={data}
            />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
