import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: () => import('@/views/HomeView.vue'),
		},
		{
			path: '/notice',
			name: 'Notice',
			component: () => import('@/views/Notice/NoticeList.vue'),
		},
		{
			path: '/notice/:id',
			name: 'NoticeDetail',
			component: () => import('@/views/Notice/NoticeDetail.vue'),
		},
		{
			path: '/admin',
			name: 'Admin',
			component: () => import('@/views/Admin/AdminView.vue'),
			children: [
				{
					path: 'notice',
					name: 'AdminNotice',
					component: () => import('@/views/Admin/Notice/AdminNoticeList.vue'),
				},
				{
					path: 'notice/:id',
					name: 'AdminNoticeDetail',
					component: () => import('@/views/Admin/Notice/AdminNoticeDetail.vue'),
				},
				{
					path: 'notice/form/:id',
					name: 'AdminNoticeForm',
					component: () => import('@/views/Admin/Notice/AdminNoticeForm.vue'),
				},
			],
		},
	],
});

export default router;
