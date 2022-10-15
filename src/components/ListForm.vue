<template>
  <div class="wrapper" @click="clickHandle">
    <h3>{{ title }}</h3>
    <h3>{{ date }}</h3>
  </div>
  <hr />
</template>

<script lang="ts">
export default {
  props: { title: String, date: String },
  methods: {
    clickHandle() {
      console.log("You Clicked!!!");
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 10px 0px 10px;

  &:hover {
    cursor: pointer;
  }
  h3 {
    font-size: 15px;
  }
}
hr {
  color: hsl(0, 0%, 50%);
}
</style>
