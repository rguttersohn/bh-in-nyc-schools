<template>
  <div>
    <div>
      <img class="school-map-image" :src="activeSchool[0].map" />
      <h2 class="school-subheader">{{activeSchool[0].school}}</h2>
      <p v-html="activeSchool[0].info"></p>
    </div>
    <div class="dashboard">
      <Stats :activeStat="childPoverty" />
      <Graph :activeData="childPoverty" />
    </div>
  </div>
</template>

<script>
import Graph from "@/components/Graph.vue";
import Stats from '@/components/Stats.vue';
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
      childPoverty: []
    };
  },
  methods: {
    pushToPop() {
      this.popUnder18 = [];
      this.popUnder18.push(this.activeSchool[0]["Children Under 18"]);
    },
    pushToPoverty() {
      this.childPoverty = [],
        this.childPoverty.push(this.activeSchool[0]["Child Poverty"]);
    }
  },
  watch: {
    activeSchool() {
      this.pushToPop();
      this.pushToPoverty()
    }
  }
};
</script>

<style lang="scss" scoped>
</style>