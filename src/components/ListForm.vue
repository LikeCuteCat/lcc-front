<template>
  <div class="wrapper">
    <h3>{{ title }}</h3>
    <h3>{{ date }}</h3>
  </div>
  <hr />
</template>

<script lang="ts">
export default {
  props: ["title", "date"],
};
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
}
hr {
  color: hsl(0, 0%, 90%);
}
</style>
