"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P = void 0;
const HTMLObject_1 = require("./MainHTMLObject/HTMLObject");
const HTMLObjects_1 = require("./ENUM/HTMLObjects");
class P extends HTMLObject_1.HTMLObject {
    constructor(id) {
        super(id, HTMLObjects_1.HTMLObjects.P);
    }
    setText(text) {
        this.domService.modifyInnerHTML(this.getId(), text);
    }
    getText() {
        return this.domService.getInnerHTML(this.getId());
    }
    setStyle(styleObj) {
        this.domService.modifyStyle(this.getId(), styleObj);
    }
}
exports.P = P;
