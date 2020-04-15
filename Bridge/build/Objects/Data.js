"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Data {
    constructor(data) {
        this.id = '';
        this.text = '';
        this.type = '';
        this.id = data.id;
        this.text = data.text;
        this.type = data.type;
    }
    setText(text) {
        this.text = text;
    }
    getType() {
        return this.type;
    }
    getId() {
        return this.id;
    }
}
exports.Data = Data;
