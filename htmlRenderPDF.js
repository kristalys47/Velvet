module.exports = {
    savePDF: function (html_in_path, pdf_out_path) {
        var exec = require('child_process').exec, child;

// generate the report

// execute the wkhtmltopdf command
        exec(
            'wkhtmltopdf ' + html_in_path + " " + pdf_out_path,
            (error) => {
                // send the PDF file to the client
            }
        );
    }
}











