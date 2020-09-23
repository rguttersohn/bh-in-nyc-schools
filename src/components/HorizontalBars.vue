<template>
  <div class="horizontal-bar-chart-flex-cointainer" :id="graphId">
    <p>test</p>
    <p>test</p>
    <svg />
  </div>
</template>

<script>
// import * as d3 from "d3";

export default {
  props: {
    activeData: Array,
    graphId: String
  },
};
</script>

<style scoped>
</style>