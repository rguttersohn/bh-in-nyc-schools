<template>
  <div v-if="activeData[0] !== undefined" class="bar-chart-wrapper" :id="graphId">
    <h3>{{activeData[0][0].header}}</h3>
    <svg />
  </div>
</template>

<script>
import * as d3 from "d3";

export default {
  props: {
    activeData: Array
  },
  data() {
    return {
      width: 300,
      height: 175,
      colors: ["#0099cd", "#de425b", "red"],
      margin: { left: 20, bottom: 50 },
      filteredData: ""
    };
  },
  computed: {
    yScale() {
      return d3
        .scaleLinear()
        .range([0, this.height])
        .domain([d3.max(this.activeData[0], d => d.stat), 0]);
    },
    xScale() {
      return d3
        .scaleBand()
        .range([0, this.width])
        .domain(this.filteredData.map(d => d.category))
        .padding(0.1);
    },
    graphId() {
      return this.activeData[0][1].id ? this.activeData[0][1].id : "";
    }
  },
  methods: {
    filterData() {
      this.filteredData = this.activeData[0].filter(
        el => el.header === undefined && el.id === undefined
      );
    },
    drawChart() {
      d3.select(`#${this.graphId} svg`)
        .attr("width", this.width)
        .attr("height", this.height + this.margin.bottom);

      d3.selectAll(`#${this.graphId} svg *`).remove();

      //x-axis
      d3.select(`#${this.graphId} svg`)
        .append("g")
        .attr("class", "x-axis")
        .call(d3.axisBottom(this.xScale).tickSize([0]))
        .attr(
          "transform",
          `translate(${this.margin.left},${this.height +
            this.margin.bottom -
            20})`
        );
      d3.selectAll(".x-axis .domain").style("visibility", "hidden");

      d3.select(`#${this.graphId} svg`)
        .append("g")
        .attr("class", "bars")
        .selectAll("rect")
        .data(this.filteredData)
        .enter()
        .append("rect")
        .attr("width", this.xScale.bandwidth())
        .attr("x", d => this.xScale(d.category))
        .attr(
          "transform",
          `translate(${this.margin.left},${this.margin.bottom - 20})`
        )
        .attr("fill", (d, i) => this.colors[i])
        .attr("height", this.height - this.yScale(0)) // always equal to 0
        .attr("y", this.yScale(0))
        .transition()
        .duration(1000)
        .attr("height", d => this.height - this.yScale(d.stat))
        .attr("y", d => {
          return this.yScale(d.stat);
        })
        .delay((d, i) => i * 100);
    },
    createChartLabels() {
      d3.select(`#${this.graphId} svg`)
        .append("g")
        .attr(
          "transform",
          `translate(${this.margin.left},${this.margin.bottom - 20})`
        )
        .attr("class", "bar-chart-labels")
        .selectAll("text")
        .data(this.filteredData)
        .enter()
        .append("text")
        .text(d => d.stat + "%")
        .attr("text-anchor", "middle")
        .attr("x", d => this.xScale(d.category) + this.xScale.bandwidth() / 2)
        .attr("y", d => this.yScale(d.stat))
        .attr("dy", "1.3em")
        .attr("fill", "white")
        .style("font-size", "18px");
    }
  },
  watch: {
    activeData() {
        this.filterData();
        this.drawChart();
        this.createChartLabels();
    }
  }
};
</script>

<style scoped>
</style>