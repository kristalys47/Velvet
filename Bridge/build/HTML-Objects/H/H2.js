"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HTMLObject_1 = require("../MainHTMLObject/HTMLObject");
const HTMLObjects_1 = require("../ENUM/HTMLObjects");
class H2 extends HTMLObject_1.HTMLObject {
    constructor(id) {
        super(id, HTMLObjects_1.HTMLObjects.H2);
    }
    setText(text) {
        this.domService.modifyInnerHTML(this.getId(), text);
    }
    getText() {
        return this.domService.getInnerHTML(this.getId());
    }
}
exports.H2 = H2;
