
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




// 3.B.1.1

// `foo` has been declared with the value `0` and its type is `number`
var foo = 0;

// typeof foo;
// "number"
...

// Somewhere later in your code, you need to update `foo`
// with a new value derived from an input element

foo = document.getElementById("foo-input").value;

// If you were to test `typeof foo` now, the result would be `string`
// This means that if you had logic that tested `foo` like:

if ( foo === 1 ) {

  importantTask();

}

// `importantTask()` would never be evaluated, even though `foo` has a value of "1"


// 3.B.1.2

// You can preempt issues by using smart coercion with unary + or - operators:

foo = +document.getElementById("foo-input").value;
//    ^ unary + operator will convert its right side operand to a number

// typeof foo;
// "number"

if ( foo === 1 ) {

  importantTask();

}

// `importantTask()` will be called


// 3.B.2.1

var number = 1,
  string = "1",
  bool = false;

number;
// 1

number + "";
// "1"

string;
// "1"

+string;
// 1

+string++;
// 1

string;
// 2

bool;
// false

+bool;
// 0

bool + "";
// "false"

// 3.B.2.2

var number = 1,
  string = "1",
  bool = true;

string === number;
// false

string === number + "";
// true

+string === number;
// true

bool === number;
// false

+bool === number;
// true

bool === string;
// false

bool === !!string;
// true

// 3.B.2.3

var array = [ "a", "b", "c" ];

!!~array.indexOf("a");
// true

!!~array.indexOf("b");
// true

!!~array.indexOf("c");
// true

!!~array.indexOf("d");
// false

// Note that the above should be considered "unnecessarily clever"
// Prefer the obvious approach of comparing the returned value of
// indexOf, like:

if ( array.indexOf( "a" ) >= 0 ) {
  // ...
}

// 3.B.2.4


var num = 2.5;

parseInt( num, 10 );

// is the same as...

~~num;

num >> 0;

num >>> 0;

// All result in 2


// Keep in mind however, that negative numbers will be treated differently...

var neg = -2.5;

parseInt( neg, 10 );

// is the same as...

~~neg;

neg >> 0;

// All result in -2
// However...

neg >>> 0;

// Will result in 4294967294


// 4.1.1
// When only evaluating that an array has length,
// instead of this:
if ( array.length > 0 ) ...

// ...evaluate truthiness, like this:
if ( array.length ) ...


// 4.1.2
// When only evaluating that an array is empty,
// instead of this:
if ( array.length === 0 ) ...

// ...evaluate truthiness, like this:
if ( !array.length ) ...


// 4.1.3
// When only evaluating that a string is not empty,
// instead of this:
if ( string !== "" ) ...

// ...evaluate truthiness, like this:
if ( string ) ...


// 4.1.4
// When only evaluating that a string _is_ empty,
// instead of this:
if ( string === "" ) ...

// ...evaluate falsy-ness, like this:
if ( !string ) ...


// 4.1.5
// When only evaluating that a reference is true,
// instead of this:
if ( foo === true ) ...

// ...evaluate like you mean it, take advantage of built in capabilities:
if ( foo ) ...


// 4.1.6
// When evaluating that a reference is false,
// instead of this:
if ( foo === false ) ...

// ...use negation to coerce a true evaluation
if ( !foo ) ...

// ...Be careful, this will also match: 0, "", null, undefined, NaN
// If you _MUST_ test for a boolean false, then use
if ( foo === false ) ...


// 4.1.7
// When only evaluating a ref that might be null or undefined, but NOT false, "" or 0,
// instead of this:
if ( foo === null || foo === undefined ) ...

// ...take advantage of == type coercion, like this:
if ( foo == null ) ...

// Remember, using == will match a `null` to BOTH `null` and `undefined`
// but not `false`, "" or 0
null == undefined


// 4.2.1
// Type coercion and evaluation notes

// Prefer `===` over `==` (unless the case requires loose type evaluation)

// === does not coerce type, which means that:

"1" === 1;
// false

// == does coerce type, which means that:

"1" == 1;
// true


// 4.2.2
// Booleans, Truthies & Falsies

// Booleans:
true, false

// Truthy:
"foo", 1

// Falsy:
"", 0, null, undefined, NaN, void 0


// 5.1.1
// A Practical Module

(function( global ) {
  var Module = (function() {

    var data = "secret";

    return {
      // This is some boolean property
      bool: true,
      // Some string value
      string: "a string",
      // An array property
      array: [ 1, 2, 3, 4 ],
      // An object property
      object: {
        lang: "en-Us"
      },
      getData: function() {
        // get the current value of `data`
        return data;
      },
      setData: function( value ) {
        // set the value of `data` and return it
        return ( data = value );
      }
    };
  })();

  // Other things might happen here

  // expose our module to the global object
  global.Module = Module;

})( this );


// 5.2.1
// A Practical Constructor

(function( global ) {

  function Ctor( foo ) {

    this.foo = foo;

    return this;
  }

  Ctor.prototype.getFoo = function() {
    return this.foo;
  };

  Ctor.prototype.setFoo = function( val ) {
    return ( this.foo = val );
  };


  // To call constructor's without `new`, you might do this:
  var ctor = function( foo ) {
    return new Ctor( foo );
  };


  // expose our constructor to the global object
  global.ctor = ctor;

})( this );


// 6.A.1.1
// Example of code with poor names

