"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.templatePath = exports.Bridge = void 0;
const HTag_1 = require("./HTML-Objects/HTag");
const P_1 = require("./HTML-Objects/P");
const IMG_1 = require("./HTML-Objects/IMG");
const HTMLObjects_1 = require("./HTML-Objects/ENUM/HTMLObjects");
let templatePath;
exports.templatePath = templatePath;
class Bridge {
    constructor(inputData, path) {
        this.HTMLObjects = [];
        exports.templatePath = templatePath = path;
        // Crea los objetos con la info del JSON.
        inputData.forEach((instaceData) => {
            switch (instaceData.type) {
                case HTMLObjects_1.HTMLObjects.HTag: {
                    this.HTMLObjects.push(new HTag_1.HTag(instaceData.id));
                    break;
                }
                case HTMLObjects_1.HTMLObjects.P: {
                    this.HTMLObjects.push(new P_1.P(instaceData.id));
                    break;
                }
                case HTMLObjects_1.HTMLObjects.IMG: {
                    this.HTMLObjects.push(new IMG_1.IMG(instaceData.id));
                    break;
                }
            }
        });
    }
    /**
     * return all the data in a array
     */
    getHTMLObjects() { return this.HTMLObjects; }
    /**
     * Get an item by its id
     * @param {*} id represents the id of item in the HTML you want to get.
     */
    getHTMLObjectById(id) { return this.HTMLObjects.filter((value) => value.getId() === id)[0]; }
}
exports.Bridge = Bridge;
