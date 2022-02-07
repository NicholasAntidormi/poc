<script lang="ts" setup>
import { Paragraph } from "~/types/Paragraph";

type Props = {
	paragraph: Paragraph
}

defineProps<Props>();
</script>

<template>
	<p>{{ paragraph.text }}</p>
</template>