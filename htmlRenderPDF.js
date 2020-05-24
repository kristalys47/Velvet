module.exports = {
    savePDF: function (html_in_path, pdf_out_path) {
        var exec = require('child_process').exec, child;



        var fs = require('fs');
        var pdf = require('html-pdf');
        var html = fs.readFileSync(html_in_path, 'utf8');
        var options = { height: "16.0in", width: "16in",  base: "file://"+ __dirname  };
        console.log(options);

        pdf.create(html, options).toFile(pdf_out_path, function(err, res) {
            if (err) return console.log(err);
            console.log(res); // { filename: '/app/businesscard.pdf' }
        })

// generate the report
// execute the wkhtmltopdf command


//             exec(
//                 'wkhtmltopdf ' + html_in_path + " " + pdf_out_path,
//                 (error) => {
//                     if(null != error) {
//                         console.log("There has been an error, please check that you have the https://wkhtmltopdf.org installed on your computer.") // send the PDF file to the client
//                     }
//                 }
//             );


    }

};











