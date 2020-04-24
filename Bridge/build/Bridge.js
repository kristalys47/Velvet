"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const H1_1 = require("./HTML-Objects/H/H1");
const H2_1 = require("./HTML-Objects/H/H2");
const H3_1 = require("./HTML-Objects/H/H3");
const H4_1 = require("./HTML-Objects/H/H4");
const H5_1 = require("./HTML-Objects/H/H5");
const H6_1 = require("./HTML-Objects/H/H6");
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
                case HTMLObjects_1.HTMLObjects.H1: {
                    this.HTMLObjects.push(new H1_1.H1(instaceData.id));
                    break;
                }
                case HTMLObjects_1.HTMLObjects.H2: {
                    this.HTMLObjects.push(new H2_1.H2(instaceData.id));
                    break;
                }
                case HTMLObjects_1.HTMLObjects.H3: {
                    this.HTMLObjects.push(new H3_1.H3(instaceData.id));
                    break;
                }
                case HTMLObjects_1.HTMLObjects.H4: {
                    this.HTMLObjects.push(new H4_1.H4(instaceData.id));
                    break;
                }
                case HTMLObjects_1.HTMLObjects.H5: {
                    this.HTMLObjects.push(new H5_1.H5(instaceData.id));
                    break;
                }
                case HTMLObjects_1.HTMLObjects.H6: {
                    this.HTMLObjects.push(new H6_1.H6(instaceData.id));
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
