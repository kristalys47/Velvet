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
});


    // >using "./ResumeTestingPath.html";
    //
    //     @me:number = 1;
    //
    //     on(jobTitle, me);
    //
    //     me = 3 + me;
    //
    //     on(jobTitle, me);
    //
    //     style(jobTitle,{
    //        "color":"#fff",
    //        "background": "#1245ff"
    //     });
    //
    //  <out "./example.pdf";`);