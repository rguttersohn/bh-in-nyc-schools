<template>
  <div class="bar-chart-wrapper" :id="graphId">
    <h3 v-if="activeData[0]!==undefined">{{activeData[0][0].header}}</h3>
    <svg />
  </div>
</template>

<script>
import * as d3 from "d3";

export default {
  props: {
    activeData: Array,
    graphId: String
  },
  data() {
    return {
      width: 200,
      height: 175,
      colors: ["#0099cd", "#de425b", "red"],
      margin: { left: 20, bottom: 50 },
      filteredData: []
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
        .domain(this.filteredData[0].map(d => d.category))
        .padding(0.1);
    }
  },
  methods: {
    filterData() {
      this.filteredData.pop();
      this.filteredData.push(
        this.activeData[0].filter(
          el => el.header === undefined && el.id === undefined
        )
      );
    },
    wrap: function(text, width) {
      text.each(function() {
        var text = d3.select(this),
          words = text
            .text()
            .split(/\s+/)
            .reverse(),
          word,
          line = [],
          lineNumber = 0,
          lineHeight = 1, // ems
          y = text.attr("y"),
          dy = parseFloat(text.attr("dy")),
          tspan = text
            .text(null)
            .append("tspan")
            .attr("x", 0)
            .attr("y", y)
            .attr("dy", dy + "em");
        while ((word = words.pop())) {
          line.push(word);
          tspan.text(line.join(" "));
          if (tspan.node().getComputedTextLength() > width) {
            line.pop();
            tspan.text(line.join(" "));
            line = [word];
            tspan = text
              .append("tspan")
              .attr("x", 0)
              .attr("y", y)
              .attr("dy", ++lineNumber * lineHeight + dy + "em")
              .text(word);
          }
        }
      });
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
          `translate(0,${this.height + this.margin.bottom - 20})`
        );
      d3.selectAll(".x-axis .domain").style("visibility", "hidden");
      d3.selectAll(".tick text").call(this.wrap, this.xScale.bandwidth());

      d3.select(`#${this.graphId} svg`)
        .append("g")
        .attr("class", "bars")
        .selectAll("rect")
        .data(this.filteredData[0])
        .enter()
        .append("rect")
        .attr("width", this.xScale.bandwidth())
        .attr("x", d => this.xScale(d.category))
        .attr("transform", `translate(0,${this.margin.bottom - 20})`)
        .attr("fill", (d, i) => this.colors[i])
        .attr("height", this.height - this.yScale(0))
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
        .attr("transform", `translate(0,${this.margin.bottom - 20})`)
        .attr("class", "bar-chart-labels")
        .selectAll("text")
        .data(this.filteredData[0])
        .enter()
        .append("text")
        .text(d => d.stat + "%")
        .attr("text-anchor", "middle")
        .attr("x", d => this.xScale(d.category) + this.xScale.bandwidth() / 2)
        .attr("y", d => this.yScale(d.stat))
        .attr("dy", "1.3em")
        .attr("fill", "white")
        .style("font-size", "14px");
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