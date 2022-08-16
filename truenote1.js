Logical Operators
If x resolves to a truthy value, !x returns false. If x is falsey, !x returns true

const truthyValue = 'This value is truthy.';
const falseyValue = 0;

!truthyValue;
const truthyValue = 'This value is truthy.';
=>undefined
 !truthyValue;
=>false
 const falseyValue = 0;
=>undefined
 !falseyValue;
=>true
 
How to Convert an Expression to a Boolean Using !!

shorter way to convert any value into a Boolean, we can use two NOT operators.
!!truthyValue;  => true
!!falseyValue;  => false

the && and || Operators
&& (AND)
The logical AND (&&) operator takes two expressions:

false && "Anything";
// => false

// 4 * 0 returns 0, which is falsey
4 * 0 && "Anything";
// => 0


If the first expression is truthy, && then returns whatever
 the second expression evaluates to:


true && false;
// => false

1 + 1 && "Whatever";
// => "Whatever"

"The truthiest of truthy strings" && 9 * 9;
// => 81
########################

|| (OR)
The logical OR (||) operator also takes two expressions:

expression1 || expression2;
true || "Whatever";
// => true

1 + 1 || "Whatever";
// => 2

If the first expression is truthy, || returns the value of the first expression. 
If the first expression is falsey, || returns the value of the second expression.

false || "Whatever";
// => "Whatever"

1 === 2 || 8 * 8;
// => 64

"" || "Not " + "an " + "empty " + "string";
// => "Not an empty string"