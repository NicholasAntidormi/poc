<script lang="ts" setup>
import { products } from "~/data/product";
</script>

<template>
	<VContainer>
		<ProductCardsGrid :products="products" />
	</VContainer>
</template>