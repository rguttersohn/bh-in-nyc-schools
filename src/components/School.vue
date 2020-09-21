<template>
  <div>
    <h2>School District Data</h2>
    <div class="dashboard"></div>
    <Graph :activeData="ecoStatus" :graphId="'student-economic-status'" />
    <Graph :activeData="studentDis" :graphId="'students-disabilities'" />
    <Graph :activeData="tempHousing" :graphId="'students-temp-housing'" />
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
  },
  data() {
    return {
      ecoStatus: [],
      studentDis:[],
      tempHousing:[],
      
    };
  },
  methods: {
    pushToEcoStatus() {
      this.ecoStatus = [];
      this.ecoStatus.push(this.activeSchool[0].studentEcoStatus);
    },
    pushToStudentDis(){
      this.studentDis.pop();
      this.studentDis.push(this.activeSchool[0].studentsDisabilities)
    },
    pushToTempHousing(){
      this.tempHousing.pop()
      this.tempHousing.push(this.activeSchool[0].studentsTempHousing)
    }
  },
  watch: {
    activeSchool() {
      this.pushToEcoStatus();
      this.pushToStudentDis();
      this.pushToTempHousing();
    }
  }
};
</script>

<style scoped>
</style>