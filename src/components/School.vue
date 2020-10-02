<template>
  <div v-if="activeSchool[0] !== undefined">
    <h2>
      <span style="color:#0099cd">{{ activeSchool[0].shortName }}</span>
      compared to {{ activeSchool[0].schoolDistrict }} and NYC
    </h2>
    <div class="dashboard">
      <div class="header-flex-container">
        <p>Indicator</p>
        <p>{{ activeSchool[0].shortName }}</p>
        <p>{{ activeSchool[0].studentEcoStatus[3].category }}</p>
        <p>NYC</p>
      </div>
      <HorizontalBars
        :activeData="tempHousing"
        :graphId="'students-temp-housing'"
      />
      <HorizontalBars
        :activeData="studentDis"
        :graphId="'students-disabilities'"
      />
      <HorizontalBars
        :activeData="ecoStatus"
        :graphId="'student-economic-status'"
      />
      <HorizontalBars :activeData="suspensions" :graphId="'suspensions'" />
    </div>
    <div class="info" v-html="activeSchool[0].info[1]"></div>
  </div>
</template>

<script>
import HorizontalBars from "@/components/HorizontalBars.vue";
export default {
  components: {
    HorizontalBars
  },
  props: {
    activeSchool: Array
  },
  data() {
    return {
      ecoStatus: [],
      studentDis: [],
      tempHousing: [],
      suspensions: []
    };
  },
  methods: {
    pushToData() {
      this.ecoStatus = [];
      this.ecoStatus.push(this.activeSchool[0].studentEcoStatus);
      this.studentDis.pop();
      this.studentDis.push(this.activeSchool[0].studentsDisabilities);
      this.tempHousing.pop();
      this.tempHousing.push(this.activeSchool[0].studentsTempHousing);
      this.suspensions.pop();
      this.suspensions.push(this.activeSchool[0].suspensions);
    }
  },
  watch: {
    activeSchool() {
      this.pushToData();
    }
  }
};
</script>