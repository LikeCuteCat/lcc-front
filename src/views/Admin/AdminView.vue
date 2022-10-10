<template>
	<div>
		<h1>This is an Admin Page</h1>
		<hr />
		<div class="row">
			<AdminSideNav class="col-1" />
			<RouterView class="col-11" />
		</div>
	</div>
</template>

<script setup lang="ts">
import AdminSideNav from '@/components/Admin/AdminSideNav.vue';
</script>

<style scoped></style>
