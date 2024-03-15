
// if/else/for/while/try always have spaces, braces and span multiple lines this encourages readability

// 2.A.1.1
// Examples of really cramped syntax

if(condition) doSomething();

while(condition) iterating++;

for(var i=0;i<100;i++) someIterativeFn();


// 2.A.1.1
// Use whitespace to promote readability

if ( condition ) {
  // statements
}

while ( condition ) {
  // statements
}

for ( var i = 0; i < 100; i++ ) {
  // statements
}

// Even better:

var i,
  length = 100;

for ( i = 0; i < length; i++ ) {
  // statements
}

// Or...

var i = 0,
  length = 100;

for ( ; i < length; i++ ) {
  // statements
}

var prop;

for ( prop in object ) {
  // statements
}


if ( true ) {
  // statements
} else {
  // statements
}



// 2.B.1.1
// Variables
var foo = "bar",
  num = 1,
  undef;

// Literal notations:
var array = [],
  object = {};


// 2.B.1.2
// Using only one `var` per scope (function) or one `var` for each variable,
// promotes readability and keeps your declaration list free of clutter.
// Using one `var` per variable you can take more control of your versions
// and makes it easier to reorder the lines.
// One `var` per scope makes it easier to detect undeclared variables
// that may become implied globals.
// Choose better for your project and never mix them.

// Bad
var foo = "",
  bar = "";
var qux;

// Good
var foo = "";
var bar = "";
var qux;

// or..
var foo = "",
  bar = "",
  qux;

// or..
var // Comment on these
foo = "",
bar = "",
quux;

// 2.B.1.3
// var statements should always be in the beginning of their respective scope (function).


// Bad
function foo() {

  // some statements here

  var bar = "",
    qux;
}

// Good
function foo() {
  var bar = "",
    qux;

  // all statements after the variables declarations.
}

// 2.B.1.4
// const and let, from ECMAScript 6, should likewise be at the top of their scope (block).

// Bad
function foo() {
  let foo,
    bar;
  if ( condition ) {
    bar = "";
    // statements
  }
}
// Good
function foo() {
  let foo;
  if ( condition ) {
    let bar = "";
    // statements
  }
}



// 2.B.2.1
// Named Function Declaration
function foo( arg1, argN ) {

}

// Usage
foo( arg1, argN );


// 2.B.2.2
// Named Function Declaration
function square( number ) {
  return number * number;
}

// Usage
square( 10 );

// Really contrived continuation passing style
function square( number, callback ) {
  callback( number * number );
}

square( 10, function( square ) {
  // callback statements
});


// 2.B.2.3
// Function Expression
var square = function( number ) {
  // Return something valuable and relevant
  return number * number;
};

// Function Expression with Identifier
// This preferred form has the added value of being
// able to call itself and have an identity in stack traces:
var factorial = function factorial( number ) {
  if ( number < 2 ) {
    return 1;
  }

  return number * factorial( number - 1 );
};


// 2.B.2.4
// Constructor Declaration
function FooBar( options ) {

  this.options = options;
}

// Usage
var fooBar = new FooBar({ a: "alpha" });

fooBar.options;
// { a: "alpha" }



// 2.C.1.1
// Functions with callbacks
foo(function() {
  // Note there is no extra space between the first paren
  // of the executing function call and the word "function"
});

// Function accepting an array, no space
foo([ "alpha", "beta" ]);

// 2.C.1.2
// Function accepting an object, no space
foo({
  a: "alpha",
  b: "beta"
});

// Single argument string literal, no space
foo("bar");

// Expression parens, no space
if ( !("foo" in obj) ) {
  obj = (obj.bar || defaults).baz;
}



