<template>
  <div class="bar-graph-flex-container horizontal-bar-chart" :id="graphId">
    <p v-if="activeData[0] !== undefined">{{ activeData[0][0].header }}</p>
    <svg />
  </div>
</template>

<script>
import * as d3 from "d3";

export default {
  props: {
    graphId: String,
    activeData: Array
  },
  data() {
    return {
      width: 400,
      height: 30,
      filteredData: [],
      padding: 5
    };
  },
  computed: {
    xScale() {
      return d3
        .scaleLinear()
        .range([0, 100])
        .domain([
          0,
          d3.max(this.filteredData[0], d => {
            return d.stat;
          })
        ]);
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
    createSVG() {
      d3.select(`#${this.graphId} svg`)
        .attr("width", this.width)
        .attr("height", this.height);
    },
    createBackground(){
      d3.select(`#${this.graphId} svg`)
      .append("g")
        .attr("class", "background-bars")
        .selectAll("rect")
        .data(["a","b","c"])
        .enter()
        .append("rect")
        .attr("y", 0)
        .attr("x", (d, i) => [0, 100 + this.padding, 200 + this.padding * 2][i])
        .attr("height", this.height)
        .attr("fill", "whitesmoke")
        .attr('width',100)
    },
    createBars() {
      d3.selectAll(`#${this.graphId} svg .bars, #${this.graphId} svg .labels`).remove();

      d3.select(`#${this.graphId} svg`)
        .append("g")
        .attr("class", "bars")
        .selectAll("rect")
        .data(this.filteredData[0])
        .enter()
        .append("rect")
        .attr("y", 0)
        .attr("x", (d, i) => [0, 100 + this.padding, 200 + this.padding * 2][i])
        .attr("height", this.height)
        .attr("fill", "#87c8ea")
        .transition()
        .duration(1000)
        .attr("width", d => {
          return this.xScale(d.stat);
        })
        .delay((d, i) => i * 100);
    },
    addLabels() {
      d3.select(`#${this.graphId} svg .labels`).remove();
      d3.select(`#${this.graphId} svg`)
        .append("g")
        .attr("class", "labels")
        .selectAll("text")
        .data(this.filteredData[0])
        .enter()
        .append("text")
        .text(d => d.stat !==0 ? d.stat + "%" : "-")
        .attr("x", (d, i) => d.stat !== 0 ? [70, 170, 270][i] : [50][i])
        .attr("y", this.height / 1.5)
        .attr("text-anchor", "middle");
    }
  },
  mounted() {
    this.createSVG();
    this.createBackground();
    this.filterData();
    this.createBars();
    this.addLabels();
  },
  watch: {
    activeData() {
      this.filterData();
      this.createBars();
      this.addLabels();
    }
  }
};
</script>