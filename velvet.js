
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

    const parser = peg.generate(data);

    //Read User Code
    fs.readFile('UserCode.velvet', (err, data) => {
        if (err) console.log(err);

        const parsedData = parser.parse(data.toString());
        const templatePath = parsedData[0]['path'].replace(/\"/g, "");
        const templateElements = htmlRead.readTemplateAndGenerateElementObject(templatePath);

        process.env.template = templatePath;

        console.log(templateElements);

        const ourBridge = new Bridge(templateElements, templatePath);

        parsedData[1].forEach(element => {
            if(element.name === 'on') {
                element.param = element.param.replace(/\"/g, "");
                if(ourBridge.getHTMLObjectById(element.tagIdentifier).getType() == 'IMG') {
                    ourBridge.getHTMLObjectById(element.tagIdentifier).setSrc(element.param);
                } else {
                    ourBridge.getHTMLObjectById(element.tagIdentifier).setText(element.param);
                }
            }
            else if(element.name = 'addStyle') {
                let filteredStyle = JSON.stringify(element.param).replace(/\"/g, "")
                    .replace("{", "").replace("}", "")
                    .replace(",", ";");
                ourBridge.getHTMLObjectById(element.tagIdentifier).setStyle(filteredStyle);
            }
        });

        setTimeout(function () {
            const outputPath = parsedData[2]['path'].replace(/\"/g, "");

            pdf.savePDF(templatePath, outputPath);
        },3000);
    })
});
