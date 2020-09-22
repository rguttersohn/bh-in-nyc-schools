<template>
  <div id="app">
    <Button @button-clicked="createActiveSchool" :schools="schools" />
    <Community :activeSchool="activeSchool" />
    <School :activeSchool="activeSchool"/>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import Community from "@/components/Community.vue";
import School from "@/components/School.vue";
export default {
  name: "App",
  components: {
    Button,
    Community,
    School
  },
  data() {
    return {
      schools: [
        {
          id: 1,
          school: `Fannie Lou Hamer Freedom HS `,
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
            { id: "unemployment" },
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
          ],
          studentsTempHousing: [
            { header: "Students Living in Temporary Housing (SY 2019)" },
            { id: "students-temp-housing" },
            { category: "School District 12", stat: 20.1 },
            { category: "Bronx", stat: 18.5 },
            { category: "NYC", stat: 10.2 }
          ],
          studentsDisabilities: [
            { header: "Students with Disabilities (IEP) (SY 2020)" },
            { id: "students-disabilities" },
            { category: "School District 12", stat: 22.7 },
            { category: "Bronx", stat: 23 },
            { category: "NYC", stat: 20.4 }
          ],
          studentEcoStatus: [
            { header: "Student Economic Status (SY 2020)" },
            { id: "student-economic-status" },
            { category: "School District 12", stat: 91.4 },
            { category: "Bronx", stat: 85.1 },
            { category: "NYC", stat: 72.6 }
          ]
        },
        {
          id: 2,
          school: "William E. Grady CTE High School",
          info: `<p>This school is in Brooklyn. Say something about Risk Ranking and this CD being among moderate risk communities, but moderate-high in health domain.</p>`,
          under18: [
            { header: "Children Under 18" },
            { id: "under-18" },
            { category: "CD K13", stat: "34,701" },
            { category: "Brooklyn", stat: "588,823" },
            { category: "NYC", stat: "1,739,256" }
          ],
          childPoverty: [
            { header: "Child Poverty" },
            { id: "child-poverty" },
            { category: "CD K13", stat: 37.6 },
            { category: "Brooklyn", stat: 26 },
            { category: "NYC", stat: 23.8 }
          ],
          unemployment: [
            { header: "Unemployment Rate, July 2018" },
            { id: "unemployment" },
            { category: "CD K13", stat: 5.5 },
            { category: "Brooklyn", stat: 4.9 },
            { category: "NYC", stat: 5.7 }
          ],
          investigations: [
            {
              header:
                "Total Number of Children in Investigations (rate per 1,000 children)"
            },
            { id: "investigations" },
            { category: "CD K13", stat: 34.8 },
            { category: "Brooklyn", stat: 40.6 },
            { category: "NYC", stat: 51.9 }
          ],
          rentBurden: [
            {
              header: "Severe Rent Burden"
            },
            { id: "rent-burden" },
            { category: "Coney Island", stat: 27.9 },
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
          ],
          studentsTempHousing: [
            { header: "Students Living in Temporary Housing (SY 2019)" },
            { id: "students-temp-housing" },
            { category: "School District X", stat: 10.1 },
            { category: "Bronx", stat: 18.5 },
            { category: "NYC", stat: 10.2 }
          ],
          studentsDisabilities: [
            { header: "Students with Disabilities (IEP) (SY 2020)" },
            { id: "students-disabilities" },
            { category: "School District X", stat: 12.7 },
            { category: "x", stat: 23 },
            { category: "NYC", stat: 20.4 }
          ],
          studentEcoStatus: [
            { header: "Student Economic Status (SY 2020)" },
            { id: "student-economic-status" },
            { category: "School District x", stat: 31.4 },
            { category: "x", stat: 85.1 },
            { category: "NYC", stat: 72.6 }
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
