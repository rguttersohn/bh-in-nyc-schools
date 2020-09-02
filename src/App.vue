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
          "Children Under 18": [
            { category: "Morrisiana", stat: "23,338"},
            { category: "Bronx", stat: "355,049"},
            { category: "NYC", stat: "1,739,256"}
          ],
          "Child Poverty": [
            { category: "Morrisiana", stat: 50.7 },
            { category: "Bronx", stat: 38.1 },
            { category: "NYC", stat: 23.8 }
          ]
        },
        {
          id: 2,
          school: "HS for Youth and Community Development ",
          map: "src/assets/youthcommunity.png",
          info: `<p>This school is in Flatbush/Midwood (CD K14) in Brooklyn. Say something about Risk Ranking and this CD being among moderate risk communities, but moderate-high in health domain.</p>`,
          "Children Under 18": [
            { category: "Flatbush/Midwood", stat: "34,701" },
            { category: "Brooklyn", stat: "588,823" },
            { category: "NYC", stat: "1,739,256" }
          ],
          "Child Poverty": [
            { category: "Flatbush/Midwood", stat: 16.2 },
            { category: "Brooklyn", stat: 26 },
            { category: "NYC", stat: 23.8 }
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
