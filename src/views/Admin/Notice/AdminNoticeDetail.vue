<template>
	<div>
		<h2>Detail Page</h2>
		<p>Title: {{ notice!.title }}</p>
		<p>Content: {{ notice!.content }}</p>
		<button type="button" class="btn btn-info" @click="goListPage()">
			목록
		</button>
		<button type="button" class="btn btn-warning" @click="goFormPage()">
			수정
		</button>
		<button type="button" class="btn btn-danger" @click="removeNotice()">
			삭제
		</button>
	</div>

	<p>{{ JSON.stringify(notice) }}</p>
</template>

<script setup lang="ts">
import { deleteNotice, getNoticeById } from '@/api/admin';
import type { NoticeItem } from '@/types/Notice';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const notice = ref<NoticeItem>();
const id = Number(route.params.id);

const goListPage = () => {
	router.push({
		name: 'AdminNotice',
	});
};

const goFormPage = () => {
	router.push({
		name: 'AdminNoticeForm',
		params: {
			id,
		},
	});
};

const removeNotice = async () => {
	try {
		await deleteNotice(id);
		router.push({ name: 'AdminNotice' });
	} catch (err) {
		console.error(err);
		alert(err);
	}
};

const fetchNotice = async () => {
	try {
		const { data } = await getNoticeById(id);
		notice.value = data;
		console.log(notice.value);
	} catch (err) {
		console.error(err);
	}
};

fetchNotice();
</script>

<style scoped></style>
