import { Product } from "~/types/Product";

export const product: Product = {
	id: 'id',
	title: 'title',
	imageUrl: 'https://picsum.photos/300/400'
}

export const products: Array<Product> = Array.from(Array(10).keys()).map(_ => product)