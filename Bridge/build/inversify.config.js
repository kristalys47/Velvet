"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const types_1 = require("./Services/types");
const H2_1 = require("./HTML-Objects/H/H2");
const myContainer = new inversify_1.Container();
exports.myContainer = myContainer;
myContainer.bind(types_1.TYPES.IHTag).to(H2_1.H2);
