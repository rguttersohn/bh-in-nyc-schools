<template>
  <div>
    <div>
      <img class="school-map-image" :src="activeSchool[0].map" alt />
      <h2 class="school-subheader">{{activeSchool[0].school}}</h2>
      <p v-html="activeSchool[0].info"></p>
    </div>
    <div class="graph-dashboard">
      <Graph :activeSchool="activeSchool" />
      <Graph :activeSchool="activeSchool" />
    </div>
  </div>
</template>

<script>
import Graph from "@/components/Graph.vue";
export default {
  components: {
    Graph
  },
  props: {
    activeSchool: Array
  }
};
</script>

<style lang="scss" scoped>
</style>