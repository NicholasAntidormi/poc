import {Banner} from './InterfaceBanner'
import {ClassBase} from './ModelBase'

export class ClassBanner implements Banner, ClassBase  {

    constructor(header, body) {
        super(header, body)
    }

}