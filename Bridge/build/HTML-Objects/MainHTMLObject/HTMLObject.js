"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLObject = void 0;
const inversify_1 = require("inversify");
const types_1 = require("../../types");
const DOM_service_1 = require("../../Services/DOM.service");
const di_container_1 = require("../../di-container");
let HTMLObject = /** @class */ (() => {
    class HTMLObject {
        constructor(id, type) {
            this.id = '';
            this.style = '';
            this.domService = di_container_1.DIContainer.resolve(DOM_service_1.DOMService);
            this.id = id;
            this.type = type;
        }
        getId() { return this.id; }
        getType() { return this.type; }
        getStyle() { return this.style; }
        setStyle(newStyle) { this.style = newStyle; }
    }
    __decorate([
        inversify_1.inject(types_1.TYPES.IHTag),
        __metadata("design:type", DOM_service_1.DOMService)
    ], HTMLObject.prototype, "domService", void 0);
    return HTMLObject;
})();
exports.HTMLObject = HTMLObject;
