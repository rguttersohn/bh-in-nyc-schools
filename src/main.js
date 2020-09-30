import Vue from "vue";
import App from "./App.vue";
import { scaleLinear } from "d3-scale";
import { scaleBand } from "d3-scale";
import {axisBottom} from 'd3-axis';
import {axisLeft} from 'd3-axis'
import { select } from "d3-selection";
import { max } from "d3-array";
import {min} from 'd3-array'
import {line } from 'd3-shape'
import  {curveLinear} from 'd3-shape'

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

//line chart
const width = 600,
  height = 250;
const margin = { left: 45, right: 0, top: 10, bottom: 20 };

//line chart data

const firstGroupData = [
  { date: "April 23-May 26", rate: 28 },
  { date: "May 28-June 23", rate: 44 },
  { date: "June 25-July 21", rate: 47 },
];

const secondGroupData = [
  { date: "April 23-May 26", rate: 21 },
  { date: "May 28-June 23", rate: 39 },
  { date: "June 25-July 21", rate: 47 },
];

const thirdGroupData = [
  { date: "April 23-May 26", rate: 18 },
  { date: "May 28-June 23", rate: 36 },
  { date: "June 25-July 21", rate: 38 },
];

const fourthGroupData = [
  { date: "April 23-May 26", rate: 18 },
  { date: "May 28-June 23", rate: 35 },
  { date: "June 25-July 21", rate: 43 },
];

const fifthGroupData = [
  { date: "April 23-May 26", rate: 11 },
  { date: "May 28-June 23", rate: 31 },
  { date: "June 25-July 21", rate: 26 },
];

const lineChartColors = ["#0099cd", "#8da7f6", "#f1afff", "#ff5fa6", "#ea0029"];

lineChartColors.reverse();

const lineChartLegendLabels = [
  "18 to 24",
  "25 to 34",
  "35 to 54",
  "55 to 64",
  "65 and older",
];

const xScale = scaleBand()
  .range([0, width])
  .domain(
    firstGroupData.map((d) => {
      return d.date;
    })
  );

const yScale = scaleLinear()
  .rangeRound([height, 0])
  .domain([
    min(fifthGroupData, (d) => d.rate) - 5,
    max(firstGroupData, (d) => d.rate) + 10,
  ]);

let drawLine = line()
  .x((d) => {
    return xScale(d.date) + xScale.bandwidth() / 2;
  })
  .y((d) => {
    return yScale(d.rate);
  })
  .curve(curveLinear);

const lineChartSVG = select("#line-chart svg")
  .attr("width", width + margin.right + margin.left)
  .attr("height", height + margin.top + margin.bottom);

const xAxis = () => {
  lineChartSVG
    .append("g")
    .attr("transform", `translate(${margin.left},${height})`)
    .attr("class", "x-axis")
    .call(axisBottom(xScale).tickSizeOuter(0));
};
xAxis();

const yAxis = () => {
  lineChartSVG
    .append("g")
    .attr("class", "y-axis")
    .attr("transform", `translate(${margin.left},0)`)
    .call(axisLeft(yScale)
        .tickFormat((d) => d + "%")
        .ticks(5)
    );
};

yAxis();

let applyChart = (data, name, colorIndex) => {
  lineChartSVG
    .append("g")
    .attr("class", `${name}-line-chart`)
    .append("path")
    .attr("d", drawLine(data))
    .attr("transform", `translate(${margin.left}, 0)`)
    .style("fill", "none")
    .attr("stroke", lineChartColors[colorIndex])
    .style("stroke-width", "3px");
};

applyChart(secondGroupData, "second-group", 1);
applyChart(thirdGroupData, "third-group", 2);
applyChart(fourthGroupData, "fourth-group", 3);
applyChart(fifthGroupData, "fifth-group", 4);
applyChart(firstGroupData, "first-group", 0);
//function to create the dots for the chart
let applyDots = (data, name, index, r = 7) => {
  lineChartSVG
    .append("g")
    .attr("class", `${name}-dots`)
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", (d) => {
      return xScale(d.date) + xScale.bandwidth() / 2;
    })
    .attr("cy", (d) => {
      return yScale(d.rate);
    })
    .attr("r", r)
    .attr("transform", `translate(${margin.left},0)`)
    .attr("data-percent", (d) => {
      return d.rate + "%";
    })
    .attr("data-year", (d) => {
      return d.date;
    })
    .style("fill", lineChartColors[index]);

  let lineChartDots = document.querySelectorAll(`.${name}-dots circle`);
  for (let i = 0; i < lineChartDots.length; i++) {
    lineChartDots[i].dataset.age = lineChartLegendLabels[index];
    let tooltip = document.querySelector("#line-chart .tooltip");
    lineChartDots[i].addEventListener("mouseenter", (event) => {
      event.target.style.strokeWidth = "3px";
      event.target.style.stroke = event.target.style.fill;
      tooltip.style.borderColor = event.target.style.fill;
      tooltip.style.display = "block";
      tooltip.style.opacity = 1;
      tooltip.style.left = `${event.clientX}px`;
      tooltip.style.top = `${event.clientY * 1.1}px`;
      tooltip.innerHTML = `<div class="tooltip-interior">
                            <div>
                              <i style="background-color:${event.target.style.fill}"></i>
                            </div> 
                            <div>
                              <p>Age Range: ${event.target.dataset.age}</p>
                              <p>Date Range: ${event.target.dataset.year}</p>
                              <p>Percent Reported: ${event.target.dataset.percent}<p>
                            </div>
                          </div>`;
    });
    lineChartDots[i].addEventListener("mouseleave", (event) => {
      tooltip.style.display = "none";
      tooltip.style.opacity = 0;
      event.target.style.strokeWidth = null;
      event.target.style.stroke = null;
    });
  }
};

applyDots(secondGroupData, "second-group", 1);
applyDots(thirdGroupData, "third-group", 2);
applyDots(fourthGroupData, "fourth-group", 3);
applyDots(fifthGroupData, "fifth-group", 4);
applyDots(firstGroupData, "first-group", 0, 10);

const applyLabels = (data, name, colorIndex) => {
  let labels = () => {
    lineChartSVG
      .append("g")
      .attr("class", `${name}-labels`)
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text((d) => {
        return d.rate + "%";
      })
      .attr("x", (d) => {
        return xScale(d.date) + xScale.bandwidth() / 2 + 20;
      })
      .attr("y", (d) => {
        return yScale(d.rate) - 17;
      })
      .style("fill", lineChartColors[colorIndex])
      .attr("text-anchor", "middle")
      .style("font-size", "20px");
  };
  labels();
};

applyLabels(firstGroupData, "first-group", 0);

//adding legend colors and labels to the line chart legend

const lineChartIcons = document.querySelectorAll(
  "#line-chart .legend-wrapper i"
);
const lineChartLegendText = document.querySelectorAll(
  "#line-chart .legend-wrapper span"
);
for (let i = 0; i < lineChartIcons.length; i++) {
  lineChartIcons[i].style.backgroundColor = lineChartColors[i];
  lineChartLegendText[i].textContent = lineChartLegendLabels[i];
}
