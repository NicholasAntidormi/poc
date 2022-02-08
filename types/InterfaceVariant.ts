import {Base} from './InterfaceBase'
import {Image} from './InterfaceImage'
import {Attribute} from './InterfaceAttribute'

interface Details extends Body {
    shippingMethod: string;
    shippingTime: string;
    taxes: string;
}

interface BodyVariant extends Body {
    sku: string;
    attributes: Attribute[];
    details : Details;
    type?: string|Object
    description?: string;
    shortDescription?: string;
    PrimaryImage?: Image;
    AdditionalImages?: Image[];
    notes?: string
}

export interface Variant extends Base {
    body: BodyVariant
}