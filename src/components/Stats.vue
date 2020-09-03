<template>
  <div v-if="this.activeStat[0] !== undefined">
    <h3>{{activeStat[0][0].header}}</h3>
    <div class="stats-container">
      <div>
        <p>{{activeStat[0][1].category}}</p>
        <p>{{activeStat[0][1].stat}}</p>
      </div>
      <div>
        <p>{{activeStat[0][2].category}}</p>
        <p>{{activeStat[0][2].stat}}</p>
      </div>
      <div>
        <p>{{activeStat[0][3].category}}</p>
        <p>{{activeStat[0][3].stat}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    activeStat: Array
  }
};
</script>

<style>
</style>