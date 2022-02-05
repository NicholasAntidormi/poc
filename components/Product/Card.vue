<script lang="ts" setup>
import { Product } from "~/types/Product";

type Props = {
  product: Product;
};

defineProps<Props>();
</script>

<template>
	<Card>
		<template #header>
			<h3>{{ product.title }}</h3>
		</template>

		<ProductImage :product="product" />
	</Card>
</template>
