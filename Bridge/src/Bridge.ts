import { HTMLObject } from "./HTML-Objects/MainHTMLObject/HTMLObject";
import { IInputJSON } from "./Interfaces/InputJSON.interface";
import { HTag } from "./HTML-Objects/HTag";
import { P } from "./HTML-Objects/P";
import { IMG } from "./HTML-Objects/IMG";
import { HTMLObjects } from "./HTML-Objects/ENUM/HTMLObjects";

let templatePath: string;

export class Bridge {
    
    private HTMLObjects: HTMLObject[] = [];

    constructor(inputData: IInputJSON[], path: string) {
        templatePath = path;
        // Crea los objetos con la info del JSON.
        inputData.forEach((instaceData: IInputJSON) => {
            switch(instaceData.type) {
                case "H1":
                case "H2":
                case "H3":
                case "H4":
                case "H5":
                case "H6": {
                    this.HTMLObjects.push(new HTag(instaceData.id))
                    break;
                }
                case HTMLObjects.P: {
                    this.HTMLObjects.push(new P(instaceData.id))
                    break;
                }
                case HTMLObjects.IMG: {
                    this.HTMLObjects.push(new IMG(instaceData.id))
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
    getHTMLObjectById(id: string): HTMLObject { return this.HTMLObjects.filter( (value: HTMLObject) => value.getId() === id)[0]; }
}

export { templatePath }
