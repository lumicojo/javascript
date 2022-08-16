/*
What CLI command can I use to navigate “up” one folder from my current directory?
  cd ..

  What CLI command can I use to see the current working directory?  
  pwd

  If I wanted to create a new folder called my-project with a file in it called task-list, which of the following commands would I run?
   mkdir my-project
   cd my-project
   touch task-list

 4  You only need to add a message to a commit if it's the first commit for the project.
   false

5  What does git add . do?
        Adds / stages all of the files in the current directory

 6  What does HTML stand for?
        Hyper Text Markup Language 

7  What tag should be used to display an image in HTML?
    <img />

8  Which of the following uses the correct HTML document structure?
<html>
<head>
    <title>My New Website</title>
</head>
<body>
    <h1>Welcome to my new website!</h1>
    <p>You can learn all about me here.</p>
</body>
</html>

9 Consider the following HTML element:
<div class='container-div' id='main-div'>
How would you select this <div> using its ID?
   #main-div  

10  What is the correct way to link a CSS file to HTML?     
<html>
  <head>       
    <link rel="stylesheet" href="mystyle.css">  
  </head> 
  <body>

11. Which of the following are the same data type? (select all that apply)
      4 and 5 
      4 and 4.125 

12  A Boolean is a data type that can be one of three values: true, false, or undefined.
      False 

13  What is the return value of the following code:
             1 + 2 + "puppies" + 4 + 5;
    "3puppies45"

14 Given the following code, how can we confirm the data type of exampleVariable?
         const exampleVariable = 5;
         typeof exampleVariable;

15 Which of the following is a disadvantage of using var to declare a variable?
     It can lead to scope-related bugs 

16  Which of the following can you do with a variable that has been declared using let? (select all that apply)
       If the variable’s value is a number, increase its value by 5

17  What is the result of declaring a variable without using const, let, or var (e.g., name = "Max")?
       The variable will have global scope 

18  The .pop() method pops the first element off of an array.
      False

19  Which of the following is an array?
       [1,7,9,10]     

20 You can access an element in an array by using its index.
  true

21  Given the object below, which line of code would you use to update the phone number of Joe’s emergency contact person?

 

const employee = {

      name: “Joe”,

      department: “Sales”,

      emergencyContact: {

            name: “Jean”,

            contactInfo: {

                  phone: ‘212-555-2151’,

                  email: ‘jeanx@gmail.com’
            }       
      }
}
          
employee.emergencyContact.contactInfo.phone = ‘212-555-9999’;

22 For the object below, Object.keys(employee) would return an array containing how many elements?

const employee = {

      name: “Joe”,

      department: “Sales”,

      emergencyContact: {

            name: “Jean”,

            contactInfo: {

                  phone: ‘212-555-2151’,

                  email: ‘jeanx@gmail.com’

            }
        },
    salary: 65000
}
    4

23  Under what circumstance(s) would you need to use bracket notation to access a value in an object? (select all that apply)
       If you’re accessing the value dynamically (i.e., using a variable) 

24   JavaScript assigns values to parameters based solely on the order of the arguments that are passed.
      False

25  Consider the following function definition:

 

function sayHello(name) {

    console.log(`hello ${name}`);
}
sayHello(“Stanley”)
    hello Stanley

26  When we define the event parameter in the parentheses of an event listener callback, the parameter must be called event or e in order to give us access to the event object.
      False

27   Which of the following function definitions follows valid syntax?
       function myFunction(num1, num2) {
        return num1 * num2;   // Returns the product of p1 and p2
}

28 How would I run the following function?

function sayHello() {
console.log(‘hello’);
}
       sayHello()

 29  We want to grab all of the elements in the DOM that have a class of blue. Which line of code achieves this?
          document.getElementsByClassName("blue")

30  What is the DOM?
      The "middleman" created by the browser for displaying the webpage 

31  Where can we quickly debug and test JavaScript code in the browser's Dev Tools?
       Using the Console tab 

32  How can we grab all of the h2 elements from a webpage?
       document.getElementsByTagName("h2")

33  What is the second argument of the event listener?
       A callback function 

34  How would you create an event listener on a DOM node?
        element.addEventListener()

35  What is missing from the following code block?
     let btn = document.querySelector("button")
     btn.addEventListener("____", function(){
     console.log("button is clicked!")
    })  
          click

36 Any time an event listener is triggered, a JavaScript object containing a bunch of information about the event is automatically passed as an argument to the callback function.
       True     
*/