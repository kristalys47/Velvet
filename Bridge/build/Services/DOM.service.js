"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
require("reflect-metadata");
let DOMService = class DOMService {
    constructor() {
        this.fs = require('fs');
        this.DOM = require('../../../DOM.js');
    }
    modifyInnerHTML(id, newInnerHTML) {
        this.DOM.then((dom) => {
            dom.window.document.getElementById(id).innerHTML = newInnerHTML;
            this.fs.writeFile('./ResumeTemplate.html', dom.window.document.documentElement.outerHTML, (err) => {
                if (err) {
                    console.error(err);
                }
                else {
                    console.log(id, "MODIFIED");
                }
            });
        });
    }
    getInnerHTML(id) {
        return this.DOM.then((dom) => dom.window.document.getElementById(id).innerHTML);
    }
    getSrc(id) {
        return this.DOM.then((dom) => dom.window.document.getElementById(id).src);
    }
    setSrc(id, newSrc) {
        this.DOM.then((dom) => {
            dom.window.document.getElementById(id).src = newSrc;
            this.fs.writeFile('./ResumeTemplate.html', dom.window.document.documentElement.outerHTML, (err) => {
                if (err) {
                    console.error(err);
                }
                else {
                    console.log(id, "MODIFIED");
                }
            });
        });
    }
    getAlt(id) {
        return this.DOM.then((dom) => dom.window.document.getElementById(id).alt);
    }
    setAlt(id, newAlt) {
        this.DOM.then((dom) => {
            dom.window.document.getElementById(id).alt = newAlt;
            this.fs.writeFile('./ResumeTemplate.html', dom.window.document.documentElement.outerHTML, (err) => {
                if (err) {
                    console.error(err);
                }
                else {
                    console.log(id, "MODIFIED");
                }
            });
        });
    }
};
DOMService = __decorate([
    inversify_1.injectable()
], DOMService);
exports.DOMService = DOMService;
