const peg = require("pegjs");
const fs = require("fs");

fs.readFile('./rules.pegjs', 'utf8', (err, data) => {
    if (err) throw err;
    const parser = peg.generate(data);
    
    const parsedData = parser.parse(
        `
            >using "./ResumeTestingPath.html";
            on(fullName, "Nunila Davila");
            on(jobTitle, "UPRM STUDENT ICOM");
            on(headshotImage, "https://picsum.photos/200/300");
            <out "./example.pdf";
        `);
    console.log(parsedData);
});