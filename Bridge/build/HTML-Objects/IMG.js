"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HTMLObject_1 = require("./MainHTMLObject/HTMLObject");
const HTMLObjects_1 = require("./ENUM/HTMLObjects");
class IMG extends HTMLObject_1.HTMLObject {
    // private height: number = 50;
    // private width: number = 50;
    constructor(id) {
        super(id, HTMLObjects_1.HTMLObjects.IMG);
        this.alt = '';
    }
    setSrc(src) {
        this.domService.setSrc(this.getId(), src);
    }
    getSrc() {
        return this.domService.getSrc(this.getId());
    }
    setAlt(text) {
        this.domService.setAlt(this.getId(), text);
    }
    getAlt() {
        return this.domService.getAlt(this.getId());
    }
}
exports.IMG = IMG;
