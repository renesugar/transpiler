[![Build Status](https://api.travis-ci.org/jarble/transpiler.svg)](https://travis-ci.org/jarble/transpiler)

# Universal-transpiler

*Universal-transpiler* is a source-to-source compiler that translates a subset of several programming languages into several others.
It is also able to translate several metasyntax notations, such as EBNF and ABNF.

The [online version of this translator](https://jarble.github.io/transpiler/javascript/js_transpiler/test_parser.html) is written in JavaScript, but an experimental version is also being written in Prolog.

This is some JavaScript code:

	function add(a,b){
		var g = [3,4,5];
		return a+b+(g[0])+(g.length);
	}

	function divide(a,b){
		return a/b;
	}

and this is the Java code that it generates:

	public static Object add(Object a,Object b){
		Object g=new ArrayList<>(Arrays.asList(3,4,5));
		return a+b+(g.get(0))+(g.length);
	}
	public static Object divide(Object a,Object b){
		return a/b;
	}

The translator also includes a proof-of-concept implementation of a [natural language programming](file:///C:/Users/jarbl/Dropbox/All%20source%20code%20goes%20here%20-%20don't%20put%20this%20folder%20inside%20any%20other%20folder/Prolog%20projects/universal-transpiler/javascript/js_transpiler/to_do_list.html#%7B%22inputText%22%3A%22product%20of%20A%20and%20B%20means%20A%20*%20B.%5Cnquotient%20of%20A%20and%20B%20means%20A%20%2F%20B.%5Cnbigger%20means%20greater.%5Cngreater%20means%20more.%5CnA%20is%20no%20B%20than%20C%20means%20A%20is%20not%20B%20than%20C.%5CnA%20is%20more%20than%20B%20means%20A%20%3E%20B.%5CnA%20is%20less%20than%20B%20means%20A%20%3C%20B.%5CnA%20plus%20B%20means%20A%20%2B%20B.%5CnA%20or%20B%20means%20A%20%7C%7C%20B.%5CnA%20and%20B%20means%20A%20%26%26%20B.%5CnA%20is%20equal%20to%20B%20means%20A%20equals%20B.%5CnA%20equals%20B%20means%20A%20%3D%3D%20B.%5CnA%20minus%20B%20means%20A%20-%20B.%5CnA%20is%20not%20equal%20to%20B%20means%20A%20!%3D%20B.%5CnX%20is%20a%20Y%20means%20isa%7BX%2CY%7D.%5CnA%20is%20B%20means%20A%20%3D%3D%20B.%5CnA%20is%20not%20a%20B%20means%20(A%20is%20a%20B)%20is%20false.%5CnA%20is%20not%20more%20than%20B%20means%20A%20%3C%3D%20B.%5CnA%20is%20not%20less%20than%20B%20means%20A%20%3E%3D%20B.%5Cna%20%3D%201.%5Cnb%20%3D%202.%5Cn%5Cna4%20%3D%20(the%20quotient%20of%20a%20and%20b)%20plus%20(the%20product%20of%20a%20and%20b)%20is%20not%20less%20%20than%20100.%22%2C%22inputLang%22%3A%22english%22%2C%22outputLang%22%3A%22python%22%7D) system.

# How to use the online translator

This translator can convert many languages into many others:

* [JavaScript to Prolog](https://jarble.github.io/transpiler/javascript/js_transpiler/test_parser.html#%7B%22inputText%22%3A%22function%20is_an_animal(thing)%7B%5Cn%20%20%20%20return%20%5B%5C%22dog%5C%22%2C%5C%22horse%5C%22%2C%5C%22cat%5C%22%5D.indexOf(thing)%20!%3D%3D%20-1%3B%5Cn%7D%22%2C%22inputLang%22%3A%22javascript%22%2C%22outputLang%22%3A%22prolog%22%7D)
* [C to C#](https://jarble.github.io/transpiler/javascript/js_transpiler/test_parser.html#%7B%22inputText%22%3A%22int%20add(int%20a%2C%20int%20b)%7B%5Cn%20%20%20%20return%20a%20%2B%20b%3B%5Cn%7D%22%2C%22inputLang%22%3A%22c%22%2C%22outputLang%22%3A%22c%23%22%7D)
* [PHP to Python](https://jarble.github.io/transpiler/javascript/js_transpiler/test_parser.html#%7B%22inputText%22%3A%22function%20add(%24a%2C%24b)%7B%5Cn%20%20%20%20return%20%24a%2B%24b%3B%5Cn%7D%22%2C%22inputLang%22%3A%22php%22%2C%22outputLang%22%3A%22python%22%7D)
* [Lua to Perl](https://jarble.github.io/transpiler/javascript/js_transpiler/test_parser.html#%7B%22inputText%22%3A%22function%20add(a%2Cb)%20%5Cn%20%20%20%20return%20a%2Bb%5Cnend%22%2C%22inputLang%22%3A%22lua%22%2C%22outputLang%22%3A%22perl%22%7D)
* [C to Haskell](https://jarble.github.io/transpiler/javascript/js_transpiler/test_parser.html#%7B%22inputText%22%3A%22int%20add(int%20a%2C%20int%20b)%7B%5Cn%20%20%20%20return%20a%20%2B%20b%3B%5Cn%7D%22%2C%22inputLang%22%3A%22c%22%2C%22outputLang%22%3A%22haskell%22%7D)

# How to use the Prolog translator

The Prolog translator is still unfinished and experimental. You can install the package by typing `pack_install(transpiler)` in the SWI-Prolog console.
Now, you can use the translator to convert JavaScript source code into Lua:

	:- use_module(library(transpiler)).
	:- set_prolog_flag(double_quotes,chars).
	:- initialization(main).

	main :- 
		translate("function add(a,b){return a + b;}",javascript,lua,X),
		atom_chars(Y,X),
		writeln(Y).


# How to extend the Prolog translator

A limited number of translation rules are provided here, but you can easily add your own rules to `transpiler.pl`.
This is a simplified version of one of its translation rules, implementing the sine function:

	%The type of this expression is double.
	parentheses_expr(Data,double,sin(Var1_)) -->
        {
			%The parameter of the sine function can be an integer or double.
			Var1 = expr(Data,double,Var1_)
		},
        langs_to_output(Data,sin,[
        ['java','javascript']:
                ("Math",ws,".",ws,"sin",ws,"(",ws,Var1,ws,")"),
        ['lua','python']:
                ("math",python_ws,".",python_ws,"sin",python_ws,"(",python_ws,Var1,python_ws,")"),
        ]).

# To-do list
Here is an [automatically-generated list of features](https://jarble.github.io/transpiler/javascript/js_transpiler/to_do_list.html) that have not yet been implemented in this translator.

## Other planned features:
* Add a translator for [lens languages](https://www.google.com/search?q=%22lens+language%22+programming) such as Augeas and Boomerang
* Simplify and refactor the code generator using [string interpolation](https://stackoverflow.com/questions/1408289/how-can-i-do-string-interpolation-in-javascript)
* Converting [SQL to Linq](https://stackoverflow.com/questions/296972/sql-to-linq-tool) and vice-versa
* Simultaneous editing of two programming languages in two text areas
* [Translate list comprehensions](https://stackoverflow.com/questions/23035186/translate-list-comprehension-to-prolog) from other languages into Prolog.
* Try to translate markup languages, similar to [Pandoc](https://pandoc.org/index.html).
* Try to convert SVG into other vector graphics formats
* Try to convert X3D into other vector graphics formats

# Similar projects
There are several other source-to-source compilers and code generators that are similar to this one.

[JTransc](https://github.com/jtransc/jtransc) compiles Java, Kotlin, and Scala into several other programming languages.
[Pandoc](https://pandoc.org/index.html) is a universal document converter

This [universal code generator](http://codeworker.free.fr/) is one example.
