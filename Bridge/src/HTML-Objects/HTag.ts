import { HTMLObject } from "./MainHTMLObject/HTMLObject";
import { IHTag } from "../Interfaces/HTag.interface";
import { HTMLObjects } from "./ENUM/HTMLObjects";


export class HTag extends HTMLObject implements IHTag {

    constructor(id: string) {
        super(id, HTMLObjects.HTag);
    }

    public setText(text: string): void { 
        this.domService.modifyInnerHTML(this.getId(), text);
    }

    public getText(): Promise<string> {
        return this.domService.getInnerHTML(this.getId());
    }

    public setStyle(styleObj: string): void {
        this.domService.modifyStyle(this.getId(), styleObj);
    }
}