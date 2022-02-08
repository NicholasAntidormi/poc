import {Body, Base} from './InterfaceBase'
import {Image} from './InterfaceImage'
import {Cta} from './InterfaceCta'
import {Slide} from './InterfaceSlide'

interface BodyCarousel extends Body {
	title?: string;
    subtitle?: string;
	description?: string;
    cta?: Cta
	primaryImage?: Image;
    slides: Slide[]
}

export interface Banner extends Base {
	body: BodyCarousel
}