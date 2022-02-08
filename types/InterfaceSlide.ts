import {Body, Base} from './InterfaceBase'
import {Image} from './InterfaceImage'
import {Cta} from './InterfaceCta'

interface BodySlide extends Body {
	title?: string;
    subtitle?: string;
	description?: string;
    cta?: Cta
	primaryImage?: Image;
}

export interface Slide extends Base {
	body: BodySlide
}