function q(s) {
  return document.querySelectorAll(s);
}
var i,a=[],els=q("#foo");
for(i=0;i<els.length;i++){a.push(els[i]);}


// 6.A.2.1
// Example of code with improved names

function query( selector ) {
  return document.querySelectorAll( selector );
}

var idx = 0,
  elements = [],
  matches = query("#foo"),
  length = matches.length;

for ( ; idx < length; idx++ ) {
  elements.push( matches[ idx ] );
}


// 6.A.3.1
// Naming strings

`dog` is a string


// 6.A.3.2
// Naming arrays

`dogs` is an array of `dog` strings


// 6.A.3.3
// Naming functions, objects, instances, etc

camelCase; function and var declarations


// 6.A.3.4
// Naming constructors, prototypes, etc.

PascalCase; constructor function


// 6.A.3.5
// Naming regular expressions

rDesc = //;


// 6.A.3.6
// From the Google Closure Library Style Guide

functionNamesLikeThis;
variableNamesLikeThis;
ConstructorNamesLikeThis;
EnumNamesLikeThis;
methodNamesLikeThis;
SYMBOLIC_CONSTANTS_LIKE_THIS;


// 6.B.1
function Device( opts ) {

  this.value = null;

  // open an async stream,
  // this will be called continuously
  stream.read( opts.path, function( data ) {

    // Update this instance's current value
    // with the most recent value from the
    // data stream
    this.value = data;

  }.bind(this) );

  // Throttle the frequency of events emitted from
  // this Device instance
  setInterval(function() {

    // Emit a throttled event
    this.emit("event");

  }.bind(this), opts.freq || 100 );
}

// Just pretend we've inherited EventEmitter ;)

// 6.B.2

// eg. lodash/underscore, _.bind()
function Device( opts ) {

  this.value = null;

  stream.read( opts.path, _.bind(function( data ) {

    this.value = data;

  }, this) );

  setInterval(_.bind(function() {

    this.emit("event");

  }, this), opts.freq || 100 );
}

// eg. jQuery.proxy
function Device( opts ) {

  this.value = null;

  stream.read( opts.path, jQuery.proxy(function( data ) {

    this.value = data;

  }, this) );

  setInterval( jQuery.proxy(function() {

    this.emit("event");

  }, this), opts.freq || 100 );
}

// eg. dojo.hitch
function Device( opts ) {

  this.value = null;

  stream.read( opts.path, dojo.hitch( this, function( data ) {

    this.value = data;

  }) );

  setInterval( dojo.hitch( this, function() {

    this.emit("event");

  }), opts.freq || 100 );
}


// 6.B.3

function Device( opts ) {
  var self = this;

  this.value = null;

  stream.read( opts.path, function( data ) {

    self.value = data;

  });

  setInterval(function() {

    self.emit("event");

  }, opts.freq || 100 );
}


// 6.C.1

var obj;

obj = { f: "foo", b: "bar", q: "qux" };

Object.keys( obj ).forEach(function( key ) {

  // |this| now refers to `obj`

  console.log( this[ key ] );

}, obj ); // <-- the last arg is `thisArg`

// Prints...

// "foo"
// "bar"
// "qux"


// 7.A.1.1
// An example switch statement

switch( foo ) {
  case "alpha":
    alpha();
    break;
  case "beta":
    beta();
    break;
  default:
    // something to default to
    break;
}

// 7.A.1.2
// A alternate approach that supports composability and reusability is to
// use an object to store "cases" and a function to delegate:

var cases, delegator;

// Example returns for illustration only.
cases = {
  alpha: function() {
    // statements
    // a return
    return [ "Alpha", arguments.length ];
  },
  beta: function() {
    // statements
    // a return
    return [ "Beta", arguments.length ];
  },
  _default: function() {
    // statements
    // a return
    return [ "Default", arguments.length ];
  }
};

delegator = function() {
  var args, key, delegate;

  // Transform arguments list into an array
  args = [].slice.call( arguments );

  // shift the case key from the arguments
  key = args.shift();

  // Assign the default case handler
  delegate = cases._default;

  // Derive the method to delegate operation to
  if ( cases.hasOwnProperty( key ) ) {
    delegate = cases[ key ];
  }

  // The scope arg could be set to something specific,
  // in this case, |null| will suffice
  return delegate.apply( null, args );
};

// 7.A.1.3
// Put the API in 7.A.1.2 to work:

delegator( "alpha", 1, 2, 3, 4, 5 );
// [ "Alpha", 5 ]

// Of course, the `case` key argument could easily be based
// on some other arbitrary condition.

var caseKey, someUserInput;

// Possibly some kind of form input?
someUserInput = 9;

if ( someUserInput > 10 ) {
  caseKey = "alpha";
} else {
  caseKey = "beta";
}

// or...

caseKey = someUserInput > 10 ? "alpha" : "beta";

// And then...

delegator( caseKey, someUserInput );
// [ "Beta", 1 ]

// And of course...

delegator();
// [ "Default", 0 ]


// 7.B.1.1
// Bad:
function returnLate( foo ) {
  var ret;

  if ( foo ) {
    ret = "foo";
  } else {
    ret = "quux";
  }
  return ret;
}

// Good:

function returnEarly( foo ) {

  if ( foo ) {
    return "foo";
  }
  return "quux";
}

