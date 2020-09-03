<template>
  <div id="app">
    <Button @button-clicked="createActiveSchool" :schools="schools" />
    <School :activeSchool="activeSchool" />
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import School from "@/components/School.vue";
export default {
  name: "App",
  components: {
    Button,
    School
  },
  data() {
    return {
      schools: [
        {
          id: 1,
          school: `Fannie Lou Hamer Freedom HS `,
          map: "src/assets/fannie-lou.png",
          info: `<p>This school is in Morrisania (CD B03) in the Bronx. Say something about Risk Ranking and this CD  being among the highest risk communities.</p>`,
          under18: [
            { header: "Children Under 18" },
            { id: "under-18" },
            { category: "Morrisiana", stat: "23,338" },
            { category: "Bronx", stat: "355,049" },
            { category: "NYC", stat: "1,739,256" }
          ],
          childPoverty: [
            { header: "Child Poverty" },
            { id: "child-poverty" },
            { category: "Morrisiana", stat: 50.7 },
            { category: "Bronx", stat: 38.1 },
            { category: "NYC", stat: 23.8 }
          ],
          unemployment: [
            { header: "Unemployment Rate" },
            { id: "unemployment-rate" },
            { category: "Morrisiana", stat: 13.3 },
            { category: "Bronx", stat: 10.1 },
            { category: "NYC", stat: 5.7 }
          ],
          investigations: [
            {
              header:
                "Total Number of Children in Investigations (rate per 1,000 children)"
            },
            { id: "investigations" },
            { category: "Morrisiana", stat: 112.5 },
            { category: "Bronx", stat: 74.6 },
            { category: "NYC", stat: 51.9 }
          ],
          rentBurden: [
            {
              header: "Severe Rent Burden"
            },
            { id: "rent-burden" },
            { category: "Morrisiana", stat: 35.6 },
            { category: "Bronx", stat: 33 },
            { category: "NYC", stat: 26.7 }
          ],
          overCrowdedHousing: [
            {
              header: "Over Crowded Housing"
            },
            { id: "over-crowded-housing" },
            { category: "Morrisiana", stat: 12.3 },
            { category: "Bronx", stat: 14.1 },
            { category: "NYC", stat: 10.6 }
          ]
        },
        {
          id: 2,
          school: "HS for Youth and Community Development ",
          map: "src/assets/youthcommunity.png",
          info: `<p>This school is in Flatbush/Midwood (CD K14) in Brooklyn. Say something about Risk Ranking and this CD being among moderate risk communities, but moderate-high in health domain.</p>`,
          under18: [
            { header: "Children Under 18" },
            { id: "under-18" },
            { category: "Flatbush/Midwood", stat: "34,701" },
            { category: "Brooklyn", stat: "588,823" },
            { category: "NYC", stat: "1,739,256" }
          ],
          childPoverty: [
            { header: "Child Poverty" },
            { id: "child-poverty" },
            { category: "Flatbush/Midwood", stat: 16.2 },
            { category: "Brooklyn", stat: 26 },
            { category: "NYC", stat: 23.8 }
          ],
          unemployment: [
            { header: "Unemployment Rate" },
            { id: "unemployment" },
            { category: "Flatbush/Midwood", stat: 4.8 },
            { category: "Brooklyn", stat: 4.9 },
            { category: "NYC", stat: 5.7 }
          ],
          investigations: [
            {
              header:
                "Total Number of Children in Investigations (rate per 1,000 children)"
            },
            { id: "investigations" },
            { category: "Flatbush/Midwood", stat: 34.8 },
            { category: "Brooklyn", stat: 40.6 },
            { category: "NYC", stat: 51.9 }
          ],
          rentBurden: [
            {
              header: "Severe Rent Burden"
            },
            { id: "rent-burden" },
            { category: "Flatbush/Midwood", stat: 27.9 },
            { category: "Brooklyn", stat: 27.3 },
            { category: "NYC", stat: 26.7 }
          ],
          overCrowdedHousing: [
            {
              header: "Over Crowded Housing"
            },
            { id: "over-crowded-housing" },
            { category: "Flatbush/Midwood", stat: 13.4 },
            { category: "Brooklyn", stat: 10.5 },
            { category: "NYC", stat: 10.6 }
          ]
        }
      ],
      activeSchool: []
    };
  },
  methods: {
    createActiveSchool(val) {
      this.activeSchool = [];
      this.schools.forEach(school => {
        if (val.dataset.school === school.school) {
          this.activeSchool.push(school);
        }
      });
    }
  }
};
</script>

<style>
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.graph-dashboard {
  display: flex;
  justify-content: space-evenly;
}
</style>
