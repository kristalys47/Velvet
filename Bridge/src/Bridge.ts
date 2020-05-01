import { HTMLObject } from "./HTML-Objects/MainHTMLObject/HTMLObject";
import { H1 } from "./HTML-Objects/H/H1";
import { IInputJSON } from "./Interfaces/InputJSON.interface";
import { H2 } from "./HTML-Objects/H/H2";
import { H3 } from "./HTML-Objects/H/H3";
import { H4 } from "./HTML-Objects/H/H4";
import { H5 } from "./HTML-Objects/H/H5";
import { H6 } from "./HTML-Objects/H/H6";
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
                case HTMLObjects.H1: {
                    this.HTMLObjects.push(new H1(instaceData.id))
                    break;
                }
                case HTMLObjects.H2: {
                    this.HTMLObjects.push(new H2(instaceData.id))
                    break;
                }             
                case HTMLObjects.H3: {
                    this.HTMLObjects.push(new H3(instaceData.id))
                    break;
                }
                case HTMLObjects.H4: {
                    this.HTMLObjects.push(new H4(instaceData.id))
                    break;
                }
                case HTMLObjects.H5: {
                    this.HTMLObjects.push(new H5(instaceData.id))
                    break;
                }
                case HTMLObjects.H6: {
                    this.HTMLObjects.push(new H6(instaceData.id))
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
