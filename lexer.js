var peg = require("pegjs");
var fs = require("fs")

fs.readFile('./rules.pegjs', 'utf8', (err, data) => {
    if (err) throw err;
    console.log("generating...")
    var parser = peg.generate(data);
    console.log("parsing...")
    console.log(parser.parse(`>using "123";
    on(title, x);
    <out "dcnsdkjcnjdsk";`));
});


