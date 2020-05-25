import { HTMLObject } from "./MainHTMLObject/HTMLObject";
import { HTMLObjects } from "./ENUM/HTMLObjects";

export class P extends HTMLObject {

    constructor(id: string){
        super(id, HTMLObjects.P);
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