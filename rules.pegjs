Program = start (assignation/declaration/append/comments/remove/functions)* ends

start = w ">using" w path:String w ";" w {return {type:'using', path:path}}
assignation = w target:identifier w "=" w value:value w ";" w {return {type:'assignation', target:target, value:value}}
declaration = w "@" w target:identifier w ":" w keyword:keyword w "=" w value:value w ";" w{return {type:'declaration',datatype:keyword, target:target,value:value}}
append = w identifier w "+=" w value w";" w {return}
remove = w identifier w "-=" w value w ";" w {return}
functions = w name:identifier w "(" w tagIdentifier:identifier w ","w param:(identifier/value) w ")" w ";" w {return {type:'function',name,tagIdentifier,param}}
ends = w "<out" w path:String w";" w {return {type:'out', path:path}}
comments = (w "~"  . ([^\n]*) w)/(w "~~" (!"~~" .)* "~~" w) {return text()}
  
value =  Boolean/Expression / String / array
keyword = "number"/"boo"/"string"/"list"
//integer "integer" = ("-"/"") digits:[0-9]+ { return parseInt(text(), 10); }
//--------------------------numbers-------------
Expression
  = head:Term tail:(w ("+" / "-") w Term)* {
      return tail.reduce(function(result, element) {
        if (element[1] === "+") { return result + element[3]; }
        if (element[1] === "-") { return result - element[3]; }
      }, head);
    }

Term
  = head:Factor tail:(w ("*" / "/") w Factor)* {
      return tail.reduce(function(result, element) {
        if (element[1] === "*") { return result * element[3]; }
        if (element[1] === "/") { return result / element[3]; }
      }, head);
    }

Factor
  = "(" w expr:Expression w ")" { return expr; }
  / Primary
  
Primary  = Parens / Neg / Number / Variable
Parens   = w "(" w term:Term w")"w {return term}
Neg      = "-" Primary  {return Number(text())}
Number = float / integer {return Number(text())}
integer "integer" = digits:[0-9]+ { return parseInt(text(), 10); }
float "float" = (integer "." integer){ return parseFloat(text(), 10); } /("." integer) { return parseFloat(text(), 10); }

Variable = identifier 

//---------------text----------------------------
lowerCase  = [a-z]
upperCase  = [A-Z]
digit      = [0-9]
underscore = '_'
identifier = (lowerCase / upperCase / underscore) (lowerCase / upperCase / underscore / digit)* {return text()}
w "whitespace" = [ \t\n\r]*
//-------boo-------------------------
Boolean = "true" / "false" 
//--------------string-------------

String = "\"" content:(!"\"" Char)* "\"" {return text()}
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
array = "[" w ((value w ",")/value)* w "]" {return JSON.parse(text())} 