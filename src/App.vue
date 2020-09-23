<template>
  <div id="app">
    <Button @button-clicked="createActiveSchool" :schools="schools" />
    <Community :activeSchool="activeSchool" />
    <School :activeSchool="activeSchool" />
    <CovidMap />
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import Community from "@/components/Community.vue";
import School from "@/components/School.vue";
import CovidMap from '@/components/CovidMap.vue';
export default {
  name: "App",
  components: {
    Button,
    Community,
    School,
    CovidMap
  },
  data() {
    return {
      schools: [
        {
          id: 1,
          school: `Fannie Lou Hamer Freedom HS `,
          communityDistrict:"Morrisania (CD B03)",
          schoolDistrict:"School District 12 (Crotona Park, Morrisania Melrose)",
          borough:"The Bronx",
          info: `<p>This school is in Morrisania (CD B03) in the Bronx. Say something about Risk Ranking and this CD  being among the highest risk communities.</p>`,
          under18: [
            { header: "Children Under 18" },
            { id: "under-18" },
            { category: "CD B03", stat: "23,338" },
            { category: "Bronx", stat: "355,049" },
            { category: "NYC", stat: "1,739,256" }
          ],
          childPoverty: [
            { header: "Child Poverty" },
            { id: "child-poverty" },
            { category: "CD B03", stat: 50.7 },
            { category: "Bronx", stat: 38.1 },
            { category: "NYC", stat: 23.8 }
          ],
          unemployment: [
            { header: "Unemployment Rate" },
            { id: "unemployment" },
            { category: "CD B03", stat: 13.3 },
            { category: "Bronx", stat: 10.1 },
            { category: "NYC", stat: 5.7 }
          ],
          investigations: [
            {
              header:
                "Total Number of Children in Investigations (rate per 1,000 children)"
            },
            { id: "investigations" },
            { category: "CD B03", stat: 112.5 },
            { category: "Bronx", stat: 74.6 },
            { category: "NYC", stat: 51.9 }
          ],
          rentBurden: [
            {
              header: "Severe Rent Burden"
            },
            { id: "rent-burden" },
            { category: "CD B03", stat: 35.6 },
            { category: "Bronx", stat: 33 },
            { category: "NYC", stat: 26.7 }
          ],
          overCrowdedHousing: [
            {
              header: "Over Crowded Housing"
            },
            { id: "over-crowded-housing" },
            { category: "CD B03", stat: 12.3 },
            { category: "Bronx", stat: 14.1 },
            { category: "NYC", stat: 10.6 }
          ],
          famWithChildrenShelter: [
            {
              header:
                "Families with Children in Homeless Shelters (rate per 1,000 households) (FY 2018)"
            },
            { category: "CD B03", stat: 15.1 },
            { category: "Bronx", stat: 9.4 },
            { category: "NYC", stat: 3.6 }
          ],
          disconnectedYouth: [
            {
              header: "Disconnected Youth (not in school, not working) (2018)"
            },
            { category: "CD B03", stat: 20.8 },
            { category: "Bronx", stat: 18.8 },
            { category: "NYC", stat: 13.7 }
          ],
          studentsTempHousing: [
            { header: "Students Living in Temporary Housing (SY 2019)" },
            { id: "students-temp-housing" },
            { category: "SD 12", stat: 20.1 },
            { category: "Bronx", stat: 18.5 },
            { category: "NYC", stat: 10.2 }
          ],
          studentsDisabilities: [
            { header: "Students with Disabilities (IEP) (SY 2020)" },
            { id: "students-disabilities" },
            { category: "SD 12", stat: 22.7 },
            { category: "Bronx", stat: 23 },
            { category: "NYC", stat: 20.4 }
          ],
          studentEcoStatus: [
            { header: "Student Economic Status (SY 2020)" },
            { id: "student-economic-status" },
            { category: "SD 12", stat: 91.4 },
            { category: "Bronx", stat: 85.1 },
            { category: "NYC", stat: 72.6 }
          ]
        },
        {
          id: 2,
          school: "William E. Grady CTE High School",
          communityDistrict:"Coney Island (CD K13)",
          schoolDistrict:"School District 21 (Gravesand, Coney Island)",
          borough:"Brooklyn",
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
            { category: "CD K13", stat: 29.4 },
            { category: "Brooklyn", stat: 27.3 },
            { category: "NYC", stat: 26.7 }
          ],
          overCrowdedHousing: [
            {
              header: "Over Crowded Housing"
            },
            { id: "over-crowded-housing" },
            { category: "CD K13", stat: 10.8 },
            { category: "Brooklyn", stat: 10.5 },
            { category: "NYC", stat: 10.6 }
          ],
          famWithChildrenShelter: [
            {
              header:
                "Families with Children in Homeless Shelters (rate per 1,000 households) (FY 2018)"
            },
            { category: "CD K13", stat: 2.1 },
            { category: "Bronx", stat: 3.4 },
            { category: "NYC", stat: 3.6 }
          ],
          disconnectedYouth: [
            {
              header: "Disconnected Youth (not in school, not working) (2018)"
            },
            { category: "CD K13", stat: 12.8 },
            { category: "Bronx", stat: 14.1 },
            { category: "NYC", stat: 13.7 }
          ],
          studentsTempHousing: [
            { header: "Students Living in Temporary Housing (SY 2019)" },
            { id: "students-temp-housing" },
            { category: "SD 21", stat: 6.1 },
            { category: "Brooklyn", stat: 9.5 },
            { category: "NYC", stat: 10.2 }
          ],
          studentsDisabilities: [
            { header: "Students with Disabilities (IEP) (SY 2020)" },
            { id: "students-disabilities" },
            { category: "SD 21", stat: 18.3 },
            { category: "Brooklyn", stat: 19.5 },
            { category: "NYC", stat: 20.4 }
          ],
          studentEcoStatus: [
            { header: "Student Economic Status (SY 2020)" },
            { id: "student-economic-status" },
            { category: "SD 21", stat: 72.4 },
            { category: "Brooklyn", stat: 73.2 },
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

}

.graph-dashboard {
  display: flex;
  justify-content: space-evenly;
}
</style>
