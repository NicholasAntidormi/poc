<script lang="ts" setup>
import { Product } from "~/types/Product";
import { AppImageProps } from "~/components/App/Image.vue";

type Props = {
  product: Product;
};

const props = defineProps<Props>();

const image: AppImageProps = {
  src: props.product.imageUrl,
  title: props.product.title,
  alt: props.product.title,
};
</script>

<template>
	<AppImage v-bind="image" />
</template>
