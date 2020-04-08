const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require("fs")


const parentDependentElements = ["H1", "H2", "H3", "H4", "H5", "H6", "P", "IMG", "UL", "OL", "LI"];
let templateElements = [];
let listIndex = 0;

module.exports = {
    readTemplateAndGenerateElementObject: function(templatePath) {
        console.log(templatePath);

        templatePath = './firstTemplate.html'
        var txtLines = fs.readFile(templatePath, 'utf8', (err, data) => {

            const dom = new JSDOM(data);
            //HTML Collection
            let divs = dom.window.document.getElementsByTagName('body')[0].getElementsByTagName('div');

            console.log("Amount of divs: " + divs.length);
            for (let i=0;i< divs.length;i++) {
                let currentItem = divs.item(i);
                let children = currentItem.children

                // if (i==0) {
                //     console.log(children.length);
                //     console.log(currentItem.getAttribute("id"));
                // }
                templateElements.push({type: "DIV", id: currentItem.getAttribute("id")})
                hasEditableElements(children, currentItem.getAttribute("id"));
            }

            console.log(templateElements)
        });

    }
}


function hasEditableElements(childrenElements, parentId) {

    for(let i=0;i<childrenElements.length;i++) {
        let currentChild = childrenElements.item(i);

        if (parentDependentElements.includes(currentChild.nodeName)) {
            templateElements.push({
                parentId: parentId,
                type: currentChild.nodeName,
                id: currentChild.getAttribute("id")
            });

            if (currentChild.nodeName == 'UL' || currentChild.nodeName == 'OL') {
                for (let j = 0; j < currentChild.children.length; j++) {
                    let childId = currentChild.getAttribute("id");
                    if (!childId) {
                        childId = parentId + "List" + listIndex;
                        currentChild.setAttribute("id", childId);
                        listIndex++;
                    }

                    let currentListChild = currentChild.children.item(j);
                    templateElements.push({parentId: childId, type: currentListChild.nodeName, id: null});
                }
            }
        }
    }
}
