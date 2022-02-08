import {Base} from './InterfaceBase'

interface srcImage {
    width: number;
    height: number;
    src: string;
}

interface focalPoint {
    x: number;
    y: number;
}

interface BodyImage extends Body {
    image: srcImage;
    focalPoint: focalPoint;
    alt: string;
    base64: string;
}

export interface Image extends Base {
    body: BodyImage
}