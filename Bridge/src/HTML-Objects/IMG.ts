import { HTMLObject } from "./MainHTMLObject/HTMLObject";
import { HTMLObjects } from "./ENUM/HTMLObjects";

export class IMG extends HTMLObject {
    private alt: string = '';
    // private height: number = 50;
    // private width: number = 50;

    constructor(id: string) {
        super(id, HTMLObjects.IMG);
    }

    public setSrc(src: string): void { 
        this.domService.setSrc(this.getId(), src);
    }
    public getSrc(): Promise<string> { 
        return this.domService.getSrc(this.getId()); 
    }

    public setAlt(text: string): void { 
        this.domService.setAlt(this.getId(), text); 
    }

    public getAlt(): Promise<string> { 
        return this.domService.getAlt(this.getId());
    }

    public setStyle(styleObj: string): void {
        this.domService.modifyStyle(this.getId(), styleObj);
    }

    // public setHeight(height: number): void { this.height = height; }
    // public getHeight(): number { return this.height; }

    // public setWidth(width: number): void { this.width = width; }
    // public getWidth(): number { return this.width; }
}