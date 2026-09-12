//! Datatypes- It tells what type of data is stored in a variable.
//! In javascript, to check the datatype we use the typeof operator.
//! they are of 2 types.
//! 1.primitive datatypes       2.Non-primitive datatypes
//!   Number                      functions
//!   string                      objects
//!   Boolean                     arrays
//!   undefined
//!   null
//!   bigint
//!   Symbol()



//! Number - All the integers,decimal values ,long values etc are considered as number datatype.

let a=100;
console.log(a);
console.log(typeof a);

a=11.78;
console.log(a);
console.log(typeof a);

a=9876554446;
console.log(a);
console.log(typeof a);

a=5;
console.log(a);
console.log(typeof a);

//! String - Anything written inside ""/''/`` are considered as string datatype.
a="hello";
console.log(a);
console.log(typeof a);

a='c';
console.log(a);
console.log(typeof a);

a="true";
console.log(a);
console.log(typeof a);

a=`400`;
console.log(a);
console.log(typeof a);

a=`false`;
console.log(a);
console.log(typeof a);

//! BOOLEAN -true and false are considered as boolean values.
a=true;
console.log(a);
console.log(typeof a);

a=false;
console.log(a);
console.log(typeof a);

//! undefined - It is the default value of a variable which is declared but not initialized with any value.
//! datatype of undefined is undefined.

let b;
console.log(b);
console.log(typeof b);

//! not defined --error
//! if we try to access the variable without declaration
// console.log(num);

//! null - null means empty space.
//! intentional absence of value is known as null.
//! Datatype of null is object.
b=null;
console.log(b);
console.log(typeof b);

//! bigint - If the number range is excceeded then it comes under bignint.
//! To convert an integer into bingint we add n in the suffix.
b=123n;
console.log(b);
console.log(typeof b);

//! symbol
b=Symbol(12);
console.log(b);
console.log(typeof b);

console.log(typeof 100);
console.log(typeof "hello");
console.log(typeof `true`);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof 123n);
console.log(typeof Symbol(123));
console.log(typeof typeof 100);




