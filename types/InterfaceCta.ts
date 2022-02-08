import {Body, Base} from './InterfaceBase'

interface BodyCta extends Body {
	label: string;
    url: string;
	title?: string;
	target?: string; 
}

export interface Cta extends Base {
	body: BodyCta
}