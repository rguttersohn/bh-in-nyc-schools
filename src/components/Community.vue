<template>
  <div>
    <div v-if="this.activeSchool[0] !== undefined">
      <img class="school-map-image" :src="activeSchool[0].map" />
      <h2 class="school-subheader">{{activeSchool[0].school}}</h2>
      <p v-html="activeSchool[0].info"></p>
    </div>
    <h2>Community District Data</h2>
    <div class="dashboard">
      <Stats :activeStat="popUnder18" />
      <div class="bar-graph-flex-container">
        <Graph :activeData="childPoverty" :graphId="'child-poverty'"/>
        <Graph :activeData="unemployment" :graphId="'unemployment'"/>
      </div>
      <Stats :activeStat="investigations" />
      <div class="bar-graph-flex-container">
        <Graph :activeData="rentBurden" :graphId="'rent-burden'"/>
        <Graph :activeData="overcrowded" :graphId="'over-crowded-housing'"/>
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
      overcrowded: []
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
    pushToOvercrowded() {
      this.overcrowded = [];
      this.overcrowded.push(this.activeSchool[0].overCrowdedHousing);
    }
  },
  watch: {
    activeSchool() {
      this.pushToPop();
      this.pushToPoverty();
      this.pushToUnemployment();
      this.pushToInvestigations();
      this.pushToRentBurden();
      this.pushToOvercrowded();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>