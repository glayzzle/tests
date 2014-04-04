var Class = require('../../glayzzle/src/compat/class');

"use strict";

// declare the foo class
var foo = Class('father')
  .public({
    name: 'John Doe',
    __construct: function() {
      console.log('Hello world');
    }
  })
  .static({
    public: {
      foo: 123
    }
  })
.getPrototype();

// create an instance
var john = new foo();
console.log(john.name);
