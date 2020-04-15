var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('HTMLS/index.html', 'utf8');
var options = { base: "file:///Users/kristalysruiz/Git/Velvet/HTMLS"};

pdf.create(html, options).toFile('hello.pdf', function(err, res) {
    if (err) return console.log(err);
    console.log(res);
});


var exec = require('child_process').exec, child;

// generate the report

// execute the wkhtmltopdf command
exec(
    'wkhtmltopdf HTMLS/index.html output_file.pdf',
    (error) => {
        // send the PDF file to the client
    }
);


