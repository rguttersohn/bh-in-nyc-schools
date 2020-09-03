<template>
  <div>
    <div>
      <img
        v-if="this.activeSchool[0] !== undefined"
        class="school-map-image"
        :src="activeSchool[0].map"
      />
      <h2
        v-if="this.activeSchool[0] !== undefined"
        class="school-subheader"
      >{{activeSchool[0].school}}</h2>
      <p v-if="this.activeSchool[0] !== undefined" v-html="activeSchool[0].info"></p>
    </div>
    <div class="dashboard">
      <Stats :activeStat="popUnder18" />
      <div class="bar-graph-flex-container">
        <Graph :activeData="childPoverty" />
        <Graph :activeData="unemployment" />
      </div>
      <Stats :activeStat="investigations" />
      <div class="bar-graph-flex-container">
        <Graph :activeData="rentBurden" />
        <Graph :activeData="overcrowded" />
      </div>
    </div>
  </div>
</template>

<script>
import Graph from "@/components/Graph.vue";
import Stats from "@/components/Stats.vue";
export default {
  components: {
    Stats,
    Graph
  },
  props: {
    activeSchool: Array
  },
  data() {
    return {
      popUnder18: [],
      childPoverty: [],
      unemployment: [],
      investigations: [],
      rentBurden: [],
      overcrowded:[]
    };
  },
  methods: {
    pushToPop() {
      this.popUnder18 = [];
      this.popUnder18.push(this.activeSchool[0].under18);
    },
    pushToPoverty() {
      this.childPoverty = [];
      this.childPoverty.push(this.activeSchool[0].childPoverty);
    },
    pushToUnemployment() {
      this.unemployment = [];
      this.unemployment.push(this.activeSchool[0].unemployment);
    },
    pushToInvestigations() {
      this.investigations = [];
      this.investigations.push(this.activeSchool[0].investigations);
    },
    pushToRentBurden() {
      this.rentBurden = [];
        this.rentBurden.push(this.activeSchool[0].rentBurden);
    },
    pushToOvercrowding() {
      this.overcrowded = [];
        this.overcrowded.push(this.activeSchool[0].overCrowdedHousing);
    }
  },
  watch: {
    activeSchool() {
      if (this.activeSchool[0] !== undefined) {
        this.pushToPop();
        this.pushToPoverty();
        this.pushToUnemployment();
        this.pushToInvestigations();
        this.pushToRentBurden();
        this.pushToOvercrowding()
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>