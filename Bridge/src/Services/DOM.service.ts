import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export class DOMService {
    private fs = require('fs');
    private DOM = require('../../../DOM.js');

    public modifyInnerHTML(id: string, newInnerHTML: string): void {
        this.DOM.then((dom: any) => { 
            dom.window.document.getElementById(id).innerHTML =  newInnerHTML;
            this.fs.writeFile('./ResumeTemplate.html', dom.window.document.documentElement.outerHTML, (err: any) => {
                if(err) {
                    console.error(err);
                } else {
                    console.log(id, "MODIFIED");
                }
            })
        });
    }

    public getInnerHTML(id: string): Promise<string> {
        return this.DOM.then( (dom: any) =>  dom.window.document.getElementById(id).innerHTML );
    }

    public getSrc(id: string): Promise<string> {
        return this.DOM.then( (dom: any) => dom.window.document.getElementById(id).src );
    }

    public setSrc(id: string, newSrc: string): void {
        this.DOM.then( (dom: any) => {
            dom.window.document.getElementById(id).src =  newSrc;
            this.fs.writeFile('./ResumeTemplate.html', dom.window.document.documentElement.outerHTML, (err: any) => {
                if(err) {
                    console.error(err);
                } else {
                    console.log(id, "MODIFIED");
                }
            });
        });
    }

    public getAlt(id: string): Promise<string> {
        return this.DOM.then( (dom: any) => dom.window.document.getElementById(id).alt );
    }

    public setAlt(id: string, newAlt: string): void {
        this.DOM.then( (dom: any) => {
            dom.window.document.getElementById(id).alt =  newAlt;
            this.fs.writeFile('./ResumeTemplate.html', dom.window.document.documentElement.outerHTML, (err: any) => {
                if(err) {
                    console.error(err);
                } else {
                    console.log(id, "MODIFIED");
                }
            });
        });
    }

}