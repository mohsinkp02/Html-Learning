//! concatination : joining or merging two or more literals/strings
//! To achieve concatination in javascript we use + and ,
//! + operator can do addition and concatination.

//number + number= addition
//number + string=concat
//number + boolean = add
//number + undefined = NaN
//number + null = add
console.log(10+10);
console.log(10+"hello");
console.log(10+true);       // 10 + 1 = 11
console.log(10+ undefined);
console.log(10+ null);      // 10 + 0 = 10 

// string + number = concat
// string + string = concat
// string + boolean = concat
// string + undefined = concat
// string + null = concat
console.log("hello"+10);
console.log("hello"+"world");
console.log("hello"+ true);
console.log("hello"+ undefined);
console.log("hello"+ null);

// boolean + number = add
// boolean + string = concat
// boolean + boolean = add
// boolean + undefined = NaN
// boolean + null = add

console.log(true+10);
console.log(true+"world");
console.log(true+false);
console.log(true+undefined);
console.log(true+null);

// undefined + number = NaN
// undefined + String = concat
// undefined + boolean = NaN
// undefined + undefined = NaN
// undefined + null = NaN

console.log(undefined + 10);
console.log(undefined + "hello");
console.log(undefined + true);
console.log(undefined + undefined);
console.log(undefined + null);

// null + number = add
// null + string = concat
// null + boolean = add
// null + undefined = NaN
// null + null = add

console.log(null + 10);
console.log(null + "hello");
console.log(null + true);
console.log(null + undefined);
console.log(null + null);


console.log(10+20+true + false);
console.log(10+"20"+30+true+false);
//102030truefalse
console.log(10 + true + "false" + 20 + 30);
console.log((10+null + false));
console.log(10 + "true" + undefined + 20);
console.log(10 + 20 +false , true + 10 + null);
console.log(true + "false" + null , undefined + null +20);
console.log(false +"true" + true + `hello`+ `20` + true + false);
console.log(undefined + "false", "true" + false + 10 , null + true);

//!concatination
let num1= 100;
let num2 = 200;
let sum = num1 + num2;
console.log("The sum of " + num1 + " and " + num2 + " is " + sum);

//! concatination without using +
//! String imterpolation
//! Accessing the variable inside the `` (backtics) using ${}
//! Not possible in '' and "".
console.log(`The sum of ${num1} and ${num2} is ${sum}`);
console.log("The sum of ${num1} and ${num2} is ${sum}");
console.log('The sum of ${num1} and ${num2} is ${sum}');
console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`);