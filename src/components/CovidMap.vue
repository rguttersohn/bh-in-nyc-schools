<template>
  <div class="dashboard">
    <h2>Covid Cases in ZIP Code Surrounding School</h2>
    <div class="map-wrapper">
      <svg />
    </div>
  </div>
</template>

<script>
import * as topojson from "topojson-client";
import * as d3 from "d3";

export default {
  data() {
    return {
      nycZipMap: "",
      cases: "",
      width: 300,
      height: 300,
      colors: ["#0099cd", "#64abd3", "#93bdd8", "#bccfdd", "#e2e2e2"].reverse()
    };
  },
  computed: {
    projection() {
      return d3
        .geoIdentity()
        .fitSize([this.width, this.height], this.nycZipMap);
    },
    geoPath() {
      return d3.geoPath().projection(this.projection);
    }
  },
  methods: {
    createNYCMap() {
      let nycZipURL = fetch("https://www.cccnewyork.org/wp-content/uploads/data/New_Zip_Code_Boundary.json");
      let casesByZipURL = fetch("https://www.cccnewyork.org/wp-content/uploads/data/casesbyZip.json");
      Promise.all([nycZipURL, casesByZipURL])
        .then(values => {
          return Promise.all(values.map(resp => resp.json()));
        })
        .then(([nycZipMapData, casesByZipData]) => {
          const vm = this;
          vm.nycZipMap = topojson.feature(nycZipMapData, {
            type: "GeometryCollection",
            geometries: nycZipMapData.objects.New_Zip_Code_Boundary.geometries
          });
          vm.cases = casesByZipData;
        });
    },
    createMap() {
      d3.select(".map-wrapper svg")
        .attr("width", this.width)
        .attr("height", this.height)
        .style("transform", "scale(1,-1)")
        .append("g")
        .attr("class", "nyc-zip-paths")
        .selectAll("path")
        .data(this.nycZipMap.features)
        .enter()
        .append("path")
        .attr("d", this.geoPath);
    },
    bindData() {
      this.nycZipMap.features.map(shape => {
        this.cases.forEach(el => {
          if (parseInt(shape.properties.ZIPCODE) === el.MODIFIED_ZCTA) {
            shape.properties.cases = el.COVID_CASE_COUNT;
          }
        });
      });
    },
    addColors() {
      d3.selectAll(".map-wrapper svg path")
        .data(this.nycZipMap.features)
        .attr("fill", d => {
          if (!d.properties.cases) {
            return "white";
          }
          if (d.properties.cases >= 43 && d.properties.cases <= 502) {
            return this.colors[0];
          } else if (d.properties.cases >= 510 && d.properties.cases <= 1088) {
            return this.colors[1];
          } else if (d.properties.cases >= 1143 && d.properties.cases <= 1854) {
            return this.colors[2];
          } else if (d.properties.cases >= 1886 && d.properties.cases <= 2652) {
            return this.colors[3];
          } else if (d.properties.cases >= 2746 && d.properties.cases <= 5141) {
            return this.colors[4];
          }
        });
    }
  },
  created() {
    this.createNYCMap();
  },
  watch: {
    nycZipMap() {
      if (this.cases !== "") {
        this.createMap();
        this.bindData();
        this.addColors();
      }
    }
  }
};
</script>

<style scoped>
</style>