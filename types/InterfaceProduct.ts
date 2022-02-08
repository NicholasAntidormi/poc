import {Body, Base} from './InterfaceBase'
import {Variant} from './InterfaceVariant'
import {Image} from './InterfaceImage'

interface Details extends Body {
    shippingMethod: string;
    shippingTime: string;
    taxes: string;
}

interface BodyProduct extends Body {
	id: string;
	title: string;
	type: string;
	details: Details;
	variants: Variant[];
	primaryImage: Image;
	AdditionalImages?: Image[];
}

export interface Product extends Base {
	body: BodyProduct
}