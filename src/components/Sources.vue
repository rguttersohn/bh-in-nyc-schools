<template>
  <div class="sources-wrapper">
    <h2 @click="activateAccordion">Sources</h2>
    <div class="source-list" :class="classList[0]">
        <p v-for="source in sources" :key="source.id" class="table-note">
          {{ source.info }}
          <a v-for="link in source.url" :key="link" :href="link" target="_blank"
            >(Source link)&nbsp;</a
          >
        </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sources: Array
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