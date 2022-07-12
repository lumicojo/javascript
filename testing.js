1. click the Fork icon in the upper right of this page. This will bring you to GitHub. If you are prompted to choose where to fork, choose your personal GitHub account.

2. Once your fork is created, click the Code button in GitHub, make sure SSH is selected, and copy the provided git URL info.

3. Make sure you're in Development/code (or wherever you're storing your code for the course) and clone the repo to your local machine with git clone followed by the git URL you copied.

4. The previous command will create a folder in the location you're currently in containing your fork of this lab's repository. cd into the repository that you just cloned down in the terminal, then run code . to open the files in Visual Studio Code.
4. The previous command will create a folder in the location you're currently in containing your fork of this lab's repository. cd into the repository that you just cloned down in the terminal, then run code . to open the files in Visual Studio Code.4. The previous command will create a folder in the location you're currently in containing your fork of this lab's repository. cd into the repository that you just cloned down in the terminal, then run code . to open the files in Visual Studio Code.


const { name, height, message } = require("../index.js");

describe("what-is-a-test", () => {
  describe("Name", () => {
    it('returns "Susan"', () => {
      expect(name).toEqual("Susan");
    });
  });

  describe("Height", () => {
    it("is less than 40", () => {
      expect(height).toBeLessThan(40);
    });
  });

  describe("Message", () => {
    it("gives the name and height", () => {
      expect(message).toInclude(name);
      expect(message).toInclude(height);
    });
  });
});
JavaScript Functions

function doNothing() {}
function sayHello() {
  console.log('Hello!');
  }
  sayHello();
  
/*function sayHello() {
console.log('Hello!');
}
sayHello();
*/
hi = "sayHello"
function sayHelloToGuadalupe() {
console.log("Hello, Guadalupe!");
  }
sayHelloToGuadalupe();  
function sayHelloToLiz() {
  console.log("Hello, Liz!");
}
sayHelloToLiz(); 

function sayHelloToSamip() {
  console.log("Hello, Samip!");
}
sayHelloToSamip();
sayHelloToGuadalupe();
sayHelloToLiz();
sayHelloToSamip();  