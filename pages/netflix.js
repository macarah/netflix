import React, { useEffect } from 'react';
import '/app/globals.css';
import * as d3 from 'd3';

const Netflix = () => {
    useEffect(() => {
        // Define global variables
        let svg = d3.select("#svg");
        let keyframeIndex = 0;

        const width = 12000;
        const height = 800;

        let chart;
        let chartWidth;
        let chartHeight;

        let xScale;
        let yScale;
        var isChartLoaded = false;

        function initialiseSVG() {
            svg.attr("width", width);
            svg.attr("height", height);

            svg.selectAll("*").remove();

            const margin = { top: 60, right: 30, bottom: 50, left: 50 };
            chartWidth = width - margin.left - margin.right;
            chartHeight = height - margin.top - margin.bottom;

            chart = svg.append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            xScale = d3.scaleBand()
                .domain([])
                .range([0, chartWidth])
                .padding(0.1);

            yScale = d3.scaleLinear()
                .domain([])
                .nice()
                .range([chartHeight, 0]);

            // Add x-axis
            chart.append("g")
                .attr("class", "x-axis")
                .attr("transform", `translate(0,${chartHeight})`)
                .call(d3.axisBottom(xScale))
                .selectAll("text");

            // Add y-axis
            chart.append("g")
                .attr("class", "y-axis")
                .call(d3.axisLeft(yScale))
                .selectAll("text");

            // Add title
            svg.append("text")
                .attr("id", "chart-title")
                .attr("x", width / 2)
                .attr("y", 20)
                .attr("text-anchor", "middle")
                .style("font-size", "18px")
                .style("fill", "white")
                .text("");
        }

        initialiseSVG();
    }, []); // Empty dependency array ensures the effect runs only once after initial render

    return ( <
        svg id = "svg" > </svg>
    );
};

export default Netflix;