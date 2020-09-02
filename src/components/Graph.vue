<template>
  <div class="bar-chart-wrapper">
    <svg />
  </div>
</template>

<script>
import * as d3 from "d3";

export default {
  props: {
    activeData: Array,
  },
  data() {
    return {
      width: 300,
      height: 300,
      colors: ["#0099cd", "#de425b","red"],
      margin: { left: 50, bottom: 50 }
    };
  },
  computed: {
    yScale() {
      return d3
        .scaleLinear()
        .range([0, this.height])
        .domain([d3.max(this.activeData[0],d=>d.stat), 0]);
    },
    xScale() {
      return d3
        .scaleBand()
        .range([0, this.width])
        .domain(this.activeData[0].map(d=>d.category))
        .padding(0.5);
    }
  },
  methods: {
    drawChart() {
      d3.select(".bar-chart-wrapper svg")
        .attr("width", this.width)
        .attr("height", this.height + this.margin.bottom);

      d3.selectAll(".bar-chart-wrapper svg *").remove();

      //x-axis
      d3.select(".bar-chart-wrapper svg")
        .append("g")
        .attr("class", "x-axis")
        .call(d3.axisBottom(this.xScale).tickSize([0]))
        .attr(
          "transform",
          `translate(0,${this.height + this.margin.bottom - 20})`
        );
      d3.select(".x-axis .domain").style("visibility", "hidden");

      //y-axis
      d3.select(".bar-chart-wrapper svg")
        .append("g")
        .attr("class", "y-axis")
        .call(
          d3
            .axisRight(this.yScale)
            .tickSize([0])
            .ticks(5)
            .tickFormat(d => d + "%")
        )
        .attr("transform", `translate(0,${this.margin.bottom - 20})`);
      d3.select(".y-axis .domain").style("visibility", "hidden");

        d3.select(".bar-chart-wrapper svg")
          .append("g")
          .attr("class", "bars")
          .selectAll("rect")
          .data(this.activeData[0])
          .enter()
          .append("rect")
          .attr("width", this.xScale.bandwidth())
          .attr("x", d => this.xScale(d.category))
          .attr("transform", `translate(0,${this.margin.bottom - 20})`)
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
        d3.select(".bar-chart-wrapper svg")
          .append("g")
          .attr("transform", `translate(0,${this.margin.bottom - 20})`)
          .attr("class", "bar-chart-labels")
          .selectAll("text")
          .data(this.activeData[0])
          .enter()
          .append("text")
          .text(d => d.stat + "%")
          .attr("text-anchor", "middle")
          .attr("x", d => this.xScale(d.category) + this.xScale.bandwidth() / 2)
          .attr("y", d => this.yScale(d.stat))
          .attr("dy", "1.3em")
          .attr("fill", "white");
    }
  },
  watch: {
    activeData() {
      this.drawChart()
    }
  }
};
</script>

<style scoped>
</style>