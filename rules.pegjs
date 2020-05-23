{
    	let variables = {};
        variables["hello"] = 1;
}
Program = start (assignation/declaration/append/comments/remove/functions)* ends

start = w ">using" w path:String w ";" w {return {type:'using', path:path}}
assignation = w target:identifier w "=" w value:value w ";" w {
	variables[target] = value;
	return {type:'assignation', target:target, value:value}
}
declaration = w "@" w target:identifier w ":" w keyword:keyword w "=" w value:value w ";" w {
	if(keyword == "number")
    	variables[target] = Number(value);
    else if (keyword == "string")
    	variables[target] = String(value);
    else if (keyword == "boo")
    	variables[target] = Boolean(value);
    else if (keyword == "list")
    	variables[target] = Array(value);
    return {type:'declaration',datatype:keyword, target:target,value:variables[target]}
}
append = w identifier w "+=" w value w";" w {return}
remove = w identifier w "-=" w value w ";" w {return}
functions = w name:identifier w "(" w tagIdentifier:identifier w ","w param:(Variable/value) w ")" w ";" w {return {type:'function',name,tagIdentifier,param}}
ends = w "<out" w path:String w";" w {return {type:'out', path:path}}
comments = (w "~"  . ([^\n]*) w)/(w "~~" (!"~~" .)* "~~" w) {return text()}
  
value =  Boolean/Expression / String / array /JSON_text
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

Variable = identifier {return variables[text()]}

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

//array = "[" w ((value w ",")/value)* w "]" {return JSON.parse(text())} 

JSON_text
  = ws valuer:value1 ws { return valuer; }

begin_array     = ws "[" ws
begin_object    = ws "{" ws
end_array       = ws "]" ws
end_object      = ws "}" ws
name_separator  = ws ":" ws
value_separator = ws "," ws

ws "whitespace" = [ \t\n\r]*

/* ----- 3. Values ----- */

value1
  = false
  / null
  / true
  / object
  / array
  / number
  / string

false = "false" { return false; }
null  = "null"  { return null;  }
true  = "true"  { return true;  }

/* ----- 4. Objects ----- */

object
  = begin_object
    members:(
      head:member
      tail:(value_separator m:member { return m; })*
      {
        var result = {}, i;

        result[head.name] = head.value;

        for (i = 0; i < tail.length; i++) {
          result[tail[i].name] = tail[i].value;
        }

        return result;
      }
    )?
    end_object
    { return members !== null ? members: {}; }

member
  = name:string name_separator value:value1{
      return { name: name, value: value };
    }

/* ----- 5. Arrays ----- */

array
  = begin_array
    values:(
      head:value1
      tail:(value_separator v:value { return v; })*
      { return [head].concat(tail); }
    )?
    end_array
    { return values !== null ? values : []; }

/* ----- 6. Numbers ----- */

number "number"
  = minus? int frac? exp? { return parseFloat(text()); }

decimal_point = "."
digit1_9      = [1-9]
e             = [eE]
exp           = e (minus / plus)? DIGIT+
frac          = decimal_point DIGIT+
int           = zero / (digit1_9 DIGIT*)
minus         = "-"
plus          = "+"
zero          = "0"

/* ----- 7. Strings ----- */

string "string"
  = quotation_mark chars:char* quotation_mark { return chars.join(""); }

char
  = unescaped
  / escape
    sequence:(
        '"'
      / "\\"
      / "/"
      / "b" { return "\b"; }
      / "f" { return "\f"; }
      / "n" { return "\n"; }
      / "r" { return "\r"; }
      / "t" { return "\t"; }
      / "u" digits:$(HEXDIG HEXDIG HEXDIG HEXDIG) {
          return String.fromCharCode(parseInt(digits, 16));
        }
    )
    { return sequence; }

escape         = "\\"
quotation_mark = '"'
unescaped      = [^\0-\x1F\x22\x5C]

/* ----- Core ABNF Rules ----- */

/* See RFC 4234, Appendix B (http://tools.ietf.org/html/rfc4627). */
DIGIT  = [0-9]
HEXDIG = [0-9a-f]i