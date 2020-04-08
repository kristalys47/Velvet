
var peg = require("pegjs");
var fs = require("fs")
const test = require('./intermediateCode')


fs.readFile('./rules.pegjs', 'utf8', (err, data) => {
    if (err) throw err;
    console.log("generating...")
    var parser = peg.generate(data);
    console.log("parsing...")

    console.log("\ntest1\n");
    //test 1 absolute path
    let parsedCode = parser.parse(`
    >using "/home/nunila/Documents/Clases Enero 2020/PL/Proyecto/CV-Template/firstTemplate.html";
    on(title, x);
    <out "dcnsdkjcnjdsk";`);
    
    console.log(parsedCode)

    const templatePath = parsedCode[0]['path'].replace(/\"/g, "");
    test.readTemplateAndGenerateElementObject(templatePath);

    console.log("\ntest2\n");
    //test 2 relative path
    console.log(parser.parse(`
    >using "firstTemplate.html";
    on(title, x);
    <out "dcnsdkjcnjdsk";`));

    // console.log(parser.parse(`
    // >using "firstTemplate.html";
    // on(title, x);
    // <out "dcnsdkjcnjdsk";`));
    //
    // console.log("\ntest2\n");
    // //test 2
    // console.log(parser.parse(`
    // >using "something";
    //
    // @ text:string = "Test !@#$%^";
    // @w:number = true;
    //
    // w =-3+(1+4)*2;
    //
    // arr = [1,2,3,4];
    //
    // on(title,2+2);
    // on(num, w);
    //
    // @ tool :boo = false;
    // <out "C:\\mypc\que.pdf";
    // `));

});


