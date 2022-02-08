import {Base} from './InterfaceBase'
import {Image} from './InterfaceImage'

interface BodyAttribute extends Body {
    title: string;
    value: string;
    type?: string;
    PrimaryImage?: Image;
}

export interface Attribute extends Base {
    body: BodyAttribute
}