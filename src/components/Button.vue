<template>
  <div>
    <button
      @click="handleButtonClick"
      class="school-button"
      v-for="school in schools"
      :key="school.id"
      :data-school="school.school"
    >{{school.school}}</button>
  </div>
</template>

<script>
export default {
  props: {
    schools: Array
  },
  methods: {
    handleButtonClick(event) {
      let active = document.querySelector(".school-button-active");
      if (active) {
        active.classList.remove("school-button-active");
      }
      this.$emit("button-clicked", event.target);
      event.target.classList.add("school-button-active");
    }
  }
};
</script>

<style scoped>
</style>