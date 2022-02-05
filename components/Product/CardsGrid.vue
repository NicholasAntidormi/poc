<script lang="ts" setup>
import { Product } from "~/types/Product";

type Props = {
  products: Array<Product>;
};

defineProps<Props>();
</script>

<template>
	<Grid>
		<ProductCard v-for="product in products" :key="product.id" :product="product" />
	</Grid>
</template>