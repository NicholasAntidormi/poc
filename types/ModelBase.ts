import {Base, Body, Header} from './InterfaceBase'

export abstract class ClassBase implements Base {
  header: Header

  body: Body
    
  constructor(header: Header, body: Body) {
    this.header = header

    this.body = body
  }

  get() {
    const obj = {}
    Object.getOwnPropertyNames(this).forEach(
      (val) => obj[val] = this[val]
    );
  }
}