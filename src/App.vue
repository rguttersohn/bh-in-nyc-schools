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
    School,
  },
  data() {
    return {
      schools: [
        {
          id: 1,
          school: `Fannie Lou Hamer Freedom HS `,
          map: "./fannie-lou.png",
          info: `<p>This is school one's info</p>
        <p>School one had some issues, but it's all better now</p>`,
          data: [
            { category: "category 1", stat: 10 },
            { category: "category 2", stat: 30 },
            { category: "category 3", stat: 50 }
          ],
          dataTwo: [
            { category: "cat 1", stat: 30 },
            { category: "cat 2", stat: 70 },
            { category: "cat 3", stat: 120 },
            { category: "cat 4", stat: 160 },
            { category: "cat 5", stat: 20 }
          ]
        },
        {
          id: 2,
          school: "HS for Youth and Community Development ",
          map: "./youthcommunity.png",
          info: `<p>This is school Two's info</p>
        <p>School two was doing great, but now things are lousy</p>`,
          data: [
            { category: "cat 1", stat: 50 },
            { category: "cat 2", stat: 10 },
            { category: "cat 3", stat: 30 }
          ],
           dataTwo: [
            { category: "cat 1", stat: 90 },
            { category: "cat 2", stat: 30 },
            { category: "cat 3", stat: 80 },
            { category: "cat 4", stat: 60 },
            { category: "cat 5", stat: 70 }
          ]
        },
        {
          id: 3,
          school: "Long Island City HS",
          map: "https://www.cccnewyork.org/wp-content/uploads/2020/08/Screen-Shot-2020-08-27-at-3.51.20-PM.png",
          info: `<p>This is school three's info</p>
        <p>School three was doing great, but now things are mediocre thanks to the courage of its janitorial staff.</p>`,
          data: [
            { category: "category 1", stat: 5 },
            { category: "category 2", stat: 20 },
            { category: "category 3", stat: 50 }
          ],
           dataTwo: [
            { category: "cat 1", stat: 30 },
            { category: "cat 2", stat: 60 },
            { category: "cat 3", stat: 120 },
            { category: "cat 4", stat: 40 },
            { category: "cat 5", stat: 210 }
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
