import { notices } from '@/api/index';

export function getNotices(params?: object) {
	return notices.get('/', { params });
}

export function getNoticeById(id: number) {
	return notices.get(`/${id}`);
}

export function createNotice(data: object) {
	return notices.post('', data);
}

export function updateNotice(id: number, data: object) {
	return notices.put(`/${id}`, data);
}

export function deleteNotice(id: number) {
	return notices.delete(`/${id}`);
}
