<script lang="ts" setup>
import { moduleParagraph, moduleParagraphMK } from "~/data/Contentful/moduleParagraph";
</script>

<template>
	<VContainer>
		<ModuleText :data="moduleParagraph" />
		<ModuleTextLarge :data="moduleParagraphMK" />
	</VContainer>
</template>