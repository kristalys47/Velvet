This project requires the installation of a command line tool:
https://wkhtmltopdf.org

The download process is described here and it is available for Mac, Windows or Linux
https://wkhtmltopdf.org/downloads.html

To run the program:
1. Open a terminal in the project root folder (Velvet) 
2. Run npm install
3. Run: node lexer.js

lexer.js contains the code to be tested, which will take ResumeTestingPath.html and modify the content of the elements with id 'fullName', 'jobTitle' and 'headshotImage' to the specified values. It then takes the modified html and creates a pdf file from it called 'example.pdf'

The Velvet code is specified in the lexer.js file from line 33 to 37.
