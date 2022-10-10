<template>
	<div>
		<h2>공지사항 목록</h2>
		<button type="button" class="btn btn-primary" @click="goFormPage()">
			등록
		</button>
		<hr class="my-4" />
		<table class="table table-striped">
			<thead>
				<tr>
					<th scoped="col">#</th>
					<th scoped="col">제목</th>
					<th scoped="col">생성일</th>
					<th scoped="col">수정일</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="notice in notices" :key="notice.id">
					<th scope="row">{{ notice.id }}</th>
					<th class="link-text" @click="goDetailPage(notice.id!)">
						{{ notice.title }}
					</th>
					<th>{{ notice.createdAt }}</th>
					<th>{{ notice.updatedAt }}</th>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { getNotices } from '@/api/admin';
import type { NoticeItem } from '@/types/Notice';
import { useRouter } from 'vue-router';

const router = useRouter();

const goDetailPage = (id: number) => {
	router.push({
		name: 'AdminNoticeDetail',
		params: {
			id,
		},
	});
};

const goFormPage = () => {
	router.push({
		name: 'AdminNoticeForm',
		params: {
			id: -1,
		},
	});
};

const notices = ref<Array<NoticeItem>>([]);
const fetchNotices = async () => {
	try {
		const { data } = await getNotices();
		notices.value = data;
	} catch (err) {
		console.error(err);
	}
};

fetchNotices();
</script>

<style scoped>
.link-text:hover {
	text-decoration: underline;
	cursor: pointer;
}
</style>
