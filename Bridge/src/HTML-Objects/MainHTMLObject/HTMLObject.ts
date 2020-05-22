import { inject } from "inversify";
import { TYPES } from "../../types";
import { DOMService } from "../../Services/DOM.service";
import { DIContainer } from "../../di-container";
import { HTMLObjects } from "../ENUM/HTMLObjects";

export class HTMLObject {
    private id: string = '';
    private style: string = '';
    private type: HTMLObjects;
    
    @inject(TYPES.IHTag) 
    protected domService: DOMService =  DIContainer.resolve<DOMService>(DOMService);

    constructor(id: string, type: HTMLObjects) {
        this.id = id;
        this.type = type;
    }

    public getId(): string { return this.id; }

    public getType(): string { return this.type; }
    

    public getStyle(): string { return this.style; }
    // public setStyle(newStyle: string): void { this.style = newStyle; }
}