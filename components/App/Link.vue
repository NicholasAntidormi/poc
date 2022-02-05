<script lang="ts">
export type LinkProps = {
  href: string;
};
</script>

<script lang="ts" setup>
defineProps<LinkProps>();
</script>

<template>
	<a :href="href">
		<slot />
	</a>
</template>