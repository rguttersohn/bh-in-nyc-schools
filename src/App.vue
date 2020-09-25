<template>
  <div id="app">
    <Button @button-clicked="createActiveSchool" :schools="schools" />
    <Community :activeSchool="activeSchool" />
    <School :activeSchool="activeSchool" />
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
          school: `Fannie Lou Hamer Freedom High School `,
          shortName:`Freedom H.S.`,
          communityDistrict: "Morrisania (CD B03)",
          schoolDistrict:
            "School District 12 (Crotona Park, Morrisania Melrose)",
          borough: "The Bronx",
          info: `<p>This school is in Morrisania (CD B03) in the Bronx. Say something about Risk Ranking and this CD  being among the highest risk communities.</p>`,
          childPoverty: [
            { header: "Child Poverty (2018)" },
            { id: "child-poverty" },
            { category: "CD B03", stat: 50.7 },
            { category: "Bronx", stat: 38.1 },
            { category: "NYC", stat: 23.8 }
          ],
          unemployment: [
            { header: "Unemployment Rate (2019)" },
            { id: "unemployment" },
            { category: "CD B03", stat: 11.5 },
            { category: "Bronx", stat: 9.1 },
            { category: "NYC", stat: 5.2 }
          ],
          countyUnemployment: [
            { header: "Unemployment Rate by County of Residence (July 2020)" },
            { id: "county-unemployment" },
            { category: "CD B03", stat: 0 },
            { category: "Bronx", stat: 21.1 },
            { category: "NYC", stat: 16.3 }
          ],
          rentBurden: [
            {
              header: "Severe Rent Burden (2018)"
            },
            { id: "rent-burden" },
            { category: "CD B03", stat: 35.6 },
            { category: "Bronx", stat: 33 },
            { category: "NYC", stat: 26.7 }
          ],
          overCrowdedHousing: [
            {
              header: "Over Crowded Housing (2018)"
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
            { id: "shelter" },
            { category: "CD B03", stat: 15.1 },
            { category: "Bronx", stat: 9.4 },
            { category: "NYC", stat: 3.6 }
          ],
          disconnectedYouth: [
            {
              header: "Disconnected Youth (not in school, not working) (2018)"
            },
            { id: "disconnected-youth" },
            { category: "CD B03", stat: 20.8 },
            { category: "Bronx", stat: 18.8 },
            { category: "NYC", stat: 13.7 }
          ],
          noInternet: [
            { header: "Households without Internet (2018)" },
            { id: "internet" },
            { category: "CD B03", stat: 27.3 },
            { category: "Bronx", stat: 21.3 },
            { category: "NYC", stat: 15.8 }
          ],
          studentsTempHousing: [
            { header: "Students Living in Temporary Housing (SY 2019)" },
            { id: "students-temp-housing" },
            { category: "Fannie Lou Hamer Freedom High School", stat: 12.7 },
            { category: "SD 12", stat: 20.1 },
            { category: "NYC", stat: 10.2 }
          ],
          studentsDisabilities: [
            { header: "Students with Disabilities (IEP) (SY 2020)" },
            { id: "students-disabilities" },
            { category: "Fannie Lou Hamer Freedom High School", stat: 29.8 },
            { category: "SD 12", stat: 22.7 },
            { category: "NYC", stat: 20.4 }
          ],
          studentEcoStatus: [
            { header: "Student Economic Status (SY 2020)" },
            { id: "student-economic-status" },
            { category: "Fannie Lou Hamer Freedom High School", stat: 85.7 },
            { category: "SD 12", stat: 91.4 },
            { category: "NYC", stat: 72.6 }
          ],
          suspensions: [
            { header: "Removals and Suspensions (SY 2019)" },
            { id: "suspensions" },
            { category: "Fannie Lou Hamer Freedom High School", stat: 23.4 },
            { category: "SD 12", stat: 8.8 },
            { category: "NYC", stat: 4 }
          ]
        },
        {
          id: 2,
          school: "William E. Grady CTE High School",
          shortName: "Grady CTE H.S",
          communityDistrict: "Coney Island (CD K13)",
          schoolDistrict: "School District 21 (Gravesand, Coney Island)",
          borough: "Brooklyn",
          info: `<p>This school is in Brooklyn. Say something about Risk Ranking and this CD being among moderate risk communities, but moderate-high in health domain.</p>`,
          childPoverty: [
            { header: "Child Poverty (2018)" },
            { id: "child-poverty" },
            { category: "CD K13", stat: 37.6 },
            { category: "Brooklyn", stat: 26 },
            { category: "NYC", stat: 23.8 }
          ],
          unemployment: [
            { header: "Unemployment Rate (2019)" },
            { id: "unemployment" },
            { category: "CD K13", stat: 4.4 },
            { category: "Brooklyn", stat: 4.5 },
            { category: "NYC", stat: 5.2 }
          ],
          countyUnemployment: [
            {
              header: "Unemployment Rate by County of Residence (July 2020)"
            },
            { id: "county-unemployment" },
            { category: "CD K13", stat: 0 },
            { category: "Brooklyn", stat: 16.5 },
            { category: "NYC", stat: 16.3 }
          ],
          rentBurden: [
            {
              header: "Severe Rent Burden (2018)"
            },
            { id: "rent-burden" },
            { category: "CD K13", stat: 29.4 },
            { category: "Brooklyn", stat: 27.3 },
            { category: "NYC", stat: 26.7 }
          ],
          overCrowdedHousing: [
            {
              header: "Over Crowded Housing (2018)"
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
            { id: "shelter" },
            { category: "CD K13", stat: 2.1 },
            { category: "Brooklyn", stat: 3.4 },
            { category: "NYC", stat: 3.6 }
          ],
          disconnectedYouth: [
            {
              header: "Disconnected Youth (not in school, not working) (2018)"
            },
            { id: "disconnected-youth" },
            { category: "CD K13", stat: 12.8 },
            { category: "Brooklyn", stat: 14.1 },
            { category: "NYC", stat: 13.7 }
          ],
          noInternet: [
            { header: "Households without Internet (2018)" },
            { id: "internet" },
            { category: "CD K13", stat: 27.3 },
            { category: "Broooklyn", stat: 21.3 },
            { category: "NYC", stat: 15.8 }
          ],
          studentsTempHousing: [
            { header: "Students Living in Temporary Housing (SY 2019)" },
            { id: "students-temp-housing" },
            { category: "William E. Grady CTE HIgh School", stat: 11.2 },
            { category: "SD 21", stat: 6 },
            { category: "NYC", stat: 10.2 }
          ],
          studentsDisabilities: [
            { header: "Students with Disabilities (IEP) (SY 2020)" },
            { id: "students-disabilities" },
            { category: "William E. Grady CTE HIgh School", stat: 37.7 },
            { category: "SD 21", stat: 18.3 },
            { category: "NYC", stat: 20.4 }
          ],
          studentEcoStatus: [
            { header: "Student Economic Status (SY 2020)" },
            { id: "student-economic-status" },
            { category: "William E. Grady CTE HIgh School", stat: 87.6 },
            { category: "SD 21", stat: 72.4 },
            { category: "NYC", stat: 72.6 }
          ],
          suspensions: [
            { header: "Removals and Suspensions (SY 2019)" },
            { id: "suspensions" },
            { category: "William E. Grady CTE HIgh School", stat: 23.1 },
            { category: "SD 21", stat: 4.9 },
            { category: "NYC", stat: 4 }
          ]
        },
        {
          id: 3,
          school: `Urban Assembly Academy for Future Leaders`,
          shortName:"Future Leaders",
          communityDistrict: "Manhattanville (CD M09)",
          schoolDistrict: "School District 5 (Central Harlem)",
          borough: "Manhattan",
          info: `<p>This school is in Manhattanville in ... you guessed it ... Manhattan</p>`,
          childPoverty: [
            { header: "Child Poverty (2018)" },
            { id: "child-poverty" },
            { category: "CD M09", stat: 18.8 },
            { category: "Manhattan", stat: 18.9 },
            { category: "NYC", stat: 23.8 }
          ],
          unemployment: [
            { header: "Unemployment Rate (2019)" },
            { id: "unemployment" },
            { category: "CD M09", stat: 6.8 },
            { category: "Manhattan", stat: 4.2 },
            { category: "NYC", stat: 5.2 }
          ],
          countyUnemployment: [
            {
              header: "Unemployment Rate by County of Residence (July 2020)"
            },
            { id: "county-unemployment" },
            { category: "CD M09", stat: 0 },
            { category: "Manhattan", stat: 12.9 },
            { category: "NYC", stat: 16.3 }
          ],
          rentBurden: [
            {
              header: "Severe Rent Burden (2018)"
            },
            { id: "rent-burden" },
            { category: "CD M09", stat: 27.9 },
            { category: "Manhattan", stat: 21.8 },
            { category: "NYC", stat: 26.7 }
          ],
          overCrowdedHousing: [
            {
              header: "Over Crowded Housing (2018)"
            },
            { id: "over-crowded-housing" },
            { category: "CD M09", stat: 11.4 },
            { category: "Manhattan", stat: 6.6 },
            { category: "NYC", stat: 10.6 }
          ],
          famWithChildrenShelter: [
            {
              header:
                "Families with Children in Homeless Shelters (rate per 1,000 households) (FY 2018)"
            },
            { id: "shelter" },
            { category: "CD M09", stat: 3.1 },
            { category: "Manhattan", stat: 2.3 },
            { category: "NYC", stat: 3.6 }
          ],
          disconnectedYouth: [
            {
              header: "Disconnected Youth (not in school, not working) (2018)"
            },
            { id: "disconnected-youth" },
            { category: "CD M09", stat: 8.8 },
            { category: "Manhattan", stat: 10.3 },
            { category: "NYC", stat: 13.7 }
          ],
          noInternet: [
            { header: "Households without Internet (2018)" },
            { id: "internet" },
            { category: "CD M09", stat: 15.9 },
            { category: "Manhattan", stat: 12.6 },
            { category: "NYC", stat: 15.8 }
          ],
          studentsTempHousing: [
            { header: "Students Living in Temporary Housing (SY 2019)" },
            { id: "students-temp-housing" },
            { category: "Urban Assembly Academy for Future Leaders", stat: 20 },
            { category: "SD 5", stat: 20.2 },
            { category: "NYC", stat: 10.2 }
          ],
          studentsDisabilities: [
            { header: "Students with Disabilities (IEP) (SY 2020)" },
            { id: "students-disabilities" },
            {
              category: "Urban Assembly Academy for Future Leaders",
              stat: 45.6
            },
            { category: "SD 5", stat: 24.1 },
            { category: "NYC", stat: 20.4 }
          ],
          studentEcoStatus: [
            { header: "Student Economic Status (SY 2020)" },
            { id: "student-economic-status" },
            {
              category: "Urban Assembly Academy for Future Leaders",
              stat: 89.3
            },
            { category: "SD 5", stat: 79.9 },
            { category: "NYC", stat: 72.6 }
          ],
          suspensions: [
            { header: "Removals and Suspensions (SY 2019)" },
            { id: "suspensions" },
            {
              category: "Urban Assembly Academy for Future Leaders",
              stat: 12
            },
            { category: "SD 5", stat: 7.2 },
            { category: "NYC", stat: 4 }
          ]
        }
      ],
      activeSchool: []
    };
  },
  methods: {
    setInitialActiveSchool() {
      this.activeSchool.push(this.schools[0]);
    },
    createActiveSchool(val) {
      this.activeSchool = [];
      this.schools.forEach(school => {
        if (val.dataset.school === school.school) {
          this.activeSchool.push(school);
        }
      });
    }
  },
  mounted() {
    this.setInitialActiveSchool();
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
