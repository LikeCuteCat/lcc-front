<template>
  <div>
    <h2>Announcements</h2>
    <ListForm :title="Kwon" :date="2020" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ListForm from "../../components/ListForm";
export default defineComponent({
  components: {
    ListForm,
  },
});
</script>

<style scoped>
div {
  margin: auto;
  width: 70%;
  border: solid 2px gray;
  border-radius: 10px;
  height: 100vh;
}
</style>
