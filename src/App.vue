<template>
  <div id="app">
    <Button @button-clicked="createActiveSchool" :schools="schools" />
    <Community :activeSchool="activeSchool" />
    <School :activeSchool="activeSchool" />
    <Sources :sources="sources" />
    <Definitions :definitions="definitions" />
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import Community from "@/components/Community.vue";
import School from "@/components/School.vue";
import Sources from "@/components/Sources.vue";
import Definitions from "@/components/Definitions.vue";
export default {
  name: "App",
  components: {
    Button,
    Community,
    School,
    Sources,
    Definitions
  },
  data() {
    return {
      schools: [
        {
          id: 1,
          school: `Fannie Lou Hamer Freedom High School`,
          shortName: `Fannie Lou Hamer`,
          communityDistrict: "Morrisania (CD B03)",
          schoolDistrict:
            "School District 12 (Crotona Park, Morrisania Melrose)",
          borough: "The Bronx",
          info: [
            `<p>Fannie Lou Hamer Freedom High School is a community school located in the South Bronx. The school received a large portion of funding through the Community School Grant Initiative, a former state grant that was funded by the city until it was cut in the most recent budget. With these funds, the school offered mental health services, as well as upstream prevention services such as food, vision services, tutoring and mentorship. All of these services are at risk as a result of the budget cut to Community Schools.</p>`,
            `<p>The community district where Fannie Lou Hamer is located, Morrisania, is home to more than 23,000 children, and 50% of these children live in households with incomes below the poverty line. Residents in Morrisania have a higher unemployment rate compared to the Bronx and New York City averages before the pandemic. This July, Bronx’s unemployment rate exceeded 21%. The resulting loss of income, food security and housing stability underscores the dire need to maintain the services now at risk at Fannie Lou Hamer. Additionally, Fannie Lou Hamer has a higher-than-average proportion of instances of removals and suspensions, highlighting the critical need to enhance whole-school approaches that support the social/emotional needs of students.</p>`
          ],
          childPoverty: [
            { header: "Child Poverty Rate (2018)" },
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
            {
              header: "Unemployment Rate by County of Residence (August 2020)"
            },
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
            { category: "Bronx", stat: 33.0 },
            { category: "NYC", stat: 26.7 }
          ],
          overCrowdedHousing: [
            {
              header: "Overcrowded Housing (2018)"
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
              header: "Disconnected Youth (2018)"
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
            { header: "Students Living in Temporary Housing<br>(SY 2019)" },
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
            {
              header:
                "Students in Poverty, (SY 2020) (NYC Department of Education 'poverty' measure)"
            },
            { id: "student-economic-status" },
            { category: "Fannie Lou Hamer Freedom High School", stat: 85.7 },
            { category: "SD 12", stat: 91.4 },
            { category: "NYC", stat: 72.6 }
          ],
          suspensions: [
            { header: "Removals/Suspensions Rate (SY 2019)" },
            { id: "suspensions" },
            { category: "Fannie Lou Hamer Freedom High School", stat: 23.4 },
            { category: "SD 12", stat: 8.8 },
            { category: "NYC", stat: 4.0 }
          ]
        },
        {
          id: 2,
          school: "William E. Grady CTE High School",
          shortName: "Grady CTE H.S",
          communityDistrict: "Coney Island (CD K13)",
          schoolDistrict: "School District 21 (Gravesand, Coney Island)",
          borough: "Brooklyn",
          info: [
            `<p>William E. Grady is a career and technical education high school in South Brooklyn. As a recipient of the state-funded Extended School Day/School Violence Prevention grant, the school was able to contract with Counseling in Schools, a non-profit that provides students at the school with behavioral health counseling, Unfortunately, the state grant that funds their contract has yet to be renewed, and money owed for the counseling services last school year was withheld as part of the previous statewide withholding.</p>`,
            `<p>Grady HS has a higher than average enrollment of students with disabilities, and a much higher rate of removals and suspensions. This school is also located in an area of the city that was hit particularly hard by the virus. More than 2,300 positive cases were reported, and more than 300 residents died due to COVID-19 in zip code 11235, making it the sixth-highest zip code in the city for fatalities due to COVID-19. These students, already at a higher need for behavioral health support, may have experienced more trauma and loss of loved ones. This is a time to invest in counseling services for students, not cut them.</p>`
          ],
          childPoverty: [
            { header: "Child Poverty Rate (2018)" },
            { id: "child-poverty" },
            { category: "CD K13", stat: 37.6 },
            { category: "Brooklyn", stat: 26.0 },
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
              header: "Unemployment Rate by County of Residence (August 2020)"
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
              header: "Overcrowded Housing (2018)"
            },
            { id: "over-crowded-housing" },
            { category: "CD K13", stat: 10.8 },
            { category: "Brooklyn", stat: 10.5 },
            { category: "NYC", stat: 10.6 }
          ],
          famWithChildrenShelter: [
            {
              header:
                "Families with Children in Homeless Shelters <br> (rate per 1,000 households) (FY 2018)"
            },
            { id: "shelter" },
            { category: "CD K13", stat: 2.1 },
            { category: "Brooklyn", stat: 3.4 },
            { category: "NYC", stat: 3.6 }
          ],
          disconnectedYouth: [
            {
              header: "Disconnected Youth (2018)"
            },
            { id: "disconnected-youth" },
            { category: "CD K13", stat: 12.8 },
            { category: "Brooklyn", stat: 14.1 },
            { category: "NYC", stat: 13.7 }
          ],
          noInternet: [
            { header: "Households without Internet (2018)" },
            { id: "internet" },
            { category: "CD K13", stat: 25.1 },
            { category: "Broooklyn", stat: 17.2 },
            { category: "NYC", stat: 15.8 }
          ],
          studentsTempHousing: [
            { header: "Students Living in Temporary Housing<br>(SY 2019)" },
            { id: "students-temp-housing" },
            { category: "William E. Grady CTE HIgh School", stat: 11.2 },
            { category: "SD 21", stat: 6.0 },
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
            {
              header:
                "Students in Poverty, (SY 2020) (NYC Department of Education 'poverty' measure)"
            },
            { id: "student-economic-status" },
            { category: "William E. Grady CTE HIgh School", stat: 87.6 },
            { category: "SD 21", stat: 72.4 },
            { category: "NYC", stat: 72.6 }
          ],
          suspensions: [
            { header: "Removals/Suspensions Rate (SY 2019)" },
            { id: "suspensions" },
            { category: "William E. Grady CTE HIgh School", stat: 23.1 },
            { category: "SD 21", stat: 4.9 },
            { category: "NYC", stat: 4 }
          ]
        },
        {
          id: 3,
          school: `Urban Assembly Academy for Future Leaders`,
          shortName: "Future Leaders",
          communityDistrict: "Manhattanville (CD M09)",
          schoolDistrict: "School District 5 (Central Harlem)",
          borough: "Manhattan",
          info: [
            `<p>The Academy for Future Leaders is a middle school in Harlem and part of The Urban Assembly network of schools. In partnership with the network, AFL has done extraordinary work to build a positive environment and expand the school’s capacity for social-emotional learning. Since implementation of their social-emotional learning program <a href="http://www.resilientscholars.org/" target="_blank">Resilient Scholars</a>, school suspensions have dropped by 70%, but many of the school’s central supports are currently at risk due to the DOE’s reluctance to fund contracts for networks like The Urban Assembly.</p>`,
            `<p>About 20% of students in AFL’s School District 5 (Central Harlem) live in temporary housing, compared to 10% citywide. The community district of Central Harlem has higher rates of severe rent burden, overcrowded housing, and households without internet compared to the city averages. These students may be entering the blended school year with added stress, trauma, and steeper challenges to successful remote engagement. Fostering a positive environment and social-emotional learning is tantamount to their long-term success; now is not the time to dismantle central school supports like UA. 
          </p>`
          ],
          childPoverty: [
            { header: "Child Poverty Rate (2018)" },
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
              header: "Unemployment Rate by County of Residence (August 2020)"
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
              header: "Overcrowded Housing (2018)"
            },
            { id: "over-crowded-housing" },
            { category: "CD M09", stat: 11.4 },
            { category: "Manhattan", stat: 6.6 },
            { category: "NYC", stat: 10.6 }
          ],
          famWithChildrenShelter: [
            {
              header:
                "Families with Children in Homeless Shelters<br>(rate per 1,000 households) (FY 2018)"
            },
            { id: "shelter" },
            { category: "CD M09", stat: 3.1 },
            { category: "Manhattan", stat: 2.3 },
            { category: "NYC", stat: 3.6 }
          ],
          disconnectedYouth: [
            {
              header: "Disconnected Youth (2018)"
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
            { header: "Students Living in Temporary Housing<br>(SY 2019)" },
            { id: "students-temp-housing" },
            { category: "Urban Assembly Academy for Future Leaders", stat: 20.0 },
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
            {
              header:
                "Students in Poverty, (SY 2020) (NYC Department of Education 'poverty' measure)"
            },
            { id: "student-economic-status" },
            {
              category: "Urban Assembly Academy for Future Leaders",
              stat: 89.3
            },
            { category: "SD 5", stat: 79.9 },
            { category: "NYC", stat: 72.6 }
          ],
          suspensions: [
            { header: "Removals/Suspensions Rate (SY 2019)" },
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
      sources: [
        {
          id: 1,
          info:
            "U.S. Census Bureau, American Community Survey: Child Poverty Rate (2018), Unemployment Rate (2019), Severe Rent Burden (2018), Overcrowded Housing (2018), Disconnected Youth (2018), Households without Internet (2018).",
          url: ["https://data.cccnewyork.org/data"]
        },
        {
          id: 2,
          info:
            "New York State Department of Labor: Unemployment Rate by County of Residence New York State, August 2020",
          url: ["https://www.labor.ny.gov/stats/pressreleases/prlaus.shtm"]
        },
        {
          id: 3,
          info:
            "New York City Department of Homeless Services: Families with Children in Homeless Shelters (rate per 1,000 households) (FY 2018)",
          url: [
            "https://data.cccnewyork.org/data/map/1308/families-with-children-in-homeless-shelters#1308/a/3/1587/40/a/a"
          ]
        },
        {
          id: 4,
          info:
            "New York City Department of Education, Demographic Snapshots: Students with Disabilities (IEP) (SY 2020), and Students in Poverty (SY 2020)",
          url: [
            "https://data.cccnewyork.org/data/map/1278/students-with-disabilities-iep#1278/a/5/1481/99/a/a",
            "https://infohub.nyced.org/reports/school-quality/information-and-data-overview"
          ]
        },
        {
          id: 5,
          info:
            "New York City Department of Education, Students in Temporary Housing Reports: Students Living in Temporary Housing (SY 2019)",
          url: [
            "https://data.cccnewyork.org/data/map/1282/students-living-in-temporary-housing#1282/a/5/1489/62/a/a",
            "https://infohub.nyced.org/reports/government-reports/students-in-temporary-housing-reports"
          ]
        },
        {
          id: 6,
          info:
            "New York City Department of Education, Student Discipline report: Removals/Suspensions Rate (SY 2019).",
          url: [
            "https://infohub.nyced.org/reports/government-reports/suspension-reports"
          ]
        }
      ],
      definitions: [
        {
          category: "Child Poverty Rate",
          define:
            "Children under 18 years in households with incomes below the Federal Poverty Level."
        },
        {
          category: "Unemployment Rate",
          define:
            " Individuals 16 years and older actively seeking employment (within the last four weeks) who are unemployed."
        },
        {
          category: "Severe Rent Burden",
          define:
            "Renter households who spend 50% or more of their income on rent"
        },
        {
          category: "Overcrowded Housing",
          define:
            "Occupied rental housing units with more than one person per room."
        },
        {
          category:
            "Families with Children in Homeless Shelters<br>(rate per 1,000 households)",
          define:
            "The number of families in Department of Homeless Services family shelters as of June 30th (the last month of the city fiscal year), by their last community district of residence."
        },
        {
          category: "Disconnected Youth",
          define:
            "Teens and youth 16 to 24 years who are not in school and not working."
        },
        {
          category: "Households without Internet",
          define:
            "Households with no internet access. Internet access includes dial-up, broadband, and cellular data plans."
        },
        {
          category: "Students Living in Temporary Housing",
          define:
            "Public school students (excluding charter schools) who identified as homeless anytime during the school year, even if they are no longer experiencing homelessness at the end of the school year. Temporary housing includes situations where a student's primary nighttime residence is in a shelter, transitional housing, hotel or motel, doubled-up, or unsheltered."
        },
        {
          category: "Students with Disabilities (IEP)",
          define:
            "Students with disabilities are defined as any child receiving an IEP as of the end of the school year. "
        },
        {
          category: "Students in Poverty",
          define:
            "'Poverty' counts are based on the number of students with families who have qualified for free or reduced price lunch, or are eligible for Human Resources Administration (HRA) benefits as defined by the DOE 'poverty' measure."
        },
        {
          category: "Removals/Suspensions Rate",
          define:
            "All removals and suspensions as a share of total enrollment. Students can be suspended more than once, so this rate  does not  reflect the exact proportion of individual students who were suspended."
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
