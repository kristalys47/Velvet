Program = start (assignation/append/remove/functions)* ends

start = w ">using" w String w ";" 
assignation = w identifier w "=" w value w ";" w
append = w identifier w "+=" w value w";" w
remove = w identifier w "-=" w value w ";" w
functions = w identifier w "(" w identifier w ","w (identifier/value) w ")" w ";" w
ends = w "<out" w String w";" w


  
value = Term / Boolean / String / array
//integer "integer" = ("-"/"") digits:[0-9]+ { return parseInt(text(), 10); }
//--------------------------numbers-------------
Term     = Factor ( Add / Sub )*
Add      = w "+" w Factor w
Sub      = w "-" w Factor w
Factor   = Primary (Mul / Div)*
Mul      = "*" w Primary w
Div      = "/"  w Primary w
Primary  = Parens / Neg / Number / Variable
Parens   = w "(" w Term w")"w
Neg      = "-" Primary
Number = float / integer
integer "integer" = digits:[0-9]+ { return parseInt(text(), 10); }
float "float" = (integer "." integer){ return parseFloat(text(), 10); } /("." integer) { return parseFloat(text(), 10); }

Variable = identifier

//---------------text----------------------------
lowerCase  = [a-z]
upperCase  = [A-Z]
digit      = [0-9]
underscore = '_'
identifier = (lowerCase / upperCase / underscore) (lowerCase / upperCase / underscore / digit)*
w "whitespace" = [ \t\n\r]*
//-------boo-------------------------
Boolean = "true" / "false"
//--------------string-------------

String = "\"" (!"\"" Char)* "\""
Char = "\\" ( "\"" 
                        / "'"
                        / "\\"
                        / [bfnrt]
                        / [0-2][0-7][0-7]
                        / [0-7][0-7]?
                        / 'x' Hex Hex
                        / 'u' Hex Hex Hex Hex
                        / 'U' Hex Hex Hex Hex Hex Hex Hex Hex
                        )
             / . 
Hex = [0-9a-fA-F]

//-------------------------arrays------------------
array = "[" w ((value w ",")/value)* w "]"