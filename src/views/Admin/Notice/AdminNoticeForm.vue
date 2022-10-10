<template>
	<form>
		<div class="mb-3">
			<label for="title" class="form-label">Title</label>
			<input
				v-model="form!.title"
				type="text"
				class="form-control"
				id="title"
			/>
		</div>
		<div class="mb-3">
			<label for="content" class="form-label">Content</label>
			<textarea
				v-model="form!.content"
				type="textarea"
				class="form-control"
				id="content"
			/>
		</div>
		<button
			v-if="id < 0"
			type="button"
			class="btn btn-primary"
			@click="saveNotice()"
		>
			생성
		</button>
		<button v-else type="button" class="btn btn-primary" @click="patchNotice()">
			수정
		</button>

		<p>{{ JSON.stringify(form) }}</p>
	</form>
</template>

<script setup lang="ts">
import { createNotice, getNoticeById, updateNotice } from '@/api/admin';
import type { NoticeItem } from '@/types/Notice';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const form = ref<NoticeItem>({
	title: '',
	content: '',
	createdAt: '',
});

const id = Number(route.params.id);
const fetchNotice = async () => {
	try {
		const { data } = await getNoticeById(id);
		form.value.title = data.title;
		form.value.content = data.content;
		form.value.createdAt = data.createdAt;
	} catch (err) {
		console.error(err);
	}
};
fetchNotice();
const saveNotice = async () => {
	try {
		await createNotice({
			...form.value,
			createdAt: Date.now(),
			updatedAt: Date.now(),
		});
		router.push({ name: 'AdminNotice' });
	} catch (err) {
		console.error(err);
		alert(err);
	}
};

const patchNotice = async () => {
	try {
		await updateNotice(id, {
			...form.value,
			updatedAt: Date.now(),
		});
		router.push({ name: 'AdminNotice' });
	} catch (err) {
		console.error(err);
		alert(err);
	}
};
</script>

<style scoped></style>
