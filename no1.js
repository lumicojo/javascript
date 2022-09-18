Primitive values are
9;// => 9

('Hello, world!');// => "Hello, world!"

false;// => false
So are arithmetic and string operations. This code resolves to the number 64:

8 * 8;
// => 64
And this resolves to the string "Hello, world!":

'Hello, ' + 'world!';
// => "Hello, world!"
Ditto for comparison and assignment operations. This comparison resolves to the boolean true:

2 > 1;
// => true


Variable declarations are NOT expressions...

const greeting = "Hello!";
let answer;
...but variable assignments ARE, resolving to the assigned value (42, in this case):

answer = 42;
// => 42
Finally, variable lookups are also expressions, resolving to the value contained in the variable:

const fullName = 'Ada Lovelace';

fullName;
// => "Ada Lovelace"


Organize Code Using Block Statements
A block statement is a pair of curly braces ({ }) used to group JavaScript statements. It plays a role in conditional statements, loops, and functions.

{
    ('This line is a JavaScript statement nested inside a block statement!');

    // This is also a statement nested inside a block:
    5 * 5 - 5;

    // And so are these:
    const weCan = 'group multiple statements';

    const suchAs = 'these variable declarations';

    const insideA = 'block statement.';
}
return 20 //(the value returned by 5 * 5 - 5, when evaluated).
// For functions, we need to explicitly use the word return 
//to tell JavaScript what we want the return value to be
// (if we want one at all).
// Remember that the implicit return is something unique 
//to block statements like the ones we use for if...else and loop statements.

In JavaScript, the following values are falsy:

false
null
undefined
0
NaN
An empty string ('', "")