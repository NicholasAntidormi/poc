<script lang="ts">
export type AppImageProps = {
  src: string;
  alt: string;
  title: string;
};
</script>

<script lang="ts" setup>
defineProps<AppImageProps>();
</script>

<template>
	<img :src="src" :alt="alt" :title="title" >
</template>