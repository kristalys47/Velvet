
const peg = require("pegjs");
const fs = require("fs");
const Bridge = require('./Bridge/build/Bridge').Bridge;
const htmlRead = require('./htmlElementExtractor');
const pdf = require('./htmlRenderPDF')

//Read Data and convert it to a JSON object
// const rawData = fs.readFileSync('input.json');
// const data = JSON.parse(rawData);
// const ourBridge = new Bridge(data);


fs.readFile('./rules.pegjs', 'utf8', (err, data) => {
    if (err) throw err;

    // console.log("generating...")
    const parser = peg.generate(data);
    // console.log("parsing...")
    /**
     * Suggestions
     * 1. Cambiar param1 y param2 por tagIdentifier y param
     * 2. Como pongo " dentro de " ", Ex; "se usa el " para strings"
     * 4. Como cambio el alt de las imagenes, aunque es irrelevante xq se convertira en un PDF pero para debuggin en caso que no encuentre la imagen aparece ahi
     */

    // addStyle( [id], {json _style})
    //test 1
    const parsedData = parser.parse(
    `
        >using "./ResumeTestingPath.html";
        on(fullName, "Nunila Davila");
        on(jobTitle, "UPRM STUDENT ICOM");
        on(headshotImage, "https://picsum.photos/200/300");
        


        <out "./example.pdf";
    `);

    const templatePath = parsedData[0]['path'].replace(/\"/g, "");
    const templateElements = htmlRead.readTemplateAndGenerateElementObject(templatePath);

    //temporary fix
    process.env.template = templatePath;
    
    // console.log(templateElements);
    console.log(parsedData)

    //Temporary until parser works for addStyle
    parsedData[1].push({type: 'function', name:'addStyle', tagIdentifier: 'fullName', param:"{" +
            "color: 'red'," +
            "fontSize: '12px'" +
            "}"})
    console.log(parsedData)

    const ourBridge = new Bridge(templateElements, templatePath);
    
    parsedData[1].forEach(element => {
        if(element.name === 'on') {
            element.param = element.param.replace(/\"/g, "");
            if(ourBridge.getHTMLObjectById(element.tagIdentifier).getType() == 'IMG') {
                ourBridge.getHTMLObjectById(element.tagIdentifier).setSrc(element.param);
            } else {
                ourBridge.getHTMLObjectById(element.tagIdentifier).setText(element.param);
            }
            // ourBridge.getHTMLObjectById(element.tagIdentifier).getText().then( res => console.log(res));
        }
        else if(element.name = 'addStyle') {
            // console.log('add style')
            // console.log(element.tagIdentifier)
            // console.log(element.param)
            ourBridge.getHTMLObjectById(element.tagIdentifier).setStyle(element.param)
        }
    });

    const outputPath = parsedData[2]['path'].replace(/\"/g, "");
    pdf.savePDF(templatePath, outputPath);

});


