module.exports = {
    savePDF: function (html_in_path, pdf_out_path) {
        var exec = require('child_process').exec, child;

// generate the report
// execute the wkhtmltopdf command
            exec(
                'wkhtmltopdf ' + html_in_path + " " + pdf_out_path,
                (error) => {
                    if (error !=null) {
                      console.log("There has been an error, please check that you have the https://wkhtmltopdf.org installed on your computer.") // send the PDF file to the client
                    }
                }
            );
    }
}
