<script lang="ts" setup>
import { products } from "~/data/product";
</script>

<template>
	<ProductCardsGrid :products="products" />
</template>