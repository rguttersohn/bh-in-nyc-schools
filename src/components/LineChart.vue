<template>
  <div class="line-chart-wrapper">
    <svg />
  </div>
</template>

<script>
import * as d3 from "d3";

export default {
  props: {
    activeSchool: Array
  },
  data() {
    return {
      width: 300,
      height: 300,
      margin: { left: 50, bottom: 50 }
    };
  },
  computed: {
    xScale() {
      return d3
        .scaleBand()
        .range([0, this.width])
        .domain(this.activeSchool[0].dataTwo.map(d => d.category));
    },
    yScale() {
      return d3
        .scaleLinear()
        .rangeRound([this.height, 0])
        .domain([0, d3.max(this.activeSchool[0].dataTwo, d => d.stat)]);
    }
  },
  methods: {
    chartFixed() {
      let graph = d3
        .select(`.line-chart-wrapper svg`)
        .attr("width", this.width + this.margin.left)
        .attr("height", this.height + this.margin.bottom);
      //x-axis
      graph
        .append("g")
        .attr(
          "transform",
          `translate(${this.margin.left},${this.height + this.margin.bottom-20})`
        )
        .attr("class", "x-axis")
        .call(
          d3
            .axisBottom(this.xScale)
            .tickSizeOuter(0)
            .ticks(5)
            .tickSize([0])
        );
        d3.select(".x-axis .domain").style("visibility", "hidden");

      //y-axis
      graph
        .append("g")
        .attr("transform", `translate(${this.margin.left},${this.margin.bottom - 20})`)
        .attr("class", "y-axis")
        .call(
          d3
            .axisLeft(this.yScale)
            .tickSizeOuter(0)
            .tickSize(0)
            .ticks(5)
            .tickFormat(d => d + "%")
        );

         d3.select(".y-axis .domain").style("visibility", "hidden");

      // add grouping for the path
      graph
        .append("g")
        .attr("class", "graph")
        .append("path")
        .attr(
          "transform",
          `translate(${this.margin.left}, ${this.margin.bottom})`
        )
        .attr("fill", "none")
        .attr("stroke", "green")
        .attr("stroke-width", "3px");
    },

    drawLineChart() {
      const line = d3
        .line()
        .x(d => {
          return this.xScale(d.category) + this.xScale.bandwidth() / 2;
        })
        .y(d => {
          return this.yScale(d.stat);
        })
        .curve(d3.curveBasis);

      d3.select(".graph path")
        .transition()
        .duration(300)
        .attr("d", line(this.activeSchool[0].dataTwo));
    },
    removeAxis() {
      d3.selectAll(
        ".line-chart-wrapper .y-axis, .line-chart-wrapper x-axis"
      ).remove();
    }
  },
  watch: {
    activeSchool() {
      this.removeAxis();
      this.drawLineChart();
      this.chartFixed();
      this.drawLineChart();
    }
  }
};
</script>

<style scoped></style>
