<template>
  <div class="sources-wrapper">
    <h2 @click="activateAccordion">Definitions</h2>
    <div class="source-list" :class="classList">
        <p class="table-note" v-for="definition in definitions" :key="definition.category"><span>{{definition.category}}: </span>{{definition.define}}</p>
    </div>
 
  </div>
</template>

<script>
export default {
  props: {
    definitions: Array
  },
  data() {
    return {
      classList: []
    };
  },
    methods: {
    activateAccordion() {
      this.classList.length === 0
        ? this.classList.push("source-list-active")
        : this.classList.pop();
    }
  }
};
</script>

<style>
</style>