const jsdom = require("jsdom");
const {JSDOM} = jsdom;
const fs = require("fs")

const editableElements = ["H1", "H2", "H3", "H4", "H5", "H6", "P", "IMG", "UL", "OL"];
let templateElements = [];

/*
 * Returns array of template elements type:
 * {type='', id=''}
 * which represents all the elements in the html file that are available for the user to edit
 */
module.exports = {
    readTemplateAndGenerateElementObject: function (templatePath) {
        //Create DOM object to access methods from template file.
        const dom = new JSDOM(fs.readFileSync(templatePath, 'utf8'));

        //Returns HTML Collection of all divs in document
        let divs = dom.window.document.getElementsByTagName('body')[0].getElementsByTagName('div');

        //Loops through every div and gets its children. If children are one of the editableElements, it
        //gets added to the list
        for (let i = 0; i < divs.length; i++) {
            let currentItem = divs.item(i);
            let children = currentItem.children

            //Only add DIVS that have an ID to the list
            if (currentItem.getAttribute("id")) {
                templateElements.push({type: "DIV", id: currentItem.getAttribute("id")})
            }
            hasEditableElements(children, currentItem.getAttribute("id"));
        }
        return templateElements;
    }
}

//Checks whether div contains editable children elements.
function hasEditableElements(childrenElements) {

    for (let i = 0; i < childrenElements.length; i++) {
        let currentChild = childrenElements.item(i);

        if (editableElements.includes(currentChild.nodeName)) {
            templateElements.push({
                type: currentChild.nodeName,
                id: currentChild.getAttribute("id")
            });

        }
    }
}
