import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';
import { scaleBand, scaleLinear } from 'd3-scale';
import { axisBottom, axisLeft } from 'd3-axis';
import { ChevronsDown, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import '/app/globals.css';

interface DataItem {
  name: string;
  value: number;
}

const BarChart: React.FC<{ data: DataItem[] }> = ({ data }) => {
  useEffect(() => {
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = 960 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    const x = scaleBand().range([0, width]).padding(0.1);
    const y = scaleLinear().range([height, 0]);

    const svg = d3
      .select(".bar-chart")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const formattedData = data.map(({ name, value }) => ({ name, value: +value }));

    x.domain(formattedData.map(d => d.name));

    const maxValue = d3.max(formattedData.filter(d => typeof d.value === 'number'), d => +d.value);

    y.domain([0, maxValue || 0]);

    const originalColors: { [key: string]: string } = {};

    const bars = svg
      .selectAll(".bar")
      .data(formattedData)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", d => x(d.name) || 0)
      .attr("width", x.bandwidth())
      .attr("y", d => y(+d.value))
      .attr("height", d => height - y(+d.value))
      .on("mouseenter", function (event, d) {
        const bar = d3.select(this);
        originalColors[d.name] = bar.attr("fill");
        bar.attr("fill", "red");
      })
      .on("mouseleave", function (event, d) {
        const bar = d3.select(this);
        bar.attr("fill", originalColors[d.name]);
      });

    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(axisBottom(x));

    svg.append("g").call(axisLeft(y));
  }, [data]);

  return <div className="bar-chart" />;
};

export default function Visuals() {
  const [data, setData] = useState<DataItem[]>([
    {
      name: "A",
      value: 50,
    },
    {
      name: "B",
      value: 20,
    },
    {
      name: "C",
      value: 40,
    },
    {
      name: "D",
      value: 70,
    },
  ]);

  const [secondChartData, setSecondChartData] = useState<DataItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await d3.csv('../../data/Netflix/sample.csv');
        const formattedData: DataItem[] = response.map((item: any) => ({
          name: item.race,
          value: Number(item.race_count)
        }));
        setSecondChartData(formattedData);
        console.log('Second chart data loaded successfully:', formattedData);
      } catch (error) {
        console.error('Error fetching second chart data:', error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="fixed top-0 left-0 z-50 p-4">
        <Link href="/usa">
          <div className="flex items-center">
            <ArrowLeft size={24} />
            <span className="ml-2">Back</span>
          </div>
        </Link>
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Dynamic Visualizations Format
        </p>
      </div>

      <div className="bar-chart-container">
        <BarChart data={data} />
      </div>

      <div className="bar-chart-container">
        <BarChart data={secondChartData} />
      </div>

      <div className="flex flex-col items-center mb-8 mt-5">
        <Link href="/"> {/* Wrap with Link component */}
          <ChevronsDown size={72} />
        </Link>
      </div>
    </main>
  );
}
