"use client";
import { AreaChart } from "@tremor/react";

const chartdata = [
  {
    date: "Jan 22",
    Milestones: 2890,
    Budget: 2338,
  },
  {
    date: "Feb 22",
    Milestones: 2756,
    Budget: 2103,
  },
  {
    date: "Mar 22",
    Milestones: 3322,
    Budget: 2194,
  },
  {
    date: "Apr 22",
    Milestones: 3470,
    Budget: 2108,
  },
  {
    date: "May 22",
    Milestones: 3475,
    Budget: 1812,
  },
  {
    date: "Jun 22",
    Milestones: 3129,
    Budget: 1726,
  },
  {
    date: "Jul 22",
    Milestones: 3490,
    Budget: 1982,
  },
  {
    date: "Aug 22",
    Milestones: 2903,
    Budget: 2012,
  },
  {
    date: "Sep 22",
    Milestones: 2643,
    Budget: 2342,
  },
  {
    date: "Oct 22",
    Milestones: 2837,
    Budget: 2473,
  },
  {
    date: "Nov 22",
    Milestones: 2954,
    Budget: 3848,
  },
  {
    date: "Dec 22",
    Milestones: 3239,
    Budget: 3736,
  },
];

const valueFormatter = function (number: any) {
  return "$ " + new Intl.NumberFormat("us").format(number).toString();
};

export function AreaChartUsageExampleAxisLabel() {
  return (
    <>
      <AreaChart
        className="mt-4 h-72"
        data={chartdata}
        index="date"
        yAxisWidth={65}
        categories={["Milestones", "Budget"]}
        colors={["indigo", "cyan"]}
        valueFormatter={valueFormatter}
        showLegend={true}
      />
    </>
  );
}
