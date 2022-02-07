<script lang="ts" setup>
import { getParagraphProps } from "~/connectors/contentful/paragraph";

type Props = {
	data: any
}

const props = defineProps<Props>();

const paragraph = getParagraphProps(props.data)
</script>

<template>
	<BaseText :paragraph="paragraph" />
</template>