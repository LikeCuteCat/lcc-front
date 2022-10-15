<template>
  <div>
    <h2>Announcements</h2>
    <div v-for="notice in notices" :key="notice.id">
      <ListForm :title="notice.title" :date="notice.createdAt" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref } from "vue";
import axios from "axios";
import ListForm from "../../components/ListForm.vue";

import { getNotices } from "@/api/admin";
import type { NoticeItem } from "@/types/Notice";

const notices = ref<Array<NoticeItem>>([]);
const fetchNotices = async () => {
  try {
    const { data } = await getNotices();
    notices.value = data;
    console.log(notices);
  } catch (err) {
    console.error(err);
  }
};

// export default defineComponent({
//   components: { ListForm },
//   // mounted() {
//   //   axios
//   //     .get("http://localhost:3001/notices")
//   //     .then((res) => (this.notices = res.data))
//   //     .catch((error) => console.log(error));
//   // },
//   // methods: {
//   //   dataTest() {
//   //     console.log(this.notices);
//   //   },
//   // },
// });
fetchNotices();
</script>

<style scoped>
div {
  margin: auto;
  width: 70%;
  border-radius: 10px;
  height: 100vh;
}
</style>
