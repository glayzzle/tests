Glayzzle Tests
==============

Contains all unit tests for the Glayzzle project. If you want to extend and
improve glayzzle, you have to work with this project.

Performed actions :

 - Rebuilds the parser
 - Tests tokenizer
 - Tests grammar
 - Tests runtime results
 - Checks execution time

Quick Start :
-------------

Check out the vagrant devbox, everything is already installed :
https://github.com/glayzzle/devbox

Rebuild the parser :
--------------------

The parser is based on jison library (Bison compliant) :
http://zaach.github.io/jison/

To rebuild the parser just use :
```
cd /vagrant/tests/bin
test --build
```

The lexer and grammar files are located to `/vagrant/glayzzle/src/grammar`.

 * `build.js` exports the array of files to be joined for building the parser
 * `tokens.js` exports an associative array of token and their associated values
 * `scanner.l` contains the tokenizer (written in a Flex syntax)
 * `main.y` contains the parser entry point (headers)

Note : to keep the parser clean and easy to maintain, grammar is splitted in 
files, each handling a specific aspect of the language (ex : arithmetic, 
function, loop...)
