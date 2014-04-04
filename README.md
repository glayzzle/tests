Glayzzle Tests
==============

Contains all unit tests for the Glayzzle project


First bench :
-------------

## The famous Fibonnaci benchmark :

```
// THE ORIGINAL CLI OUTPUT :
~$ php ../proto/fibo.php
Hello world :
The result is : 832040
Run in 1.872sec

// THE NODEJS OUTPUT
~/bin $ node php -f ../proto/fibo.php
Hello world :
The result is : 832040
Run in 0.295sec
```

NodeJS is naturally many times more rapid than PHP with it's JIT engine, 
so that's normal that Glayzzle keep this benefit...

Test & Rebuild :
----------------

You will need pegjs library :
```
npm install pegjs
```

NOTE : The lexer use @import keywords to use external lexer files and this feature is not supported by pegjs so the only way to generate the lexer (to src/parser.js) is to launch a test.


Show some debug (the debug parameter is the nesting level on AST output) :
```
~/bin $ node test --debug 5 ../proto/fibo.php
```

To improve the lexer, take a look at :
http://pegjs.majda.cz/documentation