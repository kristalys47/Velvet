var peg = require("pegjs");
var fs = require("fs")

fs.readFile('./rules.pegjs', 'utf8', (err, data) => {
    if (err) throw err;
    console.log("generating...")
    var parser = peg.generate(data);
    console.log("parsing...")
    
    console.log("\ntest2\n");
    //test 1
    console.log(parser.parse(`
    >using "123";
    on(title, x);
    <out "dcnsdkjcnjdsk";`));

    console.log("\ntest2\n");
    //test 2
    console.log(parser.parse(`
    >using "something"; 

    @ text:string = "Test !@#$%^";
    @w:number = true;

    w =-3+(1+4)*2;

    arr = [1,2,3,4];

    on(title,2+2);
    on(num, w);

    @ tool :boo = false;
    <out "C:\\mypc\que.pdf";
    `));
    
});


