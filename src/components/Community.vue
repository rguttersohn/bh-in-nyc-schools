<template>
  <div v-if="activeSchool[0] !== undefined">
    <div>
      <CommunityMapBrooklyn v-if="activeSchool[0].id === 2" />
      <CommunityMapBronx v-if="activeSchool[0].id === 1" />
      <CommunityMapManhattan v-if="activeSchool[0].id === 3" />
      <h2 class="school-subheader">{{ activeSchool[0].school }}</h2>
      <p class="table-note">
        Located in Community District
        {{ activeSchool[0].communityDistrict }} and
        {{ activeSchool[0].schoolDistrict }} in {{ activeSchool[0].borough }}.
      </p>
    </div>
    <div class="info" v-html="activeSchool[0].info[0]"></div>
    <h2>
      <span style="color:#0099cd">{{ activeSchool[0].communityDistrict }}</span>
      compared to {{ activeSchool[0].borough }} and NYC
    </h2>
    <div class="dashboard">
      <div class="header-flex-container">
        <p>Indicator</p>
        <p>{{ activeSchool[0].communityDistrict }}</p>
        <p>{{ activeSchool[0].borough }}</p>
        <p>NYC</p>
      </div>
      <HorizontalBars :activeData="childPoverty" :graphId="'child-poverty'" />
      <HorizontalBars :activeData="unemployment" :graphId="'unemployment'" />
      <HorizontalBars
        :activeData="countyUnemployed"
        :graphId="'county-unemployment'"
      />
      <HorizontalBars :activeData="rentBurden" :graphId="'rent-burden'" />
      <HorizontalBars
        :activeData="overcrowded"
        :graphId="'over-crowded-housing'"
      />
      <HorizontalBarsRate :activeData="childrenInShelter" :graphId="'shelter'" />
      <HorizontalBars
        :activeData="disconnect"
        :graphId="'disconnected-youth'"
      />
      <HorizontalBars :activeData="internet" :graphId="'internet'" />
    </div>
  </div>
</template>

<script>
import CommunityMapBrooklyn from "@/components/CommunityMapBrooklyn.vue";
import CommunityMapBronx from "@/components/CommunityMapBronx.vue";
import CommunityMapManhattan from "@/components/CommunityMapManhattan.vue";
import HorizontalBars from "@/components/HorizontalBars.vue";
import HorizontalBarsRate from '@/components/HorizontalBarsRate.vue';
export default {
  components: {
    CommunityMapBrooklyn,
    CommunityMapBronx,
    CommunityMapManhattan,
    HorizontalBars,
    HorizontalBarsRate
  },
  props: {
    activeSchool: Array
  },
  data() {
    return {
      childPoverty: [],
      unemployment: [],
      investigations: [],
      rentBurden: [],
      overcrowded: [],
      childrenInShelter: [],
      disconnect: [],
      internet: [],
      countyUnemployed: []
    };
  },
  methods: {
    pushToData() {
      this.childPoverty = [];
      this.childPoverty.push(this.activeSchool[0].childPoverty);
      this.unemployment = [];
      this.unemployment.push(this.activeSchool[0].unemployment);
      this.investigations = [];
      this.investigations.push(this.activeSchool[0].investigations);
      this.rentBurden = [];
      this.rentBurden.push(this.activeSchool[0].rentBurden);
      this.overcrowded = [];
      this.overcrowded.push(this.activeSchool[0].overCrowdedHousing);
      this.childrenInShelter = [];
      this.childrenInShelter.push(this.activeSchool[0].famWithChildrenShelter);
      this.disconnect = [];
      this.disconnect.push(this.activeSchool[0].disconnectedYouth);
      this.internet = [];
      this.internet.push(this.activeSchool[0].noInternet);
      this.countyUnemployed = [];
      this.countyUnemployed.push(this.activeSchool[0].countyUnemployment);
    }
  },

  watch: {
    activeSchool() {
     this.pushToData();
    }
  }
};
</script>